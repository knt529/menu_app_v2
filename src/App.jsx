import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './tsx/views/Auth/Home';
import Login from './tsx/views/Auth/Login';
import PrivateRoute from './tsx/views/Auth/PrivateRoute';
import PublicRoute from './tsx/views/Auth/PublicRoute';
import SignUp from './tsx/views/Auth/SignUp';
import Contact from './tsx/views/block/Contact';
import { AuthProvider } from './tsx/views/context/AuthContext';

function App() {
  return (
    <>
     <AuthProvider>
     <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/menu_app_v2' element={<Login/>}/>

          <Route exact path='/signup' element={<SignUp/>}/>

          <Route exact path='/home' element={<Home/>}/>

          <Route exact path='/contact' element={<Contact/>}/>

        </Routes>
      </Fragment>
    </BrowserRouter>
  </AuthProvider>
    </>
  );
}

export default App;
