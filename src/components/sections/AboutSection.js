//import styled components
import { StyledLayout, StyledDescription, StyledImage } from '../styled-components/styles';

//images
import home1 from '../../img/home1.png';

const AboutSection = () => {
    return (
        <StyledLayout>
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
        </StyledLayout>
    );
};

export default AboutSection;
