import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './Component/Services';
import { Home } from './Component/Home';
import Footer from './Component/Footer';
import User from './Component/User';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/services' element={<Services />} ></Route>
          <Route path='/user/:id' element= {<User />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
