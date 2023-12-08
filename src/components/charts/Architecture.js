import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: 'main',
        position: { x: 50, y: 100 },
        data: { label: 'Main website: Landing page & traffic generating content' },
        draggable: false
    },
    {
        id: 'app',
        position: { x: 50, y: 250 },
        data: { label: 'Main app: CRUD features that allow users to make changes' },
        draggable: false
    },
    {
        id: 'demo',
        position: { x: 250, y: 250 },
        data: { label: 'Demo app: Modified to demonstrate UX, entirely client-side' },
        draggable: false
    },
    {
        id: 'node',
        position: { x: 50, y: 375 },
        data: { label: 'Node: Server functions' },
        draggable: false
    },
    {
        id: 'firebase',
        position: { x: 50, y: 500 },
        data: { label: 'Firebase: Data storage & Authentication' },
        draggable: false
    },
    {
        id: 'menu',
        position: { x: 50, y: 625 },
        data: { label: 'Bar menus: Displays menu data in read-only format' },
        draggable: false
    },
    {
        id: 'api',
        position: { x: 250, y: 500 },
        data: { label: 'APIs: Stripe integration & analytics' },
        draggable: false
    },
];

const initialEdges = [
    { id: 'e1-2', source: 'main', target: 'demo', animated: true },
    { id: 'e2-2', source: 'main', target: 'app', animated: true },
    { id: 'e3-2', source: 'app', target: 'node', animated: true },
    { id: 'e4-2', source: 'node', target: 'firebase', animated: true },
    { id: 'e5-2', source: 'firebase', target: 'menu', animated: true },
    { id: 'e6-2', source: 'node', target: 'api', animated: true },
];

const defaultViewport = { x: -50, y: -50, zoom: 1 };

const Architecture = () => {
  return (
    <div 
    style={{ height: '750px', width: '350px', pointerEvents: 'none' }}
    >   
        <ReactFlow 
        nodes={initialNodes} 
        edges={initialEdges}
        defaultViewport={defaultViewport}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        >
        <Background 
        variant="dots" 
        gap={12} 
        size={0.6} 
        />
        </ReactFlow>
    </div>
  );
};

export default Architecture;