import React from 'react'
import { Route, BrowserRouter , Routes} from 'react-router-dom'
import Form from '../components/Form'
import Home from '../views/Home'
import ThemeContext from '../Context/ThemeContext';
import ServiceProvider from '../Context/ServiceProvider';
import { useState } from 'react';
import DetailView from '../views/DetailView';



function Rutas() {
    const theme = useState("amber")

    return (
    <ThemeContext.Provider value={theme}>
        <ServiceProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}>
                        <Route path="/" element={<Form/>}/>
                    </Route>
                        <Route path="/details/:id" element={<DetailView/>}/>
                </Routes>
            </BrowserRouter>
        </ServiceProvider>
    </ThemeContext.Provider>

    )
}

export default Rutas