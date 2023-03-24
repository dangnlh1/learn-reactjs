import { useState, useEffect, useMemo } from "react";
import TodoList from "./components/ToDoList"
import { useLocation, useHistory, useRouteMatch } from "react-router-dom"
import queryString from "query-string";

ToDoFeature.propTypes = {};

function ToDoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: "new",
        },
        {
            id: 2,
            title: "Sleep",
            status: "completed",
        },
        {
            id: 3,
            title: "Code",
            status: "new",
        },
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setToDoList] = useState(initTodoList);

    const [filterdStatus, setFilterdStatus] = useState(() => {
        const param = queryString.parse(location.search);
        console.log(param);

        return param.status || "all";
    });

    useEffect(() => {
        const param = queryString.parse(location.search);
        setFilterdStatus(param.status || "all");
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        // clone array to new arry
        const newTodoList = [...todoList];

        console.log(todo, idx);

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === "new" ? "completed" : "new",
        };

        setToDoList(newTodoList);
    };

    const handShowAllClick = () => {
        setFilterdStatus("all");
        const queryParams = { status: "all" };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };
    const handShowCompletedClick = () => {
        setFilterdStatus("completed");
        const queryParams = { status: "completed" };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };
    const handNewClick = () => {
        setFilterdStatus("new");
        const queryParams = { status: "new" };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const renderedToDoList = useMemo(() => {
        return todoList.filter((todo) => filterdStatus === "all" || filterdStatus === todo.status);
    }, [todoList, filterdStatus]);

    // const renderedToDoList = todoList.filter(todo => filterdStatus === 'all'
    //     || filterdStatus === todo.status)

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
