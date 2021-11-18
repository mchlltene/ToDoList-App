import React from 'react'
import Header from '../components/employee/Header';
import SearchBar from '../components/employee/SearchBar';
import EmployeeList from '../components/employee/EmployeeList';

import Clock from '../components/Clock';
import NameForm from '../components/NameForm';

const HomePage = () => {
  return (
    <div>
      <Header title="Employee Directory" />
      <Clock />
      <NameForm />
      <SearchBar />
      <EmployeeList />
    </div>
  )
}

export default HomePage;