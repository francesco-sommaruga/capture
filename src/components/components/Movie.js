//import Link for react-router
import { Link } from 'react-router-dom';

//import styled components
import styled from 'styled-components';

//import animations
import { motion } from 'framer-motion';
import { fade, photoAnimation, lineAnimation, onlyStagger } from '../../framerAnimations';
import useScroll from '../../hooks/useScroll';

const Movie = ({ title, src, alt, link }) => {
    const [element, controls] = useScroll();

    return (
        <StyledMovie ref={element} variants={onlyStagger} animate={controls} initial={controls}>
            <motion.h2 variants={fade}>{title}</motion.h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to={link}>
                <div className="hide">
                    <motion.img variants={photoAnimation} src={src} alt={alt} />
                </div>
            </Link>
        </StyledMovie>
    );
};

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    h2 {
        padding: 1rem 0;
    }
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    .hide {
        overflow: hidden;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default Movie;
