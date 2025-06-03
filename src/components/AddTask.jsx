import React, { useState } from 'react';

export const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o titulo da terefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a descrição da terefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md " onClick={ ()=> onAddTaskSubmit(title, description)}>
        Adicionar
      </button>
    </div>
  );
};
