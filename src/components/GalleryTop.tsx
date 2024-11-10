import { Typography } from "@mui/material";
import { smallWindow, WindowWidthProps } from "../util/params";
import { sectionTitles } from "../util/inputs";

const GalleryTop = ({windowWidth}: WindowWidthProps) => {

    const isSmallWindow = windowWidth <= smallWindow;

    return ( 
        <div id={sectionTitles.gallery} style={{width: '100vw', 
            borderTop: '2px solid #676634', 
            borderBottom: '2px solid #676634',
            paddingLeft: isSmallWindow ? '0%' : '20%',
            paddingRight: isSmallWindow ? '0%' : '20%',
        }}>
            <Typography sx={{paddingTop: '80px', paddingBottom: '40px'}} variant="h2">
                {sectionTitles.gallery}
            </Typography >
        </div>
     );
}
 
export default GalleryTop;