import React, { useState } from 'react';
import SalesFilteredList from './SalesFilteredList';

export default function SalesPersonHistory({ sales, salesPeople, autos }) {
    const [salesPerson, setSalesPerson] = useState("Filter by sales person");

    const handleSalesPersonChange = (event) => {
        setSalesPerson(event.target.value);
    }

    return (
        <>
            <div className="mt-4 row">
                <h1 className="text-center">Sales Person History</h1>
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
                <SalesFilteredList sales={sales} salesPerson={salesPerson} autos={autos} />
            </div>
        </>
    )
}
