'use client';
import { User } from '@/shared';
import React, { useState } from 'react';
import styles from './styles.module.scss';

export const UserProfile = () => {
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);

  return (
    <div>
      <div onMouseEnter={() => setIsUserProfileModalOpen(true)} onMouseLeave={() => setIsUserProfileModalOpen(false)}>
        <User width={30} height={30} />
      </div>
      {isUserProfileModalOpen && (
        <div
          className={styles.modal}
          onMouseEnter={() => setIsUserProfileModalOpen(true)}
          onMouseLeave={() => setIsUserProfileModalOpen(false)}
        >
          <ul>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};
