import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navmenu from './components/Navmenu'
import Introduction from './components/Introduction'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      <Navmenu />
      <Introduction />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer/>
    </div>

  );
}

export default App;
