import React from "react";
import { useParams } from "react-router-dom";

export const MemoryDetail = ({ memories }) => {
  const { memoryId } = useParams();
  const memory = memories.find((m) => m.id === parseInt(memoryId));

  if (!memory) {
    return <div>Memory not found</div>;
  }

  const imagePath = `http://localhost:8080${memory.imageUrl}`;

  return (
    <div className="container mt-5">
      <div className="card">
        <h5 className="card-title centered-title mb-5" style={{ fontSize: '5rem' }}>{memory.title}</h5>
        <img src={imagePath} className="card-img-top" alt={memory.title} style={{ width: '20vw', height: 'auto' }} />
        <p className="card-text centered-text mt-5" style={{ fontSize: '2rem' }}>{memory.description}</p>
      </div>
    </div>
  );
};
