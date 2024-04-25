'use client';

import AboutUs from './components/AboutUs';
import BannerFilter from './components/BannerFilter';
import ChooseNext from './components/ChooseNext';
import EnquireNow from './components/EnquireNow';
import FEQ from './components/FAQ';
import Footer from './components/Footer';
import HowToBook from './components/HowToBook';
import MembersOnly from './components/MembersOnly';
import Navbar from './components/Navbar';
import OurBlog from './components/OurBlog';
import PlanNextTrip from './components/PlanNextTrip';
import TopNavbar from './components/TopNavbar';

export default function Home() {
  return (
    <>
      <TopNavbar />
      <div className="pt-8 w-full">
        <Navbar />
      </div>
      <BannerFilter />
      <AboutUs />
      <PlanNextTrip />
      <FEQ />
      <HowToBook />
      <ChooseNext />
      <EnquireNow />
      <OurBlog />
      <MembersOnly />
      <Footer />
    </>
  );
}
