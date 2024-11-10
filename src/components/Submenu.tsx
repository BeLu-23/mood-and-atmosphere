import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import { galleries } from "../util/inputs";

interface SubmenuProps {
    handleClose: (title: string) => void;
    anchorEl: null | HTMLElement;
    setAnchorEl: (el: null | HTMLElement) => void;
    anchorVertical: number | "center" | "top" | "bottom";
    anchorHorizonal: "left" | "right" | "center";
    transformVertical: number | "center" | "top" | "bottom";
    transformHorizontal: "left" | "right" | "center";
}

const Submenu = ({handleClose, anchorEl, setAnchorEl, anchorHorizonal, anchorVertical, transformHorizontal, transformVertical} : SubmenuProps) => {

    return ( 
    <Menu
        id="submenu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: anchorVertical,
            horizontal: anchorHorizonal,
        }}
        keepMounted
        transformOrigin={{
            vertical: transformVertical,
            horizontal: transformHorizontal,
        }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
    >
        <Box sx={{ padding: '8px 16px'}}>
            <Typography variant="subtitle1" fontWeight="bold">THEMEN</Typography>
        </Box>
        <Divider />
        {galleries.map((gallery) => (
            <MenuItem key={gallery.title} onClick={() => handleClose(gallery.title)} aria-label={gallery.title}>
            {gallery.title.toUpperCase()}
        </MenuItem>
        ))}
    </Menu> 
    );
}
 
export default Submenu;