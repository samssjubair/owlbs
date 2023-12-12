
import HomeCarousel from '@/components/home/Carousel'
import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
      
          <HomeCarousel />
          
      </div>
    </>
  );
}
