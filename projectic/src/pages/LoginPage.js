import { useState } from 'react';

//* Logo
import logo from '../assets/logo/2.png';
//* reCATPCHA
import ReCAPTCHA from 'react-google-recaptcha';

function LoginPage() {
  //* two way binding
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //* Function on submit
  const onSubmitForm = (e) => {
    e.preventDefault();
    //TODO : submit the form
  };
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='p-5 rounded-3 d-flex flex-column align-items-center'>
        <img alt='logo_here' src={logo} className='rounded-circle w-25' />
        <small className='mb-3'>Sign in to continue</small>
        <form
          className=''
          onSubmit={(e) => {
            onSubmitForm(e);
          }}
        >
          <div className='mb-3'>
            <label htmlFor='username' className='form-label'>
              Username:
            </label>
            <input
              type='text'
              className='form-control'
              id='username'
              placeholder='Enter username'
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password:
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Enter password'
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='mb-3 d-flex justify-content-end mb-5'>
            <a href='/users/log_in' className='link-primary'>
              Forgot Password?
            </a>
          </div>
          <ReCAPTCHA
            sitekey='6LfFCdAiAAAAAMzlkMRfHBpUPXBfuJLfXVham1P5'
            size='invisible'
          />
          <div className='mb-3 d-flex justify-content-center'>
            <input
              type='submit'
              className='btn btn-primary w-75'
              value='Login'
            />
          </div>
        </form>
        <p>
          Don't have an account?{' '}
          <span>
            <a href='/users/sign_up' className='link-primary'>
              Sign Up
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
