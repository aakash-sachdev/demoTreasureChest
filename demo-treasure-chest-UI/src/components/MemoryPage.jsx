import React, { useState, useEffect } from "react";
import { fetchMemories, addMemory, deleteMemory } from "../services/memoryService";
import { MemoryTable } from "./MemoryTable";
import { NewMemoryForm } from "./NewMemoryForm";

export const MemoryPage = ({ memories, setMemories }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const memoriesData = await fetchMemories();
        setMemories(memoriesData);
      } catch (error) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [setMemories]);

  const handleAddMemory = (formData) => {
    addMemory(formData)
      .then((newMemory) => {
        setMemories([...memories, newMemory]);
        setError(null);
      })
      .catch(() => {
        setError("There was an error creating the memory!");
      });
  };

  const handleDeleteMemory = (memoryId) => {
    deleteMemory(memoryId)
      .then(() => {
        setMemories(memories.filter((memory) => memory.id !== memoryId));
        setError(null);
      })
      .catch(() => {
        setError("There was an error deleting the memory!");
      });
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Memories</div>
        <div className="card-body">
          {loading ? <p>Loading...</p> : <MemoryTable memories={memories} deleteMemory={handleDeleteMemory} />}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="button-container">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="btn btn-primary"
            >
              {showAddForm ? "Close Form" : "New Memory"}
            </button>
          </div>

          {showAddForm && <NewMemoryForm addMemory={handleAddMemory} />}
        </div>
      </div>
    </div>
  );
};
