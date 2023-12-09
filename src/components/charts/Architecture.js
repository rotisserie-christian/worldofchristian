import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import './CustomNode.css'

const initialNodes = [
    {
        id: 'main',
        position: { x: 150, y: 100 },
        data: { label: 'Main Website: Landing page & content' },
        draggable: false,
        className: 'darkNodeStyle'
    },
    {
        id: 'app',
        position: { x: 50, y: 250 },
        data: { label: 'Main App: CRUD features' },
        draggable: false,
        className: 'darkNodeStyle'
    },
    {
        id: 'demo',
        position: { x: 250, y: 250 },
        data: { label: 'Demo App: Modified to be entirely client-side' },
        draggable: false,
        className: 'darkNodeStyle'
    },
    {
        id: 'node',
        position: { x: 150, y: 400 },
        data: { label: 'Node: Server functions' },
        draggable: false,
        className: 'darkNodeStyle'
    },
    {
        id: 'firebase',
        position: { x: 50, y: 550 },
        data: { label: 'Firestore: Data storage' },
        draggable: false,
        className: 'darkNodeStyle'
    },
    {
        id: 'menu',
        position: { x: 150, y: 700 },
        data: { label: 'Bar Menus: Displays menu data' },
        draggable: false,
        className: 'darkNodeStyle'
    },
    {
        id: 'api',
        position: { x: 250, y: 550 },
        data: { label: 'APIs: Stripe integration & analytics' },
        draggable: false,
        className: 'darkNodeStyle'
    },
];

const initialEdges = [
    { id: 'e1-2', source: 'main', target: 'demo', animated: true },
    { id: 'e2-2', source: 'main', target: 'app', animated: true },
    { id: 'e3-2', source: 'node', target: 'firebase', animated: true },
    { id: 'e4-2', source: 'firebase', target: 'menu', animated: true },
    { id: 'e5-2', source: 'app', target: 'node', animated: true },
    { id: 'e6-2', source: 'node', target: 'api', animated: true },
];

const defaultViewport = { x: -50, y: -50, zoom: 1 };

const Architecture = () => {
  return (
    <div 
    style={{ height: '800px', width: '350px', pointerEvents: 'none' }}
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