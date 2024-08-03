import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateBook from './pages/CreateBook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import UpdateBook from './pages/UpdateBook.jsx';
import ShowBook from './pages/ShowBook.jsx';
import Home from './pages/Home.jsx';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<UpdateBook />} />
    </Routes>
  );
};

export default App;