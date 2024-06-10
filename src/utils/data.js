import API from './axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDataSales } from '../redux/reducers/salesReducer';

export const FetchData = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);

    const sales = async() => {
        const url = `/sales?product=${query}`
        
        const response = await API.get(url)
        dispatch(setDataSales(response.data))
        return response.data
    }

  return { sales }
}
