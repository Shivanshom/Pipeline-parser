import { useState, useRef, useEffect } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import BaseNode from './BaseNode';

const textAreaStyle = {
  width: '100%',
  minHeight: '80px',
  resize: 'vertical',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  outline: 'none',
  fontSize: '14px',
  color: '#374151',
  background: '#f9fafb',
  transition: 'all 0.2s ease',
  fontFamily: 'ui-monospace, SFMono-Regular, Monaco, Consolas, monospace',
  boxSizing: 'border-box',
  lineHeight: '1.5',
};
export const formFieldStyle = {
  width: '100%',
  padding: '8px 12px',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  fontSize: '14px',
  backgroundColor: '#ffffff',
  color: '#374151',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
};
const textAreaFocusStyle = {
  ...textAreaStyle,
  borderColor: '#6366f1',
  background: '#ffffff',
  boxShadow: '0 0 0 3px rgba(99, 102, 241, 0.1)',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '13px',
  fontWeight: 500,
  color: '#374151',
};

const variableTagStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '2px 6px',
  background: '#dbeafe',
  color: '#1e40af',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: 500,
  margin: '2px',
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(currText)) !== null) {
      matches.add(match[1]);
    }
    const newVariables = [...matches];
    setVariables(newVariables);
  }, [currText]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateNodeInternals(id);
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [variables, id, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <BaseNode 
      title="Text" 
      inputHandles={variables} 
      outputHandles={[`${id}-output`]}
    >
      <div>
        <label style={labelStyle}>
          Text Content
        </label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={isFocused ? textAreaFocusStyle : textAreaStyle}
          placeholder="Enter text with variables like: Hello {{name}}!"
        />
        
        {variables.length > 0 && (
          <div style={{ marginTop: '8px' }}>
            <div style={{ 
              fontSize: '12px', 
              color: '#6b7280', 
              marginBottom: '4px',
              fontWeight: 500 
            }}>
              Variables detected:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {variables.map((variable, index) => (
                <span key={index} style={variableTagStyle}>
                  {variable}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </BaseNode>
  );
};