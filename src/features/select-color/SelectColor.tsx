import React from 'react';
import { ColorCircle } from '@/shared';

const colors = ['bg-red', 'bg-black', 'bg-yellow'];

export const SelectColor = () => {
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
