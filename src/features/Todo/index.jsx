import React from 'react';

import TodoList from './components/ToDoList';

ToDoFeature.propTypes = {

};

function ToDoFeature(props) {
    const listItem2 = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'Sleep'
        },
        {
            id: 3,
            title: 'Code'
        },
    ]

    return (
        <div>
            <TodoList listItem={listItem2} />
        </div>
    );
}

export default ToDoFeature;