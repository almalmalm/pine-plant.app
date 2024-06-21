import { NikeLogo } from '@/shared/icons/NikeLogo';
import { MenuTab } from '@/shared/ui/MenuTab';

export const Menu: React.FC = () => {
  return (
    <div className="flex gap-10 font-bold text-2xl uppercase">
      <MenuTab title="New Releases" href="/new-releases" />
      <MenuTab title="MEN" href="/men" />
      <MenuTab title="WoMEN" href="/women" />
      <MenuTab title="KIDS" href="/kids" />
      <MenuTab title="CUSTOMIZE" href="/customize" />
    </div>
  );
};
