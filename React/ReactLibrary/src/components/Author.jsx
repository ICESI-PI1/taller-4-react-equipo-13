import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Table, Input, Button } from 'reactstrap';

function Authorview({authors, getOneAuthor, getAuthors, onDeleteAuthor }) {

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  

  const handleSearch = () => {
    if (searchValue.trim() === '') {
      getAuthors();
    } else {
      getOneAuthor(searchValue);
    }
  };

  return (
        
    <Table responsive bordered>
      <thead>
      <div class="row">
        <div class="col ml-2">
            <Input 
              type="text"
              value={searchValue}
              onChange={handleInputChange}
            />
        </div>
        <div class="col mr-2">
            <Button color="success" onClick={handleSearch}>Click Me</Button>
        </div>
      </div>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>nationality</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author, index) => (
          <tr key={index}>
            <th scope="row">{author.id}</th>
            <td>{author.name}</td>
            <td>{author.nationality}</td>
            <td>
              <Button
                color="danger"
                onClick={() => onDeleteAuthor(author.id)}
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

Authorview.propTypes = {
  authors: PropTypes.array.isRequired,
  getOneAuthor: PropTypes.func.isRequired,
  getAuthors: PropTypes.func.isRequired,
  onDeleteAuthor: PropTypes.func.isRequired, 
  searchValue: PropTypes.string, 
};

export default Authorview
