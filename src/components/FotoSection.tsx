import ImageGallery from "./ImageGallery";
import { gallery1, gallery2 } from "../util/inputs";

interface FotoSectionProps {
    windowWidth: number;
}

const FotoSection = ({windowWidth}: FotoSectionProps) => {

    const isSmallWindow = windowWidth <= 1500;
    windowWidth

    return ( 
        <div id="FOTOS" style={{width: '100vw', borderTop: '2px solid black',
            // , paddingBottom: '2px'
            paddingLeft: isSmallWindow ? '0%' : '20%',
            paddingRight: isSmallWindow ? '0%' : '20%',
        }}>
            <ImageGallery inputs={gallery1} />
            <ImageGallery inputs={gallery2} />
        </div>
     );
}
 
export default FotoSection;