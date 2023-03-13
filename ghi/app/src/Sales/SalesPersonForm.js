import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SalesPersonForm() {
    const [name, setName] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmployeeNumberChange = (event) => {
        setEmployeeNumber(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name,
            employee_number: employeeNumber,
        }

        const url = "http://localhost:8090/api/sales-people/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }

        try {
            const response = await fetch(url, fetchConfig);
            if (response.ok) {
                const newSalesPerson = await response.json();
                setName("");
                setEmployeeNumber("");
                toast(`🧑🏽‍💼 ${newSalesPerson.name} was successfully added as a sales person!`);
            } else {
                throw new Error("Response not ok. Make sure you are not giving an existing employee number!");
            }
        } catch (e) {
            toast.error(`${e}`);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4 rounded-3">
                        <div className="d-flex mb-3 align-items-center justify-content-center">
                            <h1>Add a Sales Person</h1>
                            <img src="https://cdn-icons-png.flaticon.com/512/5044/5044182.png" className="ms-2" style={{ width: "35px" }} />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" maxLength="200" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={employeeNumber} onChange={handleEmployeeNumberChange} placeholder="Employee Number" required type="number" min="0" max="2147483647" name="employee_number" id="employee_number" className="form-control" />
                                <label htmlFor="employee_number">Employee Number</label>
                            </div>
                            <div className="d-grid col-sm-6 mx-auto">
                                <button className="btn btn-outline-primary">Add Sales Person</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
