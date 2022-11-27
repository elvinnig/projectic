import image1 from '../assets/homepage_images/bar-chart.png';
import image2 from '../assets/homepage_images/timeline.png';
import image3 from '../assets/homepage_images/workflow.png';

const Features = () => {
    return (
    <div className='container marketing'>
        <hr className='featurette-divider'/>
        <div className='row featurette'>
            <div className='col-md-7'>
                <h2 className='featurette-heading fw-normal lh-1'>Elegant and Simple</h2>
                <p className='lead'>
                    Projectic is a simple, elegant tool for project management. Projectic gives you everything you need to keep track of your projects.
                    A simple, easy to use, web-based project management tool for project managers and freelancers.
                </p>
            </div>
            <div className='col-md-5'>
                <img alt='feature1' src={image1} height='400' className='img-fluid mx-auto'/>
            </div>
        </div>
        <hr className='featurette-divider'/>
        <div className='row featurette'>
            <div className='col-md-7 order-md-2'>
                <h2 className='featurette-heading fw-normal lh-1'>Free Project Manager</h2>
                <p className='lead'>
                    Projectic is a free project management app that manages all your project and task details such as templates, files, documents, tasks, tags, and attachments.
                    Projectic is a simple, easy to use, web-based project management tool for project managers and freelancers.
                </p>
            </div>
            <div className='col-md-5 order-md-1'>
                <img alt='feature1' src={image2} height='400' className='img-fluid mx-auto'/>
            </div>
        </div>
        <hr className='featurette-divider'/>
        <div className='row featurette'>
            <div className='col-md-7'>
                <h2 className='featurette-heading fw-normal lh-1'>Simple and Powerful</h2>
                <p className='lead'>
                    Projectic is a simple and powerful project management tool to help you manage and track your projects.
                    Easily keep track of your projects thanks to this free project management tool.
                    A free project and task management app designed for project managers and project owners.
                </p>
            </div>
            <div className='col-md-5'>
                <img alt='feature1' src={image3} height='400' className='img-fluid mx-auto'/>
            </div>
        </div>
        <hr className='featurette-divider'/>
    </div>
    )
}

export default Features;