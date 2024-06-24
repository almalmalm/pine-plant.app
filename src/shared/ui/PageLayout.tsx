import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
