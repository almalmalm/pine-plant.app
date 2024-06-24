import React from 'react';
import Image from 'next/image';
import { ColorSelector, SizeSelector } from '@/widgets';
import { ProductInfo } from '@/entities/product/ui/ProductInfo';
import { ProductImage } from '@/entities/product/ui/ProductImage';
import styles from './styles.module.scss';

function changeColor(selectedColorCircle: string) {
  const sneakersImages = ['/nike_uptempo_red.webp', '/nike_uptempo_black.webp', '/nike_uptempo_yellow.webp'];
  return sneakersImages.filter((image) => image.includes(selectedColorCircle));
}

//PRODUCT INFO
//PRODUCT PHOTO
//PRODUCT VARIANTS

export const Product = () => {
  return (
    <div className={styles.container}>
      <ProductInfo />
      <ProductImage />
    </div>
    // <div className="flex justify-end items-center mt-20">
    //   <div className="absolute right-1/3">
    //     <Image src={String(changeColor('red'))} alt="sneakers" width={700} height={700} />
    //   </div>
    //   <div className="flex flex-col gap-5">
    //     <SizeSelector />
    //     <ColorSelector />
    //   </div>
    // </div>
  );
};
