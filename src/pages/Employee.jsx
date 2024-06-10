import emp2 from '../images/IMG-20231123-WA0057.jpg'
import emp3 from '../images/IMG-20231123-WA0061.jpg'
import emp4 from '../images/IMG-20231123-WA0064.jpg'
import emp6 from '../images/IMG-20231123-WA0066.jpg'
import emp8 from '../images/IMG-20231123-WA0072.jpg'
import './employee.css'
function Employee(){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <>
           {/* start Employee */}
           hi my

           <div className="container-fluit Employee">
                    <div className="row">
                        <div className="col-12 text-center pb-5">
                            <h2>Employee</h2>
                        </div>
                        <div className="col-12 mx-auto shado">
                            <Carousel responsive={responsive}>

                                <div class="card esho border  rounded-4  mx-auto shadow bg-body-tertiary rounded w-75" >
                                    <img src={emp2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Emp Name</h5>
                                        <p class="card-text">Post:</p>
                                       
                                    </div>
                                </div>

                                <div class="card esho border  rounded-4  mx-auto  shadow bg-body-tertiary rounded w-75">
                                    <img src={emp3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Emp Name</h5>
                                        <p class="card-text">Post:</p>
                                    </div>
                                </div>
                                <div class="card esho border  rounded-4  mx-auto  shadow  bg-body-tertiary rounded w-75" >
                                    <img src={emp4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Emp Name</h5>
                                        <p class="card-text">Post:</p>
                                    </div>
                                </div>
                                <div class="card esho border  rounded-4  mx-auto  shadow  bg-body-tertiary rounded w-75">
                                    <img src={emp6} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Emp Name</h5>
                                        <p class="card-text">Post:</p>
                                    </div>
                                </div>
                                <div class="card esho border  rounded-4  mx-auto  shadow bg-body-tertiary rounded w-75">
                                    <img src={emp8} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Emp Name</h5>
                                        <p class="card-text">Post:</p>
                                    </div>
                                </div>
                            </Carousel>;
                        </div>
                    </div>
                </div>

                {/* end Employee */}
        </>
    )
}
export default Employee;