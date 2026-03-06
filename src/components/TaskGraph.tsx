"use client";

import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

export default function TaskGraph({ tasks }: any) {

  const nodes = tasks.map((task: any, index: number) => ({
    id: String(task.id),
    data: { label: task.description },
    position: { x: index * 200, y: 100 },
    style: {
      padding: 10,
      border: "1px solid #333",
      background: task.status === "Blocked" ? "#ffcccc" : "#ccffcc"
    }
  }));

  const edges: any[] = [];

  tasks.forEach((task: any) => {
    task.dependencies.forEach((dep: number) => {
      edges.push({
        id: `e${dep}-${task.id}`,
        source: String(dep),
        target: String(task.id)
      });
    });
  });

  return (
    <div style={{ height: 400 }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}