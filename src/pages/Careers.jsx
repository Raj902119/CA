import './Careers.css'
import Img from '../images/carrer.jpg'
import career from '../images/careers.png'
import Banner from '../component/ui/Banner'
function Careers() {
  return (
    <>
      <Banner
        imageUrl={Img}
        breadcrumb='Home > Carrer'
        headline='careers'
      />{' '}
      {/* start career */}
      {/* <div className='careerbag'>
             <h2>
             <nav>
                <a href="/Home"></a><p>Home Shape your Career with us</p>
            </nav>Shape your Career with us</h2>
        </div> */}
      <div class='content-bot'>
        <div className='careers'>
          <h2>
            CAREER <span>OPPORTUNITIES</span>
            <br />
            <br />
          </h2>
          <p>
            {' '}
            <p>
              We are proud of our company and the people who work here. Thanks
              to them, as we set new standards for the real estate industry in
              every project. Our people are the reason that CA Dhiraj Ostwal is
              a leading real estate company committed to excel in custormer
              satisfaction and construction quality. We are here to create
              benchmarks in the real estate development of Pune.
              <br />
              <br />
              Hence, we are on a constant lookout for work-driven, goal-oriented
              people who, individually and collectively, can help us wield a
              superior edge. We want to work with people who seek opportunities
              and believe that they are the real explorers.
            </p>
          </p>
          <img src={career} alt='' className='img' />
        </div>
        <div class='ca-contact-form'>
          <h3 class='ca-title'> APPLY ONLINE</h3>
          <div class='ca-divider'>
            <div class='user-info'>
              <div class='form-group'>
                <i class='fas fa-user faicon'></i>
                <input
                  type='text'
                  name='name'
                  placeholder='Your name *'
                  class='form-control'
                />
              </div>
              <div class='form-group'>
                <i class='fas fa-phone faicon'></i>
                <input
                  type='tel'
                  name='tel'
                  placeholder='Phone number *'
                  class='form-control'
                />
              </div>
              <div class='form-group'>
                <i class='fas fa-envelope-open faicon'></i>
                <input
                  type='email'
                  name='email'
                  placeholder='Email address *'
                  class='form-control'
                />
              </div>
              <div class='form-group'>
                <i class='fa fa-file faicon'></i>
                <input
                  type='file'
                  name='file[]'
                  id='file'
                  class='ca-input-file'
                  data-multiple-caption='{count} files selected'
                  multiple=''
                />
                <label for='file' class='input-label'>
                  <span class='input-text'>Upload your CV *</span>
                  <i class='fa fa-upload'></i>
                </label>
              </div>
              <div class='form-group'>
                <input
                  type='Submit'
                  name='email'
                  value='Send To Us'
                  class='form-submit form-control'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end career */}
    </>
  )
}
export default Careers
