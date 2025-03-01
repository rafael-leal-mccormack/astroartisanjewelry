import { AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
import ShootingStar from './ShootingStar';

interface StarryBackgroundProps {
  shootingStars: number[];
  onShootingStarComplete: (id: number) => void;
}

interface StaticStar {
  left: string;
  top: string;
  size: number;
  delay: string;
}

const StarryBackground = ({ shootingStars, onShootingStarComplete }: StarryBackgroundProps) => {
  const staticStars = useMemo(() => {
    return Array.from({ length: 50 }, (): StaticStar => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3,
      delay: `${Math.random() * 4}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Static stars */}
      {staticStars.map((star, i) => (
        <div
          key={i}
          className="absolute animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            animationDelay: star.delay,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      <AnimatePresence>
        {shootingStars.map(id => (
          <ShootingStar 
            key={id} 
            onComplete={() => onShootingStarComplete(id)} 
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StarryBackground; 