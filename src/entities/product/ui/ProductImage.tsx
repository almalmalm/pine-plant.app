import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

export const ProductImage = () => {
  return (
    <div className={styles.image}>
      <Image src={'/nike_uptempo_red.webp'} alt="sneakers" width={700} height={700} />
    </div>
  );
};
