import { useState, useEffect } from "react";
import { Todo } from "./data"; // Assurez-vous que le chemin est correct

interface FormulaireProps {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
}

export default function Formulaire({ todos, addTodo }: FormulaireProps) {
  const [form, setForm] = useState<Todo>({ ...todos[0] });

  useEffect(() => {
    if (todos.length > 0) {
      setForm({ ...todos[todos.length - 1] });
    }
  }, [todos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      ...form,
      id: todos.length + 1,
      completed: false,
      priority: "medium",
      dueDate: "2025-04-25",
      category: "catégorie par défaut",
      tags: ["tag1", "tag2"],
    };
    addTodo(newTodo);
    setForm({ ...form, title: "", description: "" }); // Réinitialiser le formulaire
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form onSubmit={handleSubmit} className="space-y-2 bg-white p-4 rounded shadow w-full max-w-md mb-4">
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border p-1 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border p-1 w-full"
            required
          />
        </div>
        <input
          type="submit"
          value="Envoyer"
          className="bg-black text-white px-4 py-1 rounded cursor-pointer"
        />
      </form>

      {/* Tableau pour afficher les données */}
      <table className="bg-white p-4 rounded shadow w-full max-w-4xl">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Titre</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Complété</th>
            <th className="border p-2">Priorité</th>
            <th className="border p-2">Date d'échéance</th>
            <th className="border p-2">Catégorie</th>
            <th className="border p-2">Tags</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="border p-2">{todo.id}</td>
              <td className="border p-2">{todo.title}</td>
              <td className="border p-2">{todo.description}</td>
              <td className="border p-2">{todo.completed ? "Oui" : "Non"}</td>
              <td className="border p-2">{todo.priority}</td>
              <td className="border p-2">{todo.dueDate}</td>
              <td className="border p-2">{todo.category}</td>
              <td className="border p-2">{todo.tags.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
