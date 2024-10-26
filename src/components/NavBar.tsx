import { AppBar, Box, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { FaBars } from "react-icons/fa";
import InstaButton from "./InstaButton";

interface NavBarProps {
    windowWidth: number;
}

const NavBar = ({windowWidth}: NavBarProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isSmallWindow = windowWidth <= 1000;

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (section: string) => {
        setAnchorEl(null);
        if (section === 'HOME') {
            document.getElementById('navBar')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return ( 
        <Box
            id='navBar'
            sx={{flexGrow: 1}}
            role='navigation'
            aria-label='NavBar box'
            width='100%'
        >
            <AppBar 
                position="fixed" 
                sx={{
                backgroundColor: 'white', 
                height: '64px'
                }}
            >

                {isSmallWindow ? (
                    <Toolbar 
                        sx={{
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography style={{marginTop: windowWidth < 600 ? '8px' : '0px', marginLeft: windowWidth < 600 ? '8px' : '0px'}}>
                            Mood & Atmosphere
                        </Typography>
                        <IconButton
                        size="large"
                        edge="end"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        >
                            <FaBars />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                        >
                            <MenuItem onClick={() => handleClose("HOME")} aria-label="Home">
                                {"HOME"}
                            </MenuItem>
                            <MenuItem onClick={() => handleClose("ÜBER UNS")} aria-label="ÜberUns">
                                {"ÜBER UNS"}
                            </MenuItem>
                            <MenuItem onClick={() => handleClose("FOTOS")} aria-label="Fotos">
                                {"GALLERIE"}
                            </MenuItem>
                            <Divider />
                            <InstaButton />
                        </ Menu>
                    </Toolbar>
                    ) : (
                        <Toolbar 
                            sx={{
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography>
                                Mood & Atmosphere
                            </Typography>
                            <Box sx={{display: 'flex'}}>
                                <Box onClick={() => handleClose("HOME")} sx={{cursor: "pointer",}}>
                                    <Typography className="large-menu-item">HOME</Typography>
                                </Box>
                                <Box onClick={() => handleClose("ÜBER UNS")} sx={{cursor: "pointer",}}>
                                    <Typography className="large-menu-item">ÜBER UNS</Typography>
                                </Box>
                                <Box onClick={() => handleClose("FOTOS")} sx={{cursor: "pointer",}}>
                                    <Typography className="large-menu-item">GALLERIE</Typography>
                                </Box>
                            </Box>
                            {/* <IconButton
                                size="large"
                                aria-label="Instagram Icon"
                                href="https://www.instagram.com/mood_and_atmosphere?igsh=MWc2cTZydnF5dTNjZQ=="
                                target="_blank"
                            >
                                <FaInstagram />
                            </IconButton> */}
                            <InstaButton />
                        </Toolbar>
                    )}
            </AppBar>

        </Box>
     );
}
 
export default NavBar;