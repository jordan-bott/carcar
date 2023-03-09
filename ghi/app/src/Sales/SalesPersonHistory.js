import React, { useState } from 'react';
import SalesFilteredList from './SalesFilteredList';
import useFetch from '../useFetch';

export default function SalesPersonHistory() {
    const [salesPerson, setSalesPerson] = useState("Filter by sales person");
    const salesPeople = useFetch("http://localhost:8090/api/sales-people/", "sales_people");
    const sales = useFetch("http://localhost:8090/api/sales/", "sales");

    const handleSalesPersonChange = (event) => {
        setSalesPerson(event.target.value);
    }

    return (
        <>
            <div className="mt-4 row">
                <div className="d-flex align-items-center justify-content-center">
                    <h1>Sales Person History</h1>
                    <img src="https://cdn-icons-png.flaticon.com/512/5044/5044229.png" className="ms-2" style={{ width: "40px" }} />
                </div>
                <div className="d-inline-flex my-3 justify-content-end">
                    <div>
                        <select
                            value={salesPerson}
                            onChange={handleSalesPersonChange}
                            className="form-select d-inline-flex"
                        >
                            <option>Filter by sales person</option>
                            {salesPeople.map((salesPerson) => {
                                return (
                                    <option key={salesPerson.employee_number} value={salesPerson.employee_number}>{salesPerson.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <SalesFilteredList sales={sales} salesPerson={salesPerson} />
            </div>
        </>
    )
}
