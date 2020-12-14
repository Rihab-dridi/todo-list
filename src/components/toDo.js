import React,{components} from 'react';


const toDo =({text,todo, todos, setTodos,setInputText,edit,setEdit})=>{
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=> el.id !== todo.id ));
    }
    const editHandler=(e)=>{

    
       
        setTodos(todos.map(el=> 
            el.id == todo.id ?  setInputText(e.target.newElement):el))
    }
     
   

    const completeHandler=(e)=>{
        setTodos(todos.map((el)=>{
            if( el.id === todo.id) 
            { return { ... el, completed : !todo.completed,} }
            return el 
        }))
    }
    return(
        <div>
           <ul style={{listStyle:"none"}}  className="task">
                <li className={` to-do-el ${todo.completed? "completed": ""} `}> {text} </li >
                    <button onclick={editHandler}className="Edit-btn"><i className="fas fa-pencil-alt"></i></button>
                    <button onClick={completeHandler} className="done-btn"><i className="far fa-check-square"></i></button>
                    <button onClick={deleteHandler} className="delete-btn"><i className="far fa-trash-alt"></i></button>
            </ul>  
        </div>

    )

}


export default toDo;