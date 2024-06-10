import React from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/reducers/searchReducer';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch =(product) => {
        dispatch(setQuery(product))
    }

    return (
       <div className='search-container'>
            <input
                className='search-input'
                placeholder='Search Product'
                type="search"
                onChange={(e) => handleSearch(e.target.value)}
            />
       </div>
    )
}

export default SearchBar