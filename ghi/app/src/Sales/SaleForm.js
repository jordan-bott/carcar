import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from '../useFetch';

export default function SaleForm() {
    const [automobile, setAutomobile] = useState("");
    const [salesPerson, setSalesPerson] = useState("");
    const [customer, setCustomer] = useState("");
    const [price, setPrice] = useState("");
    const [carSales, setCarSales] = useState([]);
    const [unsoldCars, setUnsoldCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const autos = useFetch("http://localhost:8100/api/automobiles/", "autos");
    const salesPeople = useFetch("http://localhost:8090/api/sales-people/", "sales_people");
    const customers = useFetch("http://localhost:8090/api/customers/", "customers");

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

        try {
            const response = await fetch(url, fetchConfig);
            setIsLoading(true);
            if (response.ok) {
                const newSale = await response.json();
                setCarSales(oldSales => [...oldSales, newSale]);
                setAutomobile("");
                setSalesPerson("");
                setCustomer("");
                setPrice("");
                setIsLoading(false);
                toast(`💸 ${newSale.sales_person.name} sold a car to ${newSale.customer.name}!`);
            }
        } catch (e) {
            toast.error(e);
        }
    }

    const fetchSales = async () => {
        try {
            const response = await fetch("http://localhost:8090/api/sales/");
            if (response.ok) {
                const data = await response.json();
                setCarSales(data.sales);
            } else {
                throw new Error("Response not ok");
            }
        } catch (e) {
            toast.error(`${e}`);
        }
    }

    useEffect(() => {
        fetchSales();
    }, []);

    useEffect(() => {
        const soldCarVins = carSales.map(sale => sale.automobile.vin);
        const unsoldAutos = autos.filter(car => !(soldCarVins.includes(car.vin)));
        setUnsoldCars(unsoldAutos);
    }, [carSales]);

    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4 rounded-3">
                        <div className="d-flex mb-3 align-items-center justify-content-center">
                            <h1>Record a Sale</h1>
                            <img src="https://cdn-icons-png.flaticon.com/512/5044/5044215.png" className="ms-2" style={{ width: "35px" }} />
                        </div>
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
                                <input value={price} onChange={handlePriceChange} placeholder="Price" required type="number" min="1" max="2147483647" name="price" id="price" className="form-control" />
                                <label htmlFor="price">Sale price</label>
                            </div>
                            <div className="d-grid col-md-6 mx-auto">
                                {!isLoading ? <button className="btn btn-outline-primary">Record Sale</button> : <button className="btn btn-outline-primary">Loading... Press me again in about 10 seconds</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
