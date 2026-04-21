// File logic note: This file is documented for revision-friendly learning.
// Tasks route page: page heading wrapper around the Todo module.

import React from "react";
import TodoApp from "./Tasks";

function TasksPage() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight text-center sm:text-left">
        Tasks
      </h1>
      <p className="mt-2 text-slate-400 text-sm text-center sm:text-left">
        Add and manage your todos.
      </p>
      <div className="mt-8">
        <TodoApp />
      </div>
    </div>
  );
}

export default TasksPage;
