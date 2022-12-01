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
  const [newBadge, setNewBadge] = useState('');
  const [allBadges, setAllBadges] = useState([]);
  const [selectedBadge, setSelectedBadge] = useState('');
  const [searchBadge, setSearchBadge] = useState('');
  const [searchProject, setSearchProject] = useState('');

  useEffect(() => {
    if (localStorage.getItem('current_project')) {
      // localStorage.removeItem('current_project');
    }
    axios
      .get(
        `http://localhost:8000/api/v1/projects/${localStorage.getItem(
          'projectic'
        )}`
      )
      .then((response) => {
        dispatch(fetchProject({ project: response.data }));
        setAllProject(response.data);
        getUserBadges();
      });
  }, []);

  const getUserBadges = () => {
    axios
      .get(
        `http://localhost:8000/api/v1/badges/${localStorage.getItem(
          'projectic'
        )}`
      )
      .then((response) => {
        // [x]
        console.log(response.data);
        setAllBadges([...response.data]);
      });
  };

  const onSubmitBadge = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/v1/badges', {
        userID: localStorage.getItem('projectic'),
        name: newBadge,
      })
      .then((response) => {
        // [x]
        console.log(response);
        setNewBadge('');
        getUserBadges();
      });
  };
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row d-flex justify-content-between'>
          {/* <hr className="border border-black border-2"/> */}
          {/* Badges Row */}
          <div className='col-sm col-md-3'>
            {/* Add Badge Button */}
            <div className='d-flex flex-column m-3'>
              <input
                type='search'
                id='badgeSearch'
                className='form-control'
                placeholder='Search badge...'
                value={searchBadge}
                onChange={(e) => {
                  setSearchBadge(e.target.value);
                }}
              />
              <div className='dropdown text-end'>
                <a
                  href='#'
                  className='d-block link-dark text-decoration-none dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <button type='button' className='btn btn-labeled btn-link'>
                    <span className='btn-label'>
                      {/* <i className='bi bi-plus-circle me-1'></i> */}
                    </span>
                    New Badge
                  </button>
                </a>
                <ul className='dropdown-menu text-small'>
                  <li className='p-2'>
                    <form
                      onSubmit={(e) => {
                        onSubmitBadge(e);
                      }}
                    >
                      <div className='mb-3'>
                        <input
                          type='text'
                          className='form-control'
                          id='username'
                          placeholder='Badge Name'
                          required
                          value={newBadge}
                          onChange={(e) => {
                            setNewBadge(e.target.value);
                          }}
                        />
                      </div>
                      <input
                        type='submit'
                        value='Add Badge'
                        className='btn btn-primary'
                      />
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            <hr className='border border-black border-2' />

            {/* Badge Container */}
            <div className='d-flex justify-content-center w-100'>
              <ul className='list-unstyled w-100'>
                <li
                  className='p-2 border-bottom'
                  onClick={() => {
                    setSelectedBadge('');
                  }}
                >
                  {' '}
                  Show All Project
                </li>
                {/* Maps through the badges available in Projects card */}
                {[...allBadges]
                  .filter((search) => {
                    if (searchBadge) {
                      return search.name.includes(searchBadge);
                    }
                    return search;
                  })
                  .map((badge, index) => {
                    return (
                      <li
                        className='p-2 border-bottom'
                        key={index}
                        onClick={() => {
                          setSelectedBadge(badge.name);
                        }}
                      >
                        <div className='badge'>{badge.name}</div>
                      </li>
                    );
                  })}
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
                className='btn btn-labeled btn-dark'
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
                placeholder='Search project...'
                value={searchProject}
                onChange={(e) => {
                  setSearchProject(e.target.value);
                }}
              />
              {/* </div> */}
              {/* <button type='button' className='btn btn-primary'>
                <i className='bi bi-search'></i>
              </button> */}
            </div>

            {/* Add Project Button */}
            {/* <div className='d-flex justify-content-center m-3'></div> */}
            {/* <hr className="border border-black border-2"/> */}

            {/* Projects Container */}
            <div className='container-fluid'>
              {/* Change row-cols-md-2 to 4 if smaller card */}
              <div className='row row-cols-1 row-cols-md-2 g-4'>
                {[...allProject]
                  .filter((findProject) => {
                    if (selectedBadge) {
                      return findProject.badgeID.find((badge) => {
                        return badge.name === selectedBadge;
                      });
                    }
                    return findProject;
                  })
                  .filter((search) => {
                    if (searchProject) {
                      return search.name.includes(searchProject);
                    }
                    return search;
                  })
                  .map((project, index) => {
                    return (
                      <ProjectCards
                        key={project.name + index}
                        image={project.thumbnail}
                        title={project.name}
                        id={project._id}
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
