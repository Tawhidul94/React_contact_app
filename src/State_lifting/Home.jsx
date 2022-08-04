import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'



export const Home = () => {

    const [todos, settodos] = useState([]);
    const [updateTodo, setUpdateTodo] = useState(null);

    const handleNewtodo = (newTodo) => {
        for(let i=0; i < todos.length; i++){
        
            if (newTodo.id === todos[i].id) {
                alert("duplecate id not allow")
                return 
            }
        }
        settodos([...todos, newTodo])
    };

    const handeldelate = (id) => {
        const newTodos = todos.filter(item => item.id !== id)
        settodos(newTodos);
    }

    const handleupdate= (id) => {
       const todo=todos.find(item => item.id === id)
       setUpdateTodo(todo)
    }


    const finalUpdateTodo = (newTodo, id) => {
        const prvTodo = todos.find(item => item.id === id)
        const index = todos.findIndex(x => x === prvTodo)
        todos[index] = newTodo
    }
   

    return (

        <div>
            <NewTodo onTodo={handleNewtodo} updateTodo={updateTodo} setUpdateTodo={setUpdateTodo} finalUpdateTodo={finalUpdateTodo} />

            <Todos todos={todos} ondelete={handeldelate} onupdate={handleupdate}/>
        </div>
    )
}
