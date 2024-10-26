import { Typography } from "@mui/material";
import { smallWindow } from "../util/params";
import { aboutUsInput } from "../util/inputs";

interface AboutUsSectionProps {
    windowWidth: number;
}

const AboutUsSection = ({windowWidth}: AboutUsSectionProps) => {

    const isSmallWindow = windowWidth <= smallWindow;

    return ( 
        <div id="ÜBER UNS" style={{width: '100vw', 
            borderTop: '2px solid black',
            paddingBottom: '32px',
            paddingLeft: isSmallWindow ? '5%' : '20%',
            paddingRight: isSmallWindow ? '5%' : '20%',
        }}>
            <Typography sx={{paddingTop: '80px', paddingBottom: '16px'}} variant="h4">
                {aboutUsInput.title}
            </Typography>
            <Typography>
                {aboutUsInput.description}    
            </Typography>
        </div>
     );
}
 
export default AboutUsSection;