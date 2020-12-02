//import styled components
import styled from 'styled-components';

//import components
import Movie from '../components/components/Movie';

//import animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../framerAnimations';

const OurWork = ({ movies }) => {
    return (
        <StyledWork variants={pageAnimation} initial="hidden" animate="show" exit="exit">
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

export default OurWork;
