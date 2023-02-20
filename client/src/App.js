import './App.css';
import Landing from './components/Landing/Landing';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login'
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Autobot from './components/Autobots/Autobot';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import About from './components/About/About';
import Spare from './components/Spare/Spare';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import { useState, useEffect } from 'react';
function App() {
  useEffect(() => {
    console.log(`Is in dark mode? ${darkMode}`);
  }, [darkMode]);
  const [dark, setDark] = useState("main-body-light")
  const handleDarkMode = () => {
    if (dark === "main-body-light") {
      setDark("main-body-dark")
    }
    else{
      setDark("main-body-light")
    }
  }
  let dc = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come back please! 😭";
  })
  window.addEventListener("focus", () => {
    document.title = dc;
  })
  return (
    <div className={dark}>
      <div className="App">
        <div className="darkmode">
          <label class="switch">
            <input type="checkbox" onClick={handleDarkMode} />
            <span class="slider"></span>
          </label>
        </div>
        <Routes>
          <Route path='' element={<Landing />}></Route>
          <Route path='autobots' element={<Autobot />}>
            <Route path='home' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='aboutus' element={<About />} />
            <Route path='spare' element={<Spare />} />
            <Route path='services' element={<Services />} />
            <Route path='cart' element={<Cart />} />
          </Route>
          <Route path='products' element={<Autobot />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
