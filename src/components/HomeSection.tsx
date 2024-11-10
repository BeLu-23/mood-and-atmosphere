const HomeSection = () => {
    return ( 
        <div id="HOME" style={{ 
            backgroundImage: 'url(Logo_M&A_Taupe.jpg)', 
            backgroundSize: 'contain', // Hintergrundbild wird so skaliert, dass es innerhalb des Containers vollständig sichtbar ist
            backgroundRepeat: 'no-repeat', // Hintergrundbild wird nicht wiederholt
            backgroundPosition: 'center', // Hintergrundbild wird horizontal und vertikal zentriert
            width: '100%', // Volle Breite des Viewports
            height: 'auto', // Automatische Höhe basierend auf der Breite
            minHeight: 'calc(100vh - 64px)', // Mindesthöhe des Containers abzüglich 64px für den Platz oberhalb des Bildes
            marginTop: '64px', // Platz oberhalb des Hintergrundbilds für die NavBar
            // borderBottom: '2px solid black' // Untere Begrenzung mit schwarzer Linie
        }} />
     );
}
 
export default HomeSection;