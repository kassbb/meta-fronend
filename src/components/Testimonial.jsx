const Testimonial = ({ image, firstName, lastName, text }) => (
    <div className="termonial-item">
        <div className="item">
            <div className="star"></div>
            <div className="item-img">
                <img src={image} height={46} width={46} />
                <div>
                    <h5>{firstName}</h5>
                    <h5>{lastName}</h5>
                </div>
            </div>
            <div className="item-content">
                <p>{text}</p>
            </div>
        </div>
    </div>
);

export default Testimonial;