import React from 'react'
import Dashboard from '../screens/Dashboard'
import ManagerSection from '../screens/ManagerSection'
import DateRange from '../components/DateRange'
import { Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/manager" element={<ManagerSection />}></Route>
      <Route path="/daterange" element={<DateRange />}></Route>
    </Routes>
  )
}