import { Route, Routes } from 'react-router-dom';


import Hero from "./components/HeroMain";
import Navbar from "./components/Navbar";

import Home from './pages/Home'
import About from './pages/About'
import Agenda from './pages/Agenda'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import FixedNavBar from './components/FixedNavBar';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import ScrollUp from './components/ScrollUp';

import Gallery from './pages/Gallery';
import Donators from './pages/Donators'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'





function App() {
  return (
    <>
      <Navbar />
      <FixedNavBar />
      <Routes>

        <Route path='/' element={<Home />} />

        {/* Main Nav */}
        <Route path='/about' element={<About />} />
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />

        {/* Pages Dropdown */}
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/donators' element={<Donators />} />
        <Route path='/team' element={<Team />} />
        <Route path='/testimonials' element={<Testimonial />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <ScrollUp />

      <Footer />
      <Copyright />
    </>
  );
}

export default App;
