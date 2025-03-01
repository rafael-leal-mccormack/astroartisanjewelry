import { motion } from 'framer-motion';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Celestial Pendant",
      price: "$129",
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 2,
      name: "Moon Phase Ring",
      price: "$89",
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 3,
      name: "Star Cluster Earrings",
      price: "$149",
      image: "https://via.placeholder.com/300x300"
    }
  ];

  return (
    <div className="bg-primary-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-white text-center mb-12">
          Featured Pieces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-primary rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-white">
                <h3 className="text-xl font-serif">{product.name}</h3>
                <p className="text-gray-300">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts; 