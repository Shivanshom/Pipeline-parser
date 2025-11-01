// apiNode.js
import { useState } from 'react';
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

export const APICallNode = ({ id }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  return (
    <BaseNode
      title="API Call Node"
      inputHandles={[`${id}-payload`]}
      outputHandles={[`${id}-response`]}
    >
      <div >
        <label style={labelStyle}>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://api.example.com"
            style={formFieldStyle}
          />
        </label>
      </div>
      <div>
        <label style={labelStyle}>
          Method:
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            style={formFieldStyle}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
