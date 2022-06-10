import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/AboutMe/About';
import ContactMe from './Components/Pages/ContactMe/ContactMe';
import Footer from './Components/Pages/Footer/Footer';
import Profile from './Components/Pages/Home/Profile';
import ProjectDetails from './Components/Pages/ProjectDetails/ProjectDetails';
import HomeProjects from './Components/Pages/Projects/HomeProjects';
import Education from './Components/Pages/Resume/Education';
import Projects from './Components/Pages/Resume/Projects';
import Resume from './Components/Pages/Resume/Resume';
import Skills from './Components/Pages/Resume/Skills';
import WorkHistory from './Components/Pages/Resume/WorkHistory';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={
          <>
          <Profile />
          <About />
          <HomeProjects />
          <ContactMe />
          <Footer />
          </>
        }></Route>
        <Route path='/resume' element={<Resume></Resume>}>
          <Route index element={<Skills></Skills>}></Route>
          <Route path='education' element={<Education></Education>}></Route>
          <Route path='workHistory' element={<WorkHistory></WorkHistory>}></Route>
          <Route path='projects' element={<Projects></Projects>}></Route>
        </Route>
        <Route path='/contactme' element={<ContactMe />}></Route>
        <Route path='/projectDetails/:id' element={<ProjectDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
