const Faq = ({ question, answer }) => {
    return (
        <>
            <div className="question">
                <h4>{question}</h4>
            </div>
            <div className="answer">
                <p>{answer}</p>
            </div>
        </>
    );
};

export default Faq;
