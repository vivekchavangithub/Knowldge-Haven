

function Ban () {
    return(
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2024/06/12/08/21/eye-8824773_640.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2024/04/24/06/59/ai-generated-8716771_640.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/157579942/photo/jaipur-city-palace-wall.jpg?s=612x612&w=0&k=20&c=4iSSy6_W11TAVK_QDYozGNbSlB7pCPDWMFot5a_8HDE=" className="d-block w-100" alt="..."/>
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

export default Ban;