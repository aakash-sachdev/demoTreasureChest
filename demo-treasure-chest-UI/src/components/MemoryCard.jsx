import React from "react";

export const MemoryCard = ({ memory, deleteMemory }) => {
  const imagePath = `http://localhost:8080${memory.imageUrl}`;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imagePath} className="card-img-top" alt={memory.title} />
        <div className="card-body">
          <h5 className="card-title">{memory.title}</h5>
          <p className="card-text">{memory.description}</p>
          <button className="btn btn-danger" onClick={() => deleteMemory(memory.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
