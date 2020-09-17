import React from "react";

function Form({setInputText,todos,setTodos,inputText,setStatus}) {
    const inputTextHandler=(e)=>{
        // console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText, completed: false ,id: Math.random()*1000}
        ]);
        setInputText("");
        console.log(todos);
    };
    const statusHandler=(e)=>{
        setStatus(e.target.value);
    }
    return(
        <div className="col-11 col-md-10 col-lg-6 mx-5">
            <form action="">
                <div className="form-row">
                    <div className="form-group d-flex col-md-8">
                        <input type="text" value={inputText} className="form-control" onChange={inputTextHandler}/>
                        <button type="submit" onClick={submitTodoHandler} className="btn btn-primary ml-1"><i className="fas fa-plus"></i></button>
                    </div>
                    <div className="form-group col-md-4 ">
                        <select onChange={statusHandler}  className="form-control">
                            <option defaultValue value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Form;