import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function handleToggleTodo(id) {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  }

  function deleteSelectedTodos() {
    setTodos((todos) => todos.filter((todo) => !todo.isCompleted));
  }

  function deleteAllTodos() {
    setTodos([]);
  }

  console.log(todos);

  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
      <CategoryFilter />
      <TodoList todos={todos} onToggle={handleToggleTodo} onDeleteSelected={deleteSelectedTodos} onDeleteAll={deleteAllTodos} />
    </div>
  );
}

function TodoForm({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");
  const [todoCategory, setTodoCatergory] = useState("Personal");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = { id: crypto.randomUUID(), todoText, todoCategory, isCompleted: false };
    console.log(newTodo);
    onAddTodo(newTodo);
    setTodoText("");
    setTodoCatergory("Personal");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>What needs to be done?</label>
        <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <select value={todoCategory} onChange={(e) => setTodoCatergory(e.target.value)}>
          <option>Personal</option>
          <option>Home</option>
          <option>Work</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

function CategoryFilter() {}

function TodoList({ todos, onToggle, onDeleteSelected, onDeleteAll }) {
  console.log(todos);
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onToggle={onToggle} />
        ))}
      </ul>
      <button onClick={onDeleteSelected}>Delete selected</button>
      <button onClick={onDeleteAll}>Delete all</button>
    </>
  );
}

function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={todo.id}
        onChange={() => {
          onToggle(todo.id);
        }}
      ></input>
      {todo.todoText}
      <span> - {todo.todoCategory}</span>
    </li>
  );
}
