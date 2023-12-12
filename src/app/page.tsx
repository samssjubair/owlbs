
import HomeCarousel from '@/components/home/Carousel'
import Services from '@/components/home/Services';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      
      <HomeCarousel />
      <Services />
    </>
  );
}
