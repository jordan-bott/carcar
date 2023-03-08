import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelList from './VehicleModelList';
import VehicleModelForm from './VehicleModelForm';
import SalesPersonForm from './Sales/SalesPersonForm';
import CustomerForm from './Sales/CustomerForm';
import SaleList from './Sales/SaleList';
import SalesPersonHistory from './Sales/SalesPersonHistory';



















import AddAutoForm from './AutomobileForm';
import AutomobileList from './AutomobileList';


function App(props) {
  if (
    props.automobiles === undefined ||
    props.manufacturers === undefined ||
    props.vehicleModels === undefined ||
    props.sales === undefined ||
    // props.customers === undefined ||
    props.salesPeople === undefined // ||
    // props.technicians === undefined ||
    // props.appointments === undefined
  ) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="inventory">
            <Route path="manufacturers">
              <Route path="" element={<ManufacturerList manufacturers={props.manufacturers} />} />
              <Route path="new" element={<ManufacturerForm />} />
            </Route>
            <Route path="models">
              <Route path="" element={<VehicleModelList vehicleModels={props.vehicleModels} />} />
              <Route path="new" element={<VehicleModelForm manufacturers={props.manufacturers} />} />
            </Route>
            <Route path="automobile">
              <Route path="" element={<AutomobileList automobiles={props.automobiles} />} />
              <Route path="new" element={<AddAutoForm models={props.vehicleModels} />} />
            </Route>
          </Route>
          <Route path="sales">
            <Route path="" element={<SaleList sales={props.sales} />} />
            <Route path="new" />
            <Route path="customers/new" element={<CustomerForm />} />
            <Route path="salesperson">
              <Route path="new" element={<SalesPersonForm />} />
              <Route path="history" element={<SalesPersonHistory sales={props.sales} salesPeople={props.salesPeople} autos={props.automobiles} />} />
            </Route>
          </Route>
          <Route path="service">
            <Route path="customers/new" />
            <Route path="technicians/new" />
            <Route path="appointments">
              <Route path="" />
              <Route path="new" />
            </Route>
            <Route path="history" />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
