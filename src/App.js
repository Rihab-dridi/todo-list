import React, {useState} from 'react';
import Form from './components/form';
import ToDoList from './components/toDoList';
import ToDo from './components/toDo'
import './App.css';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const[edit,setEdit]=useState({id:null,
                              value:""})

  return (
    <div className="App">
      <header>
         < h1>My To Do List</h1>
      </header>
     
      <Form 
      inputText={inputText} 
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}>
        </Form> 
      <ToDoList setTodos={setTodos} todos={todos}  />
   

    </div>
  );
}

export default App;
