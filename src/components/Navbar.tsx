import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    // Optionally clear search query when closing
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // Navigate to store page with search query parameter
      navigate(`/store?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false); // Close search after submit
      setSearchQuery('');    // Clear input
    }
  };


  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center text-white text-xl font-serif hover:text-gray-300 transition">
            <img 
              src="/logo-cropped-no-text.png" 
              alt="Astro Artisan Jewelry Logo" 
              className="h-8 w-auto mr-10 scale-[2] origin-left" // Adjust size and margin as needed
            /> 
            Astro Artisan Jewelry
          </Link>
          {/* Wrap links and search */}
          <div className="flex items-center space-x-4">
            {/* Regular Links - Hide when search is open? Optional */}
            {/* {!isSearchOpen && ( */} 
              <>
                <Link to="/" className="text-white hover:text-gray-300 transition">
                  Home
                </Link>
                <Link to="/store" className="text-white hover:text-gray-300 transition">
                  Store
                </Link>
              </>
            {/* )} */}

            {/* Search Input / Icon */}
            <div className="flex items-center">
              {isSearchOpen && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchSubmit}
                  placeholder="Search..."
                  className="px-3 py-1 rounded bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-300 w-32 md:w-48"
                  autoFocus // Focus when opened
                />
              )}
              <button
                onClick={handleSearchToggle}
                className="ml-2 text-white hover:text-gray-300 transition p-1" // Added padding
                aria-label={isSearchOpen ? "Close search" : "Open search"}
              >
                {FaSearch({ size: 18 })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 