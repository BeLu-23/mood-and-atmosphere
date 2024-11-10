import { Box, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import { impressumInputs } from "../util/inputs";

const Impressum = () => {
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
            aria-labelledby="impressum-title" 
            sx={{ padding: '16px', maxWidth: '600px', margin: 'auto' }}
            ref={containerRef}
        >
            <Typography 
                id="impressum-title" 
                variant="h4" 
                component="h1" 
                gutterBottom
                sx={{
                    borderBottom: '2px solid #676634',
                }}
            >
                {impressumInputs.title}
            </Typography>
            
            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Angaben gemäß Paragraph 5 des Telemediengesetzes"
            >
                {impressumInputs.header1}
            </Typography>
            <Typography component="address" sx={{ fontStyle: 'normal' }}>
                {impressumInputs.name}<br />
                {impressumInputs.preOwner}{impressumInputs.owner}<br />
                {impressumInputs.street}<br />
                {impressumInputs.town}
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Kontaktinformationen"
                sx={{ marginTop: '16px' }}
            >
                {impressumInputs.header2}
            </Typography>
            <Typography component="address" sx={{ fontStyle: 'normal' }}>
                {impressumInputs.prePhone}<a href={`tel:${impressumInputs.phone}`}>{impressumInputs.phone}</a><br />
                {impressumInputs.preMail}<a href={`mailto:${impressumInputs.mail}`}>{impressumInputs.mail}</a>
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Steuernummer"
                sx={{ marginTop: '16px' }}
            >
                {impressumInputs.header3}
            </Typography>
            <Typography>
                {impressumInputs.taxnr}<br/>
                {impressumInputs.umsatzID}
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Verantwortlich für den Inhalt nach Paragraph 55 Absatz 2 des Rundfunkstaatsvertrags"
                sx={{ marginTop: '16px' }}
            >
                {impressumInputs.header4}
            </Typography>
            <Typography component="address" sx={{ fontStyle: 'normal' }}>
                {impressumInputs.owner}<br />
                {impressumInputs.street}<br />
                {impressumInputs.town}
            </Typography>
        </Box>
     );
}
 
export default Impressum;