import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { Table } from 'reactstrap';

function Generalview(){
    return(
        
        <Table responsive bordered>
  <thead>
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
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
    </tr>
  </tbody>
</Table>
        
    )
}

export default Generalview