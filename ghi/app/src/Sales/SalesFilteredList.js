import React from 'react';
import useFetch from '../useFetch';

export default function SalesFilteredList({ sales, salesPerson }) {
  const filteredSales = [...sales].reverse().filter((sale) => {
    if (sale.sales_person.employee_number === parseInt(salesPerson)) {
      return sale;
    } else if (salesPerson === "Filter by sales person") {
      return sale;
    }
  })

  return (
    <table className="table align-center">
      <thead>
        <tr>
          <th>Sales Person</th>
          <th>Customer</th>
          <th>VIN</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {filteredSales.map((sale) => {
          return (
            <tr key={sale.href}>
              <td>{sale.sales_person.name}</td>
              <td>{sale.customer.name}</td>
              <td>{sale.automobile.vin}</td>
              <td>${sale.price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
