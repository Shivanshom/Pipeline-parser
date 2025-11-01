// inputNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';
const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '13px',
  fontWeight: 500,
  color: '#374151',
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
export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode title="Input Node" outputHandles={['output']}>
      <div>
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={formFieldStyle}
          />
        </label>
      </div>
      <div>
        <label style={labelStyle}>
          Type:
          <select value={inputType} onChange={handleTypeChange} style={formFieldStyle}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
