import React,{useState} from 'react'; //import sth specific from the react library "useState"
import ToDo from './toDo';

const toDoList =( {todos,setTodos,edit })=>{
    console.log(todos)
    return(
        <div className="to-do-list">
            <ul >
             <li style={{listStyle:"none"}} >{ todos.map((todo)=>
                (   <ToDo 
                    edit ={edit}
                    setTodos= {setTodos}  //for the delete
                    todo={todo}
                    todos={todos}
                    key={todo.id}             // for the task written down 
                    text ={todo.text}/>)
               )} 
              </li>
            </ul>
        </div>

    )

}


export default toDoList;