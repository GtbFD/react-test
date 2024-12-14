import { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log({ title, description });
  return (
    <div className="bg-slate-200 text-left p-6 rounded-md w-full flex flex-col space-y-4">
      <input
        type="text"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={() => setTitle(event.target.value)}
      />
      <input
        type="text"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          props.onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium shadow"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
