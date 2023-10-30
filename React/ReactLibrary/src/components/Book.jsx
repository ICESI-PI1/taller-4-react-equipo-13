import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Table, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Bookview({ books, getOneBook, getBooks, onDeleteBook }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchValue.trim() === '') {
      getBooks();
    } else {
      getOneBook(searchValue);
    }
  };

  // Llama a getBooks cuando se monta el componente
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Table responsive bordered>
      <thead>
        <div className="row">
          <div className="col ml-2">
            <Input type="text" value={searchValue} onChange={handleInputChange} />
          </div>
          <div className="col mr-2 d-flex flex-row justify-content-between">
            <Button color="success" onClick={handleSearch}>
              Buscar
            </Button>
            <Link to="/crear-libro">
              <Button color="success">agregar libro</Button>
            </Link>
          </div>
        </div>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>PublicationDate</th>
          <th>AuthorId</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <th scope="row">{book.id}</th>
            <td>{book.title}</td>
            <td>{book.publicationDate}</td>
            <td>{book.authorId}</td>
            <td>
              <Button
                color="danger"
                onClick={() => onDeleteBook(book.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

Bookview.propTypes = {
  books: PropTypes.array.isRequired,
  getOneBook: PropTypes.func.isRequired,
  getBooks: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
};

export default Bookview;