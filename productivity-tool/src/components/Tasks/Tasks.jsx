import { useState } from "react";
import React from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const deteleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-xl p-6 shadow-xl shadow-black/20">
      <h2 className="text-xl font-semibold mb-4 text-sky-300 tracking-tight">
        Todo List
      </h2>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-500/40 focus:ring-1 focus:ring-sky-500/30"
        />
        <button
          type="button"
          onClick={addTodo}
          className="shrink-0 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium py-2.5 px-4 transition-colors"
        >
          Add Todo
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-3 py-2.5"
          >
            <span className="text-slate-200 text-sm">{todo.text}</span>
            <button
              type="button"
              onClick={() => deteleteTodo(todo.id)}
              className="shrink-0 text-slate-500 hover:text-rose-400 transition-colors"
              aria-label="Remove task"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
