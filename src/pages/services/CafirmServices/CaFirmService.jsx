import React from 'react'
import './CaFirmService.css'

function CaFirmService() {
  return (
    <>
      <section className='services'>
        <h2>Our Services</h2>
        <div className='service-list'>
        <div className='serviceA'>
        <div className='service-item'>
            <h3>Tax Consulting</h3>
            <p>
              We offer comprehensive tax consulting services to help you
              navigate complex tax regulations and maximize your returns.
            </p>
          </div>
          <div className='service-item'>
            <h3>Audit & Assurance</h3>
            <p>
              Our audit and assurance services provide you with the confidence
              and insights you need to make informed business decisions.
            </p>
          </div>
        </div>
        <div className='serviceB'>
        <div className='service-item'>
            <h3>Financial Advisory</h3>
            <p>
              Our financial advisory services are designed to help you manage
              and grow your wealth efficiently and effectively.
            </p>
          </div>
          <div className='service-item'>
            <h3>Business Consulting</h3>
            <p>
              We offer strategic business consulting services to help you
              optimize your operations and achieve your business goals.
            </p>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default CaFirmService
