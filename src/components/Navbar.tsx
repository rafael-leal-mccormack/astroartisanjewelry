import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-serif">
            Astro Artisan
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
            <Link to="/store" className="text-white hover:text-gray-300 transition">
              Store
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 