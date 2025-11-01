// ui.js
// Displays the drag-and-drop UI
import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { EmailNode } from './nodes/emailNode';
import { MathNode } from './nodes/mathNode';
import { LogicNode } from './nodes/logicNode';
import { DateNode } from './nodes/dateNode';
import { APICallNode } from './nodes/apiCallNode';

import 'reactflow/dist/style.css';
import { SubmitButton } from './submit';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,

  // new nodes
  email: EmailNode,
  math: MathNode,
  logic: LogicNode,
  date: DateNode,
  api: APICallNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const reactFlowStyle = {
  background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
  borderRadius: '16px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
};

const controlsStyle = {
  button: {
    background: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    color: '#374151',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
  },
};

const minimapStyle = {
  marginRight: '15px',
  background: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  }

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData('application/reactflow')) {
        const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
        const type = appData?.nodeType;

        if (typeof type === 'undefined' || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <>
      <div style={{
        padding: '20px',
        background: 'linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%)',
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}>
       
        <div ref={reactFlowWrapper} style={{
          width: '100%',
          height: '70vh',
          ...reactFlowStyle
        }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onInit={setReactFlowInstance}
            nodeTypes={nodeTypes}
            proOptions={proOptions}
            snapGrid={[gridSize, gridSize]}
            connectionLineType='smoothstep'
            connectionLineStyle={{
              stroke: '#6366f1',
              strokeWidth: 3,
            }}
            defaultEdgeOptions={{
              style: {
                stroke: '#6366f1',
                strokeWidth: 2,
              },
              markerEnd: {
                type: 'arrowclosed',
                color: '#6366f1',
              },
            }}
          >
            <Background
              variant="dots"
              gap={24}
              size={1.5}
              color="#cbd5e1"
            />
            <Controls
              showZoom={true}
              showFitView={true}
              showInteractive={true} />
            <MiniMap style={minimapStyle}
              nodeColor="#D9DAFC"
              zoomable={true}
              pannable={true}
              
              nodeStrokeWidth={3}
              nodeStrokeColor="#6366f1"
              maskColor="rgba(0, 0, 0, 0.1)"
            />
          </ReactFlow>

        </div>
        <SubmitButton />
      </div>
    </>
  )
}
