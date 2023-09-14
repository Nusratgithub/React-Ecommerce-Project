import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import HeroSection from './components/HeroSection';
import OurBestSellers from './components/OurBestSellers';
import Ingridients from './components/Ingridients';
import JournalSection from './components/JournalSection';
import BsText from './components/BsText';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SinglePage from "./components/SinglePage";
import JournalPage from "./components/JournalPage";
import Cart from './components/Cart';
import FollowONIG from './components/FollowONIG';
import Products from './components/Products';
import CartHold from './components/CartHold';
import SPFooter from './components/SPFooter';
import Under20 from './components/Under20';
import Under10 from './components/Under10';
import ForHer from './components/ForHer';
import ForHim from './components/ForHim';
import SimpleSlider from './components/HeroCarousel';
import BestSellers from './components/BestSellers';
import GiftSets from './components/GiftSets';
// import CartTotal from './components/CartTotal';
import Payment from './components/Payment/payment';
import CartTotal from './components/CartTotal';


function App() {

  return (
    <div className="App container mx-auto">
      <BrowserRouter>

        <Routes>
          <Route path='/' exact element={<>   <NavBar /> <SimpleSlider/> <HeroSection />  <BsText />  {<Products />}  {/*<OurBestSellers />*/}  <Ingridients />  <JournalSection /> <FollowONIG /> <SPFooter />  </>} />
          <Route path='/:id' exact element={<> <NavBar /> <SinglePage /> </>} />
          <Route path='/bestSeller' exact element={<> <NavBar /> <BestSellers/> <Ingridients /><FollowONIG /> <SPFooter/> </>} />
          <Route path='/giftSets' exact element={<> <NavBar /> <GiftSets/> <Ingridients /><FollowONIG /> <SPFooter/> </>} />
          <Route path='/shopRange' exact element={<> <NavBar /> <Body/> <Ingridients /><FollowONIG /> <SPFooter/> </>} />
          <Route path='/journal/april' element={<> <NavBar /> <JournalPage /> </>} />
          <Route path='/cart' exact element={<>  <NavBar /><CartHold /></>} />
          <Route path='/under20' element={<> <NavBar /> <Under20 /> </>} />
          <Route path='/under40' element={<> <NavBar /> <Under10 /> </>} />
          <Route path='/forher' element={<> <NavBar /> <ForHer /> </>} />
          <Route path='/forhim' element={<> <NavBar /> <ForHim /> </>} />
          <Route path='/payment/:id' element={<><NavBar/> <CartTotal/> <SPFooter/> </>} />
        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;
