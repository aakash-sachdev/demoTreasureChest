import React, { useState } from "react";

export const NewMemoryForm = ({ addMemory }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description !== "" && title !== "") {
          addMemory(description, title);
          setTitle("");
          setDescription("");
        }
      };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Title
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Description
            <textarea
              rows={3}
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Memory
        </button>
      </form>
    </div>
  );
};