import { Menu } from '@/widgets/ui/Menu';
import Image from 'next/image';

//TODO: Add Image to FSD

export default function HeroPage() {
  return (
    <>
      <Menu />
      <Image src="/nike_uptempo.webp" alt="sneakers" width={500} height={500} />
    </>
  );
}
