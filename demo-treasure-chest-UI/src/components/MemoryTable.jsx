import React from "react";
import { MemoryRowItem } from "./MemoryRowItem";

export const MemoryTable = ({ memories, deleteMemory }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {memories.map((memory) => (
          <MemoryRowItem key={memory.id} memory={memory} deleteMemory={deleteMemory} />
        ))}
      </tbody>
    </table>
  );
};
