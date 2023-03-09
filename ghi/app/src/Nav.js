import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#364765" }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active me-2" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown me-2">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://cdn-icons-png.flaticon.com/512/5044/5044773.png" className="pe-1 d-inline-block align-text-top" style={{ width: "25px" }} /> Inventory
              </NavLink>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to="/inventory/manufacturers" className="dropdown-item">List manufacturers</Link>
                </li>
                <li>
                  <Link to="/inventory/manufacturers/new" className="dropdown-item">Add a manufacturer</Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/inventory/models" className="dropdown-item">List vehicle models</Link>
                </li>
                <li>
                  <Link to="/inventory/models/new" className="dropdown-item">Add a vehicle model</Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/inventory/automobile" className="dropdown-item">List automobiles</Link>
                </li>
                <li>
                  <Link to="/inventory/automobile/new" className="dropdown-item">Add an automobile</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown me-2">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://cdn-icons-png.flaticon.com/512/5044/5044358.png" className="pe-1 d-inline-block align-text-top" style={{ width: "25px" }} />Sales
              </NavLink>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to="/sales/salesperson/new" className="dropdown-item">Add a sales person</Link>
                </li>
                <li>
                  <Link to="/sales/customers/new" className="dropdown-item">Add a customer</Link>
                </li>
                <li>
                  <Link to="/sales/new" className="dropdown-item">Record a sale</Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/sales" className="dropdown-item">List all sales</Link>
                </li>
                <li>
                  <Link to="/sales/salesperson/history" className="dropdown-item">List sales by sales person</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://cdn-icons-png.flaticon.com/512/5044/5044168.png" className="pe-1 d-inline-block align-text-top" style={{ width: "25px" }} />Service
              </NavLink>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to="/service/technicians/new" className="dropdown-item">Add a technician</Link>
                </li>
                <li>
                  <Link to="/service/appointments/new" className="dropdown-item">Make a service appointment</Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/service/appointments" className="dropdown-item">List appointments</Link>
                </li>
                <li>
                  <Link to="/service/history" className="dropdown-item">List appointments by VIN</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
