import React from "react";
import Todo from "./Todo";
const TodoList=({todos,setTodos,filteredTodos})=>{
    return(
        <div className="col-6">
            <ul className="list-group">
                {filteredTodos.map(todo=>(
                    <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;