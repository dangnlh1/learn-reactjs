
import './style.scss';
import propTypes from 'prop-types';
import classNames from 'classnames';

TodoList.propTypes = {
    listTodo1: propTypes.array,
    onToDoClick: propTypes.func,
};
TodoList.defaultProps = {

    listTodo1: []
}

function TodoList({ listTodo1, onToDoClick }) {

    const handleTodoClick = (todo, idx) => {
        onToDoClick(todo, idx);
    }
    return (
        <ul className='todo-list'>

            {listTodo1.map((todo, idx) => (
                <li key={todo.id}

                    className={classNames({
                        item: true,
                        completed: todo.status === 'completed'
                    })}

                    onClick={() => handleTodoClick(todo, idx)}
                > {todo.title}</li>
            ))
            }
        </ul >
    )

};

export default TodoList;