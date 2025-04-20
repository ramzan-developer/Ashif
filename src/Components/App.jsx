import './App.css';
import '../../src/index.css';
import Header from './Header.JSX';
import Content from './content.JSX';
import Slide from './Slide.jsx';
import Process from './Process';
import Footer from './Footer';
import pic from '../Images/ashif sheikh.jpg';
import { Menu } from 'lucide-react';


function App() {
  return (
    <div className='Main bg-neutral-900 text-white '>
      <div className='Navbar top-0 sticky z-50 '>
          <div className='nav1 px-1 bg-neutral-300/4 rounded-2xl h-18 shadow-lg backdrop-blur-sm flex justify-between items-center '>
                <div>
                    <img className=' h-14 w-14  rounded-xl overflow-auto object-cover' src={pic} alt="Profile" />
                </div>
                <div className='flex justify-around items-center'>
                    <ul className='flex gap-6 text-2xl'>
                        <li>
                          <a href='/#'>Work</a>
                        </li>
                        <li>
                          <a href='/#'>About Me</a>
                        </li>
                        <li>
                          <a href='/#'>Testimonials</a>
                        </li>
                    </ul>
                </div>
                    <div className='flex items-center'>
                        <button className='nav-button bg-[#08915F] border-4 border-[#055B3C] text-neutral-100 text-2xl rounded-xl h-14 w-45 font-bold inset-shadow-sm inset-shadow-green-300'>Book a Call</button>
                        <Menu color="white" size={48} className='lg:hidden'/>
                    </div>
                


          </div>
      </div>
       
      <Header/>
      <Content/>
      <Slide/>
      <Process/>
      <Footer/>
    </div>
    
      
  );
}

export default App;
