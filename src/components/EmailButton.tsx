import { IconButton } from "@mui/material";
import { FaPaperPlane } from "react-icons/fa";

const EmailButton = () => {
    return ( 
        <IconButton
            size="large"
            aria-label="Email Icon"
            href="mailto:info@moodandatmosphere.de"
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
            <FaPaperPlane />
        </IconButton>
     );
}
 
export default EmailButton;