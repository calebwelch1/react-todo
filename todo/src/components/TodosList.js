import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodosList = ({ todos, setTodos, setEditTodo }) => {

    const handleEditTodo = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        );
    };

    return (
        <div>
            {todos.map((todo) => (
                <li
                    className="todoItem"
                    key={todo.id}
                >
                    <input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />
                    <div>
                        <button onClick={() => handleComplete(todo)}>
                            complete
                        </button>
                        <button onClick={() => handleEditTodo(todo)}>
                            edit
                        </button>
                        <button onClick={() => handleDelete(todo)}>
                            remove
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodosList;