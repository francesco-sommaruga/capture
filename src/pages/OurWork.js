//import styled components
import styled from 'styled-components';

//import components
import Movie from '../components/components/Movie';

const OurWork = ({ movies }) => {
    return (
        <StyledWork>
            {movies.map(movie => (
                <Movie title={movie.title} src={movie.mainImg} alt={movie.title} link={movie.url} />
            ))}
        </StyledWork>
    );
};

const StyledWork = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

export default OurWork;
