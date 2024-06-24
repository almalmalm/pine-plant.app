import React from 'react';
import { Menu, UserProfile } from '@/features';
import { Cart, NikeLogo, User } from '@/shared';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <NikeLogo width={99} height={35} />
      </div>
      <Menu />
      <div className={styles.userActions}>
        <UserProfile />
        <Cart width={27} height={32} />
      </div>
    </div>
  );
};
