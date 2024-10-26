import { Typography } from "@mui/material";

const Footer = () => {
    return ( 
        <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            borderBottom: '2px solid black'
        }}>
            <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
        }}>
            <Typography >
                Impressum
            </Typography>
            <Typography>
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