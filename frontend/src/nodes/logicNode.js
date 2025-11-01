// logicNode.js
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
export const LogicNode = ({ id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BaseNode
      title="Logic Node"
      inputHandles={[`${id}-condition`]}
      outputHandles={[`${id}-boolean`]}
    >
      <div >
        <label style={labelStyle}>
          <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
          Toggle Condition
        </label>
      </div>
    </BaseNode>
  );
};
