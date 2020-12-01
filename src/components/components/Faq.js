//import styled components
import styled from 'styled-components';

const Faq = ({ question, answer }) => {
    return (
        <StyledFaq>
            <div className="question">
                <h4>{question}</h4>
            </div>
            <div className="answer">
                <p>{answer}</p>
            </div>
            <div className="faq-line"></div>
        </StyledFaq>
    );
};

const StyledFaq = styled.div`
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        width: 100%;
        margin-bottom:4rem;
    }
    .question {
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default Faq;
