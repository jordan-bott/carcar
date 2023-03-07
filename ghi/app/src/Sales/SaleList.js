import React from 'react';

export default function SaleList({ sales }) {
    return (
        <div className="mt-4">
            <h1>Sales</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sales Person</th>
                        <th>Employee Number</th>
                        <th>Purchaser</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => {
                        return (
                            <tr key={sale.href}>
                                <td>{sale.sales_person.name}</td>
                                <td>{sale.sales_person.employee_number}</td>
                                <td>{sale.customer.name}</td>
                                <td>{sale.automobile.vin}</td>
                                <td>${sale.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
