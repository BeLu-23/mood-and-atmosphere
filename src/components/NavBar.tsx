import { AppBar, Box, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { FaBars, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import InstaButton from "./InstaButton";
import { smallWindow, WindowWidthProps } from "../util/params";
import Submenu from "./Submenu";
import { aboutUsInput, sectionTitles } from "../util/inputs";

const NavBar = ({windowWidth}: WindowWidthProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState<null | HTMLElement>(null);

    const isSmallWindow = windowWidth <= smallWindow;
    const isSmallSmallWindow = windowWidth <= 600;

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleSubMenu = (event: React.MouseEvent<HTMLElement>) => {
        setSubMenuAnchorEl(event.currentTarget);
    }

    const handleSmallSubMenu = (event: React.MouseEvent<HTMLElement>) => {
        if (subMenuAnchorEl == null) {
            setSubMenuAnchorEl(event.currentTarget);
        } else {
            setSubMenuAnchorEl(null);
        }
    }

    const handleClose = (section: string) => {
        setAnchorEl(null);
        setSubMenuAnchorEl(null);
        // set timeout so that mobile devices can have time for the layout changes to take effect
        setTimeout(() => {
            if (section === sectionTitles.home) {
                document.getElementById('navBar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100)
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
                        <Typography 
                            style={{marginTop: isSmallSmallWindow ? '8px' : '0px', marginLeft: isSmallSmallWindow ? '8px' : '0px'}}
                        >
                            {sectionTitles.title}
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
                            <MenuItem sx={{pl: '44px'}} onClick={() => handleClose(sectionTitles.home)} aria-label={sectionTitles.home}>
                                {sectionTitles.home}
                            </MenuItem>
                            <MenuItem sx={{pl: '44px'}} onClick={() => handleClose(aboutUsInput.title)} aria-label={sectionTitles.aboutUs}>
                                {sectionTitles.aboutUs}
                            </MenuItem>
                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                <IconButton
                                    size="small"
                                    edge="end"
                                    aria-label="smallsubmenu"
                                    aria-controls="smallsubmenu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleSmallSubMenu}
                                    sx={{border: '2px solid #676634'
                                        , mt: isSmallSmallWindow ? '10px' : '4px'
                                        , ml: '6px'
                                        , width: '24px', height: '24px'
                                    }}
                                >
                                    {subMenuAnchorEl ? (<FaChevronLeft />) : (<FaChevronDown />)}
                                </IconButton>
                                <MenuItem onClick={() => handleClose(sectionTitles.gallery)} aria-label={sectionTitles.gallery}
                                sx={{ml: '0px'}}>
                                    {sectionTitles.gallery}
                                </MenuItem>

                                <Submenu 
                                    anchorHorizonal="left"
                                    anchorVertical='top'
                                    transformHorizontal="right"
                                    transformVertical='top'
                                    handleClose={handleClose}
                                    anchorEl={subMenuAnchorEl}
                                    setAnchorEl={setSubMenuAnchorEl}
                                />
                            </Box>
                            <MenuItem sx={{pl: '44px'}} onClick={() => handleClose("KONTAKT")} aria-label="KONTAKT">
                                    {sectionTitles.contact}
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
                                {sectionTitles.title}
                            </Typography>
                            <Box sx={{display: 'flex'}}>
                                <Box onClick={() => handleClose(sectionTitles.home)} sx={{cursor: "pointer", pt: '4px'}}>
                                    <Typography className="large-menu-item">{sectionTitles.home}</Typography>
                                </Box>
                                <Box onClick={() => handleClose(sectionTitles.aboutUs)} sx={{cursor: "pointer", pt: '4px'}}>
                                    <Typography className="large-menu-item">{sectionTitles.aboutUs}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                    <Box onClick={() => handleClose(sectionTitles.gallery)} sx={{cursor: "pointer", pt: '4px'}}>
                                        <Typography className="large-menu-item">{sectionTitles.gallery}</Typography>
                                    </Box>
                                    <IconButton
                                        size="small"
                                        edge="end"
                                        aria-label="submenu"
                                        aria-controls="submenu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleSubMenu}
                                        sx={{border: '2px solid #676634'
                                            , height: '24px'
                                            , width: '24px'
                                            , mt: '4px'
                                        }}
                                    >
                                        {subMenuAnchorEl ? (<FaChevronRight />) : (<FaChevronDown />)}
                                    </IconButton>
                                    <Submenu 
                                        anchorHorizonal="right"
                                        anchorVertical='top'
                                        transformHorizontal="left"
                                        transformVertical='bottom'
                                        handleClose={handleClose}
                                        anchorEl={subMenuAnchorEl}
                                        setAnchorEl={setSubMenuAnchorEl}
                                    />
                                </Box>
                                <Box onClick={() => handleClose(sectionTitles.contact)} sx={{cursor: "pointer", pt: '4px', ml: '8px'}}>
                                    <Typography className="large-menu-item">{sectionTitles.contact}</Typography>
                                </Box>
                            </Box>
                            <InstaButton />
                        </Toolbar>
                    )}
            </AppBar>

        </Box>
     );
}
 
export default NavBar;