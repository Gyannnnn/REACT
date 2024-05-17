import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Home from './Component/Home';
import Service from './Component/Service';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/home' element={<Home/>} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/service' element={<Service />} ></Route>
          <Route path='/contact' element={<Contact />}  ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
