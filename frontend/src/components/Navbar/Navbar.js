//React Imports
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

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


const pages = ['Programs', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = ({navColour}) => {

    //User
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);

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
        navigate(`/${page.toLowerCase()}`);
    }

    //Navigate to Login Page
    const login = (e) => {
        e.preventDefault();
        navigate("/auth");
    }

    return(
        <AppBar color={navColour} elevation={navColour === "background" ? 0 : 16} sx={{borderRadius: "5px", transition: "0.3s", display: "flex", width: "100%"}} position="sticky">
            <Container maxWidth="xl" sx={{width: "100%", display: "flex"}}>
                <Toolbar disableGutters sx={{width: "100%", display: "flex"}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            alignItems: "center"
                        }}
                    >
                        <img src={GradpathLogo} alt="logo" style={{ display: { xs: 'none', md: 'flex' }, height: "40px"}} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography onClick={() => handlePage(page)} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            transform: '0.3s',
                            alignItems: "center",
                        }}
                    >
                        <img src={GradpathLogo} alt="logo" style={{ display: { xs: 'flex', md: 'none' }, height: "40px"}} />
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
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography onClick={() => handlePage(setting)} textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    )}
                    {!user && (
                        <Box sx={{flexGrow: 0}}>
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