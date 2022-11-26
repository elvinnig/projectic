//import './App.css';
//*Import react-router
import {Route, Routes} from 'react-router'
//*Pages
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/users/log_in' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
