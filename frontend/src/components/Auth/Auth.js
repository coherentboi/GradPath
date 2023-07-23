import React, {useEffect} from "react";

import {Box, Button, styled, Typography} from "@mui/material";

import GradpathLogo from "../../images/gradpathlogo.svg";
import AuthImage from "../../images/auth_tutoring.png";

const MdInputField = styled('div')({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
})

const MdStyledInput = styled('input')({
    fontSize: "15px",
    fontFamily: "Open Sans, sans-serif",
    color: "black",
    border: "1px solid grey",
    padding: "15px",
    backgroundColor: "#FFFFFA",
    borderRadius: "5px",
    '&::placeholder': {
        color: "#9698f6",
        opacity: 1
    }
})

const MdLabel = styled('label')({
    fontFamily: "Open Sans",
    fontSize: "15px",
    marginBottom: "10px",
    color: "black",
    fontWeight: "500"
})

const LinkLikeButton = styled(Button)({
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    color: "blue",
    textTransform: "none",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "14px",
    '&:hover': {
        textDecoration: "underline",
        backgroundColor: "transparent"
    },
});

const Auth = ({setNavColour}) => {

    useEffect(() => {
        setNavColour("primary");
    }, [])

    const toggleSignUp = (e) => {
        e.preventDefault();
        console.log("Works")
    }

    const forgotPassword = (e) => {
        console.log("Forgot Password");
    }

    return(
        <Box sx={{display: "flex", flexDirection: "row", width: "100wh", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "background.main"}}>
            <Box sx={{display: {xs:"none", md: "flex"}, width: "50%", height: "90vh", marginTop: "10vh", justifyContent: "center", alignItems: "center"}}>
                <img style={{width: "calc(100% - 40px)", height: "calc(100% - 80px)", objectFit: "cover", borderRadius: "10px"}} alt="tutoring" src={AuthImage}/>
            </Box>
            <Box sx={{display: {xs: "none", md: "flex"}, alignItems: "center", justifyContent: "center", width: "50%", height: "90vh", marginTop: "10vh"}}>
                <Box sx={{width: "calc(100% - 20px)", height: "calc(100% - 80px)", margin: "40px 10px", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto"}}>
                    <Box sx={{display: "flex", flexDirection: "row", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(25% - 30px)", alignItems: "center"}}>
                        <Box sx={{display: "flex", flexDirection: "column", height: "100%", marginRight: "20px", flexGrow: 1}}>
                            <Typography sx={{color: "black", fontSize: "40px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700"}}>
                                Login
                            </Typography>
                            <Typography sx={{color: "grey", fontSize: "14px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", marginTop: "5px"}}>
                                Access IB tutors and subject video lessons in mere seconds.
                            </Typography>
                        </Box>
                        <Box sx={{height: "100%"}}>
                            <img src={GradpathLogo} alt="logo" style={{height: "110%"}}/>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(65% - 30px)"}}>
                        <MdLabel htmlFor="username">Email</MdLabel>
                        <MdInputField>
                            <MdStyledInput
                                type="text"
                                name="email"
                            />
                        </MdInputField>
                        <MdLabel htmlFor="password">Password</MdLabel>
                        <MdInputField>
                            <MdStyledInput
                                type="text"
                                name="password"
                            />
                        </MdInputField>
                        <LinkLikeButton disableRipple sx={{alignSelf: "flex-end"}}>Forgot Password?</LinkLikeButton>
                        <Button color="primary" sx={{backgroundColor: "primary.main", color: "white", width: "100%", height: "50px", marginTop: "20px", ":hover": {filter: "brightness(85%)", backgroundColor: "primary.main", transition: "0.3s"}}}>
                            Login
                        </Button>
                    </Box>
                    <Box sx={{display: "flex", width: "calc(100% - 60px)", margin: "10px 30px 30px 30px", height: "calc(10% - 10px)", justifyContent: "center"}}>
                        <LinkLikeButton disableRipple>Don't have an account? Sign up here!</LinkLikeButton>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Auth;