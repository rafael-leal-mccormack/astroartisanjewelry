import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  price: string;
  imageUrl: string;
  productUrl: string;
}

const ProductCard = ({ title, price, imageUrl, productUrl }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <a 
        href={productUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-white font-quicksand text-lg mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-white/90 font-serif">
            {price}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProductCard; 