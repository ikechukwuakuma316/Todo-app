import "./App.css";
import Todos from "./components/TodoList";
import { Todo } from "./types";

function App() {
  const todos: Todo[] = [
    {
      checked: false,
      text: "Feed the cat",
    },
    {
      checked: true,
      text: "Feed the goat",
    },
    {
      checked: false,
      text: "Goto church",
    },
  ];

  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
