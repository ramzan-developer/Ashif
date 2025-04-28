import React, { useState } from 'react';
import pic from '../Images/ashif sheikh.jpg';
import { Menu, X } from 'lucide-react'; // Import the X icon for closing the menu

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <div >
        <div className='Navbar fixed w-full rounded-2xl top-0 z-50 bg-neutral-300/4 shadow-lg backdrop-blur-sm px-4'>
            {/* Navbar Container */}
            <div className='nav1 px-4 py-2 md:h-18 flex justify-between items-center'>
                {/* Profile Picture */}
                <div className='flex items-center'>
                    <img
                        className='size-12 rounded-xl overflow-auto object-cover'
                        src={pic}
                        alt="Profile"
                    />
                </div>

                {/* Menu Button */}
                <div className='md:hidden items-center'>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <X color="white" size={48} /> // Close icon when menu is open
                        ) : (
                            <Menu color="white" size={48} /> // Menu icon when menu is closed
                        )}
                    </button>
                </div>

                {/* Navigation Links (Visible on larger screens) */}
                <div className='hidden md:flex gap-6 text-2xl'>
                    <a href='/#'>Work</a>
                    <a href='/#'>About Me</a>
                    <a href='/#'>Testimonials</a>
                </div>

                {/* Call Button (Visible on larger screens) */}
                <div className='hidden md:flex items-center'>
                    <button className='nav-button bg-[#08915F] border-4 border-[#055B3C] text-neutral-100 text-2xl rounded-xl w-[12rem] h-[3rem] font-bold'>
                        <a href='https://www.instagram.com/editwithashif?igsh=bzhhaXo1bmR0ajV4' target="_blank">Book a Call</a>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Visible when menu is open) */}
            {isMenuOpen && (
                <div className='flex flex-col items-center justify-center h-auto bg-neutral-300/4 shadow-lg backdrop-blur-sm' style={{ padding: '20px' }}>
                    <ul className='flex flex-col gap-6 text-2xl '>
                        <li>
                            <a href='/#' onClick={toggleMenu}>Work</a>
                        </li>
                        <li>
                            <a href='/#' onClick={toggleMenu}>About Me</a>
                        </li>
                        <li>
                            <a href='/#' onClick={toggleMenu}>Testimonials</a>
                        </li>
                    </ul>
                     {/* Add the "Book a Call" button */}
        <button className='nav-button bg-[#08915F] border-4 border-[#055B3C] text-neutral-100 text-2xl rounded-xl w-[10rem] h-[3rem] font-bold ' style={{ marginTop: '2rem' }} onClick={toggleMenu}>
           <a href='https://www.instagram.com/editwithashif?igsh=bzhhaXo1bmR0ajV4' target="_blank"></a> Book a Call
        </button>
                </div>
            )}
        </div>
        </div>
    );
}

export default Nav;