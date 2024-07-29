import React, { useState } from "react";

export const NewMemoryForm = ({ addMemory }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description !== "" && title !== "") {
          const formData = new FormData();
          formData.append("description", description);
          formData.append("title", title);
          formData.append("file", file);

          addMemory(formData);
          setTitle("");
          setDescription("");
          setFile(null);
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
        <div className="mb-3">
            <label className="form-label">
              Image
              <input
                type="file"
                className="form-control"
                onChange={(e) => setFile(e.target.files[0])}
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