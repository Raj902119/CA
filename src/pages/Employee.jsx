import emp1 from "../images/emp1.jpg";
import emp2 from "../images/emp2.jpg";
import emp3 from "../images/emp3.jpg";
import emp4 from "../images/emp4.jpg";
import emp5 from "../images/emp5.jpg";
// import emp6 from "../images/emp6.jpg";
// import Img from '../images/carrer.jpg';
// import Banner from '../component/ui/Banner';
import './employee.css';
import React, { useState, useEffect, useRef } from 'react';

function Employee() {
    const employees = [
        { image: emp1, name: "Employee 1", position: "Position 1" },
        { image: emp2, name: "Employee 2", position: "Position 2" },
        { image: emp3, name: "Employee 3", position: "Position 3" },
        { image: emp4, name: "Employee 4", position: "Position 4" },
        { image: emp5, name: "Employee 5", position: "Position 5" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % employees.length);
        };

        timeoutRef.current = setInterval(nextSlide, 2500);

        return () => {
            if (timeoutRef.current) {
                clearInterval(timeoutRef.current);
            }
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % employees.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? employees.length - 1 : prevIndex - 1
        );
    };

    const getSlidesToShow = () => {
        const slides = [];
        for (let i = 0; i < 3; i++) {
            const adjustedIndex = (currentIndex + i) % employees.length;
            slides.push(employees[adjustedIndex]);
        }
        return slides;
    };

    return (
        <>
            {/* <Banner
                imageUrl={Img}
                breadcrumb='Home > Career'
                headline='Employee'
            /> */}
            <div className="emp">
                <div className="emtext"> <h2><span>Our </span>Team</h2>
                </div>
                <div className="slider">
                    <button onClick={prevSlide} className="slider-button">
                        &#10094;
                    </button>
                    <div className="slider-content">
                        {getSlidesToShow().map((employee, index) => (
                            <div className={`slide ${index === 1 ? 'center' : ''}`} key={index}>
                                <img src={employee.image} alt={`Slide ${index}`} />
                                <h1>{employee.name}</h1>
                                <p>{employee.position}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={nextSlide} className="slider-button">
                        &#10095;
                    </button>
                </div>
            </div>
        </>
    );
}

export default Employee;
