import Faq from './Faq';

const FaqSection = () => {
    const faqs = [
        {
            question: 'How do i start?',
            answer: (
                <>
                    Lorem ipsum dolor sit amet.
                    <br />
                    <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cum!
                </>
            )
        },
        {
            question: 'Daily Schedule',
            answer: (
                <>
                    Lorem ipsum dolor sit amet.
                    <br />
                    <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cum!
                </>
            )
        },
        {
            question: 'Different Payment Methods',
            answer: (
                <>
                    Lorem ipsum dolor sit amet.
                    <br />
                    <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cum!
                </>
            )
        },
        {
            question: 'What Products Do You Offer?',
            answer: (
                <>
                    Lorem ipsum dolor sit amet.
                    <br />
                    <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cum!
                </>
            )
        }
    ];

    return (
        <div className="faq">
            {faqs.map(faq => (
                <Faq question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FaqSection;
