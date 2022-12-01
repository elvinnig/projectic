import { useState, useEffect } from 'react';
//* Logo
import logo from '../assets/logo/projectic-title-dark.png';
import icon from '../assets/logo/projectic-logo-large-dark.png';
import * as Icon from 'react-bootstrap-icons';
//*CSS
import './css/registration.css';
//*Redux
import { useSelector, useDispatch } from 'react-redux';
//*Route
import { useNavigate } from 'react-router';
//*Axios
import axios from 'axios';

function RegistrationPage() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [showPassword, setShowPassword] = useState('password');

  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const [allUsername, setAllUsername] = useState([]);

  useEffect(() => {
    // TODO on component mount reset allUsername content
    setAllUsername([]);
    // TODO get all user username for comparing
    axios.get('http://localhost:8000/api/v1/users/').then((result) => {
      setAllUsername(
        result.data.map((user) => {
          return user.username;
        })
      );
    });

    // eslint-disable-next-line
  }, []);

  const onSubmitRegistration = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      return setMessage('Password not match!');
    }
    if (password.length < 7) {
      return setMessage('Use atleast 8 character');
    }
    if (allUsername.includes(username)) {
      return;
    }
    axios
      .post('http://localhost:8000/api/v1/auth/register', {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        isAdmin: false,
        profilePicture:
          'https://img.myloview.fr/images/user-icon-human-person-symbol-avatar-log-in-vector-sign-400-256564255.jpg',
      })
      .then((result) => {
        console.log(result.data.status);
        if (result.data.status) {
          navigate('/users/log_in');
        }
      });
  };
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='reg-container d-flex justify-content-center align-items-center border border-2 rounded py-3 px-4 border border-dark'>
        <div className='reg-col-1'>
          <a href='http://localhost:3000/'>
            <Icon.ArrowReturnLeft size={25} className='mb-2 me-2' color='black' />
          </a>
          <img alt='logo_here' src={logo} className='w-50 mb-3' />
          <h6 className='mb-3'>Create you Projectic Account</h6>
          <form
            className=''
            onSubmit={(e) => {
              onSubmitRegistration(e);
            }}
          >
            <div className='mb-3'>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='firstname' className='form-label'>
                    First name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firsname'
                    placeholder='First name'
                    required
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </div>
                <div className='col'>
                  <label htmlFor='lastname' className='form-label'>
                    Last name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastname'
                    placeholder='Last name'
                    required
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email:
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                Username:
              </label>
              <input
                type='text'
                className='form-control'
                id='username'
                placeholder='Username'
                required
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              {allUsername.includes(username) ? (
                <small className='text-danger mt-1'>
                  Username Already Exist!
                </small>
              ) : null}
            </div>
            <div className='mb-3'>
              <div className='row'>
                <label htmlFor='password' className='form-label'>
                  Password:
                </label>
                <div className='col'>
                  <input
                    type={showPassword}
                    className='form-control'
                    id='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (password.length < 7) {
                        setMessage('Use atleast 8 character');
                      } else {
                        setMessage('');
                      }
                    }}
                  />
                </div>
                <div className='col'>
                  <input
                    type={showPassword}
                    className='form-control'
                    id='cpassword'
                    placeholder='Confirm'
                    required
                    value={cpassword}
                    onChange={(e) => {
                      setCpassword(e.target.value);
                    }}
                  />
                </div>
                {message ? (
                  <small className='text-danger'>{message}</small>
                ) : null}
              </div>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDefault'
                onChange={(e) => {
                  e.target.checked === true
                    ? setShowPassword('text')
                    : setShowPassword('password');
                }}
              />
              <label className='form-check-label' htmlFor='flexCheckDefault'>
                Show password
              </label>
            </div>
            <div className='mb-3 mt-2 d-flex justify-content-end'>
              <input
                type='submit'
                className='btn btn-dark px-4'
                value='Register'
              />
            </div>
          </form>
          <p className='mt-5'>
            Already have an account?{' '}
            <span>
              <a href='/users/log_in' className='link-primary'>
                Login here
              </a>
            </span>
          </p>
        </div>
        <div className='d-none d-sm-flex w-50 d-flex justify-content-center flex-column align-items-center'>
          <img alt='logo_here' src={icon} className='w-50' />
          <p>Create more project.</p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
