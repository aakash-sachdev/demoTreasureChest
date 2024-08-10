import React, { useState, useEffect } from "react";
import { fetchMemories, addMemory, deleteMemory } from "../services/memoryService";
import { fetchUsers } from "../services/userService";
import { fetchChildren } from "../services/childService";
import { MemoryTable } from "./MemoryTable";
import { NewMemoryForm } from "./NewMemoryForm";
import NewUserForm from "./NewUserForm";
import NewChildForm from "./NewChildForm";

export const MemoryPage = ({ memories, setMemories }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showChildForm, setShowChildForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [children, setChildren] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [usersData, childrenData] = await Promise.all([
          fetchUsers(),
          fetchChildren()
        ]);
        setUsers(usersData);
        setChildren(childrenData);
      } catch (error) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddMemory = (formData) => {
    addMemory(formData)
      .then((newMemory) => {
        setMemories([...memories, newMemory]);
        setError(null);
      })
      .catch((error) => {
        setError("There was an error creating the memory!");
      });
  };

  const handleDeleteMemory = (memoryId) => {
    deleteMemory(memoryId)
      .then(() => {
        setMemories(memories.filter((memory) => memory.id !== memoryId));
        setError(null);
      })
      .catch((error) => {
        setError("There was an error deleting the memory!");
      });
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleAddChild = (child) => {
    setChildren([...children, child]);
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
        <button
          onClick={() => setShowUserForm(!showUserForm)}
          className="btn btn-primary"
        >
          {showUserForm ? "Close User Form" : "New User"}
        </button>
        <button
          onClick={() => setShowChildForm(!showChildForm)}
          className="btn btn-primary"
        >
          {showChildForm ? "Close Child Form" : "New Child"}
        </button>
      </div>

      {showAddForm && <NewMemoryForm addMemory={handleAddMemory} />}
      {showUserForm && <NewUserForm onAddUser={handleAddUser} />}
      {showChildForm && <NewChildForm onAddChild={handleAddChild} />}
    </div>
  </div>
</div>

  );
};
