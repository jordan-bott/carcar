import React from 'react';
import useFetch from '../useFetch';

export default function SaleList() {
    const sales = useFetch("http://localhost:8090/api/sales/", "sales");

    return (
        <div className="mt-4">
            <div className="d-flex mb-3 align-items-center justify-content-center">
                <h1>Record of Sales</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/4727/4727058.png" className="ms-2" style={{ width: "47px" }} />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sales Person</th>
                        <th>Employee Number</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {[...sales].reverse().map((sale) => {
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
