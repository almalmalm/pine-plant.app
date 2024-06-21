import React from 'react';

type SizeSquareProps = {
  size: number;
};

export const SizeSquare: React.FC<SizeSquareProps> = (props) => {
  return (
    <span className="border-2 border-gray w-14 h-14 text-xl flex justify-center items-center cursor-pointer z-10">
      {props.size}
    </span>
  );
};
