import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import GettingStarted from './components/GettingStarted';
import EndlessExtras from './components/EndlessExtras';
import KeepComing from './components/KeepComing';
import Caroux from './components/Caroux';
import CashOrCard from './components/CashOrCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      {/* <div className='flex relative bg-light-green w-full h-auto md:hidden'>
        <img className='w-full absolute top-0 left-0 z-[-1]' src="hero-mobile_2021.jpg" alt="Image de fond mobile" />
        <div className='flex flex-col items-center m-auto mt-8 z-5 justify-center'>
          <h1 className='mb-4 uppercase text-center text-black font-bold text-2xl'>Free coffee <br/> is a tap away</h1>
          <p className='mb-7 text-center text-black'>Join now to start earning Rewards.</p>
          <Button variant="primary" className="mb-4">Join in the app</Button>
          <Button variant="underline" className="text-black">Or join online</Button>
        </div>
      </div> */}

      <div className='flex relative bg-light-green w-full h-auto md:hidden'>
        <img className='w-full' src="hero-mobile_2021.jpg" alt="Image de fond mobile" />
        <div className='flex flex-col items-center absolute left-[calc(50%-8rem)] m-auto mt-8 z-5 justify-center'>
          <h1 className='mb-4 uppercase text-center text-black font-bold text-2xl'>Free coffee <br/> is a tap away</h1>
          <p className='mb-7 text-center text-black'>Join now to start earning Rewards.</p>
          <Button variant="primary" className="mb-4">Join in the app</Button>
          <Button variant="underline" className="text-black">Or join online</Button>
        </div>
      </div>

      <div className='hidden md:flex relative bg-light-green w-full h-auto '>
        <div className='z-1 w-full h-full absolute 2xl:max-w-7xl mx-auto mt-20 lg:mt-30 xl:mt-45 pl-5 2xl:left-[calc(50%-40rem)]'>
          <h1 className='mb-5 uppercase text-start text-black font-bold text-3xl'>Free coffee <br/> is a tap away</h1>
          <p className='mb-9 text-start text-black'>Join now to start earning Rewards.</p>
          <Button variant="primary" className="mb-5">Join now</Button>
          <p className='text-black'>Or <a className='underline hover:no-underline hover:cursor-pointer'>join in the app</a> for the best experience</p>
        </div>
        <div className='w-full bg-light-green'>
          <img className='w-full ml-36 lg:ml-52 xl:ml-72' src="bg-desk.png" alt="Image de fond desktop" />
        </div>
      </div>

      <GettingStarted />
      <Caroux />
      <EndlessExtras />
      <CashOrCard />
      <KeepComing />
      <Footer />
    </>
  );
}

export default App;