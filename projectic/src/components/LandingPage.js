import landingLogo from "../assets/logo/landing-page.png";

const LandingPage = () => {
    return (
        <section>
            <div class="px-4 py-5 my-5 text-center">
                <img class="d-block mx-auto mb-4" src={landingLogo} alt="landing page logo" width="270"/>
                <h1 class="display-5 fw-bold">
                    Project Management <br/> and Personal Productivity
                </h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Projectic is a project management tool that lets you record project timelines, identify gaps in them, and use them to make informed decisions about project progress.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default LandingPage;