import React from 'react';
import styles from './styles.module.scss';

export const ProductInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>Men&apos;s Shoe</div>
      <div className={styles.name}>Nike Air Edge 270</div>
      <div className={styles.description}>
        The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens
      </div>
    </div>
  );
};
