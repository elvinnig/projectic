import { useState } from 'react';

//*CSS
import './css/user.css'

function UserPage() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='reg-container d-flex justify-content-center align-items-center border border-2 rounded py-3 px-4'>
          <form className=''>
            <div className='mb-3'>
              <div className='row'>
              <div class="mb-3">
                 
                 <h5 className='mb-3'>Profile Update</h5>
                
                    <label htmlFor='picture' className='form-label'>
                    Profile Picture:
                    </label>
                    <div className='reg-col-1  justify-content-center'>
                     <img class="rounded float-start" alt='image_here'   //picture image
                        src='https://cdn4.iconfinder.com/data/icons/social-messaging-productivity-5/128/selfie-male-256.png' className='w-50 mb-3' />
         
                    <div className='mb-3 d-flex justify-content-center'>
                        <input
                        type='file'
                        value=''
                         />
                    </div>
                </div>
             </div>
                <div className='col'>
                  <label htmlFor='firstname' className='form-label'>
                    First name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstname'
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
            </div>
            <div className='mb-3'>
              <div className='row'>
                <label htmlFor='password' className='form-label'>
                  Password:
                </label>
                <div className='col'>
                  <input
                    className='form-control'
                    id='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className='mb-3 d-flex justify-content-center submit'>
              <input
                type='submit'  //submit button
                className='btn btn-primary px-4'
                value='UPDATE'
              />
             </div>
            </div>
            </div>
           
          </form>
          
        </div>
     
      
        </div>
     
    
  );
}

export default UserPage;
