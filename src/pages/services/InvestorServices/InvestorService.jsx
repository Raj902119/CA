import React from 'react'
import '../CafirmServices/CaFirmService.css'
import logo from './investor.jpg'
import Banner from '../../../component/ui/Banner'

function InvestorService() {
  return (
    <>
      <Banner
        imageUrl={logo}
        breadcrumb='Home > Regulatory & Advisory Services'
        headline='Regulatory & Advisory Services'
      />
      <section className='services'>
        <h2>Investor Services</h2>
        <div className='service-list'>
          <div className='serviceA'>
            <div className='service-item'>
              <h3>Investment Planning</h3>
              <p>
                Our investment planning services help you create a diversified
                portfolio to meet your financial goals.
              </p>
            </div>
            <div className='service-item'>
              <h3>Wealth Management</h3>
              <p>
                We offer personalized wealth management strategies to grow and
                protect your assets.
              </p>
            </div>
            <div className='service-item'>
              <h3>Risk Assessment</h3>
              <p>
                Our risk assessment services identify potential risks and
                provide solutions to mitigate them effectively.
              </p>
            </div>
          </div>
          <div className='serviceB'>
            <div className='service-item'>
              <h3>Retirement Planning</h3>
              <p>
                We provide comprehensive retirement planning to ensure a secure
                and comfortable retirement.
              </p>
            </div>
            <div className='service-item'>
              <h3>Tax Optimization</h3>
              <p>
                Our tax optimization services help you minimize tax liabilities
                and maximize after-tax returns.
              </p>
            </div>
            <div className='service-item'>
              <h3>Estate Planning</h3>
              <p>
                We offer estate planning services to help you manage and
                transfer your wealth efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InvestorService
