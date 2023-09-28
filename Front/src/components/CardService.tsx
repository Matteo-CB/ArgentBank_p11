const CardService = ({data}: any): any => {
    return (
        <div className="feature-item">
            <img src={data.src} alt={data.alt} className="feature-icon" />
            <h3 className="feature-item-title">{data.title}</h3>
            <p>{data.content}</p>
        </div>
    );
};

export default CardService;