import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { auth } from './config/firebaseConfig';
import { signOut } from 'firebase/auth';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth);
    localStorage.clear();
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <>
      <Navbar isAuth={isAuth} userSignOut={userSignOut} />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home isAuth={isAuth} />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
