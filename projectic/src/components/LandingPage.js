import landingLogo from '../assets/logo/projectic-logo-large-dark.png';

const LandingPage = () => {
    return (
        <section id='landing'>
            <div className='px-4 py-5 my-5 text-center'>
                <img className='d-block mx-auto mb-4' src={landingLogo} alt='landing page logo' width='270'/>
                <h1 className='display-5 fw-bold landing-text'>
                    Project Management <br/> and Personal Productivity
                </h1>
                <div className='col-lg-6 mx-auto'>
                    <p className='lead mb-4'>Projectic is a project management tool that lets you record project timelines, identify gaps in them, and use them to make informed decisions about project progress.</p>
                    <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                        <a type='button' className='btn get-started btn-lg px-4' href='/users/sign_up' >Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default LandingPage;