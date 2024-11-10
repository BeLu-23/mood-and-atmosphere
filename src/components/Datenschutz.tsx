import { Box, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import { datenschutzInputs, impressumInputs } from "../util/inputs";

const Datenschutz = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.focus();
            containerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    
    return ( 
        <Box 
            component="section" 
            aria-labelledby="datenschutz-title" 
            sx={{ padding: '16px', maxWidth: '800px', margin: 'auto' }}
            ref={containerRef}
        >
            <Typography 
                id="datenschutz-title" 
                variant="h4" 
                component="h1" 
                gutterBottom
                sx={{
                    borderBottom: '2px solid #676634',
                }}
            >
                {datenschutzInputs.title}
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Allgemeine Hinweise zum Datenschutz"
            >
                {datenschutzInputs.header1}
            </Typography>
            <Typography paragraph>
                {datenschutzInputs.text1}
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Verantwortliche Stelle"
            >
                {datenschutzInputs.header2}
            </Typography>
            <Typography component="address" sx={{ fontStyle: 'normal' }}>
                {impressumInputs.name}<br />
                {impressumInputs.preOwner}{impressumInputs.owner}<br />
                {impressumInputs.street}<br />
                {impressumInputs.town}<br />
                {impressumInputs.prePhone}<a href={`tel:${impressumInputs.phone}`}>{impressumInputs.phone}</a><br />
                {impressumInputs.preMail}<a href={`mailto:${impressumInputs.mail}`}>{impressumInputs.mail}</a>
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Erhebung und Speicherung personenbezogener Daten"
                sx={{ marginTop: '16px' }}
            >
                {datenschutzInputs.header3}
            </Typography>
            <Typography paragraph>
                {datenschutzInputs.text3}
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Keine Verwendung von Cookies"
                sx={{ marginTop: '16px' }}
            >
                {datenschutzInputs.header4}
            </Typography>
            <Typography paragraph>
                {datenschutzInputs.text4}
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Kontaktaufnahme"
                sx={{ marginTop: '16px' }}
            >
                {datenschutzInputs.header5}
            </Typography>
            <Typography paragraph>
                {datenschutzInputs.text5}
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Rechte der betroffenen Personen"
                sx={{ marginTop: '16px' }}
            >
                {datenschutzInputs.header6}
            </Typography>
            <Typography paragraph>
                {datenschutzInputs.text6}
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Aktualität und Änderung der Datenschutzerklärung"
                sx={{ marginTop: '16px' }}
            >
                {datenschutzInputs.header7}
            </Typography>
            <Typography paragraph>
                {datenschutzInputs.text7}
            </Typography>
        </Box>
     );
}
 
export default Datenschutz;