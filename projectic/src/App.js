//import './App.css';
//*Import react-router
import {Route, Routes} from 'react-router'
//*Pages
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Homepage from './pages/Homepage';
import ViewProject from './pages/ViewProject';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/users/log_in' element={<LoginPage />} />
        <Route path='/users/sign_up' element={<RegistrationPage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/project' element={<ViewProject />} />
      </Routes>
    </div>
  );
}

export default App;
