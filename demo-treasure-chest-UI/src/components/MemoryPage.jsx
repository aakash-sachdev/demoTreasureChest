import React, { useState, useEffect } from "react";
import { fetchMemories, addMemory, deleteMemory } from "../services/memoryService"; 
import { MemoryTable } from "./MemoryTable";
import { NewMemoryForm } from "./NewMemoryForm";

export const MemoryPage = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    fetchMemories()
      .then(setMemories)
      .catch((error) => {
        console.error("There was an error fetching the memories!", error);
      });
  }, []);

  const handleAddMemory = (formData) => {
    addMemory(formData)
      .then((newMemory) => {
        setMemories([...memories, newMemory]);
      })
      .catch((error) => {
        console.error("There was an error creating the memory!", error);
      });
  };

  const handleDeleteMemory = (memoryId) => {
    deleteMemory(memoryId)
      .then(() => {
        setMemories(memories.filter((memory) => memory.id !== memoryId));
      })
      .catch((error) => {
        console.error("There was an error deleting the memory!", error);
      });
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Memories</div>
        <div className="card-body">
          <MemoryTable memories={memories} deleteMemory={handleDeleteMemory} />
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn btn-primary"
          >
            {showAddForm ? "Close Form" : "New Memory"}
          </button>
          {showAddForm && <NewMemoryForm addMemory={handleAddMemory} />}
        </div>
      </div>
    </div>
  );
};
