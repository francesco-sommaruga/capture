//import Link for react-router
import { Link } from 'react-router-dom';

//import styled components
import styled from 'styled-components';

const Movie = ({ title, src, alt, link }) => {
    return (
        <StyledMovie>
            <h2>{title}</h2>
            <div className="line"></div>
            <Link to={link}>
                <img src={src} alt={alt} />
            </Link>
        </StyledMovie>
    );
};

const StyledMovie = styled.div`
    padding-bottom: 10rem;
    h2 {
        padding: 1rem 0;
    }
    .line {
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default Movie;
