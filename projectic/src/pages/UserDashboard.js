import Navbar from '../components/Navbar';
import ProjectCards from '../components/ProjectCards';
import BadgeCards from '../components/BadgeCards'

const UserDashboard = () => {
    // !Placeholder image
    const testImage = 'https://images.unsplash.com/photo-1533095729892-33012d8e4a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';
    // !Placeholder data - for testing
    const testCard = [
    {
        title:"TestTitle",
        image:testImage,
        badge:"TestBadge"
    },
    {
        title:"TestTitle2",
        image:testImage,
        badge:"TestBadge2"
    }
];
    return (
        <div>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                <hr className="border border-black border-2"/>
                    {/* Badges Row */}
                    <div className='col-sm col-md-4 border border-black border-2'>
                        <div className='input-group d-flex justify-content-center m-3'>

                            {/* Search bar container for badges */}
                            <div className='form-outline'>
                                <input type='search' id='badgeSearch' className='form-control' placeholder='Search badges...'/>
                            </div>
                            <button type='button' className='btn btn-primary'>
                                <i className='bi bi-search'></i>
                            </button>
                        </div>

                        {/* Add Badge Button */}
                        <div className='d-flex justify-content-center m-3'>
                            <button type='button' className='btn btn-labeled btn-primary'>
                            <span className='btn-label'><i className='bi bi-plus-circle me-1'></i></span>Add New Badge</button>
                        </div>
                        <hr className="border border-black border-2"/>

                        {/* Badge Container */}
                        <div className='container-fluid d-flex justify-content-center'>
                            <ul className='list-unstyled'>

                                {/* Maps through the badges available in Projects card */}
                                {
                                    testCard.map( individualBadge => {
                                        return <BadgeCards title={individualBadge.badge}/>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Projects Row */}
                    <div className='col-sm col-md-8 border border-black border-2'>
                        <div className='input-group d-flex justify-content-center m-3'>

                            {/* Search bar container for projects */}
                            <div className='form-outline'>
                                <input type='search' id='projectSearch' className='form-control' placeholder='Search projects...'/>
                            </div>
                            <button type='button' className='btn btn-primary'>
                                <i className='bi bi-search'></i>
                            </button>
                        </div>

                        {/* Add Project Button */}
                        <div className='d-flex justify-content-center m-3'>
                            <button type='button' className='btn btn-labeled btn-primary'>
                            <span className='btn-label'><i className='bi bi-plus-circle me-1'></i></span>Add New Project</button>
                        </div>
                        <hr className="border border-black border-2"/>

                        {/* Projects Container */}
                        <div className='container-fluid'>
                            {/* Change row-cols-md-2 to 4 if smaller card */}
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                {
                                    testCard.map( individualProject => {
                                        return <ProjectCards image={individualProject.image} title={individualProject.title} badge={individualProject.badge}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;