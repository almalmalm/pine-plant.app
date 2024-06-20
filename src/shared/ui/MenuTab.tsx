import React from 'react';

type MenuTabProps = {
  title: string;
};

export const MenuTab: React.FC<MenuTabProps> = (props) => {
  return <div>{props.title}</div>;
};
