import { 
  Brain, 
  FileText, 
  Mail, 
  Calculator, 
  Zap, 
  Calendar, 
  Link, 
  
  LogInIcon,
  LogOutIcon
} from 'lucide-react';

const getNodeIcon = (type) => {
  const iconMap = {
    customInput: LogInIcon,
    llm: Brain,
    customOutput: LogOutIcon,
    text: FileText,
    email: Mail,
    math: Calculator,
    logic: Zap,
    date: Calendar,
    api: Link,
  };
  
  return iconMap[type] || FileText; 
};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const IconComponent = getNodeIcon(type);

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px',
        backgroundColor: '#1C2536',
        justifyContent: 'center',
        flexDirection: 'column',
        fontWeight: 500,
        fontSize: 14,
        transition: 'transform 0.15s ease-in-out, background-color 0.2s',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        gap: 6,
        boxShadow: '0 2px 8px rgba(99, 102, 241, 0.2)',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 8px rgba(99, 102, 241, 0.2)';
      }}
      draggable
    >
      <IconComponent 
        size={18} 
        style={{ 
          color: 'rgba(255, 255, 255, 0.9)',
          strokeWidth: 2 
        }} 
      />
      <span style={{ 
        color: '#fff', 
        fontSize: '12px', 
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: 1.2
      }}>
        {label}
      </span>
    </div>
  );
};