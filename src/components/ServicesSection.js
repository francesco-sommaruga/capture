//import components
import Card from './Card';

//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

//import images

import home2 from '../img/home2.png';

const ServicesSection = () => {
    const cards = [
        {
            src: clock,
            alt: 'a clock',
            title: 'Efficiency',
            text: 'Lorem ipsum dolor sit amet.'
        },
        {
            src: teamwork,
            alt: 'teamwork',
            title: 'Teamwork',
            text: 'Lorem ipsum dolor sit amet.'
        },
        {
            src: diaphragm,
            alt: 'diaphragm',
            title: 'Diaphragm',
            text: 'Lorem ipsum dolor sit amet.'
        },
        {
            src: money,
            alt: 'money',
            title: 'Affordable',
            text: 'Lorem ipsum dolor sit amet.'
        }
    ];
    return (
        <div className="services">
            <div className="description">
                <h2>
                    High <span>quality</span> services
                </h2>
                <div className="cards">
                    {cards.map(card => (
                        <Card src={card.src} alt={card.alt} title={card.title} text={card.text} />
                    ))}
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="camera shooting" />
            </div>
        </div>
    );
};

export default ServicesSection;
