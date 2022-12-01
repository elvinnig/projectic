import elvin from '../assets/homepage_images/elvin.jpg';
import ian from '../assets/homepage_images/ian.jpg';
import wren from '../assets/homepage_images/wren.jpg';
import pogi from '../assets/homepage_images/ed.jpg';
import Navbar from '../components/Navbar';

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className="container text-center" id='about'>
                <div className='fs-2 m-4 fw-bold'>ABOUT US</div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-6 col-sm-3">
                    <img className='about-us' alt='ian' src={ian}/>

                        <h2 className="fw-normal">Ian Agtarap</h2>
                        <p>agtarapian0@gmail.com</p>
                        <p><a className="btn btn-secondary" rel="noreferrer" href="https://bit.ly/3cd3luC" target='_blank'>View details &raquo;</a></p>
                        </div>
                    <div className="col-6 col-sm-3">
                        <img className='about-us' alt='wren' src={wren}/>

                        <h2 className="fw-normal">Wren Macayan</h2>
                        <p>macayanwren@gmail.com</p>
                        <p><a className="btn btn-secondary" rel="noreferrer" href="https://bit.ly/3cd3luC" target='_blank'>View details &raquo;</a></p>
                    </div>
                    <div class="w-100"></div>
                    <div className="col-6 col-sm-3">
                        <img className='about-us' alt='elvin' src={elvin}/>

                        <h2 className="fw-normal">Elvin Rosales</h2>
                        <p>elvinnigel112@gmail.com</p>
                        <p><a className="btn btn-secondary" rel="noreferrer" href="https://bit.ly/3cd3luC" target='_blank'>View details &raquo;</a></p>
                    </div>
                    <div className="col-6 col-sm-3">
                        <img className='about-us' alt='edreyel' src={pogi}/>

                        <h2 className="fw-normal">Edreyel Adora</h2>
                        <p>edreyel.aadora@gmail.com</p>
                        <p><a className="btn btn-secondary" rel="noreferrer" href="https://bit.ly/3cd3luC" target='_blank'>View details &raquo;</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;
