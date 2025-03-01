import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Store from './pages/Store';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
