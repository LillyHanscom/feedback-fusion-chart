
import { useEffect, useState } from 'react';

export function useCountUp(
  target: number,
  duration: number = 1500,
  decimals: number = 1
) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(parseFloat((target * easeOutQuart).toFixed(decimals)));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, decimals]);
  
  return count;
}

export function useAnimatedWidth(
  percentage: number,
  delay: number = 0,
  duration: number = 1000
) {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);
  
  return `${width}%`;
}
