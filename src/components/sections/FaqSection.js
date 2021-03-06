//import components
import Faq from '../components/Faq';

//import styled components
import styled from 'styled-components';
import { StyledLayout } from '../styled-components/styles';

//animation
import { AnimateSharedLayout } from 'framer-motion';
import useScroll from '../../hooks/useScroll';
import { scrollReveal } from '../../framerAnimations';

const faqs = [
    {
        question: 'How do i start?',
        answer: (
            <>
                Lorem ipsum dolor sit amet.
                <br />
                <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cum!
            </>
        ),
    },
    {
        question: 'Daily Schedule',
        answer: (
            <>
                Lorem ipsum dolor sit amet.
                <br />
                <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cum!
            </>
        ),
    },
    {
        question: 'Different Payment Methods',
        answer: (
            <>
                Lorem ipsum dolor sit amet.
                <br />
                <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cum!
            </>
        ),
    },
    {
        question: 'What Products Do You Offer?',
        answer: (
            <>
                Lorem ipsum dolor sit amet.
                <br />
                <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cum!
            </>
        ),
    },
];

const FaqSection = () => {
    const [section, controls] = useScroll();

    return (
        <StyledFaqs ref={section} variants={scrollReveal} animate={controls} initial={controls}>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                {faqs.map(faq => (
                    <Faq question={faq.question} answer={faq.answer} key={faq.question} />
                ))}
            </AnimateSharedLayout>
        </StyledFaqs>
    );
};

const StyledFaqs = styled(StyledLayout)`
    display: block;
    h2 {
        padding-bottom: 4rem;
        font-weight: lighter;
    }
    span {
        display: block;
    }
`;

export default FaqSection;
