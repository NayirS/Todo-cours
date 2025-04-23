import { useState } from "react";
import Header from "./components/Header";
import Formulaire from "./components/Formulaire";
import { Todo, todos as initialTodos } from "./components/data"; // Assurez-vous que le chemin est correct

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-4xl mt-4">
        <Formulaire todos={todos} addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
