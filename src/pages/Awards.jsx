import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aword1 from "../images/Vishwa-Maitri-Sangha.png"
import aword2 from "../images/maharashtra-rajya-marathi-patrakar-sangha.png"
import aword3 from "../images/Suryadatta.png"

import './Aword.css'
// import { Link } from 'react-router-dom';

function Awards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            {/* start awords */}
            <div className="container-fluid py-5 award">
                <div className="row">
                    <div className="col-12 py-4 pb-5 text-center">
                        <h2>Awards</h2>
                    </div>
                    <div className="col-12">
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className="slider-item">
                                    <div className="row">
                                        <div className="col-12 col-lg-6  aimg">
                                            <img src={aword1} className=' aimg' alt="Image 1" />
                                        </div>
                                        <div className="col-12 col-lg-6 pt-5 ">
                                            <p> 2018-19 : Facilitated for BNI EXELLENCE tenure green pin holder . </p>
                                            <button to="#" class="DownloadBrochureBtn ReadMore mt-4"> Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item ">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 aimg">
                                            <img src={aword2} className=' aimg' alt="Image 1 " />
                                        </div>
                                        <div className="col-12 col-lg-6 pt-5">
                                            <p> Awarded by Shree Parmerkar Institute for research,innovation and technology. </p>
                                            <button to="#" class="DownloadBrochureBtn ReadMore mt-4"> Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 aimg">
                                            <img src={aword3} className=' aimg' alt="Image 1" />
                                        </div>
                                        <div className="col-12 col-lg-6 pt-5">
                                            <p> Vishwa Maitri Sangha BharatVarsh recognized contribution in Education Sector Rashtra Gaurav Sanman on the Occasion of Azadi Ka Amrit Mahotsav (2022)</p>
                                            <button to="#" class="DownloadBrochureBtn ReadMore mt-4"> Read More</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Add more items as needed */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* end Awords */}
        </>
    )
}
export default Awards;