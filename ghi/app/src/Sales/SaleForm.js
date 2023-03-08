import React, { useState, useEffect } from 'react';

export default function SaleForm({ autos, salesPeople, customers, sales }) {
    const [automobile, setAutomobile] = useState("");
    const [salesPerson, setSalesPerson] = useState("");
    const [customer, setCustomer] = useState("");
    const [price, setPrice] = useState("");
    const [carSales, setCarSales] = useState(sales);
    const [unsoldCars, setUnsoldCars] = useState([]);

    const handleAutoChange = (event) => {
        setAutomobile(event.target.value);
    }

    const handleSalesPersonChange = (event) => {
        setSalesPerson(event.target.value);
    }

    const handleCustomerChange = (event) => {
        setCustomer(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = JSON.stringify({
            automobile,
            sales_person: salesPerson,
            customer,
            price,
        })

        const url = "http://localhost:8090/api/sales/";
        const fetchConfig = {
            method: "post",
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setAutomobile("");
            setSalesPerson("");
            setCustomer("");
            setPrice("");

            const fetchNewSales = async () => {
                const newDataResponse = await fetch(url);
                if (newDataResponse.ok) {
                    const newData = await newDataResponse.json();
                    setCarSales(newData.sales)
                }
            }
            fetchNewSales();
        }

    }

    useEffect(() => {
        const soldCarVins = carSales.map(sale => sale.automobile.vin);
        const unsoldAutos = autos.filter(car => !(soldCarVins.includes(car.vin)));
        setUnsoldCars(unsoldAutos);
    }, [carSales])

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4 rounded-3">
                    <h1 className="text-center mb-3">Add a Customer</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <select value={automobile} onChange={handleAutoChange} required name="automobile" id="automobile" className="form-select">
                                <option value="">Choose an automobile</option>
                                {unsoldCars.map(auto => {
                                    return (
                                        <option key={auto.vin} value={auto.vin}>
                                            {auto.year} {auto.model.manufacturer.name} {auto.model.name} - {auto.color}
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor="automobile">Automobile</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select value={salesPerson} onChange={handleSalesPersonChange} required name="sales_person" id="sales_person" className="form-select">
                                <option value="">Choose a sales person</option>
                                {salesPeople.map(salesPerson => {
                                    return (
                                        <option key={salesPerson.employee_number} value={salesPerson.employee_number}>
                                            {salesPerson.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor="sales_person">Sales person</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select value={customer} onChange={handleCustomerChange} required name="customer" id="customer" className="form-select">
                                <option value="">Choose a customer</option>
                                {customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={price} onChange={handlePriceChange} placeholder="Price" required type="number" name="price" id="price" className="form-control" />
                            <label htmlFor="price">Sale price</label>
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
