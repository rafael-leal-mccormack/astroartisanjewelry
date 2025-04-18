import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import StarryBackground from './StarryBackground';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEtsy } from 'react-icons/fa';
import { PiThreadsLogoFill } from 'react-icons/pi';
import { IconType } from 'react-icons';
import { FaStar } from 'react-icons/fa';
import { IoMoonSharp } from 'react-icons/io5';
import { EtsyListing, mockListings } from '../services/etsyService';

const SocialIcon = ({ Icon, href }: { Icon: IconType; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="text-white hover:text-gray-300 transition-colors"
  >
    {Icon({ size: 24 })}
  </motion.a>
);

const BulletPoint = ({ icon, children }: { icon: IconType, children: React.ReactNode }) => (
  <li className="flex items-center gap-3 text-lg md:text-xl font-serif text-gray-200">
    {icon({ size: 16, className: "text-white/80" })}
    {children}
  </li>
);

const Hero = () => {
  const [shootingStars, setShootingStars] = useState<number[]>([]);

  useEffect(() => {
    // Create one shooting star every 1-2 seconds
    const interval = setInterval(() => {
      setShootingStars(prev => [...prev, Date.now()]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const removeShootingStar = (id: number) => {
    setShootingStars(prev => prev.filter(starId => starId !== id));
  };

  // --- Add featured listings logic ---
  const featuredTitles = ["Head in the Clouds", "Cosmic", "Cloud Nine", "Pearl Swirl"];
  const featuredListings: EtsyListing[] = mockListings.filter((listing: EtsyListing) => 
    featuredTitles.includes(listing.title)
  );
  // Ensure the order matches featuredTitles if needed, or adjust filter logic
  // For simplicity, we assume the filter finds them in any order.
  // To enforce order:
  // const featuredListingsMap = mockListings.reduce((acc, listing) => {
  //   if (featuredTitles.includes(listing.title)) {
  //     acc[listing.title] = listing;
  //   }
  //   return acc;
  // }, {} as Record<string, EtsyListing>);
  // const orderedFeaturedListings = featuredTitles.map(title => featuredListingsMap[title]).filter(Boolean);

  return (
    <div className="relative min-h-screen h-auto bg-primary overflow-hidden pb-16">
      <StarryBackground 
        shootingStars={shootingStars}
        onShootingStarComplete={removeShootingStar}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-4 pt-16 pb-8"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm font-quicksand tracking-[0.3em] uppercase mb-4"
        >
          Inspired by the stars
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 overflow-hidden"
        >
          <img 
            src="/logo.png" 
            alt="Astro Artisan Jewelry" 
            className="h-64 lg:h-[25rem] w-auto mx-auto scale-[2]"
          />
        </motion.div>
        {/* <p className="text-lg md:text-xl font-serif max-w-2xl mx-auto mb-8 leading-relaxed text-gray-200">
          Handcrafted jewelry inspired by the cosmos, 
          <br />designed for those who dream among the stars
        </p> */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-3 mb-8"
        >
          <BulletPoint icon={FaStar}>
            Small batch polymer clay & charm earrings
          </BulletPoint>
          <BulletPoint icon={IoMoonSharp}>
            Handmade & lightweight
          </BulletPoint>
        </motion.ul>
        <Link to="/store">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-primary transition-all duration-300 font-quicksand tracking-wider mb-8"
          >
            Explore Collection
          </motion.button>
        </Link>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-6 mt-4"
        >
          <SocialIcon 
            Icon={FaInstagram} 
            href="https://www.instagram.com/astroartisanjewelry" 
          />
          <SocialIcon 
            Icon={PiThreadsLogoFill} 
            href="https://www.threads.net/@astroartisanjewelry" 
          />
          <SocialIcon 
            Icon={FaEtsy} 
            href="https://astroartisanjewelry.etsy.com" 
          />
        </motion.div>
      </motion.div>

      {/* --- Featured Collection Section --- */}
      
    </div>
  );
};

export default Hero; 

// {featuredListings.length > 0 && (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8, delay: 1.2 }}
//     className="relative w-full max-w-6xl mx-auto px-4 mt-12 pb-12"
//   >
//     <h2 className="text-3xl font-serif text-center text-white mb-8">
//       Featured Collection
//     </h2>
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//       {featuredListings.map((listing: EtsyListing) => (
//         <motion.a
//           key={listing.listing_id}
//           href={listing.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group block bg-black/20 rounded-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
//           whileHover={{ y: -5 }}
//         >
//           <img 
//             src={listing.images[0]?.url_570xN} 
//             alt={listing.title} 
//             className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-quicksand font-semibold text-white truncate group-hover:text-gray-200">
//               {listing.title}
//             </h3>
//             {/* Optional: Add price or other details */}
//             {/* <p className="text-sm text-gray-300 mt-1">
//               ${(listing.price.amount / listing.price.divisor).toFixed(2)}
//             </p> */}
//           </div>
//         </motion.a>
//       ))}
//     </div>
//   </motion.div>
// )}