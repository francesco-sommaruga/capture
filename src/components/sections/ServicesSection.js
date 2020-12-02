//import components
import Card from '../components/Card';

//import styled components
import styled from 'styled-components';
import { StyledLayout, StyledDescription, StyledImage } from '../styled-components/styles';

//import icons
import clock from '../../img/clock.svg';
import diaphragm from '../../img/diaphragm.svg';
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg';

//import images
import home2 from '../../img/home2.png';

//animations
import useScroll from '../../hooks/useScroll';
import { scrollReveal } from '../../framerAnimations';

const cards = [
    {
        src: clock,
        alt: 'a clock',
        title: 'Efficiency',
        text: 'Lorem ipsum dolor sit amet.',
    },
    {
        src: teamwork,
        alt: 'teamwork',
        title: 'Teamwork',
        text: 'Lorem ipsum dolor sit amet.',
    },
    {
        src: diaphragm,
        alt: 'diaphragm',
        title: 'Diaphragm',
        text: 'Lorem ipsum dolor sit amet.',
    },
    {
        src: money,
        alt: 'money',
        title: 'Affordable',
        text: 'Lorem ipsum dolor sit amet.',
    },
];

const ServicesSection = () => {
    const [section, controls] = useScroll();

    return (
        <StyledServices ref={section} variants={scrollReveal} animate={controls} initial={controls}>
            <StyledDescription>
                <h2>
                    High <span>quality</span> services
                </h2>
                <StyledCards>
                    {cards.map(card => (
                        <Card src={card.src} alt={card.alt} title={card.title} text={card.text} />
                    ))}
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="camera shooting" />
            </StyledImage>
        </StyledServices>
    );
};

const StyledServices = styled(StyledLayout)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default ServicesSection;
