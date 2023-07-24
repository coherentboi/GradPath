import React, {useEffect, useState} from "react";

import {Box, Button, styled, Typography} from "@mui/material";

import GradpathLogo from "../../images/gradpathlogo.svg";
import AuthImage from "../../images/auth_tutoring.png";
import {useDispatch} from "react-redux";
import {login} from "../../actions/auth";
import {useNavigate} from "react-router-dom";

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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({username: "", password: "", confirmPassword: ""});
    const [error, setError] = useState("");
    const [signup, setSignup] = useState(false);

    const handleInput = (e) => {
        e.preventDefault();
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputs.username === ""){
            setError("Please input a username.");
            return;
        }
        if(inputs.password === ""){
            setError("Please input a password.");
            return;
        }
        dispatch(login(inputs)).then((r) => {
            console.log(r);
            if(r === "success"){
                window.location.reload();
            }
            else{
                if(r !== undefined){
                    setError(r[0]);
                }
                else{
                    setError("An unknown error occurred. Please try again later.")
                }
            }
        });
    }

    useEffect(() => {
        setNavColour("primary");
        if(JSON.parse(localStorage.getItem("profile"))){
            navigate("/");
        }
    }, [])

    const toggleSignUp = (e) => {
        e.preventDefault();
        setSignup(!signup);
    }

    const forgotPassword = (e) => {
        console.log("Forgot Password");
    }

    return(
        <Box sx={{display: "flex", flexDirection: "row", width: "100wh", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "background.main"}}>
            <Box sx={{display: {xs:"none", md: "flex"}, width: "50%", height: "90vh", marginTop: "10vh", justifyContent: "center", alignItems: "center"}}>
                <img style={{width: "calc(100% - 60px)", height: "calc(100% - 160px)", objectFit: "cover", borderRadius: "10px"}} alt="tutoring" src={AuthImage}/>
            </Box>
            {
                !signup && (
                    <Box sx={{display: {xs: "none", md: "flex"}, alignItems: "center", justifyContent: "center", width: "50%", height: "90vh", marginTop: "10vh"}}>
                        <Box sx={{width: "calc(100% - 20px)", height: "calc(100% - 80px)", margin: "40px 10px", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto"}}>
                            <Box sx={{display: "flex", flexDirection: "row", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(25% - 30px)", alignItems: "center"}}>
                                <Box sx={{display: "flex", flexDirection: "column", height: "100%", marginRight: "20px", flexGrow: 1}}>
                                    <Typography sx={{color: "black", fontSize: "40px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700"}}>
                                        Login
                                    </Typography>
                                    <Typography sx={{color: "grey", fontSize: {md: "11px", lg: "14px"}, fontFamily: 'Open Sans, sans-serif', fontWeight: "500", marginTop: "5px"}}>
                                        Access IB tutors and subject video lessons in mere seconds. Improve your grades and boost your learning at Gradpath!
                                    </Typography>
                                </Box>
                                <Box sx={{height: "100%"}}>
                                    <img src={GradpathLogo} alt="logo" style={{height: "110%"}}/>
                                </Box>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(65% - 30px)"}}>
                                <form style={{display: "flex", flexDirection: "column", width:"100%", height: "100%"}} onSubmit={handleSubmit}>
                                    <MdLabel htmlFor="username">Username</MdLabel>
                                    <MdInputField>
                                        <MdStyledInput
                                            type="text"
                                            name="username"
                                            value={inputs.username}
                                            onChange={handleInput}
                                        />
                                    </MdInputField>
                                    <MdLabel htmlFor="password">Password</MdLabel>
                                    <MdInputField>
                                        <MdStyledInput
                                            type="password"
                                            name="password"
                                            value={inputs.password}
                                            onChange={handleInput}
                                        />
                                    </MdInputField>
                                    <LinkLikeButton disableRipple sx={{alignSelf: "flex-end"}}>Forgot Password?</LinkLikeButton>
                                    {
                                        error !== "" && (
                                            <Typography sx={{color: "red", fontSize: "14px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", marginTop: "5px", alignSelf: "center"}}>
                                                {error}
                                            </Typography>
                                        )
                                    }
                                    <Button type="submit" color="primary" sx={{backgroundColor: "primary.main", color: "white", width: "100%", height: "50px", marginTop: "20px", ":hover": {filter: "brightness(85%)", backgroundColor: "primary.main", transition: "0.3s"}}}>
                                        Login
                                    </Button>
                                </form>
                            </Box>
                            <Box sx={{display: "flex", width: "calc(100% - 60px)", margin: "10px 30px 30px 30px", height: "calc(10% - 10px)", justifyContent: "center"}}>
                                <LinkLikeButton disableRipple onClick={toggleSignUp}>Don't have an account? Sign up here!</LinkLikeButton>
                            </Box>
                        </Box>
                    </Box>
                )
            }
            {
                signup && (
                    <Box sx={{display: {xs: "none", md: "flex"}, alignItems: "center", justifyContent: "center", width: "50%", height: "90vh", marginTop: "10vh"}}>
                        <Box sx={{width: "calc(100% - 20px)", height: "calc(100% - 80px)", margin: "40px 10px", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto"}}>
                            <Box sx={{display: "flex", flexDirection: "row", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(25% - 30px)", alignItems: "center"}}>
                                <Box sx={{display: "flex", flexDirection: "column", height: "100%", marginRight: "20px", flexGrow: 1}}>
                                    <Typography sx={{color: "black", fontSize: "40px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700"}}>
                                        Sign Up
                                    </Typography>
                                    <Typography sx={{color: "grey", fontSize: {md: "11px", lg: "14px"}, fontFamily: 'Open Sans, sans-serif', fontWeight: "500", marginTop: "5px"}}>
                                        Access IB tutors and subject video lessons in mere seconds. Improve your grades and boost your learning at Gradpath!
                                    </Typography>
                                </Box>
                                <Box sx={{height: "100%"}}>
                                    <img src={GradpathLogo} alt="logo" style={{height: "110%"}}/>
                                </Box>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(65% - 30px)"}}>
                                <form style={{display: "flex", flexDirection: "column", width:"100%", height: "100%"}} onSubmit={handleSubmit}>
                                    <MdLabel htmlFor="username">Username</MdLabel>
                                    <MdInputField>
                                        <MdStyledInput
                                            type="text"
                                            name="username"
                                            value={inputs.username}
                                            onChange={handleInput}
                                        />
                                    </MdInputField>
                                    <Box sx={{display: "flex", flexDirection: "row", width: "100%"}}>
                                        <Box sx={{display: "flex", flexDirection: "column", width: 'calc(50% - 10px)', marginRight: "10px"}}>
                                            <MdLabel htmlFor="password">Password</MdLabel>
                                            <MdInputField>
                                                <MdStyledInput
                                                    type="password"
                                                    name="password"
                                                    value={inputs.password}
                                                    onChange={handleInput}
                                                />
                                            </MdInputField>
                                        </Box>
                                        <Box sx={{display: "flex", flexDirection: "column", width: 'calc(50% - 10px)', marginLeft: "10px"}}>
                                            <MdLabel htmlFor="confirmPassword">Confirm Password</MdLabel>
                                            <MdInputField>
                                                <MdStyledInput
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={inputs.confirmPassword}
                                                    onChange={handleInput}
                                                />
                                            </MdInputField>
                                        </Box>
                                    </Box>
                                    {
                                        error !== "" && (
                                            <Typography sx={{color: "red", fontSize: "14px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", marginTop: "5px", alignSelf: "center"}}>
                                                {error}
                                            </Typography>
                                        )
                                    }
                                    <Button type="submit" color="primary" sx={{backgroundColor: "primary.main", color: "white", width: "100%", height: "50px", marginTop: "20px", ":hover": {filter: "brightness(85%)", backgroundColor: "primary.main", transition: "0.3s"}}}>
                                        Sign Up
                                    </Button>
                                </form>
                            </Box>
                            <Box sx={{display: "flex", width: "calc(100% - 60px)", margin: "10px 30px 30px 30px", height: "calc(10% - 10px)", justifyContent: "center"}}>
                                <LinkLikeButton disableRipple onClick={toggleSignUp}>Have an account? Login here!</LinkLikeButton>
                            </Box>
                        </Box>
                    </Box>
                )
            }

        </Box>
    )
}

export default Auth;