import React, {useEffect, useState} from "react";

import {alpha, Box, Button} from "@mui/material";
import Profile from "./Profile";

import { TutorDetails } from "../../../constants/TutorDetails";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Profiles = ({searchParameters}) => {

    const scrollRef = React.useRef(null);

    const scrollAmount = 1; // Choose an amount that feels right for your use case

    const [showLeftButton, setShowLeftButton] = React.useState(false);
    const [showRightButton, setShowRightButton] = React.useState(true);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= scrollRef.current.clientWidth * scrollAmount;
        }
        if(scrollRef.current.scrollLeft - scrollRef.current.clientWidth * scrollAmount <= 0){
            setShowLeftButton(false);
        }
        if(scrollRef.current.scrollLeft <= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)){
            setShowRightButton(true);
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += scrollRef.current.clientWidth * scrollAmount;
            if(scrollRef.current.scrollLeft + scrollRef.current.clientWidth * scrollAmount > 0){
                setShowLeftButton(true);
            }
            if(scrollRef.current.scrollLeft + scrollRef.current.clientWidth * scrollAmount >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)){
                setShowRightButton(false);
            }
        }
    };

    useEffect(() => {
        scrollRight();
        scrollLeft();
    }, [searchParameters])

    return (
        <Box sx={{
            display: "flex",
            margin: "30px 2% 50px 2%",
            height: "calc(100% - 80px)",
            width: "96%",
            position: "relative",
        }}>
            <Box sx={{ position: 'absolute', top: '50%', left: '2%', transform: 'translateY(-50%)', zIndex: 999 }}>
                {showLeftButton &&
                    <Button
                        onClick={scrollLeft}
                        sx={{backgroundColor: alpha("#1216D3", 0.5), borderRadius: "50%", color: "background.main", aspectRatio: 1, ":hover": {backgroundColor: alpha("#1216D3", 0.8), transition: "0.3s"}}}
                    >
                        <ArrowBackIcon sx={{height: "40px"}}/>
                    </Button>
                }
            </Box>
            <Box
                ref={scrollRef}
                sx={{
                display: "flex",
                height: "100%",
                width: "100%",
                overflowX: "auto",
                scrollBehavior: "smooth",
                scrollbarWidth: "none", // For Firefox
                '&::-webkit-scrollbar': {
                    display: 'none', // For Chrome, Safari and newer versions of Opera
                }}}>
                {
                    TutorDetails.filter((tutor) => (tutor.subjects.includes(searchParameters))).map((details) => (
                        <Profile details={details}/>
                    ))
                }
            </Box>
            <Box sx={{ position: 'absolute', top: '50%', right: '2%', transform: 'translateY(-50%)', zIndex: 999 }}>
                {showRightButton && <Button
                    onClick={scrollRight}
                    sx={{backgroundColor: alpha("#1216D3", 0.5), borderRadius: "50%", color: "background.main", aspectRatio: 1, ":hover": {backgroundColor: alpha("#1216D3", 0.8), transition: "0.3s"}}}
                >
                    <ArrowForwardIcon sx={{height: "40px"}}/>
                </Button>}
            </Box>
        </Box>

    );
};

export default Profiles;
