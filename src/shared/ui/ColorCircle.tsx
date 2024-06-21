import React from 'react';

type ColorCircleProps = {
  color: string;
};

export const ColorCircle: React.FC<ColorCircleProps> = (props) => {
  return (
    <span className={`${props.color} rounded-full w-14 h-14 cursor-pointer z-10 hover:border-2 border-gray`}></span>
  );
};
