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



function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/users/log_in' element={<LoginPage />} />
        <Route path='/users/sign_up' element={<RegistrationPage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/project' element={<ViewProject />} />
        {/* [x] Temporary Route */}
        <Route path='/user/add_project' element={<AddProjectPage />} />
        <Route path='/addFile' element={<AddFilePage />} />
        <Route path='/user/dashboard' element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
