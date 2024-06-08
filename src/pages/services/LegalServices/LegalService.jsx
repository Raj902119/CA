import React from 'react';
import "../CafirmServices/CaFirmService.css";

function LegalService() {
  return (
    <>
      <section className='services'>
        <h2>Legal Services</h2>
        <div className='service-list'>
          <div className='serviceA'>
            <div className='service-item'>
              <h3>Corporate Law</h3>
              <p>

                Our corporate law services ensure your business complies with all
                legal regulations and standards.
              </p>
            </div>
            <div className='service-item'>
              <h3>Contract Drafting</h3>
              <p>
                We provide professional contract drafting services to protect your
                interests in business agreements.
              </p>
            </div>
            <div className='service-item'>
              <h3>Intellectual Property</h3>
              <p>
                Protect your intellectual property with our comprehensive IP law
                services.
              </p>
            </div>
          </div>   
          <div className='serviceB'>
            <div className='service-item'>
              <h3>Employment Law</h3>
              <p>
                Our employment law services help you navigate the complexities of
                labor regulations.
              </p>
            </div>
            <div className='service-item'>
              <h3>Litigation Support</h3>
              <p>
                We offer expert litigation support to assist you in legal disputes
                and proceedings.
              </p>
            </div>
            <div className='service-item'>
              <h3>Regulatory Compliance</h3>
              <p>
                Ensure your business meets all regulatory requirements with our
                compliance services.
              </p>
            </div>
          </div>  
        </div>
      </section>
    </>
  );
}

export default LegalService;
