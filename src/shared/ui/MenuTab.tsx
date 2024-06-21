import Link from 'next/link';
import React from 'react';

type MenuTabProps = {
  title: string;
  href: string;
};

export const MenuTab: React.FC<MenuTabProps> = (props) => {
  return (
    <div className="cursor-pointer hover:scale-125 z-10">
      <Link href={props.href}>{props.title}</Link>
    </div>
  );
};
