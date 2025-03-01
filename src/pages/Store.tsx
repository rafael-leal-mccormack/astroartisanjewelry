import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/store/ProductGrid';
import { EtsyListing, fetchEtsyListings } from '../services/etsyService';

const Store = () => {
  const [products, setProducts] = useState<EtsyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-primary pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-display text-white text-center mb-12"
        >
          Our Collection
        </motion.h1>

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
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
};

export default Store; 