import Navbar from '../components/Navbar';
import ProjectCards from '../components/ProjectCards';
import BadgeCards from '../components/BadgeCards';

import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchProject } from '../redux/slices/projectSlice';

const UserDashboard = () => {
  const [allProject, setAllProject] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/v1/projects/${localStorage.getItem(
          'projectic'
        )}`
      )
      .then((response) => {
        dispatch(fetchProject({ project: response.data }));
        setAllProject(response.data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row d-flex justify-content-between'>
          {/* <hr className="border border-black border-2"/> */}
          {/* Badges Row */}
          <div className='col-sm col-md-3'>
            <div className='input-group d-flex justify-content-center m-3'>
              {/* Search bar container for badges */}
              <div className='form-outline'>
                <input
                  type='search'
                  id='badgeSearch'
                  className='form-control'
                  placeholder='Search badges...'
                />
              </div>
              <button type='button' className='btn btn-primary'>
                <i className='bi bi-search'></i>
              </button>
            </div>

            {/* Add Badge Button */}
            <div className='d-flex justify-content-center m-3'>
              <button type='button' className='btn btn-labeled btn-primary'>
                <span className='btn-label'>
                  <i className='bi bi-plus-circle me-1'></i>
                </span>
                Add New Badge
              </button>
            </div>
            {/* <hr className="border border-black border-2"/> */}

            {/* Badge Container */}
            <div className='container-fluid d-flex justify-content-center'>
              <ul className='list-unstyled'>
                {/* Maps through the badges available in Projects card */}
                {/*  {testCard.map((individualBadge) => {
                  return <BadgeCards title={individualBadge.badge} />;
                })} */}
              </ul>
            </div>
          </div>
          {/* Projects Row */}
          <div className='col-sm col-md-9'>
            <div className='d-flex justify-content-between m-3'>
              {/* Search bar container for projects */}
              {/* <div className='form-outline'> */}
              <button
                type='button'
                className='btn btn-labeled btn-primary'
                onClick={() => {
                  navigate('/user/add_project');
                }}
              >
                <span className='btn-label'>
                  <i className='bi bi-plus-circle me-1'></i>
                </span>
                Add New Project
              </button>
              <input
                type='search'
                id='projectSearch'
                className='form-control w-50'
                placeholder='Search projects...'
              />
              {/* </div> */}
              {/* <button type='button' className='btn btn-primary'>
                <i className='bi bi-search'></i>
              </button> */}
            </div>

            {/* Add Project Button */}
            <div className='d-flex justify-content-center m-3'></div>
            {/* <hr className="border border-black border-2"/> */}

            {/* Projects Container */}
            <div className='container-fluid'>
              {/* Change row-cols-md-2 to 4 if smaller card */}
              <div className='row row-cols-1 row-cols-md-2 g-4'>
                {[...allProject].map((project, index) => {
                  return (
                    <ProjectCards
                      key={project.name + index}
                      image={project.thumbnail}
                      title={project.name}
                      //   badge={project.badge}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
