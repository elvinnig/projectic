import elvin from '../assets/homepage_images/elvin.jpg';
import ian from '../assets/homepage_images/ian.jpg';
import wren from '../assets/homepage_images/wren.jpg';
import pogi from '../assets/homepage_images/ed.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className='container text-center' id='about'>
                <div className='fs-2 m-4 fw-bold'>ABOUT US</div>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-6 col-sm-3'>
                    <img className='about-us' alt='ian' src={ian}/>

                        <h2 className='fw-normal'>Ian Agtarap</h2>
                        <p className='fw-light fst-italic'>agtarapian0@gmail.com</p>
                        <p>DICT/Uplift BootCamp Student</p>
                        <p>
                            <a className='btn about-button' data-bs-toggle='modal' data-bs-target='#ian' rel='noreferrer' href='https://bit.ly/3cd3luC' target='_blank'>View details &raquo;</a>
                            <div className='modal fade' id='ian' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                            <div className='modal-dialog about-modal'>
                                <div className='modal-content'>
                                <div className='modal-header'>
                                    <h1 className='modal-title fs-5' id='staticBackdropLabel'>More Info</h1>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div>
                                <div className='modal-body'>
                                Prayer is the acid test of the inner man's strength. A strong spirit is capable of praying much and praying with all perseverance until the answer comes. A weak one grows weary and fainthearted in the maintenance of praying.
                                </div>
                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            </p>
                        </div>
                    <div className='col-6 col-sm-3'>
                        <img className='about-us' alt='wren' src={wren}/>

                        <h2 className='fw-normal'>Wren Macayan</h2>
                        <p className='fw-light fst-italic'>macayanwren@gmail.com</p>
                        <p>DICT/Uplift BootCamp Student</p>
                        <p>
                            <a className='btn about-button' data-bs-toggle='modal' data-bs-target='#wren' rel='noreferrer' href='https://bit.ly/3cd3luC' target='_blank'>View details &raquo;</a>
                            <div className='modal fade' id='wren' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                            <div className='modal-dialog about-modal'>
                                <div className='modal-content'>
                                <div className='modal-header'>
                                    <h1 className='modal-title fs-5' id='staticBackdropLabel'>More Info</h1>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div>
                                <div className='modal-body'>
                                The Lord will also be a high tower for the oppressed; a high tower in times of trouble. Those who know your name will put their trust in you, for you, Oh Lord, have not forsaken those who seek you.
                                </div>
                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            </p>
                    </div>
                    <div className='w-100 mb-2'></div>
                    <div className='col-6 col-sm-3'>
                        <img className='about-us' alt='elvin' src={elvin}/>

                        <h2 className='fw-normal'>Elvin Rosales</h2>
                        <p className='fw-light fst-italic'>elvinnigel112@gmail.com</p>
                        <p>DICT/Uplift BootCamp Student</p>
                        <p>
                            <a className='btn about-button' data-bs-toggle='modal' data-bs-target='#elvin' rel='noreferrer' href='https://bit.ly/3cd3luC' target='_blank'>View details &raquo;</a>
                            <div className='modal fade' id='elvin' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                            <div className='modal-dialog about-modal'>
                                <div className='modal-content'>
                                <div className='modal-header'>
                                    <h1 className='modal-title fs-5' id='staticBackdropLabel'>More Info</h1>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div>
                                <div className='modal-body'>
                                Haven't I commanded you? Be strong and courageous. Don't be afraid. Don't be dismayed, for The Lord your God is with you wherever you go.
                                </div>
                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            </p>
                    </div>
                    <div className='col-6 col-sm-3'>
                        <img className='about-us' alt='edreyel' src={pogi}/>

                        <h2 className='fw-normal'>Edreyel Adora</h2>
                        <p className='fw-light fst-italic'>edreyel.aadora@gmail.com</p>
                        <p>DICT/Uplift BootCamp Student</p>
                        <p>
                            <a className='btn about-button' data-bs-toggle='modal' data-bs-target='#ed' rel='noreferrer' href='https://bit.ly/3cd3luC' target='_blank'>View details &raquo;</a>
                            <div className='modal fade' id='ed' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                            <div className='modal-dialog about-modal'>
                                <div className='modal-content'>
                                <div className='modal-header'>
                                    <h1 className='modal-title fs-5' id='staticBackdropLabel'>More Info</h1>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div>
                                <div className='modal-body'>
                                For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.
                                </div>
                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default AboutUs;
