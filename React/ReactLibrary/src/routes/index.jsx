import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import BookList from '../pages/BookList'
import AuthorList from '../pages/AuthorList'
import Login from '../pages/Login';
import CreateAuthorList from '../pages/CreateAuthorList';
import CreateBook from '../pages/CreateBook';
import BooksByAuthor from '../pages/BooksByAuthor';

const  Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/libros" element={<BookList />}/>
            <Route path="/autores" element={<AuthorList/>}/>
            <Route path="/crear-autor" element={<CreateAuthorList/>}/>
            <Route path = "/crear-libro" element = {<CreateBook/>}/>
            <Route path = "/libros-por-autor" element = {<BooksByAuthor/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router