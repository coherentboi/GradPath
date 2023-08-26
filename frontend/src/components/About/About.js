//React Imports
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";

//MUI Imports
import {Box, Button, Grid, styled, Typography} from "@mui/material";

//Full Page Scrolling Imports
import { FullPage, Slide } from 'react-full-page';

//Component Import
import Footer from "../Footer/Footer";

//Image Import
import logo from "../../images/gradpathlogo.svg";
import graduationImage from "../../images/about_page1.jpg";
import dropoutImage from "../../images/about_page_dropout.png";
import failImage from "../../images/about_page_fail.png";
import stressImage from "../../images/about_page_stress.png";

import Profiles from "./Profile/Profiles";

//Tutor Details
import { TutorDetails } from "../../constants/TutorDetails";


const HalfBox = styled(Box)({
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})


const About = ({setNavColour}) => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("profile"));

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if(currentSlide === 0){
            setNavColour("background");
        }
        else{
            setNavColour("primary");
        }
    }, [currentSlide])

    const [searchParameters, setSearchParameters] = useState("Tutor");

    const handleChange = (event) => {
        setSearchParameters(event.target.value);
    };

    return (
        <FullPage beforeChange={({ to }) => setCurrentSlide(to)} style={{width: "100%", height: "100%"}}>
            <Helmet>
                <title>About Us | GradPath</title>
            </Helmet>
            <Slide style={{display: "flex", width: "100%", height: "100%"}}>
                <Box sx={{ display: "flex", width: "100%", height: "100%", bgcolor: "background.main"}}>
                    <Box sx={{width: "100%", height: "100%", display: {xs: "none", md: "flex"}}}>
                        <HalfBox>
                            <Box sx={{display: "flex", flexDirection: "column", width: "calc(95% - 40px)", height: "100%", justifyContent: "center", marginLeft: "40px"}}>
                                <Typography sx={{color: "black", fontSize: "40px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "10px"}}>
                                    Simplifying the IB journey for all!
                                </Typography>
                                <Typography sx={{fontSize: "16px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", width: "90%", marginBottom: "20px"}}>
                                    GradPath is a student-driven tutoring organization, founded by individuals who have successfully navigated the demanding International Baccalaureate (IB) program. We are committed to helping students achieve their academic aspirations, whether they have ambitious goals for the coming year or are struggling with academic challenges. Our mission extends beyond individual success; we aim to elevate the accessibility and quality of education within our community. By providing personalized support, we strive to foster academic growth and empower students to realize their full potential.
                                </Typography>
                            </Box>
                        </HalfBox>
                        <HalfBox>
                            <Box sx={{display: "flex", width: "calc(90% - 20px)", height: "100%", marginLeft: "20px", marginRight: "20px", alignItems: "center"}}>
                                <img src={graduationImage} alt="logo" style={{objectFit: "cover", minWidth: "100%", borderRadius: "20px"}}/>
                            </Box>
                        </HalfBox>
                    </Box>
                    <Box sx={{width: "100%", height: "88%", marginTop: "12vh", display: {xs: "flex", md: "none"}}}>
                        <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 10px)", height: "100%", alignItems: "center", justifyContent: "center", margin: "auto"}}>
                            <Typography sx={{color: "black", fontSize: "18px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "20px"}}>
                                Simplifying the IB journey for all!
                            </Typography>
                            <Box sx={{display: "flex", width: "calc(100% - 20px)", marginLeft: "20px", marginRight: "20px", marginBottom: "20px", alignItems: "center"}}>
                                <img src={graduationImage} alt="logo" style={{objectFit: "cover", minWidth: "100%", borderRadius: "20px"}}/>
                            </Box>
                            <Typography sx={{fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", width: "90%", marginBottom: "20px"}}>
                                GradPath is a student-driven tutoring organization, founded by individuals who have successfully navigated the demanding International Baccalaureate (IB) program. We are committed to helping students achieve their academic aspirations, whether they have ambitious goals for the coming year or are struggling with academic challenges. Our mission extends beyond individual success; we aim to elevate the accessibility and quality of education within our community. By providing personalized support, we strive to foster academic growth and empower students to realize their full potential.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Slide>
            <Slide style={{display: "flex", width: "100%", height: "100%"}}>
                <Box sx={{ display: "flex", width: "100%", height: "100%", bgcolor: "background.main"}}>
                    <Box sx={{width: "100%", height: "86%", marginTop: "14vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Box sx={{display: "flex", width: "calc(96% + 10px)", height: "60%", flexDirection: {xs: "column", md: "row"}, alignItems: "center", justifyContent: "center"}}>
                            <Box sx={{display: "flex", width: {xs: "90%", md: "25%"}, height: "100%", margin: "auto", flexDirection: {xs: "row", md: "column"}, alignItems: "center"}}>
                                <Box sx={{display: "flex", aspectRatio: "1", width: "80%", margin: "auto", borderRadius: "50%"}}>
                                    <img src={dropoutImage} style={{width: "100%", height: "100%", aspectRatio: 1, borderRadius: "50%", objectFit: "contain"}} alt="Dropout"/>
                                </Box>
                                <Box sx={{display: "flex", width: "100%", flexGrow: 1, alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                                    <Typography sx={{fontSize: {xs: "10px", md: "16px"}, fontFamily: "Open Sans, sans-serif"}}>7 out of 15 students drop out of IB within the first year.</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display: "flex", width: {xs: "90%", md: "25%"}, height: "100%", margin: "auto", flexDirection: {xs: "row", md: "column"}, alignItems: "center"}}>
                                <Box sx={{display: "flex", aspectRatio: "1", width: "80%", margin: "auto", borderRadius: "50%"}}>
                                    <img src={failImage} style={{width: "100%", height: "100%", aspectRatio: 1, borderRadius: "50%", objectFit: "contain"}} alt="Fail"/>
                                </Box>
                                <Box sx={{display: "flex", width: "100%", flexGrow: 1, alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                                    <Typography sx={{fontSize: {xs: "10px", md: "16px"}, fontFamily: "Open Sans, sans-serif"}}>Despite completing IB's rigorous curriculum, 23% of students failed their final IB exams.</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display: "flex", width: {xs: "90%", md: "25%"}, height: "100%", margin: "auto", flexDirection: {xs: "row", md: "column"}, alignItems: "center"}}>
                                <Box sx={{display: "flex", aspectRatio: "1", width: "80%", margin: "auto", borderRadius: "50%", alignItems: "center", justifyContent: "center"}}>
                                    <img src={stressImage} style={{width: "100%", height: "100%", aspectRatio: 1, borderRadius: "50%", objectFit: "cover"}} alt="Stress"/>
                                </Box>
                                <Box sx={{display: "flex", width: "100%", flexGrow: 1, alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                                    <Typography sx={{fontSize: {xs: "10px", md: "16px"}, fontFamily: "Open Sans, sans-serif"}}>In a recent survey, over 50% of IB students reported feeling stressed daily.</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", width: "100%", height: "40%", marginTop: "20px", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                            <Box sx={{display: "flex", width: "96%", height: "calc(100% - 60px)", bgcolor: "primary.main", flexDirection: "column", borderRadius: "4px", justifyContent: "center", alignItems: "center"}}>
                                <Typography sx={{color: "background.main", fontSize: {xs: "14px", md: "20px"}, fontFamily: "Open Sans, sans-serif", fontWeight: "500", textAlign: 'center'}}>
                                    IB is hard but valuable! Don't pass up such a great opportunity! GradPath is here to help!
                                </Typography>
                                <Button onClick={() => {navigate("/auth")}} sx={{color: "black", backgroundColor: "secondary.main", transition: "0.3s", padding: "10px 15px", marginTop: "20px", ":hover": {backgroundColor: "secondary.main", filter: "brightness(75%)"}}}>
                                    Sign Up Now!
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Slide>
            <Slide style={{display: "flex", width: "100%", height: "100%"}}>
                <Box sx={{ display: "flex", width: "100%", height: "100%", bgcolor: "background.main"}}>
                    <Box sx={{ display: "flex", width: "100%", height: "87%", marginTop: "15vh", flexDirection: "column", alignItems: "center"}}>
                        <Box sx={{display: "flex", width: "100%", flexDirection: "row"}}>
                            <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: {xs: "18px", md: "36px"}, fontWeight: "700", flexGrow: 1, marginLeft: "calc(8% + 10px)"}}>Meet our Team!</Typography>
                            <Box sx={{display: "flex", width: "25%", flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
                                <select
                                    value={searchParameters}
                                    onChange={handleChange}
                                    style={{marginRight: "calc(8% + 10px)", fontFamily: "Open Sans, sans-serif", borderRadius: "4px", fontSize: "14px", padding: "4px 8px"}}
                                >
                                    <option value="Tutor" style={{padding: "4px 8px"}}>All Tutors</option>
                                    <option value="Biology" style={{padding: "4px 8px"}}>Biology</option>
                                    <option value="Chemistry" style={{padding: "4px 8px"}}>Chemistry</option>
                                    <option value="English" style={{padding: "4px 8px"}}>English</option>
                                    <option value="HL Mathematics" style={{padding: "4px 8px"}}>HL Mathematics</option>
                                    <option value="Management" style={{padding: "4px 8px"}}>Management</option>
                                    <option value="Mathematics" style={{padding: "4px 8px"}}>Mathematics</option>
                                    <option value="Physics" style={{padding: "4px 8px"}}>Physics</option>
                                </select>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", flexGrow: 1, overflowX: "scroll"}}>
                            <Profiles searchParameters={searchParameters}/>
                        </Box>
                    </Box>
                </Box>
            </Slide>
        </FullPage>
    );
};

export default About;
