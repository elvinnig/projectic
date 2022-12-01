import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Features from "../components/Features";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const Homepage = () => {
    return (
        <>
        <Navbar />
        <LandingPage />
        <Features />
        <AboutUs />
        <ContactUs />
        <Footer />
        </>
    )
};

export default Homepage;