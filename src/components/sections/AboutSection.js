//animations
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../../framerAnimations';

//import styled components
import { StyledLayout, StyledDescription, StyledImage } from '../styled-components/styles';

//images
import home1 from '../../img/home1.png';

//components
import Wave from '../components/Wave';

const AboutSection = () => {
    return (
        <StyledLayout>
            <StyledDescription>
                <motion.div className="title">
                    <div className="hide">
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnimation}>
                            Your <span>dreams</span> come
                        </motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnimation}>True</motion.h2>
                    </div>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you have. We have professionals with
                    amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnimation} src={home1} alt="guy with a camera" />
            </StyledImage>
            <Wave />
        </StyledLayout>
    );
};

export default AboutSection;
