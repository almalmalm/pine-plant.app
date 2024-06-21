import { SizeSquare } from '@/shared/ui';
import React from 'react';

const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];

export const SizeSelector = () => {
  return (
    <div>
      <span className="text-2xl uppercase font-bold">Select Size (us)</span>
      <div className="grid grid-cols-sizeSelector gap-6 m-6 font-light">
        {sizes.map((size, index) => (
          <SizeSquare size={size} key={index} />
        ))}
      </div>
    </div>
  );
};
