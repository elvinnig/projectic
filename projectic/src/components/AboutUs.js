import elvin from '../assets/homepage_images/elvin.jpg';
import ian from '../assets/homepage_images/ian.jpg';
import wren from '../assets/homepage_images/wren.jpg';
import pogi from '../assets/homepage_images/ed.jpg';

const AboutUs = () => {
    return (
        <div className="container text-center" id='about'>
            <div class="row align-items-center">
                <div class="col-sm-3">
                <img className='about-us' alt='ian' src={ian}/>

                    <h2 class="fw-normal">Ian Agtarap</h2>
                    <p>agtarapian0@gmail.com</p>
                    <p><a class="btn btn-secondary" rel="noreferrer" href="https://bit.ly/3cd3luC" target='_blank'>View details &raquo;</a></p>
                    </div>
                <div class="col-sm-3">
                    <img className='about-us' alt='wren' src={wren}/>

                    <h2 class="fw-normal">Wren Macayan</h2>
                    <p>macayanwren@gmail.com</p>
                    <p><a class="btn btn-secondary" rel="noreferrer" href="https://bit.ly/3cd3luC" target='_blank'>View details &raquo;</a></p>
                </div>
                <div class="col-sm-3">
                    <img className='about-us' alt='elvin' src={elvin}/>

                    <h2 class="fw-normal">Elvin Rosales</h2>
                    <p>elvinnigel112@gmail.com</p>
                    <p><a class="btn btn-secondary" rel="noreferrer" href="https://bit.ly/3cd3luC" target='_blank'>View details &raquo;</a></p>
                </div>
                <div class="col-sm-3">
                    <img className='about-us' alt='edreyel' src={pogi}/>

                    <h2 class="fw-normal">Edreyel Adora</h2>
                    <p>edreyel.aadora@gmail.com</p>
                    <p><a class="btn btn-secondary" rel="noreferrer" href="https://bit.ly/3cd3luC" target='_blank'>View details &raquo;</a></p>
                </div>
            </div>
            <hr className='featurette-divider'/>
        </div>
    )
};

export default AboutUs;