import nav_logo from '../assets/logo/projectic-title-dark.png';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchUser } from '../redux/slices/userSlice';
// icons
import * as Icon from 'react-bootstrap-icons';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    //* Check if there is a projectic stored in localstorage
    if (localStorage.getItem('projectic')) {
      // * if true find that user and get information
      axios
        .get(
          `http://localhost:8000/api/v1/users/${localStorage.getItem(
            'projectic'
          )}`
        )
        .then((user) => {
          dispatch(fetchUser({ user: { ...user.data } }));
          setCurrentUser({ ...user.data });
        });
    }
  }, []);
  return (
    <header className='p-3 navigation mb-3'>
      <div className='container'>
          {/* Login Navigation */}
          {Object.keys(currentUser).length > 0 ? (
          <div className='d-flex flex-wrap align-items-center justify-content-sm-between'>
            {/*Left Logo */}
            <a href='http://localhost:3000/' className='d-flex mb-2 mb-lg-0 align-self-start'>
              <img
                className='bi me-2'
                alt='navbar-logo'
                src={nav_logo}
                width='150'
              />
            </a>
            <ul className='nav d-flex flex-sm-column flex-grow-1 justify-content-center ms-2'>
              <li>
                <a href='http://localhost:3000/users/dashboard' className='lead header-link text-decoration-none'>
                  <h5>Dashboard</h5>
                </a>
              </li>
            </ul>
            <div className='d-flex align-items-center align-self-end'>
              <span className='fs-6 fw-bold text-white me-2'>Welcome, {currentUser.username}&nbsp;</span>
              <div className='dropdown text-end'>
                <a
                  href='#'
                  className='d-block link-dark text-decoration-none dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img
                    src={currentUser.profilePicture}
                    alt=''
                    width='32'
                    height='32'
                    className='rounded-circle'
                  />
                </a>
                <ul className='dropdown-menu text-small dropdown-color'>
                  <li className='dropdown-item'>
                    <h5>{currentUser.username}</h5>
                  </li>
                  <hr className='dropdown-divider' />
                  <li>
                    <a className='dropdown-item' href='/users/dashboard'>
                      <Icon.HouseDashFill /> My Dashboard
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/users/settings'>
                      <Icon.GearFill /> Settings
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/users/user_settings'>
                      <Icon.PersonFill/> Profile
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => {
                        localStorage.removeItem('projectic');
                        setCurrentUser({});
                        navigate('/');
                      }}
                    >
                      <Icon.BoxArrowLeft /> Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          ) : (
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            {/*Left Logo */}
            <a href='http://localhost:3000/' className='d-flex align-items-center mb-2 mb-lg-0'>
              <img
                className='bi me-2'
                alt='navbar-logo'
                src={nav_logo}
                width='150'
              />
            </a>
            {/* Middle Navigation */}
            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
              <li>
                <a href='http://localhost:3000/#landing' className='nav-link px-3 lead header-link'>
                  <h5>Why Projectic</h5>
                </a>
              </li>
              <li>
                <a href='http://localhost:3000/#features' className='nav-link px-3 lead header-link'>
                  <h5>Features</h5>
                </a>
              </li>
              <li>
                <a href='/about_us' className='nav-link px-3 lead header-link'>
                  <h5>About Us</h5>
                </a>
              </li>
              <li>
                <a href='http://localhost:3000/#contact' className='nav-link px-3 lead header-link'>
                  <h5>Contact Us</h5>
                </a>
              </li>
            </ul>
            <div className='text-end'>
              <button
                type='button'
                className='btn login-button me-2'
                onClick={() => {
                  navigate('/users/log_in');
                }}
              >
                Login
              </button>
              <button
                type='button'
                className='btn me-2 register-button'
                onClick={() => {
                  navigate('/users/sign_up');
                }}
              >
                Register
              </button>
            </div>
          </div>
          )}
      </div>
    </header>
  );
};

export default Navbar;
