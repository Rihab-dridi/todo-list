import React,{ useEffect,useRef } from 'react';

const Form =({setInputText,todos,setTodos, inputText})=>{ // we're receivin the changes on the input text as props 
    
    const inputTextHandler=(e) =>  {
    console.log(e.target.value);
    setInputText(e.target.value)
    }                              //e refers to event            // 1- it's a function to update a peice of state (wich is the in put i nthis case)
   const todosHandler=(e)=>{
       e.preventDefault()                                         //prevent the deafult refrech after we click the button 
         setTodos([...todos, {text:inputText,completed:false, id: Math.random() *1000 }])        
          setInputText("");                                                 // so the input will be replaced by "" once we click the button 
        
   }
   const  inputRef= useRef(null)   
    useEffect(()=>{
    inputRef.current.focus()})   //to fucus onthe input form once we reload 

    return(
        <div className="form">
           <form className="form">
            <input onChange={inputTextHandler}           //2- each time I change the input the function textHandler run (it's a sort of building a link between the even and what we want to happen after that event )
             type="text" 
             placeholder="Add a task"
             value={inputText}
             classeName="form-input"
             ref={inputRef}>
                  </input>
            <button  onClick={todosHandler} className="addBtn"><i className="far fa-plus-square"></i></button>

           

           </form>
            
        </div>

    )

}


export default Form;