import { WindowWidthProps } from "../util/params"
import AboutUsSection from "./AboutUsSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import FotoSection from "./FotoSection"
import GalleryTop from "./GalleryTop"
import HomeSection from "./HomeSection"
import NavBar from "./NavBar"

const HomeScreen = ({windowWidth}: WindowWidthProps) => {

    return (
        <>
            <NavBar windowWidth={windowWidth} />
            <HomeSection />
            <AboutUsSection windowWidth={windowWidth} />
            <GalleryTop windowWidth={windowWidth} />
            <FotoSection windowWidth={windowWidth}/>
            <ContactSection windowWidth={windowWidth} />
            <Footer />
        </>
    )
}

export default HomeScreen