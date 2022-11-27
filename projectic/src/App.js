//import './App.css';
//*Import react-router
import {Route, Routes} from 'react-router'
//*Pages
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/users/log_in' element={<LoginPage />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
