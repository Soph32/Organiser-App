import React, {useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);

  const addToDo = (text) => {
    const newToDo = [...todo, {text, completed: false}];
    setTodo(newToDo);
  };
  
  const updateCompleted = (index) => {
    const newList = [...todo];
    newList[index].completed = true;
    setTodo(newList);
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
            index={index}
            todo={todo}
            updateCompleted={updateCompleted}
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

function ToDoList({todo, index, updateCompleted}) {
  return(
    <div className="to-dos" onClick={() => updateCompleted(index)}>{todo.text}</div>
  );
};

export default App;


