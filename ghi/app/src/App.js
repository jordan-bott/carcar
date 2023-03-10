import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import MainPage from './MainPage';
import Nav from './Nav';
import AddAutoForm from './Inventory/AutomobileForm';
import AutomobileList from './Inventory/AutomobileList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import ManufacturerList from './Inventory/ManufacturerList';
import VehicleModelForm from './Inventory/VehicleModelForm';
import VehicleModelList from './Inventory/VehicleModelList';
import CustomerForm from './Sales/CustomerForm';
import SaleForm from './Sales/SaleForm';
import SaleList from './Sales/SaleList';
import SalesPersonForm from './Sales/SalesPersonForm';
import SalesPersonHistory from './Sales/SalesPersonHistory';
import AddServiceAppointment from './Service/ServiceAppointmentForm';
import ListServiceAppointments from './Service/ServiceAppointmentList';
import ListServiceHistory from './Service/ServiceHistory';
import AddTechnicianForm from './Service/TechnicianForm';



function App() {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="inventory">
            <Route path="manufacturers">
              <Route path="" element={<ManufacturerList />} />
              <Route path="new" element={<ManufacturerForm />} />
            </Route>
            <Route path="models">
              <Route path="" element={<VehicleModelList />} />
              <Route path="new" element={<VehicleModelForm />} />
            </Route>
            <Route path="automobiles">
              <Route path="" element={<AutomobileList />} />
              <Route path="new" element={<AddAutoForm />} />
            </Route>
          </Route>
          <Route path="sales">
            <Route path="" element={<SaleList />} />
            <Route path="new" element={<SaleForm />} />
            <Route path="customers/new" element={<CustomerForm />} />
            <Route path="salesperson">
              <Route path="new" element={<SalesPersonForm />} />
              <Route path="history" element={<SalesPersonHistory />} />
            </Route>
          </Route>
          <Route path="service">
            <Route path="technicians/new" element={<AddTechnicianForm />} />
            <Route path="appointments">
              <Route path="" element={<ListServiceAppointments />} />
              <Route path="new" element={<AddServiceAppointment />} />
            </Route>
            <Route path="history" element={<ListServiceHistory />} />
          </Route>
        </Routes>
        <ToastContainer position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
