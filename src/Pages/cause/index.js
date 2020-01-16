import React from 'react';

import Header from '../../Components/header';
import Footer from '../../Components/footer';
import Donate from '../../Components/donate';
import TeaserCauses from '../../Components/teaserCauses';
import TopCause from '../../Components/topCause';

export default function cause() {
  return (
      <div>
        <Header />
        <TopCause />
        <TeaserCauses />
        <Donate />
        <Footer />
      </div> 
  );
}
