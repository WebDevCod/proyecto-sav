import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import Beauty from './components/Beauty';
import Home from './components/Home';
import Retratos from './components/Retratos';
import NavBarUsed from './layouts/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarUsed />}>
            <Route index element={<Home />} />
            <Route path='beauty' element={<Beauty />} />
            <Route path='retratos' element={<Retratos />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
