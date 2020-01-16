import React from 'react';

import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Help from '../../Components/help';
import Volunteer from '../../Components/volunteer';
import Newsletter from '../../Components/newsletter';
import TopContact from '../../Components/topContact';
import Contact from '../../Components/contact';

export default function contact() {
  return (
      <div>
        <Header />
        <TopContact />
        <Contact />
        <Footer />
      </div> 
  );
}
