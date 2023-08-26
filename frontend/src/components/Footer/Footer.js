import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

import GradpathLogo from "../../images/gradpathlogo.svg";

const Footer = () => {
    return (
        <Box bgcolor="primary.main" color="white" px={3} py={4}>
            <Grid container spacing={3}>
                {/* Left Side: Logo & Name */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" component="div" gutterBottom>
                        <img src={GradpathLogo} alt="GradPath Tutoring Logo" width="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                        GradPath Tutoring
                    </Typography>
                </Grid>

                {/* Center: Links */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Links
                    </Typography>
                    <nav>
                        <Link href="#" color="inherit" display="block">Home</Link>
                        <Link href="#" color="inherit" display="block">Programs</Link>
                        <Link href="#" color="inherit" display="block">About</Link>
                        <Link href="#" color="inherit" display="block">Login</Link>
                        <Link href="#" color="inherit" display="block">Dashboard</Link>
                        <Link href="#" color="inherit" display="block">Account</Link>
                    </nav>
                </Grid>

                {/* Right Side: Contact */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Contact
                    </Typography>
                    <Typography>
                        Email: <Link href="mailto:info@gradpathtutoring.com" color="inherit">info@gradpathtutoring.com</Link>
                    </Typography>
                    <Typography gutterBottom>
                        Instagram:
                        <IconButton color="inherit" href="https://www.instagram.com/gradpathtutoring/" target="_blank">
                            <InstagramIcon />
                        </IconButton>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
