import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App() {
  return (


    <Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />} />
      </Routes>

    </Navbar>


  );
}

export default App;
