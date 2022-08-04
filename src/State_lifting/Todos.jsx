import React from 'react'
import Todo from './Todo'

const Todos = (props) => {

    const style = {
        padding: "15px", border: "1px solid #ddd", textAlign: "left"
    }


    return (
        <div className='0'>
            {props.todos.length? (
            <table style={{ border: "1px solid #ddd", textAlign: "left", borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th style={style}>id</th>
                        <th style={style}>name</th>
                        <th style={style}>mobile</th>
                        <th style={style}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo, id) => (
                        <Todo del={props.ondelete} todo={todo} onupdate={props.onupdate} key={id} />
                    ))}
                </tbody>
            </table>

            ): null

}
        </div>
    )
}

export default Todos