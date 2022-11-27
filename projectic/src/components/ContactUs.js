import email from '../assets/homepage_images/email.png';
import contact from '../assets/homepage_images/contact.png';
import location from '../assets/homepage_images/location-pin.png';

const ContactUs = () => {
    return (
        <div className='container'>
            <section className='mb-4'>

                {/* Header */}
                <h2 className='h1-responsive font-weight-bold text-center my-4'>Contact us</h2>

                {/* Description */}
                <p className='text-center w-responsive mx-auto mb-5 lead fs-5'>
                    Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.
                </p>
                <div className='row justify-content-center'>

                    {/* Grid Column */}
                    <div className='col-md-9 mb-md-0 mb-5'>
                        <form id='contact-form' name='contact-form'>
                            
                            {/* Grid Row */}
                            <div className='row'>
                                
                                {/* Grid Column */}
                                <div className='col-md-6'>
                                    <div className='md-form mb-0'>
                                        <label for='name' className=''>Your name</label>
                                        <input type='text' id='name' name='name' className='form-control'/>
                                    </div>
                                </div>

                                {/* Grid Column */}
                                <div className='col-md-6'>
                                    <div className='md-form mb-0'>
                                        <label for='email' className=''>Your email</label>
                                        <input type='text' id='email' name='email' className='form-control'/>
                                    </div>
                                </div>
                            </div>

                            {/* Grid Row */}
                            <div className='row'>
                                
                                {/* Grid Column */}
                                <div className='col-md-12'>
                                    <div className='md-form'>
                                        <label for='message'>Your message</label>
                                        <textarea type='text' id='message' name='message' rows='4' className='form-control md-textarea'></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className='text-center text-md-left'>
                            <a className='btn btn-primary mt-2' href='#?'>Send</a>
                        </div>
                        <div className='status'></div>
                    </div>
                    
                    {/* Grid Column */}
                    <div className='col-md-3 text-center'>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <img alt='location' src={location} height='30'/>
                                <p>Baguio, Benguet, PH</p>
                            </li>
                            <li>
                                <img alt='contact' src={contact} height='30'/>
                                <p>+639567720385</p>
                            </li>
                            <li>
                                <img alt='email' src={email} height='30'/>
                                <p>support@projectic.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ContactUs;