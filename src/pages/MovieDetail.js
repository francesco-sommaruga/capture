import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

//import styled components
import styled from 'styled-components';

//import components
import Award from '../components/components/Award';

//import animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../framerAnimations';

const MovieDetail = ({ movies }) => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter(stateMovie => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <StyledDetails variants={pageAnimation}  initial="hidden" animate="show" exit="exit">
                    <StyledHeadline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie.title} />
                    </StyledHeadline>
                    <StyledAwards>
                        {movie.awards.map(award => (
                            <Award title={award.title} description={award.description} key={award.title} />
                        ))}
                    </StyledAwards>
                    <StyledImage>
                        <img src={movie.secondaryImg} alt={movie.title} />
                    </StyledImage>
                </StyledDetails>
            )}
        </>
    );
};

const StyledDetails = styled(motion.div)`
    color: white;
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 90vh;
        object-fit: cover;
    }
`;
const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const StyledImage = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

export default MovieDetail;
