//React Imports
import React, {useState} from 'react';

//Component Imports
import Registration from "./Registration/Registration";

//MUI Imports
import {Box, styled, Typography} from "@mui/material";

//Full Page Scrolling Imports
import { FullPage, Slide } from 'react-full-page';

//Image Import
import backgroundImage from "../../images/home_background_image.png";

const HalfBox = styled('Box')({
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const Home = ({setCurrentSlide}) => {

    return (
        <FullPage beforeChange={({ to }) => setCurrentSlide(to)}>
            <Slide>
                <Box sx={{ display: "flex", width: "100vw", height: "100vh", bgcolor: "background.main"}}>
                    <Box sx={{width: "100vw", height: "100vh", display: {xs: "none", md: "flex"}}}>
                        <HalfBox>
                            <Box sx={{display: "flex", flexDirection: "column", width: "90%", height: "50%", marginLeft: "60px"}}>
                                <Typography sx={{color: "black", fontSize: "40px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "10px"}}>
                                    Get IB help from:
                                </Typography>
                                <Typography sx={{fontSize: "60px",fontFamily: 'Open Sans, sans-serif', fontWeight: "700", transform: "skewX(-20deg)", marginBottom: "40px"}}>
                                    <Box component="mark" sx={{color: "background.main", backgroundColor: "primary.main", padding: "0px 20px", borderRadius: "5px"}}>REAL IB STUDENTS!</Box>
                                </Typography>
                                <Typography sx={{fontSize: "18px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey"}}>
                                    Made up of
                                </Typography>
                            </Box>
                        </HalfBox>
                        <HalfBox>

                        </HalfBox>
                    </Box>

                </Box>
            </Slide>
            <Slide>
                <Box sx={{ width: "100vw", height: "100vh" }}>

                </Box>
            </Slide>
            <Slide>
                <Box sx={{display: "flex", width: "100vw", height: "100vh", bgcolor: "background.main"}}>
                    <Box sx={{width: "100%", height: "calc(100%-90px)", marginTop: "90px", display: "flex"}}>
                        <Registration/>
                    </Box>
                </Box>
            </Slide>
        </FullPage>
    );
};

export default Home;
