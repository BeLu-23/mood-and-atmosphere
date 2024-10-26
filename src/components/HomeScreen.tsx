import AboutUsSection from "./AboutUsSection"
import Footer from "./Footer"
import FotoSection from "./FotoSection"
import HomeSection from "./HomeSection"
import NavBar from "./NavBar"

interface HomeScreenProps {
    windowWidth: number;
}

const HomeScreen = ({windowWidth}: HomeScreenProps) => {

    return (
        <>
            <NavBar windowWidth={windowWidth} />
            <HomeSection />
            <AboutUsSection windowWidth={windowWidth} />
            <FotoSection windowWidth={windowWidth}/>
            <Footer />
        </>
    )
}

export default HomeScreen