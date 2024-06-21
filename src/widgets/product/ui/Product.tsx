import React from 'react';
import Image from 'next/image';
import { ColorSelector, SizeSelector } from '@/widgets/product/ui';

export const Product = () => {
  return (
    <div className="flex justify-end items-center mt-20">
      <div className="absolute right-1/3">
        <Image src="/nike_uptempo_red.webp" alt="sneakers" width={700} height={700} />
      </div>
      <div className="flex flex-col gap-5">
        <SizeSelector />
        <ColorSelector />
      </div>
    </div>
  );
};
