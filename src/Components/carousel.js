import React from 'react';

const Carousel = props => {
    return(
        <div>
            <section className='home-banner-area relative' id='home' data-parallax='scroll' data-image-src=''>
                <div>
                    <slider>
                        <slide></slide>
                        <slide></slide>
                        <slide></slide>
                        <slide></slide>
                        <slide></slide>
                    </slider>
                </div>
                <div className='overlay-bg overlay'></div>
                <div className='container'>
                    <div className='row fullscreen justify-content-lg-end'>
                        <div className='banner-content col-lg-7'>
                            <h1>Ajude uma criança  <br/> no Camboja </h1>
                            <h4>"Ide por todo mundo e pregai o evagelho a toda criatura."</h4>
                            <a href='#' className='primary-btn'> Junte-se a Nós <i className='ti-angle-right ml-1'></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Carousel