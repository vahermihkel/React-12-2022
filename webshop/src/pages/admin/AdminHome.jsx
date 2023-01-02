import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <div>
      <Link to="/admin/add-product">
        <Button variant="success">Add product</Button>
      </Link>
      <Link to="/admin/maintain-products">
        <Button variant="primary">Maintain products</Button>
      </Link>
    </div>
  )
}

export default AdminHome