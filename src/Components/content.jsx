import React from 'react';
import img1 from '../Images/reel.webp';



function Content() {
  return (
    <>
      <div className='content-text' style={{paddingTop: "90px"}}>
          <h3 className=" text-[3rem] md:text-[4rem] text-center font-medium">Short form content <br/> that captures 
           <span className='text-[#0EC582]'> attention</span> </h3>
      </div>

{/*Youtube shorts collections*/}
        <div style={{ marginTop: "40px"  }} className="flex justify-center">
      <div  className="  md:grid md:grid-cols-4 gap-[60px] items-center mx-auto">

          <iframe className='col-span-1 h-[400px] w-[230px]' src="https://www.youtube.com/embed/hR1XNBLYGyk" style={{marginTop: '0'}} title="YouTube Shorts"
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
      </div>

      <div className='content-main'>
        <div className='result-text'>
          <h3 className='text-[3rem] md:text-[4rem] text-center font-medium' style={{marginTop: "100px"}}>The <span className='text-[#0EC582]'>
          results</span> speak<br/>for themselves</h3>
        </div>
        {/* Resulst Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8" style={{ margin: "50px" }}>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8  h-auto md:h-[430px] w-[250px] md:w-[750px] border-2 rounded-[2rem]" style={{ padding: "30px" }}>
    <img
      className="img-r col-span-1 duration-300 hover:scale-105 hover:shadow-xl"
      src={img1}
      alt="img1"
    />
    <img
      className="img-r col-span-1 duration-300 hover:scale-105 hover:shadow-xl"
      src={img1}
      alt="img2"
    />
    <img
      className="img-r col-span-1 duration-300 hover:scale-105 hover:shadow-xl"
      src={img1}
      alt="img3"
    />
  </div>
</div>
        <div className=' flex justify-evenly items-center text-[2rem] md:text-[3rem] font-bold'>
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
