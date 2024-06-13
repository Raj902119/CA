import egallary1 from '../images/Group2434.png'
import egallary2 from '../images/Group2435.png'
import egallary3 from '../images/Group2436.png'
import egallary4 from '../images/Group2437.png'
import egallary5 from '../images/Group2438.png'
import './Eventgallary.css'
function Eventgallary() {
    return (
        <>
            {/* <!-- Our Gallery --> */}
            <section className='Eventgallary'>
                <div class="text-center">
                    <h2><span>Even</span>ts Gallery</h2>
                </div>
                <ul class="Gallery">
                    <li class="Img1">
                        <img src={egallary1} alt="" title="" class="img-fluid" />
                    </li>
                    <li class="Img2">
                        <img src={egallary2} alt="" title="" class="img-fluid" />
                    </li>
                    <li class="Img3">
                        <img src={egallary3} alt="" title="" class="img-fluid" />
                    </li>
                    <li class="Img4">
                        <img src={egallary4} alt="" title="" class="img-fluid" />
                    </li>
                    <li class="Img5">
                        <img src={egallary5} alt="" title="" class="img-fluid" />
                    </li>
                </ul>
                <div class="GalleryMob">
                    <img src={egallary1} alt="" title="" class="img-fluid" />
                    <img src={egallary2} alt="" title="" class="img-fluid" />
                    <img src={egallary3} alt="" title="" class="img-fluid" />
                    <img src={egallary4} alt="" title="" class="img-fluid" />
                    <img src={egallary5} alt="" title="" class="img-fluid" />
                </div>
            </section>
            {/* <!-- End Our Gallery --> */}

        </>
    )
}
export default Eventgallary;