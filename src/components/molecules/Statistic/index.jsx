import React from 'react'
import { useSelector } from 'react-redux';

const Statistic = () => {
    const data = useSelector((state) => state.sales.dataSales);

    return (
        <div className='gap'>
            <p>Total sales: {data.reduce((acc, val) => acc + val.sales, 0)}</p>
            <p>Total revenue: {data.reduce((acc, val) => acc + val.revenue, 0)}</p>
            <p>Average sales: {data.reduce((acc, val) => acc + val.sales, 0) / data.length || 0}</p>
            <p>Average revenue: {data.reduce((acc, val) => acc + val.revenue, 0) / data.length || 0}</p>
        </div>
    )
}

export default Statistic