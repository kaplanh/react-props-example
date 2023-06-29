const Card = ({ id,name, imgURL, phone, email }) => {
    return (
        <div key={id} className="card">
            <div className="top">
                <h2 className="name">{name}</h2>
                <img className="circle-img" src={imgURL} alt={name} />
            </div>
            <div className="bottom">
                <p className="info">{phone}</p>
                <p className="info">{email}</p>
            </div>
        </div>
    );
};

export default Card;
