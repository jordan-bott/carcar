import React, { useState } from 'react';

export default function CustomerForm() {
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [apartment, setApartment] = useState(null);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleStreetChange = (event) => {
        setStreet(event.target.value);
    }

    const handleApartmentChange = (event) => {
        setApartment(event.target.value);
    }

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleStateChange = (event) => {
        setState(event.target.value);
    }

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name,
            street,
            apartment,
            city,
            state,
            zip_code: zipCode,
            phone_number: phoneNumber,
        }

        const url = "http://localhost:8090/api/customers/";
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
            setStreet("");
            setApartment("");
            setCity("");
            setState("");
            setZipCode("");
            setPhoneNumber("");
        }

    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4 rounded-3">
                    <h1 className="text-center mb-3">Add a Customer</h1>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-12 form-floating">
                            <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label className="mx-2" htmlFor="name">Name</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Phone Number" required type="tel" name="phone_number" id="phone_number" className="form-control" />
                            <label className="mx-2" htmlFor="phone_number">Phone Number (XXX-XXX-XXXX)</label>
                        </div>
                        <div className="col-md-9 form-floating">
                            <input value={street} onChange={handleStreetChange} placeholder="Street Address" required type="text" name="street" id="street" className="form-control" />
                            <label className="mx-2" htmlFor="street">Street Address</label>
                        </div>
                        <div className="col-md-3 form-floating">
                            <input value={apartment} onChange={handleApartmentChange} placeholder="Apt/Suite" type="text" name="apartment" id="apartment" className="form-control" />
                            <label className="mx-1" htmlFor="apartment">Apt/Suite</label>
                        </div>
                        <div className="col-md-12 form-floating">
                            <input value={city} onChange={handleCityChange} placeholder="City" required type="text" name="city" id="city" className="form-control" />
                            <label className="mx-2" htmlFor="city">City</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input value={state} onChange={handleStateChange} placeholder="State" required type="text" name="state" id="state" className="form-control" />
                                <label htmlFor="state">State (Ex: CA, NY)</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input value={zipCode} onChange={handleZipCodeChange} placeholder="Zip Code" required type="number" name="zip_code" id="zip_code" className="form-control" />
                                <label htmlFor="zip_code">Zip Code</label>
                            </div>
                        </div>
                        <div className="col-12 text-end">
                            <button className="btn btn-outline-success">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
