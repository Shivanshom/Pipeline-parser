// outputNode.js
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
export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode title="Output Node" inputHandles={[`${id}-value`]}>
      <div >
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
          <select value={outputType} onChange={handleTypeChange} style={formFieldStyle}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
