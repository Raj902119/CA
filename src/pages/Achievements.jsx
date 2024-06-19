import img1 from '../images/SPPU.png'
import img2 from '../images/NYCS.png'
import img3 from '../images/we.png'
import img4 from '../images/mngl.png'
import './Achievements.css'

function Achievements() {
    return (
        <>

            <div class="Association">
                <h2><span>Ach</span>ievements</h2>
                <div class="Achievemnets ">
                    <div class="NewsBox">
                        <img src={img1} alt="" title="" className="imgo" />
                        <h4>1998 <br />Qualified as a CA CWA and SET examination in first attempt. </h4>
                    </div>
                    <div class="NewsBox">
                        <img src={img2} alt="" title="" className="imgo" />
                        <h4>1999 <br />Appointed as a Finance Strategist at Lokmat newspaper the Leading Marathi daily .</h4>
                    </div>
                    <div class="NewsBox">
                        <img src={img3} alt="" title="" className="imgo" />
                        <h4>2000<br /> Designated as a Stratergy Partner with State Bank of India for their credit card business</h4>
                    </div>
                    <div class="NewsBox">
                        <img src={img4} alt="" title="" className="imgo" />
                        <h4>2001 <br /> Achieved a business for 10k credit cards for State Bank of India.</h4>
                    </div>
                    <button className='sbtn  text-white font-bold py-3 px-5  mt-1 transition-opacity duration-500'>
                        <a href="./MainAchieve">Read More</a>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Achievements;