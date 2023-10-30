import React from 'react';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function AuthorBooks({authors, getAuthorBooks}) {

    const [searchValue, setSearchValue] = useState('');
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        getAuthorBooks(searchValue)
    };
  return (
    
        <div>
          <h1>Buscar Libros por Autor</h1>
          <input
            type="text"
            placeholder="ID del autor"
            value={searchValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Buscar</button>
           {(
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      );
    
  
}

AuthorBooks.propTypes = {
    books: PropTypes.array.isRequired,
    getAuthorBooks: PropTypes.func.isRequired,
    searchValue: PropTypes.string, 
  };

export default AuthorBooks;
