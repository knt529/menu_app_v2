import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './tsx/views/Auth/Home';
import Login from './tsx/views/Auth/Login';
import PrivateRoute from './tsx/views/Auth/PrivateRoute';
import PublicRoute from './tsx/views/Auth/PublicRoute';
import SignUp from './tsx/views/Auth/SignUp';
import { AuthProvider } from './tsx/context/AuthContext';

function App() {
  return (
    <>
     <AuthProvider>
     <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home/>}/>

          <Route exact path='/signup' element={<SignUp/>}/>

          <Route exact path='/login' element={<Login/>}/>

        </Routes>
      </Fragment>
    </BrowserRouter>
  </AuthProvider>
    </>
  );
}

export default App;
