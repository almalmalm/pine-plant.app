import { MenuTab } from '@/shared/ui/MenuTab';

export const Menu: React.FC = () => {
  return (
    <div className="flex gap-4">
      <MenuTab title="New Releases" />
      <MenuTab title="MEN" />
      <MenuTab title="WoMEN" />
      <MenuTab title="KIDS" />
      <MenuTab title="CUSTOMIZE" />
    </div>
  );
};
