import { motion } from 'framer-motion';

interface ShootingStarProps {
  onComplete: () => void;
}

const ShootingStar = ({ onComplete }: ShootingStarProps) => {
  // Start from anywhere along the top-left 40% of the screen
  const startX = Math.random() * (window.innerWidth * 0.8);
  const startY = Math.random() * (window.innerHeight * 0.8);
  const distance = window.innerWidth * 1.3; // Ensure it goes off screen
  const angle = 35; // Consistent angle between 35-45 degrees

  return (
    <motion.div
      initial={{ 
        x: startX,
        y: startY,
        opacity: 0,
      }}
      animate={{
        x: startX + distance,
        y: startY + (distance * Math.tan(angle * Math.PI / 180)),
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2,
        ease: "linear",
        opacity: { times: [0, 0.1, 0.8, 1] }
      }}
      onAnimationComplete={onComplete}
      className="absolute z-10"
    >
      <motion.svg
        width="150"
        height="8"
        viewBox="0 0 150 8"
        style={{ rotate: `${angle}deg` }}
      >
        <motion.line
          x1="0"
          y1="5.5"
          x2="158"
          y2="5.5"
          stroke="url(#shooting-star-gradient)"
          strokeWidth="4"
        />
        <circle 
          cx="153"
          cy="5.5" 
          r="2.5" 
          fill="white" 
          filter="url(#glow)" 
        />
        
        <defs>
          <linearGradient 
            id="shooting-star-gradient"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </motion.svg>
    </motion.div>
  );
};

export default ShootingStar; 