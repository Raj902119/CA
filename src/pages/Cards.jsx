import card1 from '../images/istockphoto-1180187740-612x612.jpg'
import card2 from '../images/istockphoto-1181250359-612x612.jpg'
import card3 from '../images/istockphoto-499517325-612x612.jpg'
import card4 from '../images/istockphoto-1455167765-612x612.jpg'
import './cards.css'
function Cards() {
    return (
        <>
            <div className="Container cards">
                <div className="row mx-auto p-5 ">
                    <div className="col-12 col-md-6 col-lg-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card text-bg-dark cardhover w-100">
                            <img src={card1} class="card-img " alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                {/* <Link class="nav-link text-dark" to='#'>more info</Link> */}
                                <button type="button" class="btn btn-outline-secondary text-white">Primary</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card text-bg-dark cardhover w-100">
                            <img src={card2} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <button type="button" class="btn btn-outline-secondary text-white">Primary</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card text-bg-dark cardhover w-100">
                            <img src={card3} class="card-img " alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <button type="button" class="btn btn-outline-secondary text-white">Primary</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <div class="card text-bg-dark cardhover w-100">
                            <img src={card4} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <button type="button" class="btn btn-outline-secondary text-white">Primary</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;