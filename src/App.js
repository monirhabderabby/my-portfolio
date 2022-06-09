import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/AboutMe/About';
import Profile from './Components/Pages/Home/Profile';
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
          </>
        }></Route>
        <Route path='/resume' element={<Resume></Resume>}>
          <Route path="skills" index element={<Skills></Skills>}></Route>
          <Route path='education' element={<Education></Education>}></Route>
          <Route path='workHistory' element={<WorkHistory></WorkHistory>}></Route>
          <Route path='projects' element={<Projects></Projects>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
