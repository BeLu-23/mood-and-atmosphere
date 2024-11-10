import ImageGallery from "./ImageGallery";
import { 
    gallery10, gallery11, 
    gallery12, 
    gallery3, gallery4, 
    gallery5, gallery6, gallery7, gallery8, gallery9 
} from "../util/inputs";
import { smallWindow, WindowWidthProps } from "../util/params";

const FotoSection = ({windowWidth}: WindowWidthProps) => {

    const isSmallWindow = windowWidth <= smallWindow;

    return ( 
        <div 
            style={{width: '100vw', 
            paddingLeft: isSmallWindow ? '0%' : '20%',
            paddingRight: isSmallWindow ? '0%' : '20%',
        }}>
            <ImageGallery inputs={gallery3} />
            <ImageGallery inputs={gallery4} />
            <ImageGallery inputs={gallery5} />
            <ImageGallery inputs={gallery6} />
            <ImageGallery inputs={gallery7} />
            <ImageGallery inputs={gallery8} />
            <ImageGallery inputs={gallery9} />
            <ImageGallery inputs={gallery10} />
            <ImageGallery inputs={gallery11} />
            <ImageGallery inputs={gallery12} />
        </div>
     );
}
 
export default FotoSection;