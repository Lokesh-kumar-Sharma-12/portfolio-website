import Navbar from './Mycomponent/section/Navbar'
import Hero from './Mycomponent/section/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutme from './Mycomponent/section/Aboutme';
import Project from './Mycomponent/section/Project';
import ContactPage from './Mycomponent/section/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <main className='w-screen text-white bg-black'>
        <Navbar />
        {/* <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<Aboutme />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes> */}
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <Aboutme />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App