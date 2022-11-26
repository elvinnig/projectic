import './App.css';
//*Import react-router
import {Route, Routes} from 'react-router'
import LoginPaeg from './pages/LoginPage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/users/log_in' element={<LoginPaeg />} />
      </Routes>
    </div>
  );
}

export default App;
