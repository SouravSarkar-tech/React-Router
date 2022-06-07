import React from 'react'
import { BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import HeaderMain from './Components/HeaderMain';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HeaderMain />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
