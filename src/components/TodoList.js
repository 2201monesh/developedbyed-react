import React from 'react';
import Todos from './Todos'; 

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { filteredTodos.map((todo) => (
                    <Todos todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;