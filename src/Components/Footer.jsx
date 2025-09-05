import React from 'react'
import logo from '../Images/insta.svg';

function Footer() {
  return (
    <div className='footer' style={{ color: 'white', display:'flex', justifyContent:'space-between', alignItems:'center',  backgroundColor:'#000000', height:'100px', marginTop:'30px'}}>
      <div className='left' style={{marginLeft: '5%', display: 'flex', alignContent: 'center', alignItems: 'center'}}>
        <img src={logo} alt='Instagram logo'className='h-10' />
        <p style={{marginLeft:'10px'}}>@2025 | Ashif Edits</p>
      </div>
      <div className='center'><p>Designed & Built by Ramzan</p></div>
      <div className='right transition transform hover:scale-105 hover:shadow-lg' style={{marginRight: '5%', color: 'white'}}><p>Work with me</p></div>
    </div>

    
  ) 
}

export default Footer;