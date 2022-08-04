import React, { useEffect, useState } from 'react'

function NewTodo(props) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("")


    const handleInputId = (e) => {
        setId(e.target.value);
        
    }

    const handleInputName = (e) => {
        setName(e.target.value)
    }

    const handleInputMobile = (e) =>{
        setMobile(e.target.value)
    }


    const handeSubmit = (e) => {
        e.preventDefault();
        let todo = {}
        todo["id"] = id;
        todo["name"] = name;
        todo["mobile"] = mobile;
        
        if (props.updateTodo !== null) {
            props.finalUpdateTodo(todo, props.updateTodo.id)
            props.setUpdateTodo(null);
        } else {
            props.onTodo(todo);
        }
        
        setId("");
        setName("");
        setMobile("");
    }

useEffect (() => {
    if(props.updateTodo){
        setId(props.updateTodo.id);
        setName(props.updateTodo.name);
        setMobile(props.updateTodo.mobile);
        
    }
}, [props.updateTodo]) 
   

  return (
    <form onSubmit={handeSubmit}><br/>
        <div>
        <label htmlFor='todo'>Id :</label>
        <input type="text" id="id" name="id" value={id} onChange={handleInputId}/>
        </div>
        <div>
        <label htmlFor='name'>Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleInputName}/>
        </div>
        <div>
        <label htmlFor='mobile'>Mobile:</label>
        <input type="text" id="mobile" name="mobile" value={mobile} onChange={handleInputMobile}/><br/>
        </div>
        <button>Add Todo</button>
    </form> 
    
  );
}

export default NewTodo