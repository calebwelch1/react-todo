import React from 'react';

const Form = () => {
    return (
        <form>
            <input type="text" placeholder="Enter a Todo..." classname="task-input" />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    )
}