import React, {useState} from "react";

import {Box, Typography} from "@mui/material";
import ProfileModal from "./ProfileModal";

const Profile = ({details}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    }

    return(
        <Box
            sx={{
                display: "flex",
                flexShrink: 0,
                height: "100%",
                width: {
                    xs: "calc(50% - 20px)",
                    lg: "calc(25% - 20px)"
                },
                marginLeft: "10px",
                marginRight: "10px",
                position: "relative",
                zIndex: 1,
                cursor: "pointer"
            }}
        >
            <ProfileModal details={details} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <Box
                onClick={handleOpen}
            >
                <img
                    alt={details.name}
                    src={details.image}
                    style={{height: "100%", width: "100%", objectFit: "cover", borderRadius: "4px"}}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: "50%",
                        left: 0,
                        height: '50%',
                        width: '100%',
                        backgroundImage: 'linear-gradient(to bottom, transparent, #FBFEBB)',
                        borderRadius: '4px',
                        zIndex: 2  // make sure the overlay is above the image
                    }}
                >
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        zIndex: 3,  // make sure text is above the overlay
                        textAlign: 'right',  // This aligns the text to the right
                        color: "black"
                    }}
                >
                    <Typography sx={{fontSize: "18px", fontWeight: 700}}>{details.name}</Typography>
                    <Typography sx={{fontSize: "14px", fontWeight: 500}}>{details.role}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Profile;