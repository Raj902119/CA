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
        headline='Apply Frasher'
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
          </h2>
          <p>
            We are proud of our company and the people who work here. They help
            us set new standards for the real estate industry. Our team ensures
            customer satisfaction and construction quality, making us a leading
            real estate company in Pune.
            <br />
            <br />
            We seek work-driven, goal-oriented individuals who can help us
            excel. If you are an explorer looking for opportunities, join us.
          </p>
          <img src={career} alt='Career Opportunities' className='img' />
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