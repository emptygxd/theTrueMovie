import { useState } from 'react';

export const useShowPassword = () => {
  const [isHidden, setIsHidden] = useState<'hidden' | 'shown'>('hidden');

  const showPassword = () => {
    setIsHidden((prev) => (prev === 'hidden' ? 'shown' : 'hidden'));
  };

  return {
    isHidden,
    showPassword,
  };
};
