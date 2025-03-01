import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedProducts />
              <Newsletter />
            </>
          } />
          <Route path="/store" element={<div>Store Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
