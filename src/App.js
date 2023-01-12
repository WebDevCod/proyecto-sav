import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Beauty from './components/Beauty';
import Home from './components/Home';
import Retratos from './components/Retratos';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='beauty' element={<Beauty />} />
          <Route path='retratos' element={<Retratos />} />
          <Route path='about' element={<About />} />
        </Routes>
      </Router>
    </>
  );
};