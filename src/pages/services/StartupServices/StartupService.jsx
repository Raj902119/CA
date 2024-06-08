import React from 'react'
import '../CafirmServices/CaFirmService.css'
import logo from './startup.jpg'
import Banner from '../../../component/ui/Banner'
function StartupService() {
  return (
    <>
      <Banner
        imageUrl={logo}
        breadcrumb='Home > Startup'
        headline='Startup Services'
      />{' '}
      <section className='services'>
        <h2>Startup Services</h2>
        <div className='service-list'>
          <div className='serviceA'>
            <div className='service-item'>
              <h3>Business Planning</h3>
              <p>
                We provide comprehensive business planning services to help your
                startup succeed.
              </p>
            </div>
            <div className='service-item'>
              <h3>Funding Assistance</h3>
              <p>
                Get assistance with securing funding and investment
                opportunities for your startup.
              </p>
            </div>
            <div className='service-item'>
              <h3>Market Analysis</h3>
              <p>
                Our experts conduct in-depth market analysis to guide your
                business decisions.
              </p>
            </div>
          </div>
          <div className='serviceB'>
            <div className='service-item'>
              <h3>Legal Compliance</h3>
              <p>
                Ensure your startup complies with all legal and regulatory
                requirements.
              </p>
            </div>
            <div className='service-item'>
              <h3>Mentorship</h3>
              <p>
                Receive mentorship from experienced professionals in your
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StartupService
