
import React from 'react'
import Layout from './MainLayout/Layout';


import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import MoviesDetail from './MainLayout/MoviesDetail';

const App = () => {
  return (
    <>
    
    <Router>

        <Routes>

            <Route path='/'  element={<Layout/>} />
            <Route path='/movies/:id'  element={<MoviesDetail/>} />



        </Routes>




    </Router>
    
    </>
  )
}

export default App