import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import FaqSection from '../components/sections/FaqSection';

//import animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../framerAnimations';

//scroll to top of page
import useScrollToTop from './../hooks/useScrollToTop';

const AboutUs = () => {
    useScrollToTop();
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
};

export default AboutUs;
