// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                {/* New nodes */}
                <DraggableNode type='email' label='Email' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='logic' label='Logic' />
                <DraggableNode type='date' label='Date' />
                <DraggableNode type='api' label='API Call' />
            </div>
        </div>
    );
};
