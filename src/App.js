
import { Link, NavLink, Route, Routes, Switch } from 'react-router-dom';

import './App.css';
import AlbumFreature from './features/Album';


import ToDoFeature from './features/Todo';

import { React , useEffect } from 'react';
import categoryApi from './api/categoryApi';







function App() {

  useEffect(() => {
        const fetchCategories = async () => {
            const params = {
              _limit : 2,
            } ;

          const categoryList = await categoryApi.getAll(params) ;
          console.log(categoryList) ;
        }
        fetchCategories() ;
  }, []);

  return (
    <div className='App' >
      Header

      {/* <p><Link to="/todos">Todos</Link></p>

      <p><Link to="/albums">Albums</Link></p>

      <p><NavLink to="/todos">Todos</NavLink></p>

      <p><NavLink to="/albums">Albums</NavLink></p> */}
      <Switch>


        <Route path="/" component={ToDoFeature} exact />
        <Route path="/todos" component={ToDoFeature} />

        <Route path="/albums" component={AlbumFreature} />

      </Switch>


      Footer
    </div>




  );
}

export default App;
