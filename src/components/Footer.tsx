import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            borderBottom: '2px solid #676634',
            borderTop: '2px solid #676634',
            paddingTop: '4px'
        }}>
            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                marginTop: '4px',
                marginBottom: '8px'
            }}>
                <Typography component={Link} to="/impressum" style={{ textDecoration: 'underline', color: 'inherit' }}>
                    Impressum
                </Typography>
                <Typography component={Link} to="/datenschutz" style={{ textDecoration: 'underline', color: 'inherit' }}>
                    Datenschutz
                </Typography>
            </div>
            <Typography>
                © {new Date().getFullYear()} Mood and Atmosphere. Alle Rechte vorbehalten.
            </Typography>

        </div>
    );
}
 
export default Footer;