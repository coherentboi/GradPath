//React Imports
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

//Component Imports
import Registration from "./Registration/Registration";

//MUI Imports
import {Box, Button, styled, Typography} from "@mui/material";

//Full Page Scrolling Imports
import { FullPage, Slide } from 'react-full-page';

//Image Import
import tutoringImage from "../../images/home_page1_tutoring.png";
import mathematicsImage from "../../images/home_page2_mathematics.png";
import englishImage from "../../images/home_page3_english.png";
import mobileSubjectsImage from "../../images/home_page2_mobile_subjects.png";

const HalfBox = styled(Box)({
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})


const Home = ({setNavColour}) => {

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

    return (
        <FullPage beforeChange={({ to }) => setCurrentSlide(to)} style={{width: "100%", height: "100%"}}>
            <Slide style={{display: "flex", width: "100%", height: "100%"}}>
                <Box sx={{ display: "flex", width: "100%", height: "100%", bgcolor: "background.main"}}>
                    <Box sx={{width: "100%", height: "100%", display: {xs: "none", md: "flex"}}}>
                        <HalfBox>
                            <Box sx={{display: "flex", flexDirection: "column", width: "calc(95% - 40px)", height: "100%", justifyContent: "center", marginLeft: "40px"}}>
                                <Typography sx={{color: "black", fontSize: "40px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "10px"}}>
                                    Get IB help from:
                                </Typography>
                                <Typography sx={{fontSize: "60px",fontFamily: 'Open Sans, sans-serif', fontWeight: "700", transform: "skewX(-20deg)", marginBottom: "20px"}}>
                                    <Box component="mark" sx={{color: "background.main", backgroundColor: "primary.main", padding: "0px 20px", borderRadius: "5px"}}>REAL IB STUDENTS!</Box>
                                </Typography>
                                <Typography sx={{fontSize: "18px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", width: "90%", marginBottom: "20px"}}>
                                    Get access to tutoring from numerous Grade 11 and 12 IB students from your local IB school! All our tutors are hand-chosen and high achievers, with a 95+ in all subjects they tutor.
                                </Typography>
                                <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
                                    {
                                        !user && (
                                            <Button color="primary" onClick={() => {navigate("/auth")}} sx={{backgroundColor: "primary.main", transition: "0.3s", marginRight: "30px", ":hover": { backgroundColor: "primary.main", filter: "brightness(75%)"}}}>
                                                <Typography sx={{fontSize: "18px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "background.main", padding: "15px 20px", transition: "0.3s"}}>Register Now!</Typography>
                                            </Button>
                                        )
                                    }
                                    {
                                        user && (
                                            <Button color="primary" onClick={() => {navigate("/dashboard")}} sx={{backgroundColor: "primary.main", transition: "0.3s", marginRight: "30px", ":hover": { backgroundColor: "primary.main", filter: "brightness(75%)"}}}>
                                                <Typography sx={{fontSize: "18px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "background.main", padding: "15px 20px", transition: "0.3s"}}>Dashboard</Typography>
                                            </Button>
                                        )
                                    }
                                    <Button color="secondary" onClick={() => {navigate("/about")}} sx={{backgroundColor: "secondary.main", transition: "0.3s", ":hover":{backgroundColor: "secondary.main", filter: "brightness(75%)"}}}>
                                        <Typography sx={{fontSize: "18px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "black", padding: "15px 20px", transition: "0.3s"}}>About Us!</Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </HalfBox>
                        <HalfBox>
                            <Box sx={{display: "flex", width: "calc(90% - 20px)", height: "100%", marginLeft: "20px", marginRight: "20px", alignItems: "center"}}>
                                <img src={tutoringImage} alt="" style={{objectFit: "cover", width: "100%", height: "65%", borderRadius: "20px"}}/>
                            </Box>
                        </HalfBox>
                    </Box>


                    <Box sx={{width: "100%", height: "100%", display: {xs: "flex", md: "none"}, flexDirection: "column", alignItems: "center"}}>
                        <Box sx={{display: "flex", flexDirection: "column", width: "calc(95% - 40px)", height: "70%", marginTop: "30%", justifyContent: "center", alignItems: "center", marginLeft: "20px", marginRight: "20px"}}>
                            <Typography sx={{color: "black", fontSize: "24px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "10px"}}>
                                Get IB help from:
                            </Typography>
                            <Typography sx={{fontSize: "30px",fontFamily: 'Open Sans, sans-serif', fontWeight: "700", transform: "skewX(-20deg)", marginBottom: "20px"}}>
                                <Box component="mark" sx={{color: "background.main", backgroundColor: "primary.main", padding: "0px 20px", borderRadius: "5px"}}>REAL IB STUDENTS!</Box>
                            </Typography>
                            <img src={tutoringImage} alt="" style={{objectFit: "cover", width: "100%", height: "45%", borderRadius: "20px"}}/>
                            <Typography sx={{fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", width: "100%", marginBottom: "20px", marginTop: "20px", textAlign: "justify"}}>
                                Get access to tutoring from numerous Grade 11 and 12 IB students from your local IB school! All our tutors are hand-chosen and high achievers, with a 95%+ in all subjects they tutor.
                            </Typography>
                            <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <Button color="primary" onClick={() => {navigate("/auth")}} sx={{width: "calc(50% - 15px)", backgroundColor: "primary.main", transition: "0.3s", marginRight: "15px", "hover":{backgroundColor: "primary.main", filter: "brightness(75%)"}}}>
                                    <Typography sx={{fontSize: "14px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "background.main", padding: "10px 10px", transition: "0.3s", ":hover":{color: "primary.main"}}}>Register Now!</Typography>
                                </Button>
                                <Button color="primary" sx={{width: "calc(50% - 15px)", backgroundColor: "secondary.main", transition: "0.3s", marginLeft: "15px", "hover":{backgroundColor: "primary.main", filter: "brightness(75%)"}}}>
                                    <Typography sx={{fontSize: "14px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "black", padding: "15px 20px", transition: "0.3s"}}>About Us!</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Slide>
            <Slide style={{display: "flex", width: "100%", height: "100%"}}>
                <Box sx={{ display: "flex", width: "100%", height: "100%", bgcolor: "background.main"}}>
                    <Box sx={{width: "100%", height: "90%", marginTop: "10vh", display: {xs: "none", md: "flex"}}}>
                        <HalfBox>
                            <Box sx={{display: "flex", flexDirection: "row", width: "calc(100% - 40px)", height: "100%", marginLeft: '20px', marginRight: '20px'}}>
                                <HalfBox>
                                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "background.main", width: "100%", height: "90%", marginLeft: "20px", marginRight: "20px", borderRadius: "50px 0 50px 0", alignItems: "center"}}>
                                        <img src={mathematicsImage} alt="" style={{display: "flex", width: "100%", height: "40%", borderRadius: "47px 0 0 0", objectFit: "cover"}}/>
                                        <Box sx={{display: "flex", width: "100%", height: "10%", justifyContent:"center", alignItems: "center", borderLeft: "1px solid", borderRight: "1px solid", borderColor: "background.light"}}>
                                            <Typography sx={{fontSize: "28px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", color: "black"}}>
                                                Mathematics
                                            </Typography>
                                        </Box>
                                        <Box sx={{display: "flex", flexDirection: "column", width: "100%", height: "35%", alignItems: "center", borderLeft: "1px solid", borderRight: "1px solid", borderColor: "background.light"}}>
                                            <Typography sx={{width: "calc(100% - 30px)", fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", marginLeft: "15px", marginRight: "15px"}}>
                                                From Algebra to Calculus, our tutors are very knowledgeable in every area of the curriculum, so whether you choose SL or HL, rest assured you will be in good hands.
                                            </Typography>
                                            <Typography sx={{marginTop: "20px", width: "calc(100% - 30px)", fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", marginLeft: "15px", marginRight: "15px"}}>
                                                If you're trying to get into IB, our tutors will be happy to show you the essentials and help prepare you for the Mathematics task.
                                            </Typography>
                                            <Typography sx={{marginTop: "20px", width: "calc(100% - 30px)", fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", marginLeft: "15px", marginRight: "15px"}}>
                                                Click below to learn more!
                                            </Typography>
                                        </Box>
                                        <Button sx={{width: "100%", height: "15%", borderRadius: "0 0 46px 0", color: "white", backgroundColor: "primary.main", ":hover": {backgroundColor: "primary.main", filter: "brightness(75%)"}, transition: "0.3s"}}>
                                            Learn More
                                        </Button>
                                    </Box>
                                </HalfBox>
                                <HalfBox>
                                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "background.main", width: "calc(100% - 40px)", height: "90%", marginLeft: "20px", marginRight: "20px", borderRadius: "50px 0 50px 0", alignItems: "center"}}>
                                        <img src={englishImage} alt="" style={{display: "flex", width: "100%", height: "40%", borderRadius: "47px 0 0 0", objectFit: "cover"}}/>
                                        <Box sx={{display: "flex", width: "100%", height: "10%", justifyContent:"center", alignItems: "center", borderLeft: "1px solid", borderRight: "1px solid", borderColor: "background.light"}}>
                                            <Typography sx={{fontSize: "28px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", color: "black"}}>
                                                English
                                            </Typography>
                                        </Box>
                                        <Box sx={{display: "flex", flexDirection: "column", width: "100%", height: "35%", alignItems: "center", borderLeft: "1px solid", borderRight: "1px solid", borderColor: "background.light"}}>
                                            <Typography sx={{width: "calc(100% - 30px)", fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", marginLeft: "15px", marginRight: "15px"}}>
                                                Our tutors will be happy to walk you through the English curriculum and requirements. Our tutors will be happy to help you prepare for the IO, Paper 1, Paper 2 and HL Essay.
                                            </Typography>
                                            <Typography sx={{marginTop: "20px", width: "calc(100% - 30px)", fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", marginLeft: "15px", marginRight: "15px"}}>
                                                If you're trying to get into IB, our tutors will be happy to correct your applications and English writing task.
                                            </Typography>
                                            <Typography sx={{marginTop: "20px", width: "calc(100% - 30px)", fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", marginLeft: "15px", marginRight: "15px"}}>
                                                Click below to learn more!
                                            </Typography>
                                        </Box>
                                        <Button sx={{width: "100%", height: "15%", borderRadius: "0 0 46px 0", color: "white", backgroundColor: "primary.main", ":hover": {backgroundColor: "primary.main", filter: "brightness(75%)"}, transition: "0.3s"}}>
                                            Learn More
                                        </Button>
                                    </Box>
                                </HalfBox>
                            </Box>
                        </HalfBox>
                        <HalfBox>
                            <Box sx={{display: "flex", flexDirection: "column", width: "90%", height: "100%", justifyContent: "center", marginLeft: "20px", marginRight: "20px"}}>
                                <Typography sx={{color: "black", fontSize: "40px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "10px"}}>
                                    For subjects such as:
                                </Typography>
                                <Typography sx={{fontSize: "60px",fontFamily: 'Open Sans, sans-serif', fontWeight: "700", transform: "skewX(-20deg)", marginBottom: "20px"}}>
                                    <Box component="mark" sx={{color: "background.main", backgroundColor: "primary.main", padding: "0px 20px", borderRadius: "5px"}}>AND MANY MORE!</Box>
                                </Typography>
                                <Typography sx={{fontSize: "18px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", width: "90%", marginBottom: "20px"}}>
                                    Including:
                                    <ul>
                                        <li>
                                            Biology
                                        </li>
                                        <li>
                                            Chemistry
                                        </li>
                                        <li>
                                            Physics
                                        </li>
                                        <li>
                                            French
                                        </li>
                                        <li>
                                            Geography
                                        </li>
                                        <li>
                                            History
                                        </li>
                                    </ul>
                                </Typography>
                                <Box sx={{width: "100%", display: "flex", flexDirection: "row"}}>
                                    <Button color="secondary" sx={{backgroundColor: "secondary.main", transition: "0.3s", marginRight: "30px", ":hover": {backgroundColor: "secondary.main", filter: "brightness(75%)"}}}>
                                        <Typography sx={{fontSize: "18px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "black", padding: "15px 20px", transition: "0.3s"}}>View Programs</Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </HalfBox>
                    </Box>

                    <Box sx={{width: "100%", height: "60%", marginTop: "40%", display: {xs: "flex", md: "none"}}}>
                        <Box sx={{display: "flex", flexDirection: "column", width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
                            <Typography sx={{color: "black", fontSize: "24px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "20px"}}>
                                For subjects such as:
                            </Typography>
                            <Box sx={{display: "flex", flexDirection: "row", width: "calc(100% - 40px)", marginLeft: "20px", marginRight: "20px",  marginBottom: "20px"}}>
                                <img style={{width: "50%", height: "100%", objectFit: "cover", borderRadius: "15%"}} src={mobileSubjectsImage} alt=""/>
                                <Typography sx={{fontSize: "14px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", width: "50%"}}>
                                    <ul>
                                        <li>
                                            Mathematics
                                        </li>
                                        <li>
                                            English
                                        </li>
                                        <li>
                                            French
                                        </li>
                                        <li>
                                            Biology
                                        </li>
                                        <li>
                                            Chemistry
                                        </li>
                                        <li>
                                            Physics
                                        </li>
                                        <li>
                                            Geography
                                        </li>
                                        <li>
                                            History
                                        </li>
                                    </ul>
                                </Typography>
                            </Box>
                            <Typography sx={{fontSize: "30px",fontFamily: 'Open Sans, sans-serif', fontWeight: "700", transform: "skewX(-20deg)", marginBottom: "20px"}}>
                                <Box component="mark" sx={{color: "background.main", backgroundColor: "primary.main", padding: "0px 20px", borderRadius: "5px"}}>AND MANY MORE!</Box>
                            </Typography>
                            <Typography sx={{fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", width: "80%", marginBottom: "20px", textAlign: "justify"}}>
                                All subject material is taken directly from real IB classes at your local IB school. Rest assured you will be in good hands with all the necessary resources available within seconds.
                            </Typography>
                            <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <Button color="secondary" sx={{width: "75%", backgroundColor: "secondary.main", transition: "0.3s", ":hover": {backgroundColor: "secondary.main", filter: "brightness(75%)"}}}>
                                    <Typography sx={{fontSize: "14px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "black", padding: "15px 20px", transition: "0.3s", }}>View Programs</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Slide>
            <Slide style={{display: "flex", width: "100%", height: "100%"}}>
                <Box sx={{display: "flex", width: "100%", height: "100%", bgcolor: "background.main", justifyContent: "center", alignItems: "center"}}>
                    <Box sx={{display: "flex", width: "100vw", height: "90%", marginTop: "10vh", alignItems: "center", justifyContent: "center"}}>
                        <Registration/>
                    </Box>
                </Box>
            </Slide>
        </FullPage>
    );
};

export default Home;
