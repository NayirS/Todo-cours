
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Header />
      <main className="max-w-2xl mx-auto p-4">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
