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
    if (newList[index].completed) {
      newList[index].completed = false;
    } else {
      newList[index].completed = true;
    }
    setTodo(newList);
  };

  const deleteToDo = (index) => {
    const newToDo = [...todo];
    newToDo.splice(index, 1);
    setTodo(newToDo);
  };

  return (
    <div>
      <div>
        <ToDoForm addToDo={addToDo}/>
      </div>
      <div>
        {todo.map((todo, index) => (
          <ToDoList 
            key={index}
            index={index}
            todo={todo}
            updateCompleted={updateCompleted}
            deleteToDo={deleteToDo}
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
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" maxLength="68" value={value} onChange={event => setValue(event.target.value)}/>
        <button className="submit-btn" type="submit">Add To Do</button>
      </form>
    </div>
  )
};

function ToDoList({todo, index, updateCompleted, deleteToDo}) {
  return(
    <div>
      <div 
        className="to-dos" 
        style={{textDecoration: todo.completed ? "line-through" : ""}} 
        onClick={() => updateCompleted(index)}>
          {todo.text} 
      </div>
      <button className="delete-btn" onClick={() => deleteToDo(index)}>X</button>
    </div>
  );
};

export default App;
