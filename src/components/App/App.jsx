import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import HeaderDesktop from '../HeaderDesktop/HeaderDesktop';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import FooterMobile from '../FooterMobile/FooterMobile';
import FooterDesktop from '../FooterDesktop/FooterDesktop';
import { useMediaQuery } from 'react-responsive';
import Search from '../Search/Search';
import Epoque from '../Epoque/Epoque';
import Detail from '../Detail/Detail';
import { useSelector } from 'react-redux';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const dinoData = useSelector((state) => state.dino.dinoData);
  // console.log(isDesktopOrLaptop);
  console.log(dinoData);
  return (
    <>
      {isDesktopOrLaptop && <HeaderDesktop />}
      {!isDesktopOrLaptop && <HeaderMobile />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/epoque" element={<Epoque />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      {!isDesktopOrLaptop && <FooterMobile />}
      {isDesktopOrLaptop && <FooterDesktop />}
    </>
  );
}

export default App;
