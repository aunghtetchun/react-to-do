import React, {useEffect, useState} from 'react';
import Form from "./components/Form";
import './App.css';
import TodoList from "./components/Todolist";

function App() {
    const [inputText,setInputText]=useState("");
    const [todos,setTodos]=useState([]);
    const [status,setStatus]=useState("all");
    const [filteredTodos,setFilteredTodos]=useState([]);
    useEffect(()=>{
        filterHandler()
        },[todos,status]);
    const filterHandler=()=>{
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo=>todo.completed===true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo=>todo.completed===false));
                break;
            default:
                setFilteredTodos(todos);
                break;

        }
    }

  return (
    <div className="App vh-100 bg-light ">
        <div className="col-12 d-flex flex-wrap justify-content-center">
            <h1 className="my-5 col-12 text-center">To Do List</h1>
            <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
            <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
        </div>
    </div>
  );
}

export default App;
