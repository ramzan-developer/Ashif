import './App.css';
import '../../src/index.css';
import React from 'react';
import logo from '../Images/sun.png';

function Header() {
  return (
    <div className="header1 grid grid-cols-1 md:grid-cols-12 w-full   min-h-screen gap-3 border-b	 rounded-b-[50px] border-[#388053] md:mt-40">
      {/* Left Content */}
      <div className="md:col-span-7 md:flex md:flex-col md:justify-center text-left md:text-left p-6 space-y-0 ">
        <p className="md:text-[1.3rem] text-[1.2rem] font-bold bg-[#6e7774] rounded-full px-6 md:py-2 w-[16rem] items-center text-center" style={{marginTop:'30px'}}>
          Post Production Editors
        </p>
        <h2 className="text-[3rem] md:text-[4rem] font-bold">
          Helping podcasts <br />
          <span className="text-[#0EC582]">Grow & Monetize</span> <br /> with editing
        </h2>
        <h3 style={{marginTop:'13px', marginBottom:'40px'}} className="text-lg md:text-2xl">
          We turn boring content into engaging short-form edits, <br />
          growing your audience and monetizing fast.
        </h3>
        {/* Button & Icons */}
        <div className="flex flex-row items-center gap-4">
          <button className="bg-[#08915F] border-4 border-[#055B3C] text-white text-xl md:text-2xl rounded-xl px-6 py-3 font-bold shadow-md">
            Work with me
          </button>
          {/* Icons Section */}
          <div className="flex items-center relative">
            <img src={logo} alt="channel logo" className="h-12 w-12 " style={{zIndex: 10}}/>
            <img src={logo} alt="channel logo" className="h-12 w-12 " style={{zIndex: 20, marginLeft: '-1.8rem'}}/>
            <img src={logo} alt="channel logo" className="h-12 w-12 " style={{zIndex: 30, marginLeft: '-1.8rem',}} />
          </div>
          <p>Trusted by creators</p>
        </div>
      </div>

      {/* Right Video Section */}
      <div className="relative md:col-span-5 flex items-center justify-center p-6 " style={{marginTop:'30px'}}>
          {/* Radial Gradient Background */}
            <div className="absolute w-[1000px] h-[1000px] -bottom-[300px] -right-[250px] rounded-full  blur-[40px]" style={{
              background: 'radial-gradient(50% 50% at 50% 50%, rgba(84, 192, 125, 0.4) 0%, rgba(72, 170, 109, 0) 100%)'
            }} />
        {/* Video Container */}
            <iframe className='relative z-0 h-[400px] w-[230px] md:h-[550px] md:w-[300px] ' src="https://www.youtube.com/embed/eWRQFk_dqmQ" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
      </div>

    </div>
  );
}

export default Header;
