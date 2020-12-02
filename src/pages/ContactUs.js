//styled-components
import styled from 'styled-components';

//import animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../framerAnimations';

//scroll to top of page
import useScrollToTop from './../hooks/useScrollToTop';

const ContactUs = () => {
    useScrollToTop();
    return (
        <StyledContacts variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <div className="title">
                <div className="hide">
                    <motion.h2 variants={titleAnimation}>Get In Touch.</motion.h2>
                </div>
            </div>
            <div className="hide">
                <Social variants={titleAnimation}>
                    <Circle />
                    <h2>Send An Email</h2>
                </Social>
            </div>
            <div className="hide">
                <Social variants={titleAnimation}>
                    <Circle />
                    <h2>Social Media</h2>
                </Social>
            </div>
            <div className="hide">
                <Social variants={titleAnimation}>
                    <Circle />
                    <h2>Send Us A Message</h2>
                </Social>
            </div>
        </StyledContacts>
    );
};

const StyledContacts = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    background: #fff;
    .title {
        margin-bottom: 4rem;
        color: black;
    }
    .hide {
        overflow: hidden;
    }
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`;

export default ContactUs;
