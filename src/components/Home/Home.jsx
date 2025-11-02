import Hero from "./Hero.jsx";
import Explore from "./Explore.jsx";
import Stories from "./Stories.jsx";
import CommunityJoin from "./CommunityJoin.jsx";
import Navbar from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Stories />
      <CommunityJoin />
      <Footer />
    </>

  );
}
