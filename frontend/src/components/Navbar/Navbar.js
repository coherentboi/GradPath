//React Imports
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/auth";

//MUI Material Imports
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";

//Icon Imports
import MenuIcon from '@mui/icons-material/Menu';
import GradpathLogo from '../../images/gradpathlogo.svg';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const pages = ['Programs', 'About'];
const settings = ['Dashboard', 'Account', 'Logout'];

const Navbar = ({navColour}) => {

    //User
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')) !== null ? JSON.parse(localStorage.getItem('profile')).user : JSON.parse(localStorage.getItem('profile')));

    const userDetails = useSelector(state => state.user);

    useEffect(() => {
        if(user && userDetails.username !== undefined){
            setUser(userDetails);
        }
    }, [userDetails])

    const dispatch = useDispatch();

    //Initialize Navigation
    const navigate = useNavigate();

    //State Variable For Nav Menu
    const [anchorElNav, setAnchorElNav] = useState(null);

    //Open Menu
    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    }

    //Close Menu
    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    }


    //State Variable For User Profile
    const [anchorElUser, setAnchorElUser] = useState(null);

    //Open User Profile
    const handleOpenUserMenu = (e) => {
        setAnchorElUser(e.currentTarget);
    }

    //Close User Profile
    const handleCloseUserMenu = (e) => {
        setAnchorElUser(null);
    }


    //Handle Page Choice
    const handlePage = (page) => {
        switch (page.toLowerCase()) {
            case "logout":
                dispatch(logout()).then(r => {
                    navigate('/auth');
                    window.location.reload();
                })
                break;
            default:
                navigate(`/${page.toLowerCase()}`);
        }
    }

    //Navigate to Login Page
    const login = (e) => {
        e.preventDefault();
        navigate("/auth");
    }

    return(
        <AppBar color={navColour} elevation={navColour === "background" ? 0 : 16} sx={{borderRadius: "5px", transition: "0.3s", display: "flex"}} position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigate("/")}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            alignItems: "center"
                        }}
                    >
                        <img src={GradpathLogo} alt="logo" style={{ display: { xs: 'none', md: 'flex' }, height: "40px"}} />
                    </Typography>

                    <Box sx={{ width: {xs: "150px"}, flexGrow: {md: 1}, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} onClick={() => handlePage(page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        onClick={() => navigate("/")}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            transform: '0.3s',
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "auto",
                            marginright: "auto"
                        }}
                    >
                        <img src={GradpathLogo} alt="logo" style={{ display: { xs: 'flex', md: 'none' }, height: "40px", alignSelf: "center", justifySelf: "center"}} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, alignItems: "center" }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handlePage(page)}
                                color="inherit"
                                sx={{ my: 2, display: 'block' , transition: '0s', alignItems: "center"}}
                            >
                                <Typography sx={{color: "inherit", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", alignItems: "center"}}>{page}</Typography>
                            </Button>
                        ))}
                    </Box>

                    {user && (
                        <Box sx={{width: {xs: "150px"}, display: "flex", flexGrow: {md: 1}, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                            <Button href="mailto:info@gradpathtutoring.com" color="inherit" sx={{ transition: '0s', minHeight: 0, minWidth: 0, padding: 0, marginRight: "10px"}}>
                                <EmailIcon/>
                            </Button>
                            <Button href="https://www.instagram.com/gradpathtutoring/" color="inherit" sx={{ transition: '0s', minHeight: 0, minWidth: 0, padding: 0, marginRight: "10px"}}>
                                <InstagramIcon/>
                            </Button>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar sx={{backgroundColor: navColour === "primary" ? "background.main" : "primary.main", color: navColour === "primary" ? "primary.main" : "background.main"}} alt={user.username}>{user.username.charAt(0)}</Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu} onClick={() => handlePage(setting)}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    )}
                    {!user && (
                        <Box sx={{width: {xs: "150px"}, display: "flex", flexGrow: {md: 1}, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
                            <Button href="mailto:info@gradpathtutoring.com" color="inherit" sx={{ transition: '0s', minHeight: 0, minWidth: 0, padding: 0, marginRight: {sx: "5px", md: "10px"}}}>
                                <EmailIcon/>
                            </Button>
                            <Button href="https://www.instagram.com/gradpathtutoring/" color="inherit" sx={{ transition: '0s', minHeight: 0, minWidth: 0, padding: 0, marginRight: {sx: "5px", md: "10px"}}}>
                                <InstagramIcon/>
                            </Button>
                            <Button
                                onClick={login}
                                color="inherit"
                                sx={{ my: 2, display: 'block' , transition: '0s', alignItems: "center"}}
                            >
                                <Typography sx={{color: "inherit", fontFamily: 'Open Sans, sans-serif', fontWeight: "500", alignItems: "center"}}>Login</Typography>
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;