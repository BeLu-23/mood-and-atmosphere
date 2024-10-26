import { Box, Typography } from "@mui/material";

const Impressum = () => {
    return ( 
        <Box 
            component="section" 
            aria-labelledby="impressum-title" 
            sx={{ padding: '16px', maxWidth: '600px', margin: 'auto' }}
        >
            <Typography 
                id="impressum-title" 
                variant="h4" 
                component="h1" 
                gutterBottom
                sx={{
                    borderBottom: '2px solid black',
                }}
            >
                Impressum
            </Typography>
            
            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Angaben gemäß Paragraph 5 des Telemediengesetzes"
            >
                Angaben gemäß § 5 TMG
            </Typography>
            <Typography component="address" sx={{ fontStyle: 'normal' }}>
                Mood and Atmosphere<br />
                Inhaber: Max Mustermann<br />
                Musterstraße 1<br />
                12345 Musterstadt
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Kontaktinformationen"
                sx={{ marginTop: '16px' }}
            >
                Kontakt
            </Typography>
            <Typography component="address" sx={{ fontStyle: 'normal' }}>
                Telefon: <a href="tel:+491234567890">01234 567890</a><br />
                E-Mail: <a href="mailto:info@moodandatmosphere.de">info@moodandatmosphere.de</a>
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Steuernummer"
                sx={{ marginTop: '16px' }}
            >
                Steuernummer
            </Typography>
            <Typography>
                Steuernummer: 123/4567/8901
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Verantwortlich für den Inhalt nach Paragraph 55 Absatz 2 des Rundfunkstaatsvertrags"
                sx={{ marginTop: '16px' }}
            >
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </Typography>
            <Typography component="address" sx={{ fontStyle: 'normal' }}>
                Max Mustermann<br />
                Musterstraße 1<br />
                12345 Musterstadt
            </Typography>
        </Box>
     );
}
 
export default Impressum;