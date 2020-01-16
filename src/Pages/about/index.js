import React from 'react';

import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Team from '../../Components/team';
import TopAbout from '../../Components/topAbout';
import About from '../../Components/about';

export default function about() {
  return (
      <div>
       <Header />
        <TopAbout />
        <About />
        <Team />
        <Footer />
      </div> 
  );
}

