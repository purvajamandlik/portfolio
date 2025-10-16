
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav'
import Home from './components/home';
import Hobbies from './components/hobbies';
import About from './components/about';
import Certification from './components/certification';
import Project from './components/projects';
import Education from './components/education';
import Contact from './components/contact'
function App() {
  return (
    <div className="App">
      <Router>
      < Nav/>
     <Routes>
       <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
           <Route path="/projects" element={<Project />} />
        <Route path="/hobbies" element={<Hobbies />} />
         <Route path="/certifications" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
        

      </Routes>
      </Router>
      </div>
  );
}

export default App;
