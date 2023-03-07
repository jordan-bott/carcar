import React from 'react';

export default function SaleHistory({ sales, salesPeople }) {
    return (
        <>
            <div className="mt-4">
                <h1>Sales Person History</h1>
                <form className="mb-3">
                    <select className="form-select">
                        <option>Filter by sales person</option>
                        <option>All</option>
                    </select>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Purchaser</th>
                            <th>Automobile</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale) => {
                            return (
                                <tr key={sale.href}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.automobile.name}</td>
                                    <td>${sale.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
