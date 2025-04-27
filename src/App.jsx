import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Preloader from "./components/Preloader";
import { useEffect, useState } from 'react';
import Home from './Pages/Home';
import Upload from './Pages/Upload';
import Documentation from './Pages/Documentation';
import Positive from './Pages/Positive';
import Negative from './Pages/Negative';
function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading? (<Preloader/>) : (
        <div>
          <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/upload" element = {<Upload/>} />
            <Route path="/documentation" element = {<Documentation/>} />
            <Route path="/positive" element = {<Positive/>} />
            <Route path="/negative" element = {<Negative/>} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
