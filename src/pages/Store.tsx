import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductGrid from '../components/store/ProductGrid';
import { EtsyListing, fetchEtsyListings } from '../services/etsyService';

type FilterType = 'all' | 'earrings' | 'necklace';

const Store = () => {
  const [products, setProducts] = useState<EtsyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const listings = await fetchEtsyListings();
        setProducts(listings);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    setSearchQuery(searchParams.get('search')?.toLowerCase() || '');
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = activeFilter === 'all' || product.tags.includes(activeFilter);
      if (!categoryMatch) return false;

      if (searchQuery) {
        const searchMatch = 
          product.title.toLowerCase().includes(searchQuery) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchQuery));
        if (!searchMatch) return false;
      }

      return true;
    });
  }, [products, activeFilter, searchQuery]);

  const FilterButton = ({ filter, label }: { filter: FilterType, label: string }) => (
    <button
      onClick={() => setActiveFilter(filter)}
      className={`px-4 py-2 rounded transition font-medium 
                  ${activeFilter === filter 
                    ? 'bg-white text-primary' 
                    : 'bg-primary/40 text-white hover:bg-primary/60'}
                  `}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-primary pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif text-white text-center mb-8"
        >
          {searchQuery ? `Search Results for "${searchParams.get('search') || ''}"` : 'Our Collection'}
        </motion.h1>

        {!loading && !error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center space-x-3 mb-12"
          >
            <FilterButton filter="all" label="All" />
            <FilterButton filter="earrings" label="Earrings" />
            <FilterButton filter="necklace" label="Necklaces" />
          </motion.div>
        )}

        {loading && (
          <div className="text-white text-center">
            Loading products...
          </div>
        )}

        {error && (
          <div className="text-red-400 text-center">
            {error}
          </div>
        )}

        {!loading && !error && (
          filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <p className="text-center text-white/80 text-lg">
              {searchQuery ? 'No products found matching your search.' : 'No products found for this filter.'}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Store; 