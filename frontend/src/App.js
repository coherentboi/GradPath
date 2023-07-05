//React Imports
import React, {useState} from 'react';

//React Dom Imports
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Component Imports
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/404/NotFound";

//MUI Material Imports
import {Box, createTheme, ThemeProvider} from "@mui/material";

//Import CSS
import './App.css';

const palette = createTheme({
    palette: {
        primary: {
            light: '#5A5DEF',
            main: '#2124DF',
            dark: '#0D0F85',
        },
        secondary: {
            light: '#FBFEBB',
            main: '#F9FD9F',
            dark: '#B5BE03'
        },
        background: {
            light: '#FFFFFA',
            main: '#FFFFFA',
            dark: '#FFFFFA'
        }
    },
});

const App = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <ThemeProvider theme={palette}>
            <BrowserRouter>
                <Box sx={{display: "flex", width: "100%", height: "100%", flexDirection: "column"}}>
                    <Box sx={{position: "fixed", top: "0", marginBottom: "10px", width: "calc(100% - 20px)", margin: "10px", zIndex: "1000"}}>
                        <Navbar currentSlide={currentSlide}/>
                    </Box>
                    <Box sx={{display: "flex", width: "100%", flexDirection: "column"}}>
                        <Routes>
                            <Route path="*" element={<NotFound/>}/>
                            <Route path="/" element={<Home setCurrentSlide={setCurrentSlide}/>}/>
                        </Routes>
                    </Box>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;