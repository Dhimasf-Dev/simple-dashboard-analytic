import React, { useEffect } from 'react'
import SalesLineChart from '../molecules/SalesLineChart'
import SalesBarChart from '../molecules/SalesBarChart'
import SalesTable from '../molecules/SalesTable'
import DateFilter from '../atoms/DateFilter'
import SearchBar from '../atoms/SearchBar'
import { FetchData } from '../../utils/data';
import { useSelector } from'react-redux';
import MainTemplate from '../templates/MainTemplate'
import Statistic from '../molecules/Statistic'

const HomePage = () => {
  const { sales } = FetchData();
  const query = useSelector((state) => state.search.query);
  const dataStartDate = useSelector((state) => state.filter.startDate);
  const dataEndDate = useSelector((state) => state.filter.endDate);

  useEffect(() => {
    sales()
  }, [query, dataStartDate, dataEndDate])

  return (
      <MainTemplate>
          <DateFilter />
          <SearchBar />
          <Statistic />
          <SalesLineChart />
          <SalesBarChart />
          <SalesTable />
      </MainTemplate>
  )
}

export default HomePage