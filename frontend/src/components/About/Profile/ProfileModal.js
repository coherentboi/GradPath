import React from "react";
import {useNavigate} from "react-router-dom";

import {Box, Button, Fade, Modal, styled, Tooltip, Typography} from "@mui/material";

import logo from "../../../images/gradpathlogo.svg";

const LinkLikeButton = styled(Button)({
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    color: "blue",
    textTransform: "none",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: {xs: "10px", md: "14px"},
    '&:hover': {
        textDecoration: "underline",
        backgroundColor: "transparent"
    },
});

const ProfileModal = ({details, modalOpen, setModalOpen}) => {

    const handleClose = () => {
        setModalOpen(false);
    }

    const navigate = useNavigate();

    return(
        <div>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000}}
            >
                <Fade in={modalOpen}>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "4px", width: "75%", height: "90%", backgroundColor: "background.main"}}>
                        <Box sx={{display: "flex", flexDirection: "row", height: "100%", width: "100%"}}>
                            <Box sx={{display: {xs: "none", md: "flex"}, width: "40%", height: "100%", flexDirection: "column", flexShrink: 0}}>
                                <img alt={details.name} src={details.image} style={{
                                    width: 'calc(100% - 20px)',
                                    margin: "10px",
                                    height: 'calc(100% - 20px)',
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                }}/>
                            </Box>
                            <Box sx={{display: "flex", width: {xs: "100%", md: "60%"}, height: "100%", flexDirection: "column"}}>
                                <Box sx={{display: "flex", width: "calc(100% - 5px)", marginRight: "10px", alignItems: "center"}}>
                                    <Typography sx={{marginLeft: "5px", marginTop: "5px", fontSize: {xs: "18px", md: "32px"}, fontFamily: "Open Sans, sans-serif", fontWeight: "700", flexGrow: 1}}>
                                        {details.name}
                                    </Typography>
                                    <img src={logo} style={{height: "70px", aspectRatio: 1, alignSelf: "center"}}/>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 20px)", margin: "0px 5px"}}>
                                    <Typography sx={{fontSize: {xs: "14px", md: "18px"}, fontFamily: "Open Sans, sans-serif", fontWeight: "700", color: "grey", marginBottom: "10px"}}>
                                        {details.role}
                                    </Typography>
                                    <Typography sx={{marginRight: "5px", fontFamily: "Open Sans, sans-serif", fontSize: {xs: "10px",md: "13px"}}}>
                                        {details.about}
                                    </Typography>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "column", width: "calc(100% - 20px)", margin: "20px 5px 0px 5px", }}>
                                    <Typography sx={{fontSize: {xs: "14px", md: "18px"}, fontFamily: "Open Sans, sans-serif", fontWeight: "700", color: "grey", marginBottom: "10px"}}>
                                        Information and Contact:
                                    </Typography>
                                    <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: {xs: "10px",md: "13px"}}}>
                                        <b>Grade:</b> {details.grade}
                                    </Typography>
                                    <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: {xs: "10px",md: "13px"}}}>
                                        <b>School:</b> {details.school || "Prefer not to share"}
                                    </Typography>
                                    <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: {xs: "10px",md: "13px"}}}>
                                        <b>Email:</b> {details.email || "Please use other means of contact"}
                                    </Typography>
                                    <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: {xs: "10px",md: "13px"}}}>
                                        <b>Phone Number:</b> {details.phone || "Please use other means of contact"}
                                    </Typography>
                                    <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: {xs: "10px",md: "13px"}}}>
                                        <b>Instagram:</b> {details.instagram || "Please use other means of contact"}
                                    </Typography>
                                    <Typography sx={{fontFamily: "Open Sans, sans-serif", fontSize: {xs: "10px",md: "13px"}}}>
                                        <b>Subjects:</b> {details.subjectsDescription || "None"}
                                    </Typography>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "column", flexGrow: 1, width: "calc(100% - 15px)", marginLeft: "5px", marginRight: "10px"}}>
                                    <Box sx={{display: "flex", flexDirection: "row", width: "100%", marginTop: "20px", marginBottom: "10px", padding: "0px", borderBottom: "1px solid black", alignItems: "center"}}>
                                        <Typography sx={{fontSize: {xs: "14px", md: "18px"}, fontFamily: "Open Sans, sans-serif", fontWeight: "700", marginBottom: "5px", flexGrow: 1, color: "grey"}}>
                                            Certifications:
                                        </Typography>
                                        <LinkLikeButton onClick={() => {navigate("/programs")}}>About Certification</LinkLikeButton>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        flexGrow: 1,
                                        width: "100%",
                                        overflowX: "auto",
                                        marginBottom: "10px",
                                        flexWrap: "nowrap",
                                        WebkitOverflowScrolling: 'touch'
                                    }}>
                                        {
                                            details.certifications.map((certification) => (
                                                <Tooltip title={certification.description}>
                                                    <img
                                                        alt=""
                                                        style={{height: "calc(100% - 10px)", maxHeight: "150px", aspectRatio: 1, borderRadius: "50%", bgcolor: "primary.main", marginRight: "20px", marginBottom: "5px", objectFit: "cover"}}
                                                        src={certification.image}
                                                    />
                                                </Tooltip>
                                            ))
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default ProfileModal;