import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import UploadWidget from '../components/UploadWidget';
//*CSS
import './css/user.css'

const UserPage = () => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState('');
  const [allUsername, setAllUsername] = useState('');
  const [error, setError] = useState('');

  //TODO: getItem from local storage
  const inLocalStorage = localStorage.getItem('projectic');
  const hideSuccessMessage = (timeOut) => {
    setTimeout(() => {
      setError('')
    }, timeOut);
};
  useEffect(() => {
    //TODO: Get user by id
    axios.get(`http://localhost:8000/api/v1/users/${inLocalStorage}`).then((result) => {
      console.log(result)
      
      setUserFirstName(
       result.data.firstname,
      );
      setUserLastName(
        result.data.lastname,
       );
       setUserEmail(
        result.data.email,
       );
       setUsername(
        result.data.username,
       );
       setProfile(
        result.data.profilePicture,
       );
    });

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
  }, [])
 //TODO: onsubmit handler
  const onSubmitUpdateProfile = (e) => {
    e.preventDefault();
    if (allUsername.includes(username)) {
      setError('Existing username');
      hideSuccessMessage(1500)
      return;
    }
    //TODO: Update user by id
    axios
      .patch(`http://localhost:8000/api/v1/users/${inLocalStorage}`, {
        firstname: userFirstName,
        lastname: userLastName,
        email: userEmail,
        profilePicture: profile,
        username:username,
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          window.location.reload();
        }
      });
    
  };
  return (
    <>
     <Navbar />
    <div className='vh-80 d-flex justify-content-center align-items-center'>
      <div className='reg-container d-flex justify-content-center align-items-center  rounded py-3 px-4'>
          <form className='' onSubmit={onSubmitUpdateProfile}>
            <div className='mb-3'>
              <div className='row'>
              <div class="mb-3">
                 <h5 className='mb-3'>Profile Update</h5>
                    <label htmlFor='picture' className='form-label'>
                    Profile Picture:
                    </label>
                    <div className='reg-col-1  justify-content-center'>
                     <img class="rounded float-start" alt='image_here'   //picture image
                        src={profile} id='thumbnail' className='w-50 mb-3' />
                    <div className='mb-4 d-flex justify-content-flex-start'>
                  //* upload widget
                   <UploadWidget
                  buttonText='Update Your Profile'
                  folderName='thumbnail'
                  thumbnailSet={setProfile}
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
                    value={userFirstName}
                    onChange={(e) => {
                      setUserFirstName(e.target.value);
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
                    value={userLastName}
                    onChange={(e) => {
                      setUserLastName(e.target.value);
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
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
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
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            {error ? ( <small className='text-danger'>{error}</small>) : null}
            </div>
            <div className='mb-3'>
              <div className='row'>
                <div className='mb-3 d-flex justify-content-center submit'>
                <button className='btn btn-success px-2 margin'>Change Password</button>
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
        </>
    
  );
}

export default UserPage;
