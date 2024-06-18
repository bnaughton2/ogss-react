import React from 'react'
import ReactDOM from 'react-dom/client'
import { render } from 'react-dom'
import Welcome from "./screens/Welcome"
import Router from "./components/Router"
import Navbar from "./components/Navbar"
import "./css/main.css"


export default function App() {
    return (
    <>
        <Navbar />
        <div id="app">
            <Router />
        </div>
    </>
    );
    }

