import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import About from './pages/about';
import Profile from './pages/profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';



export default function App() {
  return  (
    <>
    <BrowserRouter>
    <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route element={<PrivateRoute />} >
      <Route path="/profile" element={<Profile />} />
      </Route>
     </Routes>
    </BrowserRouter>
    </>
   
  )
}
