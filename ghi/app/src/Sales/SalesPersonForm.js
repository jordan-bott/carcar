import React, { useState } from 'react';

export default function SalesPersonForm() {
    const [name, setName] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("")

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

        const url = "http://localhost:8090/api/salespeople/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }

        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            setName("");
            setEmployeeNumber("");
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4 rounded-3">
                    <h1 className="text-center mb-3">Add a Sales Person</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={employeeNumber} onChange={handleEmployeeNumberChange} placeholder="Employee Number" required type="number" name="employee_number" id="employee_number" className="form-control" />
                            <label htmlFor="employee_number">Employee Number</label>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-outline-success">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
