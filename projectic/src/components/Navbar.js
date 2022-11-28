import nav_logo from '../assets/logo/nav-logo.png';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();
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
          <div className='text-end'>
            <button type='button' className='btn btn-outline-primary me-2' onClick={() => {navigate('/users/log_in')}}>
              Login
            </button>
            <button type='button' className='btn btn-primary me-2'  onClick={() => {navigate('/users/sign_up')}}>
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
