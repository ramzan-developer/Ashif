
import React from 'react';
import yt from '../Images/yt-test.webp';
import yticon from '../Images/ytlogo.png';
import Anime from '../Images/Anime.png';
import hindifact from '../Images/hindifact.png';
import Baaz from '../Images/Baaz.png';
import Gerolt from '../Images/Gerolt.png';
import Motivation from '../Images/Motivation.png';


function Slide() {
  return (
    <div className='slide scroll shadow-lg' style={{boxShadow: '0px 0px 15px 2px black', paddingTop: '20px'}}>
      
      <div className='scroll-content '>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={Anime} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>Anime Squad</p>
          </div>
        </div>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={Baaz} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>Baaz Gaming</p>
          </div>
        </div>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={Gerolt} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>Gerolt Gaming</p>
          </div>
        </div>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={hindifact} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>hindifacts</p>
          </div>
        </div>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={Motivation} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>Beast Spark</p>
          </div>
        </div>
      </div>
      <div className='scroll-content '>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={Anime} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>Anime Squad</p>
          </div>
        </div>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={Baaz} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>Baaz Gaming</p>
          </div>
        </div>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={Gerolt} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>Gerolt Gaming</p>
          </div>
        </div>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={hindifact} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>hindifacts</p>
          </div>
        </div>
        <div className='sld flex-col justify-center'>
          <img className='rounded-full w-80' src={Motivation} alt='hindifacts' />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={yticon} alt='logo' style={{ width: '50px' }} />
            <p className='text-2xl'>Beast Spark</p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Slide;

