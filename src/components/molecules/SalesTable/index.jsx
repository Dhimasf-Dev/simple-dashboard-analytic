import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const SalesTable = () => {
    const data = useSelector((state) => state.sales.dataSales);

    return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Product</th>
                <th>Sales</th>
                <th>Revenue</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.product}</td>
                    <td>{item.sales}</td>
                    <td>{item.revenue}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default SalesTable