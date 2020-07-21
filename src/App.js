import React, {useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([{text: "", completed: false}]);

  const addToDo = (text) => {
    const newToDo = [...todo, {text, completed: false}];
    setTodo(newToDo);
  };

  return (
    <div>
      <div className="add-to-dos">
        <ToDoForm addToDo={addToDo}/>
      </div>
      <div className="list-to-dos">
        {todo.map((todo, index) => (
          <ToDoList 
            key={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  )
}

function ToDoForm({addToDo}) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addToDo(value);
    setValue("");
  };

  return (
    <div>
      <p>To Do List</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        <button type="submit">Add To Do</button>
      </form>
    </div>
  )
};

const ToDoList = ({todo}) => <div>{todo.text}</div>;

export default App;


