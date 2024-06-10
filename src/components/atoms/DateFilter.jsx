import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEndDate, setStartDate } from '../../redux/reducers/filterReducer';
import { setDataSales } from '../../redux/reducers/salesReducer';

const DateFilter = () => {
    const dispatch = useDispatch();
    const dataStartDate = useSelector((state) => state.filter.startDate);
    const dataEndDate = useSelector((state) => state.filter.endDate);
    const data = useSelector((state) => state.sales.dataSales);

    const handleStartDate = (startDate) => {
        dispatch(setStartDate(startDate))
    }

    const handleEndDate =(endDate) => {
        dispatch(setEndDate(endDate))
    }

    const handleFilter = () => {
        const filtered = data.filter(item => {
            const itemDate = new Date(item.date);
            const start = new Date(dataStartDate);
            const end = new Date(dataEndDate);

            return itemDate >= start && itemDate <= end;
        });
        dispatch(setDataSales(filtered))
    }

    const handleReset = () => {
        dispatch(setStartDate(''))
        dispatch(setEndDate(''))
    }

    return (
        <div className='filter-container'>
            <label className='gap'>
                Start Date:
                <input
                    className='date-input'
                    type="date"
                    value={dataStartDate}
                    onChange={(e) => handleStartDate(e.target.value)}
                />
            </label>
            <label className='gap'>
                End Date:
                <input
                    className='date-input'
                    value={dataEndDate}
                    type="date"
                    onChange={(e) => handleEndDate(e.target.value)}
                />
            </label>
            <button className='button-filter' onClick={handleFilter}>Filter</button>
            <button className='button-filter' onClick={handleReset}>Reset</button>
        </div>
    )
}

export default DateFilter