import { IconButton } from "@mui/material";
import { FaInstagram } from "react-icons/fa";

const InstaButton = () => {
    return ( 
        <IconButton
            size="large"
            aria-label="Instagram Icon"
            href="https://www.instagram.com/mood_and_atmosphere?igsh=MWc2cTZydnF5dTNjZQ=="
            target="_blank"
        >
            <FaInstagram />
        </IconButton>
     );
}
 
export default InstaButton;