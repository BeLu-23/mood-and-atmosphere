import { Box, Typography } from "@mui/material";

const Datenschutz = () => {
    return ( 
        <Box 
            component="section" 
            aria-labelledby="datenschutz-title" 
            sx={{ padding: '16px', maxWidth: '800px', margin: 'auto' }}
        >
            <Typography 
                id="datenschutz-title" 
                variant="h4" 
                component="h1" 
                gutterBottom
                sx={{
                    borderBottom: '2px solid black',
                }}
            >
                Datenschutzerklärung
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Allgemeine Hinweise zum Datenschutz"
            >
                1. Allgemeine Hinweise
            </Typography>
            <Typography paragraph>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Verantwortliche Stelle"
            >
                2. Verantwortliche Stelle
            </Typography>
            <Typography component="address" sx={{ fontStyle: 'normal' }}>
                Mood and Atmosphere<br />
                Inhaber: Max Mustermann<br />
                Musterstraße 1<br />
                12345 Musterstadt<br />
                Telefon: <a href="tel:+491234567890">01234 567890</a><br />
                E-Mail: <a href="mailto:info@moodandatmosphere.de">info@moodandatmosphere.de</a>
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Erhebung und Speicherung personenbezogener Daten"
                sx={{ marginTop: '16px' }}
            >
                3. Erhebung und Speicherung personenbezogener Daten
            </Typography>
            <Typography paragraph>
                Wir erheben keine personenbezogenen Daten über unsere Website, es sei denn, Sie stellen uns diese im Rahmen einer Kontaktaufnahme freiwillig zur Verfügung (z. B. per E-Mail).
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Keine Verwendung von Cookies"
                sx={{ marginTop: '16px' }}
            >
                4. Keine Verwendung von Cookies
            </Typography>
            <Typography paragraph>
                Diese Website verwendet keine Cookies oder andere Tracking-Technologien. Es werden keine Daten zu Ihrem Surfverhalten erhoben oder gespeichert.
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Kontaktaufnahme"
                sx={{ marginTop: '16px' }}
            >
                5. Kontaktaufnahme
            </Typography>
            <Typography paragraph>
                Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen angegebenen Daten ausschließlich zur Bearbeitung der Anfrage genutzt und danach gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Rechte der betroffenen Personen"
                sx={{ marginTop: '16px' }}
            >
                6. Ihre Rechte
            </Typography>
            <Typography paragraph>
                Sie haben das Recht, jederzeit unentgeltlich Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten sowie das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht.
            </Typography>

            <Typography 
                variant="h6" 
                component="h2" 
                gutterBottom 
                aria-label="Aktualität und Änderung der Datenschutzerklärung"
                sx={{ marginTop: '16px' }}
            >
                7. Aktualität und Änderung dieser Datenschutzerklärung
            </Typography>
            <Typography paragraph>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um aktuellen rechtlichen Anforderungen zu entsprechen oder Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt die jeweils aktuelle Datenschutzerklärung.
            </Typography>
        </Box>
     );
}
 
export default Datenschutz;