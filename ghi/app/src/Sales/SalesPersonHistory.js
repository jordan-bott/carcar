import React, { useState } from 'react';
import SalesFilteredList from './SalesFilteredList';

export default function SalesPersonHistory({ sales, salesPeople, autos }) {
    const [salesPerson, setSalesPerson] = useState("");

    const handleSalesPersonChange = (event) => {
        setSalesPerson(event.target.value);
    }

    return (
        <>
            <div className="mt-4">
                <h1>Sales Person History</h1>
                <form className="mb-3">
                    <select
                        value={salesPerson}
                        onChange={handleSalesPersonChange}
                        className="form-select"
                    >
                        <option>Filter by sales person</option>
                        {salesPeople.map((salesPerson) => {
                            return (
                                <option key={salesPerson.employee_number} value={salesPerson.employee_number}>{salesPerson.name}</option>
                            )
                        })}
                    </select>
                </form>
                <SalesFilteredList sales={sales} salesPerson={salesPerson} autos={autos} />
            </div>
        </>
    )
}
