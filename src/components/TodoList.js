import React from 'react';
import Todos from './Todos';

const TodoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <Todos />
            </ul>
        </div>
    );
}

export default TodoList;