import { MenuTab } from '@/shared';
import styles from './styles.module.scss';

export const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <MenuTab title="New Releases" href="/new-releases" />
      <MenuTab title="MEN" href="/men" />
      <MenuTab title="WoMEN" href="/women" />
      <MenuTab title="KIDS" href="/kids" />
      <MenuTab title="CUSTOMIZE" href="/customize" />
    </div>
  );
};
