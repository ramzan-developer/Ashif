import './App.css';
import '../../src/index.css';
import Anime from '../Images/Anime.png';
import hindifact from '../Images/hindifact.png';
import Baaz from '../Images/Baaz.png';

function Header() {
  return (
    <div className="header1 grid grid-cols-1 md:grid-cols-12 w-full   min-h-screen gap-3 border-b	 rounded-b-[50px] border-[#388053] md:mt-40 overflow-hidden" style={{padding:'80px'}}>
      {/* Left Content */}
      <div className="md:col-span-7 flex flex-col justify-center text-left p-6 md:pl-20 space-y-6 z-20 ">
        <p className="md:text-[1.3rem] text-[1.2rem] font-bold bg-[#6e7774] rounded-full px-6 md:py-2 w-fit items-center text-center" style={{marginTop:'30px'}}>
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
        <div className="flex flex-row items-center gap-5 md:gap-10">
          <button className="bg-[#08915F] border-4 border-[#055B3C] text-white text-xl md:text-2xl rounded-xl px-6 py-3 font-bold shadow-md transition transform hover:scale-105 hover:shadow-lg">
            <a href='https://www.instagram.com/ashifxvisual?igsh=ZXpuMWk5YXhub3A4' target="_blank">Work with me</a>
          </button>
          {/* Icons Section */}
          <div className='md:flex md:flex-col md:items-center'>
            <div className="flex items-center relative">
            <img src={Baaz} alt="channel logo" className="h-10 w-10 md:h-12 md:w-12" style={{zIndex: 10}}/>
            <img src={Anime} alt="channel logo" className="h-10 w-10 md:h-12 md:w-12" style={{zIndex: 20, marginLeft: '-1.8rem'}}/>
            <img src={hindifact} alt="channel logo" className="h-10 w-10 md:h-12 md:w-12" style={{zIndex: 30, marginLeft: '-1.8rem',}} />
          </div>
          <p>Trusted by creators</p>
          </div>
          
        </div>
      </div>

  
      {/* Right Video Section  */}
      <div className="relative md:col-span-5 flex items-center justify-center p-6 md:pr-20">
          {/* Radial Gradient Background */}
          <div className="absolute inset-0 right-0 w-full h-full">
          <div className="w-full h-full bg-gradient-radial rounded-bl-[300px] -bottom-[350px] -right-[31px]" style={{
            background: 'radial-gradient(circle at center, rgba(84, 192, 125, 0.4) 0%, rgba(72, 170, 109, 0) 70%)',
          }} />
          </div>
        
        {/* Video Container */}
            <iframe className='relative z-0 h-[550px] w-[300px] ' src="https://www.youtube.com/embed/eWRQFk_dqmQ" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
      </div>

    </div>
  );
}

export default Header;
