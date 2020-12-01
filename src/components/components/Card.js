//import styled components
import styled from 'styled-components';

const Card = ({ src, alt, title, text }) => {
    return (
        <StyledCard>
            <div className="icon">
                <img src={src} alt={alt} />
                <h3>{title}</h3>
            </div>
            <p>{text}</p>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    flex-basis: 16rem;
    .icon {
        display: flex;
        align-items: center;
    }
    h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
    p {
        width: 80%;
    }
`;
export default Card;
