import { IconButton } from "@mui/material";
import { FaInstagram } from "react-icons/fa";

// interface InstaButtonProps {
//     buttonColor: string;
// }

const InstaButton = (
    // {buttonColor}: InstaButtonProps
    ) => {
    return ( 
        <IconButton
            size="large"
            aria-label="Instagram Icon"
            href="https://www.instagram.com/mood_and_atmosphere?igsh=MWc2cTZydnF5dTNjZQ=="
            target="_blank"
            sx={{backgroundColor: 'white', 
                "&:active": {
                    backgroundColor: 'white',
                },
                "&:hover": {
                    backgroundColor: '#e0e0e0',
                },
            }}
        >
            <FaInstagram />
        </IconButton>
     );
}
 
export default InstaButton;