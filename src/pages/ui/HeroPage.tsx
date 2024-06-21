import { Header } from '@/widgets/header/ui';
import { Product, SizeSelector } from '@/widgets/product/ui';

export default function HeroPage() {
  return (
    <div className="mt-16 ml-32 mr-32">
      <Header />
      <Product />
    </div>
  );
}
