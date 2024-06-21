import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import flogo from '../images/footer-logo.png';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="ca-footer">
    <div className="footer-container">
        <div className="footer-row">
            <div className="footer-item fabout">
                <img src={flogo} className="img-responsive" alt="Lohia Jain Group" />
                <ul className="ca-list ca-social-link">
                 
                    <li><a href="https://www.facebook.com/lohiajain" target="_blank" rel="noopener noreferrer"><FaFacebookF className='icons'/></a></li>
                            <li><a href="https://www.linkedin.com"><FaLinkedinIn className='icons'/></a></li>
                            <li><a href="https://www.instagram.com"><FaInstagram className='icons'/></a></li>
                            <li><a href="https://www.youtube.com"><FaYoutube className='icons'/></a></li>

                    {/* <li><a href="mailto:[email&#160;protected]"><i className="fa fa-envelope"></i></a></li> */}
                </ul>
            </div>
            <div className="footer-item quick-link">
                <h4 className="ca-heading text-uppercase">Quick link</h4>
                <ul className="ca-list ca-quick-link text-capitalize">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="career">Career</a></li>
                    <li><a href="gallary">Gallary</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="Achievements">Achievements</a></li>
                    <li><a href="profile">Profile</a></li>
                    <li><a href="newsblogs">News&Blogs</a></li>

                </ul>
            </div>
            <div className="footer-item office">
                <h4 className="ca-heading text-uppercase">Office</h4>
                <ul className="ca-list ca-office">
                    <li><i className="fa fa-map"></i>2nd Floor, Shree Krishna, 7, Opp Kiosk Koffee, Shirole Road, off Fergusson College Road, Pune, Maharashtra 411004</li>
                    <li><i className="fa fa-envelope"></i><a href="mailto: cadhirajostwal@gmail.com">[email]</a></li>
                    <li><i className="fa fa-phone"></i><a href="https://wa.me/+917020045454">+91 7020045454</a></li>
                    <li><i className="fa fa-mobile"></i>+91 7020045454</li>
                </ul>
            </div>
            <div className="footer-item latest-works">
                <h4 className="ca-heading text-uppercase">Locate Us</h4>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1359398956106!2d73.83913731120742!3d18.52275808249856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff534505583%3A0x49b15410f40cd6e2!2sCA%20Dhiraj%20Ostwal%20%7C%20Chartered%20Accountant%20%7C%20Strategy%20Coach!5e0!3m2!1sen!2sin!4v1718954796268!5m2!1sen!2sin" 
                    width="100%"
                    height="230px"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Lohia Jain Group Location"
                ></iframe>
            </div>
        </div>
    </div>
    <div className="footer-bot">
        <div className="footer-container">
            <p className="ca-text">Design by<span className="ca-text-color-yellow-1">EventDTL</span> <span className="ca-text-color-yellow-1">Pune</span>. </p>
            <p className="ca-text"> All Rights Reserved.</p>
        </div>
    </div>
</footer>
  );
};

export default Footer;
