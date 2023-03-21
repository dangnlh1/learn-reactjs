
import { useState } from 'react';
import TodoList from './components/ToDoList';



ToDoFeature.propTypes = {

};

function ToDoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ];

    const [todoList, setToDoList] = useState(initTodoList);

    const [filterdStatus, setFilterdStatus] = useState("all");

    const handleTodoClick = (todo, idx) => {
        // clone array to new arry 
        const newTodoList = [...todoList];

        console.log(todo, idx);

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        // toggle state 



        setToDoList(newTodoList);
    }


    const handShowAllClick = () => {
        setFilterdStatus('all')
    }
    const handShowCompletedClick = () => {

        setFilterdStatus('completed')
    }
    const handNewClick = () => {
        setFilterdStatus('new')
    }

    const renderedToDoList = todoList.filter(todo => filterdStatus === 'all'
        || filterdStatus === todo.status)

    return (
        <div>
            <h3>Hehe</h3>
            <TodoList listTodo1={renderedToDoList} onToDoClick={handleTodoClick} />

            <button onClick={handShowAllClick}>Show All</button>
            <button onClick={handShowCompletedClick}>Show Completed</button>
            <button onClick={handNewClick}>Show New</button>
        </div>
    );
}

export default ToDoFeature;