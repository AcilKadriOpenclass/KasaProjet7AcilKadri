import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Logement from '../pages/Logement';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;