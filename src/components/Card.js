const Card = ({ src, alt, title, text }) => {
    return (
        <div className="card">
            <div className="icon">
                <img src={src} alt={alt} />
                <h3>{title}</h3>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Card;
