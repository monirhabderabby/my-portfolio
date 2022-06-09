import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/AboutMe/About';
import Profile from './Components/Pages/Home/Profile';
import Education from './Components/Pages/Resume/Education';
import Resume from './Components/Pages/Resume/Resume';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={
          <>
          <Profile />
          <About />
          <Resume />
          </>
        }></Route>
        <Route path='/#resume' element={<Resume></Resume>}>
          <Route path='education' element={<Education></Education>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
