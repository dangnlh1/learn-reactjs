import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    listItem: PropTypes.array
};
TodoList.defaultProps = {
    listItem: [],
}
function TodoList({ listItem }) {
    return (
        <div>
            <ul>
                {listItem.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;