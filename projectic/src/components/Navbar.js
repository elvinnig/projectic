import nav_logo from '../assets/logo/projectic-title-dark.png';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchUser } from '../redux/slices/userSlice';
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
    <header className='p-3'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          {/*Left Logo */}
          <a href='/' className='d-flex align-items-center mb-2 mb-lg-0'>
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
              <a href='#landing' className='nav-link px-3 link-dark lead'>
                Why Projectic
              </a>
            </li>
            <li>
              <a href='#features' className='nav-link px-3 link-dark lead'>
                Features
              </a>
            </li>
            <li>
              <a href='#contact' className='nav-link px-3 link-dark lead'>
                Contact Us
              </a>
            </li>
          </ul>
          {/* Login Navigation */}
          {Object.keys(currentUser).length > 0 ? (
          <div className='d-flex flex-wrap align-items-center justify-content-lg-between'>
            {/*Left Logo */}
            <a href='/users/dashboard' className='d-flex mb-2 mb-lg-0 align-self-start'>
              <img
                className='bi me-2'
                alt='navbar-logo'
                src={nav_logo}
                width='150'
              />
            </a>
            <div className='d-flex align-items-center'>
              <span className='fs-6 fw-bold'>Welcome, {currentUser.firstname}&nbsp;</span>
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
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className='text-end'>
              <button
                type='button'
                className='btn btn-outline-primary me-2'
                onClick={() => {
                  navigate('/users/log_in');
                }}
              >
                Login
              </button>
              <button
                type='button'
                className='btn btn-primary me-2'
                onClick={() => {
                  navigate('/users/sign_up');
                }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
