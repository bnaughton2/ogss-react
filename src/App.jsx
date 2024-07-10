import React from 'react'
import ReactDOM from 'react-dom/client'
import { render } from 'react-dom'
import Welcome from "./screens/Welcome"
import Router from "./components/Router"
import Navbar from "./components/Navbar"
import "./css/main.css"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


export default function App() {
    return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <div id="app">
            <Router />
        </div>
    </LocalizationProvider>
    </>
    );
    }

