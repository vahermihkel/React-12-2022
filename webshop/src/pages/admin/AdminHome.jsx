import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <div>
      <Link to="/admin/add-product">
        <Button variant="success">Add product</Button>
      </Link>
      <Link to="/admin/maintain-products">
        <Button>Maintain products</Button>
      </Link>
      {/* App.js sees: admin/maintain-categories */}
      <Link to="/admin/maintain-categories">
        <Button>Maintain categories</Button>
      </Link>
      <Link to="/admin/maintain-shops">
        <Button>Maintain shops</Button>
      </Link>
    </div>
  )
}

export default AdminHome