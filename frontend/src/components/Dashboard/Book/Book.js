import React, {useState} from "react";
import {Box, Button, Fade, Grid, Modal, Typography} from "@mui/material";
import {InlineWidget, PopupButton} from "react-calendly";

import {subjects, times} from "../../../constants/info";

const Book = ({user, open, setOpen}) => {

    const [slide, setSlide] = useState(0);
    const [subject, setSubject] = useState("");
    const [time, setTime] = useState("");


    const handleClose = () => {
        setOpen(false);
        setSlide(0);
        setSubject("");
        setTime("");
    }

    const subjectTimes = subjects.map(subject => {
        return times.map(time => {
            return { subject: subject, time: time };
        });
    }).flat();

    const [searchTerm, setSearchTerm] = useState("");

    const handleChoice = (item) => {
        setSubject(item.subject.toLowerCase().replace(" ", "-"));
        setTime(item.time === "30 Minutes" ? "30m" : "1h");
        setSlide(slide + 1);
    }

    return(
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}
            >
                <Fade in={open}>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "4px", width: "75%", height: "90%", backgroundColor: "background.main"}}>
                        <Box sx={{display: "flex", height: "13%", width: "100%", borderRadius: "4px 4px 0 0", backgroundColor: "primary.main", alignItems: "center", justifyContent: "center"}}>
                            <Typography sx={{fontSize: "24px", fontWeight: "700", color: "background.main"}}>
                                Book a Tutoring Session
                            </Typography>
                        </Box>
                        {
                            slide === 0 && (
                                <Box sx={{display: "flex", flexDirection: "column", height: "calc(87% - 10px)", width: "calc(100% - 10px)", margin: "auto"}}>
                                    <Box sx={{display: "flex", height: "12%"}}>
                                        <input
                                            type="text"
                                            placeholder="Search Subjects"
                                            value={searchTerm}
                                            onChange={event => setSearchTerm(event.target.value)}
                                            style={{
                                                fontSize: "15px",
                                                fontFamily: "Open Sans, sans-serif",
                                                color: "black",
                                                border: "1px solid grey",
                                                padding: "10px",
                                                backgroundColor: "#FFFFFA",
                                                borderRadius: "5px",
                                                width: "100%",
                                                '&::placeholder': {
                                                    color: "#9698f6",
                                                    opacity: 1
                                                }
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{display: "block", flexDirection: "column", width: "100%", height: "calc(88% - 10px)", justifyContent: "flex-start", overflowY: "auto", marginTop: "10px"}}>
                                        {subjectTimes.filter(item =>
                                            item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                            item.time.toLowerCase().includes(searchTerm.toLowerCase())
                                        )
                                            .map((item, index) => (
                                                <Box key={index} sx={{display: "flex", flexDirection: "row", maxHeight: "80px", height: "80px", width: "100%", bgcolor: index % 2 === 1 ? "background.main" : "background.dark", alignItems: "center"}}>
                                                    <Typography sx={{fontSize: "15px", fontWeight: "400", fontFamily: "Open Sans, sans-serif", marginLeft: "10px", flexGrow: 1}}>{item.subject} - {item.time}</Typography>
                                                    <Button onClick={() => handleChoice(item) } color={index % 2 === 0 ? "primary" : "secondary"} sx={{backgroundColor: index % 2 === 0 ? "primary.main" : "secondary.main", transition: "0.3s", marginRight: "10px"}}>
                                                        <Typography sx={{fontSize: "15px", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", color: index % 2 === 0 ? "background.main" : "black", padding: "10px 15px", transition: "0.3s", ":hover":{color: index % 2 === 0 ? "primary.main" : "black"}}}>Register</Typography>
                                                    </Button>
                                                </Box>
                                            ))}
                                    </Box>
                                </Box>
                            )
                        }
                        {
                            slide === 1 && (
                                <Box sx={{display: "flex", flexDirection: "column", height: "87%", width: "100%"}}>
                                    <Button onClick={() => {
                                        setSlide(0);
                                        setSubject("");
                                        setTime("");
                                    }}>
                                        Back
                                    </Button>
                                    <InlineWidget
                                        url={process.env.REACT_APP_CALENDLY + subject + "-" + time}
                                        pageSettings={{
                                            primaryColor: '#1216D3',
                                        }}
                                        prefill={{
                                            email: user.user.email,
                                            name: user.user.profile.name
                                        }}
                                    />
                                </Box>
                            )
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default Book;