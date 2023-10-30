import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Table, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    getAuthors();
  }, []);

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
            <div class="col mr-2 d-flex flex-row justify-content-between">
            <Button color="success" onClick={handleSearch}>Buscar</Button>
            <Link to="/crear-autor">
                <Button color="success" className="text-nowrap">Agregar autor</Button>
            </Link>
            <Link to="/libros-por-autor">
                <Button color="success" className="text-nowrap">libros</Button>
            </Link>
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
