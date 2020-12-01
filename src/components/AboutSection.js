//import styled components
import styled from 'styled-components';

//images
import home1 from '../img/home1.png';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>
                        Your <span>dreams</span> come
                    </h2>
                </div>
                <div className="hide">
                    <h2>True</h2>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you have. We have professionals with
                    amazing skills.
                </p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="guy with a camera" />
            </StyledImage>
        </StyledAbout>
    );
};

//styled components
const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
    .hide{
        overflow: hidden;
    }
`;
const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export default AboutSection;
