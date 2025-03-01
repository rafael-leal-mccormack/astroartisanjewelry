import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Array<{
    listing_id: number;
    title: string;
    price: {
      amount: number;
      divisor: number;
      currency_code: string;
    };
    images: {
      url_570xN: string;
    }[];
    url: string;
  }>;
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <motion.div
          key={product.listing_id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProductCard
            title={product.title}
            price={`${product.price.currency_code} ${(product.price.amount / product.price.divisor).toFixed(2)}`}
            imageUrl={product.images[0]?.url_570xN || ''}
            productUrl={product.url}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid; 