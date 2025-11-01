// dateNode.js
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
const inputStyle = {
  width: '100%',
  padding: '6px 8px',
  borderRadius: '6px',
  border: '1px solid #CBD5E1',
  outline: 'none',
  fontSize: '14px',
  color: '#1A202C',
  transition: 'all 0.2s ease',
};
const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '13px',
  fontWeight: 500,
  color: '#374151',
};
export const DateNode = ({ id }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <BaseNode
      title="Date Node"
      outputHandles={[`${id}-datetime`]}
    >
      <div>
        <label style={labelStyle}>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={formFieldStyle}
          />
        </label>
      </div>
      <div>
        <label style={labelStyle}>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={formFieldStyle}
          />
        </label>
      </div>
    </BaseNode>
  );
};
