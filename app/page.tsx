import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/hero');
  return <div>Home</div>;
}
