// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const currentNodes = nodes;
            const currentEdges = edges;

            const pipelineData = {
                nodes: currentNodes.map(node => ({
                    id: node.id,
                    type: node.type,
                    data: node.data || {},
                    position: node.position || { x: 0, y: 0 }
                })),
                edges: currentEdges.map(edge => ({
                    id: edge.id,
                    source: edge.source,
                    target: edge.target,
                    sourceHandle: edge.sourceHandle || null,
                    targetHandle: edge.targetHandle || null
                }))
            };

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pipelineData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            const alertMessage = `
Pipeline Analysis Results:
• Number of Nodes: ${result.num_nodes}
• Number of Edges: ${result.num_edges}
• Is DAG (Directed Acyclic Graph): ${result.is_dag ? 'Yes' : 'No'}
            `.trim();

            alert(alertMessage);

        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div
            style={{

                padding: '16px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                borderRadius: '12px',
                marginTop: '16px',
            }}>
            <button style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s, transform 0.2s',
                

            }} type="submit" onClick={handleSubmit}>
                🚀 Submit Pipeline
            </button>
        </div>
    );
};