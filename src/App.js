import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/AboutMe/About';
import ContactMe from './Components/Pages/ContactMe/ContactMe';
import Footer from './Components/Pages/Footer/Footer';
import Profile from './Components/Pages/Home/Profile';
import ProjectDetails from './Components/Pages/ProjectDetails/ProjectDetails';
import HomeProjects from './Components/Pages/Projects/HomeProjects';

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
        <Route path='/contactme' element={<ContactMe />}></Route>
        <Route path='/projectDetails/:id' element={<ProjectDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
