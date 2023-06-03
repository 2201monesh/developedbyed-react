import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {

  const inputHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  }
    return (
        <form>
          <input value={inputText} type="text" onChange={inputHandler} />
          <button onClick={submitHandler} type="submit">
            submit
          </button>

          <div className="select">
            <select name="todos" >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
    );
}

export default Form;