import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodosList = ({ todos, setTodos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <li
                    className="todoItem"
                    key={todo.id}
                >
                    <input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />
                </li>
            ))}
        </div>
    )
}

export default TodosList;