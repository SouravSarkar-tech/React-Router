import React from 'react'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import About from './Components/About';
import Account from './Components/Account';
import { AuthProvider } from './Components/auth';
import ClientReview from './Components/ClientReview';
//import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
//import HeaderMain from './Components/HeaderMain';
import Home from './Components/Home';
import Login from './Components/Login';
import RequireAuth from './Components/RequireAuth';
import Navbar from './Navbar/Navbar';

const LazyContact = React.lazy(() =>import('./Components/Contact'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route index element={<Home />}/> */}
        <Route path="about" element={<About />}>
        <Route path="clientreview" element={<ClientReview />} />
        </Route>
        <Route path="contact" element={
          <React.Suspense fallback = 'Wait Its Loading...'>
            <LazyContact/>
          </React.Suspense>
        } />
         <Route path="account" element={<RequireAuth><Account /></RequireAuth>} />
         <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
