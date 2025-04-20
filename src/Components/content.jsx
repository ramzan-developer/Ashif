import React from 'react';
import img1 from '../Images/reel.webp';



function Content() {
  return (
    <>
      <div className='content-text' style={{paddingTop: "90px"}}>
          <h3 className=" text-5xl text-center font-medium">Short form content <br/> that captures 
           <span className='text-[#0EC582]'> attention</span> </h3>
      </div>

      <div style={{ marginTop: "40px", paddingInline: "220px" }} className="  grid grid-cols-4 gap-[40px]">

          <iframe className='col-span-1 h-[400px] w-[230px]' src="https://www.youtube.com/embed/hR1XNBLYGyk" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
          <iframe className='col-span-1 h-[400px] w-[230px]' src="https://www.youtube.com/embed/4wBNOGfSlGw" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
          <iframe className='col-span-1 h-[400px] w-[230px]' src="https://www.youtube.com/embed/I01PdtMokh0" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
          <iframe className='col-span-1 h-[400px] w-[230px]' src="https://www.youtube.com/embed/eWRQFk_dqmQ" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
          <iframe className='col-span-1 h-[400px] w-[230px]' src="https://www.youtube.com/embed/RIm5wZ-bUR4" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
          <iframe className='col-span-1 h-[400px] w-[230px]' src="https://www.youtube.com/embed/3f9x7RIrB4A" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
          <iframe className='col-span-1 h-[400px] w-[230px]' src="https://www.youtube.com/embed/B5_eQYKR32M" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
          <iframe className='col-span-1 h-[400px] w-[230px]' src="https://www.youtube.com/embed/brWZ6OwKT7U" title="YouTube Shorts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>

      </div>

      <div className='content-main'>
        <div className='result-text'>
          <h3 className='text-5xl text-center font-medium' style={{marginTop: "100px"}}>The <span className='text-[#0EC582]'>
          results</span> speak<br/>for themselves</h3>
        </div>
        <div className='flex justify-center ' style={{margin: '50px'}}>
         <div className='grid grid-cols-3 gap-8 h-[430px] w-[750px] border-2 rounded-[2rem]' style={{padding: '30px'}}>
            <img className='img-r col-span-1 duration-300 hover:scale-105 hover:shadow-xl' src={img1} alt='img1' />
            <img className='img-r col-span-1 duration-300 hover:scale-105 hover:shadow-xl' src={img1} alt="img2" />
            <img className='img-r col-span-1 duration-300 hover:scale-105 hover:shadow-xl' src={img1} alt="img3" />
         </div>
        </div>
        <div className=' flex justify-evenly items-center text-5xl font-bold'>
            <div className='line '></div>
            <div>
              <p >Recent Clients</p>
            </div>
            <div className='line'></div>
        </div>
      </div>
    </>
  );
}

export default Content;
