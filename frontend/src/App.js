//React Imports
import React, {useState} from 'react';

//React Dom Imports
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Component Imports
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/404/NotFound";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";

//MUI Material Imports
import {Box, createTheme, ThemeProvider} from "@mui/material";

//Import CSS
import './App.css';
import Account from "./components/Account/Account";


const palette = createTheme({
    palette: {
        primary: {
            light: '#c7c8fd',
            main: '#1216D3',
            dark: '#02021E',
        },
        secondary: {
            light: '#FBFEBB',
            main: '#F9FD9F',
            dark: '#B5BE03'
        },
        background: {
            light: '#E2E2E2',
            main: '#fffff9',
            dark: '#eaeaea'
        },
    },
});

const App = () => {

    const [navColour, setNavColour] = useState("primary");

    return(
        <ThemeProvider theme={palette}>
            <BrowserRouter>
                <Box sx={{display: "flex", width: "100%", height: "100%", flexDirection: "column", backgroundColor: "background.main"}}>
                    <Box sx={{position: "fixed", top: "0", width: "96%", margin: {xs: "2%", md: "1% 2% 1% 2%"}, zIndex: "1000"}}>
                        <Navbar navColour={navColour}/>
                    </Box>
                    <Box sx={{display: "flex", width: "100%", flexDirection: "column"}}>
                        <Routes>
                            <Route path="*" element={<NotFound setNavColour={setNavColour}/>}/>
                            <Route path="/" element={<Home setNavColour={setNavColour}/>}/>
                            <Route path="/about" element={<About setNavColour={setNavColour}/>}/>
                            <Route path="/account" element={<Account setNavColour={setNavColour}/>}/>
                            <Route path="/auth" element={<Auth setNavColour={setNavColour}/>}/>
                            <Route path="/dashboard" element={<Dashboard setNavColour={setNavColour}/>}/>
                        </Routes>
                    </Box>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;