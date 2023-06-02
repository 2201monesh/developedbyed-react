import React from "react";

const Form = () => {
    return (
        <form>
          <input type="text" />
          <button type="submit">
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