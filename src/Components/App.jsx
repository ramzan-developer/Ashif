import './App.css';
import '../../src/index.css';
import Header from './Header.jSX';
import Content from './content.jSX';
import Slide from './Slide.jsx';
import Process from './Process.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';


function App() {
  return (
    <div className='Main bg-neutral-900 text-white '>
      <Nav/>
      <Header/>
      <Content/>
      <Slide/>
      <Process/>
      <Footer/>
    </div>
    
      
  );
}

export default App;
