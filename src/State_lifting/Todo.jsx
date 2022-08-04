import React from 'react'
import { BiEdit } from 'react-icons/bi';


const Todo = (props) => {
    const style = {
        padding: "15px", border: "1px solid #ddd", textAlign: "left"
    }

    const { id, name, mobile } = props.todo

    const deleteHandle = () => {
        props.del(id)
    }

    const updateHandle = () => {
        props.onupdate(id)
        
    }
 
    return (

        <tr>
            <td style={style}>{id}</td>
            <td style={style}>{name}</td>
            <td style={style}>{mobile}</td>
            <td><button onClick={updateHandle} style={style}><BiEdit style={{marginTop:"8px"}} />update</button></td>
            <td><button onClick={deleteHandle} style={style}><i className='fa fa-trash fa-2x'></i>delete</button></td>
        </tr>

    ) 
}

export default Todo