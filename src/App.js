import { useState } from "react"
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {

  const [darkMode, setDarkMode] = useState();

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  
  return (
    <div className="App">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} 
      />
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
