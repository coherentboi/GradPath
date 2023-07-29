import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Avatar, Box, Button, Grid, Paper, styled, Typography} from "@mui/material";

import {get_calendly_events} from "../../actions/tutoring";

import Book from "./Book/Book";
import Meeting from "./Meeting/Meeting";


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

    const [user,setUser] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setNavColour("background");
        if(JSON.parse(localStorage.getItem("profile")) === null || JSON.parse(localStorage.getItem("profile")) === ""){
            navigate("/auth");
        }
        else{
            setUser(JSON.parse(localStorage.getItem("profile")));
        }
        dispatch(get_calendly_events());
    }, [])

    const [open, setOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState(-1);

    const upcomingSessions = useSelector((state) => state.calendly);

    const handleOpen = () => {
        setOpen(true)
    }

    return(
        <Box sx={{ display: "flex", width: "100wh", height: "100vh", bgcolor: "background.main"}}>
            {user && (
                <Box sx={{width: "100%", height: "90%", marginTop: "10vh", display: {xs: "none", md: "flex"}}}>
                    <Book user={user} open={open} setOpen={setOpen} handleOpen={handleOpen}/>
                    <Box sx={{width: "calc(96% + 10px)", height: "calc(100% - 40px)", margin: "20px calc(2% - 5px) 20px calc(2% - 5px)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <DashboardBox sx={{flexDirection: "column", width: "calc(50% - 5px)", height: "100%", marginRight: "5px"}}>
                            <DashboardBox sx={{width: "100%", height: "30%"}}>
                                <DashboardBox sx={{height: "100%", aspectRatio: "1"}}>
                                    <Avatar sx={{fontSize: "60px", bgcolor: "primary.main", height: "calc(100% - 10px)", width: "calc(100% - 10px)", margin: "auto"}}>{user.user.username[0]}</Avatar>
                                </DashboardBox>
                                <DashboardBox sx={{height: "100%", flexGrow: 1}}>
                                    <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 20px)", height: "calc(100% - 10px)", margin: "auto"}}>
                                        <Typography sx={{fontWeight: "700", fontFamily: "Open Sans, sans-serif", fontSize: "32px"}}>{user.user.profile.name}</Typography>
                                        <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: "16px"}}>@{user.user.username}</Typography>
                                        <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: "24px", marginTop: "10px"}}>{user.user.profile.school}, {user.user.profile.high_school_graduation_year}</Typography>
                                        <Button sx={{marginTop: "5px", backgroundColor: "secondary.main", width: "150px", color: "black"}}>
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
                                    <Grid sx={{height: "100%", width: "100%"}} container>
                                        {
                                            courses.map((course, index) => (
                                                <Grid sx={{display: "flex", alignItems: "center", justifyContent: "center"}} xs={4}>
                                                    <Box sx={{bgcolor: "primary.main", display: "flex", width: "calc(100% - 10px)", height: "calc(100% - 10px)", margin: "auto", borderRadius: "4px"}}>

                                                    </Box>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </DashboardBox>
                            </DashboardBox>
                        </DashboardBox>
                        <DashboardBox sx={{flexDirection: "column", width: "calc(50% - 5px)", height: "100%", marginLeft: "5px"}}>
                            <DashboardBox sx={{height: "10%", width: "100%", alignItems: "flex-start"}}>
                                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", width: "calc(100% - 10px)", height: "calc(10% - 10px)", margin: "auto"}}>
                                    <Typography sx={{fontFamily: "Open Sans, sans-serif", fontWeight: "700", fontSize: "32px", display: "flex", flexGrow: 1}}>Upcoming Sessions</Typography>
                                    <Button onClick={handleOpen} sx={{fontSize: "16px", fontFamily: "Open Sans, sans-serif", padding: "10px 15px", backgroundColor: "primary.main", color: "white", ":hover":{color: "primary.main", transition: "0.3s"}}}>
                                        Book Now!
                                    </Button>
                                </Box>
                            </DashboardBox>
                            <DashboardBox sx={{height: "90%", width: "100%", alignItems: "flex-start"}}>
                                <Box sx={{display: "block", flexDirection: "column", alignItems: "center", width: "calc(100% - 10px)", height: "calc(100% - 10px)", margin: "auto", overflowY: "auto"}}>
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