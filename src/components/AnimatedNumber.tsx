
import React from 'react';
import { useCountUp } from '@/utils/animations';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1500,
  decimals = 1,
  suffix = '',
  className = '',
}) => {
  const count = useCountUp(value, duration, decimals);
  
  return (
    <span className={`inline-block animate-count-up ${className}`}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedNumber;
