import React from 'react';

import Header from '../../Components/header';
import Footer from '../../Components/footer';
import TopEvent from '../../Components/topEvent';
import Schedule from '../../Components/schedule';

export default function event() {
  return (
      <div>
        <Header />
        <TopEvent />
        <Schedule />
        <Footer />
      </div> 
  );
}