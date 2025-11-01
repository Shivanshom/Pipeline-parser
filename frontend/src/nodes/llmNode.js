// llmNode.js
import BaseNode from './BaseNode';

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
const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '13px',
  fontWeight: 500,
  color: '#374151',
};

export const LLMNode = ({ id }) => {
  const inputHandles = [`${id}-system`, `${id}-prompt`];
  const outputHandles = [`${id}-response`];

  return (
    <BaseNode title="LLM Node" inputHandles={inputHandles} outputHandles={outputHandles}>
      <div>This is an LLM.</div>
    </BaseNode>
  );
};
