import React from "react";

import { styled } from '@mui/system';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {Box, Button, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Accordion = styled(MuiAccordion)(({ theme }) => ({
    boxShadow: "none",
    border: "none",
    '&:before': {
        display: 'none',
    },
}));
const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
    boxShadow: "none",
    border: "none",
    padding: '0 !important',   // force no padding
    '&.Mui-expanded': {
        '&:before': {
            opacity: 0,
        },
    },
    '& .MuiAccordionSummary-content': {
        margin: '0 !important',  // removes space if it's from the content
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    boxShadow: "none",
    border: "none",
    padding: '0 !important',   // force no padding
}));


const Meeting = ({openAccordion, setOpenAccordion, details, index}) => {

    const start = new Date(details.start_datetime);

    console.log(start);

    const startTime = start.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const date = start.toLocaleDateString('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    });

    const handleOpen = (index) => {
        if(index === openAccordion){
            setOpenAccordion(-1);
        }
        else{
            setOpenAccordion(index);
        }
    }


    return(
        <Accordion sx={{borderRadius: "0", marginTop: "15px"}} expanded={openAccordion === index} Divider={false}>
            <AccordionSummary sx={{borderRadius: "0"}}>
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", width: "100%", height: "80px", backgroundColor: "primary.main", borderRadius: openAccordion === index ? "4px 4px 0 0" : "4px 4px 4px 4px"}}>
                    <Box sx={{display: "flex", width: "45%", height: "100%", alignItems: "center"}}>
                        <Typography sx={{color: "background.main", fontWeight: "700", marginLeft: "20px", fontFamily: "Open Sans, sans-serif", fontSize: "16px"}}>
                            {details.service_name}
                        </Typography>
                        <Typography sx={{color: "background.main", marginLeft: "20px", fontFamily: "Open Sans, sans-serif", fontSize: "16px"}}>
                            {details.tutor_name}
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", width: "55%", height: "100%", alignItems: "center", justifyContent: "flex-end"}}>
                        <Typography sx={{color: "background.main", marginRight: "5px", fontFamily: "Open Sans, sans-serif", fontSize: "14px"}}>
                            {date} - {startTime}
                        </Typography>
                        <Button onClick={() => {handleOpen(index)}} disableRipple sx={{color: "white", background: "none", ":hover": {filter: "brightness(75%)", transform: "0.3s"}}}>
                            {
                                index !== openAccordion && (
                                    <KeyboardArrowDownIcon/>
                                )
                            }
                            {
                                index === openAccordion && (
                                    <KeyboardArrowUpIcon/>
                                )
                            }
                        </Button>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{borderRadius: "0"}}>
                <Box sx={{display: "flex", flexDirection: "column", width: "100%", height: "120px", backgroundColor: "background.dark", borderRadius: "0px 0px 4px 4px"}}>
                    <Typography sx={{fontSize: "16px", fontFamily: "Open Sans, sans-serif", marginLeft: "15px", marginTop: "10px"}}>
                        <b>Tutor Email:</b> {details.tutor_email}
                    </Typography>
                    <Box sx={{display: "flex", flexDirection: "row", margin: "10px 5px 10px 5px", flexGrow: "1"}}>
                        <a style={{width: "31%", height: "100%", marginRight: "auto", marginLeft: "auto",}} href={details.google_meet_link} target="_blank" rel="noopener noreferrer">
                            <Button sx={{width: "100%", height: "100%", marginRight: "auto", marginLeft: "auto", fontFamily: "Open Sans, sans-serif", fontWeight: "500", fontSize: "16px", backgroundColor: "secondary.main", color: "black", ":hover": {color: "black"}}}>
                                Join Session
                            </Button>
                        </a>
                        <a style={{width: "31%", height: "100%", marginRight: "auto", marginLeft: "auto",}} href={process.env.REACT_APP_EASYAPPOINTMENTS + "index.php/appointments/index/" + details.hash} target="_blank" rel="noopener noreferrer">
                            <Button sx={{width: "100%", height: "100%", fontFamily: "Open Sans, sans-serif", fontWeight: "500", fontSize: "16px", backgroundColor: "primary.main", color: "white", ":hover": {color: "black"}}}>
                                Reschedule Session
                            </Button>
                        </a>
                        <a style={{width: "31%", height: "100%", marginRight: "auto", marginLeft: "auto",}} href={process.env.REACT_APP_EASYAPPOINTMENTS + "index.php/appointments/index/" + details.hash} target="_blank" rel="noopener noreferrer">
                            <Button sx={{width: "100%", height: "100%", fontFamily: "Open Sans, sans-serif", fontWeight: "500", fontSize: "16px", backgroundColor: "red", color: "white", ":hover": {color: "black"}}}>
                                Cancel Session
                            </Button>
                        </a>
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default Meeting;
