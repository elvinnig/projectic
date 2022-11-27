import carousel1 from '../assets/homepage_images/carousell-1-min.jpg'
import carousel2 from '../assets/homepage_images/carousell-2-min.jpg'
import carousel3 from '../assets/homepage_images/carousell-3-min.jpg'
import './WhyProjectic.css'

const WhyProjectic = () => {
    return (
    <div>
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                    <img width="100%" className='carousel-image' height="500vh" alt="carousel1" src={carousel1}/>
                    <div class="container">
                        <div class="carousel-caption">
                            <h1 className='text-dark fw-bold'>Most trusted</h1>
                            <p className='text-dark fs-5 fw-bold'>Projectic is the most trusted project management tool for project management, project tracking, and project management software.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                <img width="100%" className='carousel-image' height="500vh" alt="carousel2" src={carousel2}/>
                    <div class="container">
                        <div class="carousel-caption">
                            <h1 className='text-dark fw-bold'>Organized</h1>
                            <p className='text-dark fs-5 fw-bold'>Projectic is a project management tool that helps you organize and manage your projects, plans, and tasks.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                <img width="100%" className='carousel-image' height="500vh" alt="carousel3" src={carousel3}/>
                    <div class="container">
                        <div class="carousel-caption">
                            <h1 className='text-dark fw-bold'>Keeps Track</h1>
                            <p className='text-dark fs-5 fw-bold'>Projectic is a free project management tool that makes it easy to keep track of project tasks and deadlines. It can help you stay on track with your work and get you back in sync if you get off track.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
)
};

export default WhyProjectic;