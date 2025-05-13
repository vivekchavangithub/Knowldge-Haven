
const Banner = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://media.istockphoto.com/id/1368214141/vector/realistic-3d-mobilephone-with-shopping-carts-and-shopping-bags-online-store-online-shopping.jpg?s=2048x2048&w=is&k=20&c=YX5JrIZhA0HYvTdyhmEByyTu5sBt0HpJr24wCoBdrl4=" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://media.istockphoto.com/id/1414987940/photo/shopping-cart-yellow-color-and-gift-and-shopping-bag-come-out-of-yellow-smartphone.jpg?s=2048x2048&w=is&k=20&c=Y81XEQjhdfb_5QX64WhXNBsJZHPWaGmBkr4_-cPnGr8=" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://media.istockphoto.com/id/1425853184/photo/smartphone-sign-with-shopping-cart-giftbox-bag-3d-render-concept-for.jpg?s=2048x2048&w=is&k=20&c=c-6u6o_VT9Jkrp5LruBCuUzAOO-m6CnFzHibVGPSMm8=" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner