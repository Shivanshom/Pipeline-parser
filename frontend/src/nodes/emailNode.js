// emailNode.js
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
export const EmailNode = ({ id }) => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <BaseNode
      title="Email Node"
      inputHandles={[`${id}-body`]}
      outputHandles={[`${id}-status`]}
    >
      <div>
        <label style={labelStyle}>
          To:
          <input
            type="email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            style={formFieldStyle}
            placeholder="email@example.com"
          />
        </label>
      </div>
      <div>
        <label style={labelStyle}>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={formFieldStyle}
          />
        </label>
      </div>
    </BaseNode>
  );
};
