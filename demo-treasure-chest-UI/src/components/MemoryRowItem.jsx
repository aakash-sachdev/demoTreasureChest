import React from "react";

export const MemoryRowItem = ({ memory, deleteMemory }) => {
  return (
    <tr key={memory.id}>
      <th scope="row">{memory.id}</th>
      <td>{memory.title}</td>
      <td>{memory.description}</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteMemory(memory.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};