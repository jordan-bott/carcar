import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTechnicianForm() {

    const [name, setName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('')

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleEmployeeNumberChange = (event) => {
        const value = event.target.value;
        setEmployeeNumber(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}

        data.name = name;
        data.employee_number = employeeNumber;

        const technicianUrl = "http://localhost:8080/api/services/tech/list/"

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(technicianUrl, fetchConfig);

        if (response.ok) {
            const technician = await response.json()
            toast(`Please welcome ${technician.name}🧑🏻‍🔧 to the team!! 🎉`)


            setName('')
            setEmployeeNumber('');
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <div className="d-flex mb-3 align-items-center justify-content-center">
                        <h1 className="align-middle">Add a New Technician</h1>
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/65/null/external-mechanic-professions-woman-diversity-flaticons-lineal-color-flat-icons.png" className="ms-2" />
                    </div>
                    <form onSubmit={handleSubmit} id="add-technician-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleEmployeeNumberChange} value={employeeNumber} placeholder="Employee Number" required type="number" name="employee_number" id="employee_number" className="form-control" />
                            <label htmlFor="employee_number">Employee Number</label>
                        </div>
                        <button className="btn btn-primary">Add Technician</button>
                    </form>
                </div>
            </div>
        </div >
    )
}
export default AddTechnicianForm;
