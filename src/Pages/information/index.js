import React from 'react';

import Header from '../../Components/header';
import Footer from '../../Components/footer';
import TopInformation from '../../Components/topInformation';
import Blog from '../../Components/blog';


export default function information() {
  return (
      <div>
        <Header />
        <TopInformation />
        <Blog />  
        <Footer />
      </div> 
  );
}
