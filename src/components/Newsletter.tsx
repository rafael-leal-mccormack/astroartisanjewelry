const Newsletter = () => {
  return (
    <div className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif text-white mb-6">
          Join Our Celestial Circle
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to receive updates about new collections, special offers, and cosmic inspiration.
        </p>
        <div className="max-w-md mx-auto">
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-primary rounded-full hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 