import React, { useState } from 'react';

export default function ManufacturerForm() {
    const [name, setName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name,
        };

        const url = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setName("");
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4 rounded-3">
                    <h1 className="text-center mb-3">Create a manufacturer</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name"
                                className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
