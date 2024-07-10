import React from 'react'
import Dashboard from '../screens/Dashboard'
import ManagerSection from '../screens/ManagerSection'
import Accordion from '../components/Accordion'
import { Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/manager" element={<ManagerSection />}></Route>
      <Route path="/accordion" element={<Accordion />}></Route>
    </Routes>
  )
}