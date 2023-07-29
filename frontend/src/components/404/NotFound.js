import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import {Box, Button, Typography} from "@mui/material";

import GradpathLogo from "../../images/gradpathlogo.svg";

const NotFound = ({setNavColour}) => {

    const navigate = useNavigate();

    useEffect(() => {
        setNavColour("background");
    }, []);

    return(
        <div>
            <Box sx={{width: "100vw", height: "100vh", display: {xs: "none", md:"flex"}, flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <img style={{width: "40%"}} src={GradpathLogo} alt="Logo"/>
                <Typography sx={{fontSize: "60px", fontFamily: "Open Sans, sans-serif", fontWeight: "700"}}>
                    404 Not Found
                </Typography>
                <Typography sx={{color: "grey", fontSize: "16px", fontFamily: "Open Sans, sans-serif", fontWeight: "400"}}>
                    We can't find the page you're looking for. If this problem persists, please contact us at email@email.ca
                </Typography>
                <Button onClick={() => {navigate("/")}} sx={{marginTop: "20px", padding: "10px 20px", backgroundColor: "primary.main", color: "background.main", ":hover": {color: "background.main", backgroundColor: "primary.main", filter: "brightness(75%)"}}}>Back to Home</Button>
            </Box>
            <Box sx={{width: "100vw", height: "100vh", display: {xs: "flex", md:"none"}, flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <img style={{width: "40%"}} src={GradpathLogo} alt="Logo"/>
                <Typography sx={{fontSize: "40px", fontFamily: "Open Sans, sans-serif", fontWeight: "700"}}>
                    404 Not Found
                </Typography>
                <Typography sx={{color: "grey", fontSize: "12px", fontFamily: "Open Sans, sans-serif", fontWeight: "400", width: "80%", textAlign: "center"}}>
                    We can't find the page you're looking for. If this problem persists, please contact us at email@email.ca
                </Typography>
                <Button onClick={() => {navigate("/")}} sx={{marginTop: "20px", padding: "10px 20px", backgroundColor: "primary.main", color: "background.main", ":hover": {color: "background.main", backgroundColor: "primary.main", filter: "brightness(75%)"}}}>Back to Home</Button>
            </Box>
        </div>
    )
}

export default NotFound;
