import React from "react";
const Todo=({text,todo, todos,setTodos})=>{
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id!==todo.id));
    }
    const completeHandler=()=>{
        setTodos(
            todos.map((item)=>{
                if (item.id===todo.id){
                    return{
                        ...item,completed: !item.completed,
                    }
                }
                return item;
            })
        )
    }
    return(
        <li className={`list-group-item d-flex justify-content-between ${todo.completed ? "completed text-reset":""}`}>
            <p>{text}</p>
            <div>
                <i className="fas fa-check-square btn btn-success mr-1" onClick={completeHandler}></i>
                <i className="fas fa-trash-alt btn btn-danger" onClick={deleteHandler}></i>
            </div>
        </li>
    )
}
export default Todo;