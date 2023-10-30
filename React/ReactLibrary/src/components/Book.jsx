import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Table, Input, Button } from 'reactstrap';

function Bookview({books, getOneBook, getBooks, onDeleteBook}){

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

  return(
        
    <Table responsive bordered>
      <thead>
      <div class="row">
        <div class="col ml-2">
        <Input type="text" value={searchValue} onChange={handleInputChange}/>
        </div>
        <div class="col mr-2">
            <Button color="success" onClick={handleSearch}>Click Me</Button>
        </div>
      </div>
        <tr>
          <th>
            id
          </th>
          <th>
            title
          </th>
          <th>
            PublicationDate
          </th>
          <th>
            AuthorId
          </th>
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
    )
}

Bookview.propTypes = {
  books: PropTypes.array.isRequired,
  getOneBook: PropTypes.func.isRequired,
  getBooks: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired, 
};

export default Bookview