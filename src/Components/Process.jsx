import './App.css';
import React from 'react';
import dialer from '../Images/dialer.png';
import chat from '../Images/chat.png';
import process from '../Images/process.png';
import pic from '../Images/square profile.jpg';

function Process() {
  return (
    <div>
         <h3 className=" text-5xl text-center font-medium" style={{margin: '80px'}}>Super simple to<br/>get started</h3>
         {/*Process container*/}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center" style={{ margin: "50px" }}>
  <div>
    <h1 className="text-3xl font-medium" style={{ marginBottom: "20px" }}>Book a Call</h1>
    <p className="text-xl">15 minutes to talk about your goals and needs</p>
    <img
      className="border rounded-3xl border-[#ffffff75] h-74"
      style={{ marginTop: "20px" }}
      src={dialer}
      alt="dialer"
    />
  </div>
  <div>
    <h1 className="text-3xl font-medium" style={{ marginBottom: "20px" }}>Workflow</h1>
    <p className="text-xl">Steps we go through to create a finished video edit</p>
    <img
      className="border rounded-3xl border-[#ffffff75] h-74"
      style={{ marginTop: "20px" }}
      src={process}
      alt="process"
    />
  </div>
  <div>
    <h1 className="text-3xl font-medium" style={{ marginBottom: "20px" }}>Revisions</h1>
    <p className="text-xl">Not satisfied with something, no worries, we can correct that</p>
    <img
      className="border rounded-3xl border-[#ffffff75] h-74"
      style={{ marginTop: "20px" }}
      src={chat}
      alt="chat"
    />
  </div>
</div>
{/*Profile container*/}
<div className="flex flex-col md:flex-row gap-10 items-center" style={{ marginInline: "130px" }}>
  <div className="profilePic">
    <img
      src={pic}
      className="-rotate-2 h-auto sm:h-90 md:w-230 object-fill border rounded-3xl border-[#ffffff75]"
      alt="Profile"
    />
  </div>
  <div className="RightText flex flex-col">
    <div className="text1 text-5xl font-medium">
      <h3>Face Behind the Brand</h3>
    </div>
    <div
      className="text-2xl/9 tracking-wide"
      style={{ marginTop: "30px" }}
    >
      <p>
        Hi, I'm Ashif, a Video Editor studying Bachelor of Computer
        Applications. I help creators and brands boost engagement and views
        with my editing. Oh, that’s not all about me. I love reading books,
        cold coffee, and clicking pictures.
      </p>
    </div>
    <button
      className="nav-button bg-[#08915F] border-4 border-[#055B3C] text-neutral-100 text-xl rounded-xl h-14 w-45 font-bold inset-shadow-sm inset-shadow-green-300"
      style={{ marginTop: "30px" }}
    >
      <a href='https://www.instagram.com/editwithashif?igsh=bzhhaXo1bmR0ajV4' target="_blank">Work with me</a>
    </button>
  </div>
</div>
</div>
  )
}

export default Process;