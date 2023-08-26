import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Avatar, Box, Button, Grid, styled, Typography} from "@mui/material";

import {get_easyappointments} from "../../actions/tutoring";

import Meeting from "./Meeting/Meeting";
import {getuser} from "../../actions/auth";
import {Helmet} from "react-helmet";


const LinkLikeButton = styled(Button)({
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    marginTop: "16px",
    font: "inherit",
    cursor: "pointer",
    color: "blue",
    textTransform: "none",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "16px",
    '&:hover': {
        textDecoration: "underline",
        backgroundColor: "transparent"
    },
});

const DashboardBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const courses = ["", "", "", "", "", ""]

const Dashboard = ({setNavColour}) => {

    const [user, setUser] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setNavColour("background");
        if(JSON.parse(localStorage.getItem("profile")) === null || JSON.parse(localStorage.getItem("profile")) === ""){
            navigate("/auth");
        }
        dispatch(getuser());
        dispatch(get_easyappointments());
    }, [])


    const userDetails = useSelector(state => state.user);

    useEffect(() => {
        if(userDetails.username !== undefined){
            setUser(userDetails);
        }
    }, [userDetails])


    const [openAccordion, setOpenAccordion] = useState(-1);

    const upcomingSessions = useSelector((state) => state.easyappointments);

    const openEasyAppointments = () => {
        const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        const width = isMobile ? window.screen.width : 800;
        const height = isMobile ? window.screen.height : 800;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
        const features = `width=${width},height=${height},top=${top},left=${left}`;

        const popup = window.open(process.env.REACT_APP_EASYAPPOINTMENTS, '_blank', features);

        const checkIfClosed = setInterval(() => {
            if (popup.closed) {
                console.log('The popup has been closed');
                clearInterval(checkIfClosed);
                get_easyappointments();
            }
        }, 1000);

    };

    return(
        <Box sx={{ display: "flex", width: "100wh", height: "100vh", bgcolor: "background.main"}}>
            <Helmet>
                <title>Dashboard | GradPath</title>
            </Helmet>
            {user && (
                <Box sx={{width: "100%", height: "90%", marginTop: {md: "10vh"}, display: "flex"}}>
                    <Box sx={{width: "calc(96% + 10px)", height: "calc(100% - 40px)", margin: "20px calc(2% - 5px) 20px calc(2% - 5px)", display: "flex", flexDirection: {xs: "column", md: "row"}, alignItems: "center", justifyContent: "center"}}>
                        <DashboardBox sx={{flexDirection: "column", width: {xs: "calc(100% - 10px)", md: "calc(50% - 5px)"}, height: {md: "100%"}, marginRight: {md: "5px"}}}>
                            <DashboardBox sx={{width: "100%", height: "30%"}}>
                                <DashboardBox sx={{height: "100%", aspectRatio: "1"}}>
                                    <Avatar sx={{fontSize: "60px", bgcolor: "primary.main", height: "calc(100% - 10px)", width: "calc(100% - 10px)", margin: "auto"}}>{user.username[0]}</Avatar>
                                </DashboardBox>
                                <DashboardBox sx={{height: "100%", flexGrow: 1}}>
                                    <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 20px)", height: "calc(100% - 10px)", margin: "auto"}}>
                                        <Typography sx={{fontWeight: "700", fontFamily: "Open Sans, sans-serif", fontSize: "32px"}}>{user.profile.name}</Typography>
                                        <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: "16px"}}>@{user.username}</Typography>
                                        <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: "24px", marginTop: "10px"}}>{user.profile.school} {user.profile.high_school_graduation_year}</Typography>
                                        <Button onClick={() => navigate("/account")} sx={{marginTop: "5px", backgroundColor: "secondary.main", width: "150px", color: "black", ":hover":{backgroundColor: "secondary.main", filter: "brightness(75%)"}}}>
                                            Edit Profile
                                        </Button>
                                    </Box>
                                </DashboardBox>
                            </DashboardBox>
                            <DashboardBox sx={{flexDirection: "column", width: "100%", height: "70%"}}>
                                <DashboardBox sx={{height: "15%", width: "100%", alignItems: "flex-start"}}>
                                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", width: "calc(100% - 10px)", height: "calc(10% - 10px)", margin: "auto"}}>
                                        <Typography sx={{fontFamily: "Open Sans, sans-serif", fontWeight: "700", fontSize: "32px", display: "flex", flexGrow: 1}}>My Courses</Typography>
                                        <LinkLikeButton>See More</LinkLikeButton>
                                    </Box>
                                </DashboardBox>
                                <DashboardBox sx={{height: "85%", width: "100%"}}>
                                    Online courses and materials coming soon!
                                </DashboardBox>
                            </DashboardBox>
                        </DashboardBox>
                        <DashboardBox sx={{flexDirection: "column", width: {xs: "calc(100% - 10px)", md: "calc(50% - 5px)"}, height: {md: "100%"}, marginLeft:{md: "5px"}}}>
                            <DashboardBox sx={{height: "10%", width: "100%", alignItems: "flex-start"}}>
                                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", width: "calc(100% - 10px)", height: "calc(10% - 10px)", margin: "auto"}}>
                                    <Typography sx={{fontFamily: "Open Sans, sans-serif", fontWeight: "700", fontSize: "32px", display: "flex", flexGrow: 1}}>Upcoming Sessions</Typography>
                                    <Button onClick={openEasyAppointments} sx={{fontSize: "16px", fontFamily: "Open Sans, sans-serif", padding: "10px 15px", backgroundColor: "primary.main", color: "white", ":hover":{backgroundColor: "primary.main", filter: "brightness(75%)", transition: "0.3s"}}}>
                                        Book Now!
                                    </Button>
                                </Box>
                            </DashboardBox>
                            <DashboardBox sx={{height: "90%", width: "100%", alignItems: "flex-start"}}>
                                <Box sx={{display: "block", flexDirection: "column", alignItems: "center", width: "calc(100% - 10px)", height: "calc(100% - 10px)", margin: "auto", overflowY: "auto"}}>
                                    {
                                        upcomingSessions.length === 0 && (
                                            <Box sx={{display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                                                <Typography sx={{fontFamily: "Open Sans, sans-serif", fontWeight: "500", fontSize: "16px", display: "flex"}}>
                                                    It seems you don't have any upcoming tutoring sessions. Book one now!
                                                </Typography>
                                                <Button
                                                    onClick={openEasyAppointments}
                                                    sx={{
                                                        fontSize: "16px",
                                                        fontFamily: "Open Sans, sans-serif",
                                                        padding: "10px 15px",
                                                        marginTop: "20px",
                                                        backgroundColor: "primary.main",
                                                        color: "white",
                                                        ":hover": {
                                                            backgroundColor: "primary.main",
                                                            filter: "brightness(75%)",
                                                            transition: "0.3s"
                                                        }
                                                    }}
                                                >
                                                    Book Now!
                                                </Button>

                                            </Box>
                                        )
                                    }
                                    {
                                        upcomingSessions.map((details, index) => (
                                            <Meeting key={index} openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} details={details} index={index}/>
                                        ))
                                    }
                                </Box>
                            </DashboardBox>
                        </DashboardBox>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default Dashboard;