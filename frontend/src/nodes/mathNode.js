// mathNode.js
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
export const MathNode = ({ id }) => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState('+');

  return (
    <BaseNode
      title="Math Node"
      inputHandles={[`${id}-inputA`, `${id}-inputB`]}
      outputHandles={[`${id}-result`]}
    >
      <div >
        <label style={labelStyle}>
          A:
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            style={formFieldStyle}
          />
        </label>
      </div>
      <div >
        <label style={labelStyle}>
          B:
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            style={formFieldStyle}
          />
        </label>
      </div>
      <div>
        <label style={labelStyle}>
          Operation:
          <select value={operation} onChange={(e) => setOperation(e.target.value)} style={formFieldStyle}>
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
