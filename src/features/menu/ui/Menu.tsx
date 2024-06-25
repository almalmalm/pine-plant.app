import { MenuTab } from '@/shared';
import styles from './styles.module.scss';

export const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <MenuTab title="New Releases" href="/new-releases" data-pw="menu-tab-new-releases" />
      <MenuTab title="MEN" href="/men" data-pw="menu-tab-men" />
      <MenuTab title="WoMEN" href="/women" data-pw="menu-tab-women" />
      <MenuTab title="KIDS" href="/kids" data-pw="menu-tab-kids" />
      <MenuTab title="CUSTOMIZE" href="/customize" data-pw="menu-tab-customize" />
    </div>
  );
};
