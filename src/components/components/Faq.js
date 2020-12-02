import useToggle from '../../hooks/useToggle';

//import styled components
import styled from 'styled-components';

//animations
import { motion } from 'framer-motion';

const Faq = ({ question, answer }) => {
    const [toggle, handleToggle] = useToggle(false);
    return (
        <StyledFaq layout>
            <motion.div layout className="question" onClick={handleToggle}>
                <h4>{question}</h4>
            </motion.div>
            <div className="answer">{toggle && <p>{answer}</p>}</div>
            <div className="faq-line"></div>
        </StyledFaq>
    );
};

const StyledFaq = styled(motion.div)`
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        width: 100%;
        margin-bottom: 4rem;
    }
    .question {
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default Faq;
