import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// sales, customer, sales person

// technician, appointment,

//automobile, manufacturer, vehicle model

async function loadData() {

    const automobileResponse = await fetch('http://localhost:8100/api/automobiles/');
    const manufacturerResponse = await fetch('http://localhost:8100/api/manufacturers/');
    const vehicleModelResponse = await fetch('http://localhost:8100/api/models/');
    const salesResponse = await fetch('http://localhost:8090/api/sales/');
    // const customerResponse = await fetch('');
    // const salesPersonResponse = await fetch('');

    // const technicianResponse = await fetch('');
    // const appointmentResponse = await fetch('');

    try {
        if (
            automobileResponse.ok &&
            manufacturerResponse.ok &&
            vehicleModelResponse.ok &&
            salesResponse.ok // &&
            // customerResponse.ok &&
            // salesPersonResponse.ok &&
            // technicianResponse.ok &&
            // appointmentResponse.ok
        ) {

            const automobile = await automobileResponse.json();
            const manufacturer = await manufacturerResponse.json();
            const vehicleModel = await vehicleModelResponse.json();
            const sales = await salesResponse.json();
            // const customer = await customerResponse.json();
            // const salesPerson = await salesPersonResponse.json();
            // const technician = await technicianResponse.json();
            // const appointment = await appointmentResponse.json();


            root.render(
                <React.StrictMode>
                    <App
                        automobiles={automobile.autos}
                        manufacturers={manufacturer.manufacturers}
                        vehicleModels={vehicleModel.models}
                        sales={sales.sales}
                    // customers={customer.customers}
                    // salesPersons={salesPerson.salesPersons}
                    // technicians={technician.technicians}
                    // appointments={appointment.appointments}
                    />
                </React.StrictMode>
            );
        }
    } catch (e) {
        console.error(e);
    }
}
loadData();
