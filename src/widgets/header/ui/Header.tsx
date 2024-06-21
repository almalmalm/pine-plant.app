import React from 'react';
import { Menu } from '@/widgets/header/ui';
import { Cart, NikeLogo, User } from '@/shared/icons';

export const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <NikeLogo width={99} height={35} />
      </div>
      <Menu />
      <div className="flex gap-9">
        <User width={30} height={30} />
        <Cart width={27} height={32} />
      </div>
    </div>
  );
};
