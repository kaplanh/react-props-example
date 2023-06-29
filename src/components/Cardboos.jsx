const Cardboos = ({ name, imgURL, phone, email }) => {
    return (
        <div className="col col-sm-6 col-md-4 col-lg-3 border ">
            <div className="text-center">
                <h2 className="text-center text-danger fs-4">{name}</h2>
                <img
                    className="text-center bg-danger rounded-circle"
                    src={imgURL}
                    alt={name}
                />
            </div>
            <div className="text-center">
                <p className="text-success">{phone}</p>
                <p className="text-success">{email}</p>
            </div>
        </div>
    );
};

export default Cardboos;
