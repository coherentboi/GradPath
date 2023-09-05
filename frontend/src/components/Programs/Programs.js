import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import { FullPage, Slide } from 'react-full-page';
import {Box, styled, Typography} from "@mui/material";

import programsImage from "../../images/programs.jpg";
import Courses from "./Courses/Courses";

const HalfBox = styled(Box)({
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const Programs = ({setNavColour}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if(currentSlide === 0){
            setNavColour("background");
        }
        else{
            setNavColour("primary");
        }
    }, [currentSlide])

    return(
        <FullPage beforeChange={({ to }) => setCurrentSlide(to)} style={{width: "100%", height: "100%"}}>
            <Helmet>
                <title>Programs | GradPath</title>
            </Helmet>
            <Slide style={{display: "flex", width: "100%", height: "100%"}}>
                <Box sx={{ display: "flex", width: "100%", height: "100%", bgcolor: "background.main"}}>
                    <Box sx={{width: "100%", height: "100%", display: {xs: "none", md: "flex"}}}>
                        <HalfBox>
                            <Box sx={{display: "flex", flexDirection: "column", width: "calc(95% - 40px)", height: "100%", justifyContent: "center", marginLeft: "40px"}}>
                                <Typography sx={{color: "black", fontSize: "40px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "10px"}}>
                                    Our Programs
                                </Typography>
                                <Typography sx={{fontSize: "16px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", width: "90%", marginBottom: "20px"}}>
                                    At GradPath, we are dedicated to providing a robust and comprehensive educational experience for our students. Our meticulously designed curriculum spans a vast array of subjects, ensuring that every academic interest is catered to with precision and rigor. Our offerings include advanced courses in Mathematics, a deep exploration into the English language, an intensive study of the core sciences, and many others. As you delve deeper into the subsequent sections, you'll gain a thorough understanding of each program's structure and objectives, reaffirming GradPath's commitment to fostering academic excellence.
                                </Typography>
                            </Box>
                        </HalfBox>
                        <HalfBox>
                            <Box sx={{display: "flex", width: "calc(90% - 20px)", height: "100%", marginLeft: "20px", marginRight: "20px", alignItems: "center"}}>
                                <img src={programsImage} alt="logo" style={{objectFit: "cover", minWidth: "100%", borderRadius: "20px"}}/>
                            </Box>
                        </HalfBox>
                    </Box>
                    <Box sx={{width: "100%", height: "88%", marginTop: "12vh", display: {xs: "flex", md: "none"}}}>
                        <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 10px)", height: "100%", alignItems: "center", justifyContent: "center", margin: "auto"}}>
                            <Typography sx={{color: "black", fontSize: "18px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700", marginBottom: "20px"}}>
                                Our Programs
                            </Typography>
                            <Box sx={{display: "flex", width: "calc(100% - 20px)", marginLeft: "20px", marginRight: "20px", marginBottom: "20px", alignItems: "center"}}>
                                <img src={programsImage} alt="logo" style={{objectFit: "cover", minWidth: "100%", borderRadius: "20px"}}/>
                            </Box>
                            <Typography sx={{fontSize: "12px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: "grey", width: "90%", marginBottom: "20px"}}>
                                At GradPath, we are dedicated to providing a robust and comprehensive educational experience for our students. Our meticulously designed curriculum spans a vast array of subjects, ensuring that every academic interest is catered to with precision and rigor. Our offerings include advanced courses in Mathematics, a deep exploration into the English language, an intensive study of the core sciences, and many others. As you delve deeper into the subsequent sections, you'll gain a thorough understanding of each program's structure and objectives, reaffirming GradPath's commitment to fostering academic excellence.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Slide>
            <Slide style={{display: "flex", width: "100%", height: "100%"}}>
                <Box sx={{ display: "flex", width: "100%", height: "100%", bgcolor: "background.main"}}>
                    <Box sx={{ display: "flex", width: "100%", height: "87%", marginTop: "15vh", flexDirection: "column", alignItems: "center"}}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", flexGrow: 1, overflowX: "scroll"}}>
                            <Courses/>
                        </Box>
                    </Box>
                </Box>
            </Slide>
        </FullPage>
    );
}

export default Programs;