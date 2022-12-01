//import './App.css';
//*Import react-router
import { Route, Routes } from 'react-router';
//*Pages
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Homepage from './pages/Homepage';
import ViewProject from './pages/ViewProject';
import AddProjectPage from './pages/AddProjectPage';
import AddFilePage from './pages/AddFilePage';
import UserDashboard from './pages/UserDashboard';
import Settings from './pages/Settings';
import UpdateProject from './pages/UpdateProject';
import AboutUsPage from './pages/AboutUsPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/users/log_in' element={<LoginPage />} />
        <Route path='/users/sign_up' element={<RegistrationPage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/users/view_project' element={<ViewProject />} />
        {/* [x] Temporary Route */}
        <Route path='/user/add_project' element={<AddProjectPage />} />
        <Route path='/users/addFile' element={<AddFilePage />} />
        <Route path='/users/dashboard' element={<UserDashboard />} />
        <Route path='/users/settings' element={<Settings />} />
        <Route path='/users/update_project' element={<UpdateProject />} />
        <Route path='/about_us' element={<AboutUsPage />} />
        <Route path='/users/user_settings' element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;

/* 
TODO
* Add badges
* Add Badges when creating project
! search project
! search badge
* display badge in userdashboard
! update project
! delete project
! delete files
! update files
! filter using badge
! display badge in project card

*/
