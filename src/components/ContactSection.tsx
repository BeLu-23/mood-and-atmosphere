import { Box, Skeleton, Typography } from "@mui/material";
import { contactInput, contactPicURL, sectionTitles } from "../util/inputs";
import { smallWindow } from "../util/params";
import { useState } from "react";

interface ContactSectionProps {
    windowWidth: number;
}

const ContactSection = ({windowWidth}: ContactSectionProps) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const isSmallWindow = windowWidth <= smallWindow;

    return ( 
        <Box id={sectionTitles.contact} style={{width: '100vw', borderTop: '2px solid #676634',
            paddingBottom: '32px',
            paddingLeft: isSmallWindow ? '0px' : '20%',
            paddingRight: isSmallWindow ? '0px' : '20%',
        }}>
            <Box sx={{
                paddingLeft: '8px',
                paddingRight: '8px',
            }}>
                <Typography sx={{paddingTop: '80px', paddingBottom: '16px'}} variant="h4">
                    {contactInput.title}
                </Typography>
                <Typography>
                    {contactInput.first}
                </Typography>
                <Typography
                    dangerouslySetInnerHTML={{ __html: contactInput.second }}
                />
                <Typography>
                    {contactInput.third}
                </Typography>
                <br />
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: "100%",
                    paddingBottom: '100%', // Quadrat-Verhältnis
                }}
            >
                {!isImageLoaded && 
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1,
                        }}
                        animation="wave"
                    />
                }
                <Box
                    component="img"
                    src={contactPicURL}
                    alt={`Image ${contactPicURL}`}
                    loading="lazy"
                    onLoad={(() => setIsImageLoaded(true))}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>
        </Box> 
    );
}
 
export default ContactSection;