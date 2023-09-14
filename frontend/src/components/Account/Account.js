import React, {useEffect, useState} from "react";

import {Box, Button, styled, Typography} from "@mui/material";

import GradpathLogo from "../../images/gradpathlogo.svg";
import AuthImage from "../../images/auth_tutoring.png";
import {useDispatch, useSelector} from "react-redux";
import {editprofile, getuser, login, register} from "../../actions/auth";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";

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
    backgroundColor: "#fdfdfe",
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

const XsInputField = styled('div')({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px"
})

const XsStyledInput = styled('input')({
    fontSize: "12px",
    fontFamily: "Open Sans, sans-serif",
    color: "black",
    border: "1px solid grey",
    padding: "12px",
    backgroundColor: "#fdfdfe",
    borderRadius: "5px",
    '&::placeholder': {
        color: "#9698f6",
        opacity: 1
    }
})

const XsLabel = styled('label')({
    fontFamily: "Open Sans",
    fontSize: "12px",
    marginBottom: "5px",
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

const Account = ({setNavColour}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getuser());
    }, []);

    const [inputs, setInputs] = useState({username: "", email: "", password: "", current_password: "", name: "", school: "", high_school_graduation_year: "", confirmPassword: ""});
    const [error, setError] = useState("");

    const userDetails = useSelector(state => state.user);

    console.log(userDetails);

    useEffect(() => {
        if (userDetails && userDetails.profile) {
            setInputs({
                username: userDetails.username || "",
                email: userDetails.email || "",
                password: "",
                current_password: "",
                name: userDetails.profile.name || "",
                school: userDetails.profile.school || "",
                high_school_graduation_year: userDetails.profile.high_school_graduation_year || "",
                confirmPassword: ""
            });
        }
    }, [userDetails]);


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
        if(inputs.current_password === ""){
            setError("Please input current password to make changes.");
            return;
        }
        if(inputs.password !== inputs.confirmPassword){
            setError("New passwords do not match.");
            return;
        }
        dispatch(editprofile(inputs)).then((r) => {
            console.log(r);
            if(r !== undefined){
                setError(r);
            }
            else{
                setError("An unknown error occurred. Please try again later.")
            }
        });
    }

    useEffect(() => {
        setNavColour("primary");
        if(!JSON.parse(localStorage.getItem("profile"))){
            navigate("/auth");
        }
    }, [])

    return(
        <Box sx={{display: "flex", flexDirection: "row", width: "100wh", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "background.main"}}>
            <Helmet>
                <title>Account | GradPath</title>
            </Helmet>
            <form onSubmit={handleSubmit} style={{display: "flex", width: "100%", height: "100%"}}>
                <Box sx={{display: {xs: "none", md: "flex"}, alignItems: "center", justifyContent: "center", width: "50%", height: "90vh", marginTop: "10vh"}}>
                    <Box sx={{width: "calc(100% - 20px)", height: "calc(100% - 80px)", margin: "40px 10px", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto"}}>
                        <Box sx={{display: "flex", flexDirection: "row", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(20% - 30px)", alignItems: "center"}}>
                            <Box sx={{display: "flex", flexDirection: "column", height: "100%", marginRight: "20px", flexGrow: 1}}>
                                <Typography sx={{color: "black", fontSize: "40px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700"}}>
                                    Account
                                </Typography>
                                <Typography sx={{color: "grey", fontSize: {md: "11px", lg: "14px"}, fontFamily: 'Open Sans, sans-serif', fontWeight: "500", marginTop: "5px"}}>
                                    Configure your account settings here!
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(80% - 30px)"}}>
                            <MdLabel htmlFor="username">Username</MdLabel>
                            <MdInputField>
                                <MdStyledInput
                                    type="text"
                                    name="username"
                                    value={inputs.username}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </MdInputField>
                            <MdLabel htmlFor="name">Name</MdLabel>
                            <MdInputField>
                                <MdStyledInput
                                    type="text"
                                    name="name"
                                    value={inputs.name}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </MdInputField>
                            <MdLabel htmlFor="school">School</MdLabel>
                            <MdInputField>
                                <MdStyledInput
                                    type="text"
                                    name="school"
                                    value={inputs.school}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </MdInputField>
                            <MdLabel htmlFor="high_school_graduation_year">Graduation Year</MdLabel>
                            <MdInputField>
                                <MdStyledInput
                                    type="text"
                                    name="high_school_graduation_year"
                                    value={inputs.high_school_graduation_year}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </MdInputField>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: {xs: "none", md: "flex"}, alignItems: "center", justifyContent: "center", width: "50%", height: "90vh", marginTop: "10vh"}}>
                    <Box sx={{width: "calc(100% - 20px)", height: "calc(100% - 80px)", margin: "40px 10px", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto"}}>
                        <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(20% - 30px)", alignItems: "flex-end", jusitfyContent: "center"}}>
                            <img src={GradpathLogo} alt="logo" style={{height: "120%"}}/>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 60px)", margin: "30px 30px 0px 30px", height: "calc(80% - 30px)"}}>
                            <MdLabel htmlFor="current_password">Current Password</MdLabel>
                            <MdInputField>
                                <MdStyledInput
                                    type="password"
                                    name="current_password"
                                    value={inputs.current_password}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </MdInputField>
                            <MdLabel htmlFor="password">New Password</MdLabel>
                            <MdInputField>
                                <MdStyledInput
                                    type="password"
                                    name="password"
                                    value={inputs.password}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </MdInputField>
                            <MdLabel htmlFor="confirmPassword">Confirm New Password</MdLabel>
                            <MdInputField>
                                <MdStyledInput
                                    type="password"
                                    name="confirmPassword"
                                    value={inputs.confirmPassword}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </MdInputField>
                            <Button type="submit" color="primary" sx={{backgroundColor: "primary.main", color: "white", width: "100%", height: "50px", marginTop: "30px", ":hover": {filter: "brightness(85%)", backgroundColor: "primary.main", transition: "0.3s"}}}>
                                Update Account
                            </Button>
                            {
                                error !== "" && (
                                    <Typography sx={{color: error === "Success!" ? "green" :"red", fontSize: "14px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", marginTop: "5px", alignSelf: "center"}}>
                                        {error}
                                    </Typography>
                                )
                            }
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: {xs: "flex", md: "none"}, alignItems: "center", justifyContent: "center", width: "100%", height: "90vh", marginTop: "10vh"}}>
                    <Box sx={{width: "calc(100% - 10px)", height: "calc(100% - 80px)", margin: "40px 5px", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto"}}>
                        <Box sx={{display: "flex", flexDirection: "row", width: "calc(100% - 30px)", margin: "15px 15px 0px 15px", height: "calc(20% - 15px)", alignItems: "center"}}>
                            <Box sx={{display: "flex", flexDirection: "column", height: "100%", marginRight: "20px", flexGrow: 1}}>
                                <Typography sx={{color: "black", fontSize: "28px", fontFamily: 'Open Sans, sans-serif', fontWeight: "700"}}>
                                    Account
                                </Typography>
                                <Typography sx={{color: "grey", fontSize: {xs: "10px", md: "11px", lg: "14px"}, fontFamily: 'Open Sans, sans-serif', fontWeight: "500", marginTop: "5px"}}>
                                    Configure your account settings here!
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 30px)", margin: "0px 15px 0px 15px", height: "calc(50%)"}}>
                            <XsLabel htmlFor="username">Username</XsLabel>
                            <XsInputField>
                                <XsStyledInput
                                    type="text"
                                    name="username"
                                    value={inputs.username}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <XsLabel htmlFor="name">Name</XsLabel>
                            <XsInputField>
                                <XsStyledInput
                                    type="text"
                                    name="name"
                                    value={inputs.name}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <XsLabel htmlFor="school">School</XsLabel>
                            <XsInputField>
                                <XsStyledInput
                                    type="text"
                                    name="school"
                                    value={inputs.school}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <XsLabel htmlFor="high_school_graduation_year">Graduation Year</XsLabel>
                            <XsInputField>
                                <XsStyledInput
                                    type="text"
                                    name="high_school_graduation_year"
                                    value={inputs.high_school_graduation_year}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <XsLabel htmlFor="current_password">Current Password</XsLabel>
                            <XsInputField>
                                <XsStyledInput
                                    type="password"
                                    name="current_password"
                                    value={inputs.current_password}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <XsLabel htmlFor="password">New Password</XsLabel>
                            <XsInputField>
                                <XsStyledInput
                                    type="password"
                                    name="password"
                                    value={inputs.password}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <XsLabel htmlFor="confirmPassword">Confirm New Password</XsLabel>
                            <XsInputField>
                                <XsStyledInput
                                    type="password"
                                    name="confirmPassword"
                                    value={inputs.confirmPassword}
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                            </XsInputField>
                            <Button type="submit" color="primary" sx={{backgroundColor: "primary.main", color: "white", width: "100%", height: "50px", marginTop: "30px", ":hover": {filter: "brightness(85%)", backgroundColor: "primary.main", transition: "0.3s"}}}>
                                Update Account
                            </Button>
                            {
                                error !== "" && (
                                    <Typography sx={{color: error === "Success!" ? "green" :"red", fontSize: "14px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", marginTop: "5px", alignSelf: "center"}}>
                                        {error}
                                    </Typography>
                                )
                            }
                        </Box>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default Account;