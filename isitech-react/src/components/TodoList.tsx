import { useState } from "react";


const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded w-full"
          type="text"
          placeholder="Ajouter une tâche"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTodo}
        >
          Ajouter
        </button>
      </div>

      <ul className="list-disc list-inside">
        {todos.map((todo, index) => (
          <li key={index} className="mb-1">{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
