import React from 'react';

import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Carousel from '../../Components/carousel';
import Donate from '../../Components/donate';
import News from '../../Components/news';
import Team from '../../Components/team';
import Schedule from '../../Components/schedule';
import Help from '../../Components/help';
import Tease from '../../Components/tease';
import Volunteer from '../../Components/volunteer';
import Newsletter from '../../Components/newsletter';

export default function home() {
  return (
      <div>
        <Header />
        <Carousel />
        <Tease />
        <Help />
        <Donate />
        <Volunteer />
        <Schedule />
        <News /> 
        <Team />
        <Newsletter />
        <Footer />
      </div> 
  );
}
