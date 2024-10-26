const HomeSection = () => {
    return ( 
        // <div id="HOME" style={{ 
        //     // backgroundImage: 'url(Q-logo.png)', 
        //     backgroundImage: 'url(Logo_M&A_Taupe.jpg)', 
        //     width: '100vw', 
        //     height: 'auto',
        //     paddingTop: '64px',
        //     // backgroundSize: 'cover', // oder 'contain', je nach Bedarf
        //     // backgroundPosition: 'center',
        //     borderBottom: '2px solid black'
        // }} />

        // <div id="HOME" style={{ 
        //     backgroundImage: 'url(Logo_M&A_Taupe.jpg)', 
        //     backgroundSize: 'contain', // Hintergrundbild wird in voller Breite zentriert angezeigt
        //     backgroundRepeat: 'no-repeat', // Hintergrundbild wird nicht wiederholt
        //     backgroundPosition: 'center', // Hintergrundbild wird zentriert positioniert
        //     width: '100vw', // Volle Breite des Viewports
        //     height: '100vh', // Volle Höhe des Viewports
        //     paddingTop: '64px', // Platz oberhalb des Hintergrundbilds
        //     borderBottom: '2px solid black' // Untere Begrenzung mit schwarzer Linie
        // }} />

        // <div id="HOME" style={{ 
        //     backgroundImage: 'url(Logo_M&A_Taupe.jpg)', 
        //     backgroundSize: 'cover', // Hintergrundbild wird vollständig skaliert, um den Container zu bedecken
        //     backgroundRepeat: 'no-repeat', // Hintergrundbild wird nicht wiederholt
        //     backgroundPosition: 'center', // Hintergrundbild wird zentriert positioniert
        //     maxWidth: '1000px',
        //     width: '100vw', // Volle Breite des Viewports
        //     height: 'calc(100vh - 64px)', // Automatische Höhe entsprechend dem Seitenverhältnis des Hintergrundbilds
        //     marginTop: '64px', // Platz oberhalb des Hintergrundbilds
        //     borderBottom: '2px solid black' // Untere Begrenzung mit schwarzer Linie
        // }} />

        // <div id="HOME" style={{ 
        //     backgroundImage: 'url(Logo_M&A_Taupe.jpg)', 
        //     backgroundSize: '100% auto', // Hintergrundbild deckt die volle Breite ab, Höhe wird automatisch angepasst
        //     backgroundRepeat: 'no-repeat', // Hintergrundbild wird nicht wiederholt
        //     backgroundPosition: 'center', // Hintergrundbild wird horizontal zentriert
        //     width: '100vw', // Volle Breite des Viewports
        //     minHeight: '100px', // Mindesthöhe des Containers (kann angepasst werden)
        //     marginTop: '64px', // Platz oberhalb des Hintergrundbilds für die NavBar
        //     borderBottom: '2px solid black' // Untere Begrenzung mit schwarzer Linie
        // }} />

        // <div id="HOME" style={{ 
        //     backgroundImage: 'url(Logo_M&A_Taupe.jpg)', 
        //     backgroundSize: 'contain', // Hintergrundbild wird in voller Breite zentriert angezeigt
        //     backgroundRepeat: 'no-repeat', // Hintergrundbild wird nicht wiederholt
        //     backgroundPosition: 'center', // Hintergrundbild wird horizontal zentriert
        //     width: '100vw', // Volle Breite des Viewports
        //     minHeight: '100px', // Mindesthöhe des Containers (kann angepasst werden)
        //     height: 'auto',
        //     marginTop: '64px', // Platz oberhalb des Hintergrundbilds für die NavBar
        //     borderBottom: '2px solid black' // Untere Begrenzung mit schwarzer Linie
        // }} />

        // <div id="HOME" style={{ 
        //     backgroundImage: 'url(Logo_M&A_Taupe.jpg)', 
        //     //backgroundSize: 'cover', // Hintergrundbild wird so skaliert, dass es den gesamten Container abdeckt
        //     backgroundRepeat: 'no-repeat', // Hintergrundbild wird nicht wiederholt
        //     backgroundPosition: 'center', // Hintergrundbild wird horizontal zentriert
        //     width: '100vw', // Volle Breite des Viewports
        //     minHeight: '100vh', // Mindesthöhe des Containers entspricht der Viewport-Höhe
        //     marginTop: '64px', // Platz oberhalb des Hintergrundbilds für die NavBar
        //     borderBottom: '2px solid black' // Untere Begrenzung mit schwarzer Linie
        // }} />

        // <div id="HOME" style={{ 
        //     backgroundImage: 'url(Logo_M&A_Taupe.jpg)', 
        //     backgroundSize: 'auto 100%', // Hintergrundbild wird so skaliert, dass die Höhe 100% des Containers ist und die Breite dynamisch angepasst wird
        //     backgroundRepeat: 'no-repeat', // Hintergrundbild wird nicht wiederholt
        //     backgroundPosition: 'center', // Hintergrundbild wird horizontal und vertikal zentriert
        //     width: '100vw', // Volle Breite des Viewports
        //     minHeight: 'calc(100vh - 64px)', // Mindesthöhe des Containers ist die Viewport-Höhe
        //     marginTop: '64px', // Platz oberhalb des Hintergrundbilds für die NavBar
        //     borderBottom: '2px solid black' // Untere Begrenzung mit schwarzer Linie
        // }} />


        <div id="HOME" style={{ 
            backgroundImage: 'url(Logo_M&A_Taupe.jpg)', 
            backgroundSize: 'contain', // Hintergrundbild wird so skaliert, dass es innerhalb des Containers vollständig sichtbar ist
            backgroundRepeat: 'no-repeat', // Hintergrundbild wird nicht wiederholt
            backgroundPosition: 'center', // Hintergrundbild wird horizontal und vertikal zentriert
            width: '100%', // Volle Breite des Viewports
            height: 'auto', // Automatische Höhe basierend auf der Breite
            minHeight: 'calc(100vh - 64px)', // Mindesthöhe des Containers abzüglich 64px für den Platz oberhalb des Bildes
            marginTop: '64px', // Platz oberhalb des Hintergrundbilds für die NavBar
            borderBottom: '2px solid black' // Untere Begrenzung mit schwarzer Linie
        }} />

     );
}
 
export default HomeSection;