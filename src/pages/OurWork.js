//import styled components
import styled from 'styled-components';

//import components
import Movie from '../components/components/Movie';

//import animations
import { motion } from 'framer-motion';
import { pageAnimation, rainbowAnimation } from '../framerAnimations';

const OurWork = ({ movies }) => {
    return (
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Frame1 variants={rainbowAnimation} />
            <Frame2 variants={rainbowAnimation} />
            <Frame3 variants={rainbowAnimation} />
            <Frame4 variants={rainbowAnimation} />
            {movies.map(movie => (
                <Movie title={movie.title} src={movie.mainImg} alt={movie.title} link={movie.url} />
            ))}
        </StyledWork>
    );
};

const StyledWork = styled(motion.div)`
    background: #fff;
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

//rainbow animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;
