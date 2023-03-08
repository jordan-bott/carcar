import React from 'react';

export default function SalesFilteredList({ sales, salesPerson }) {
  const filteredSales = sales.filter((sale) => {
    if (sale.sales_person.employee_number === parseInt(salesPerson)) {
      return sale;
    } else if (salesPerson === "Filter by sales person" || salesPerson === "") {
      return sale;
    }
  })

  return (
    <table className="table text-center align-center">
      <thead>
        <tr>
          <th>Sales Person</th>
          <th>Purchaser</th>
          <th>Automobile</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
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
