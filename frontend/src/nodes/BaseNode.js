import { Handle, Position } from 'reactflow';
const handleStyle = {
  width: 12,
  height: 12,
  background: '#6366f1',
  border: '2px solid #ffffff',
  borderRadius: '50%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};
const BaseNode = ({ title, children, inputHandles = [], outputHandles = [] }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      border: '1px solid #e2e8f0',
      borderRadius: 16,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
      padding: 0,
      width: 280,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: 14,
      color: '#1e293b',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.2s ease',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        padding: '12px 16px',
        fontWeight: 600,
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderRadius: '16px 16px 0 0',
        boxShadow: '0 2px 8px rgba(99, 102, 241, 0.2)',
      }}>{title}</div>

      {inputHandles.map((handleId, index) => (
        <Handle
          key={`input-${handleId}`}
          type="target"
          position={Position.Left}
          id={handleId}
          style={{
            ...handleStyle, top: 60 + index * 28,
            left: -6,
            background: '#10b981',
          }}
        />
      ))}

      <div style={{
        padding: '16px',
        background: '#ffffff',
      }}>
        {children}
      </div>

      {outputHandles.map((handleId, index) => (
        <Handle
          key={`output-${handleId}`}
          type="source"
          position={Position.Right}
          id={handleId}
          style={{
            ...handleStyle, top: 60 + index * 28,
            right: -6,
            background: '#f59e0b',
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
