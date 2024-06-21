import { ColorCircle } from '@/shared/ui';
import React from 'react';

const colors = ['bg-red', 'bg-black', 'bg-yellow'];

export const ColorSelector = () => {
  return (
    <div>
      <span className="text-2xl uppercase font-bold">Select Color</span>
      <div className="grid grid-cols-sizeSelector gap-6 m-6 font-light">
        {colors.map((color, index) => (
          <ColorCircle color={color} key={index} />
        ))}
      </div>
    </div>
  );
};
