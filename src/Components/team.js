import React from 'react';

const Team = props => {
    return (
        <section className='instagram-area section-gap-top'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <div className='section-title'>
                            <h2><span>Nosso</span> Time</h2>
                        </div>
                    </div>
                </div>
            </div>
           <div className='instagram-slider owl-carousel'>
               <a href='img/instagram/i1.jpg' className='single-instagram d-block img-pop-up'>
                    <div className='instagram-img'>
                        <img src='img/instagram/i1.jpg' alt=''/>
                        <div className='instagram-text'>
                            <i className='ti-instagram'></i>
                        </div>
                    </div>
                </a>
                <a href='img/instagram/i2.jpg' className='single-instagram d-block img-pop-up'>
                    <div className='instagram-img'>
                        <img src='img/instagram/i2.jpg' alt=''/>
                        <div className='instagram-text'>
                            <i className='ti-instagram'></i>
                        </div>
                    </div>
                </a>
                <a href='img/instagram/i3.jpg' className='single-instagram d-block img-pop-up'>
                    <div className='instagram-img'>
                        <img src='img/instagram/i3.jpg' alt=''/>
                        <div className='instagram-text'>
                            <i className='ti-instagram'></i>
                        </div>
                    </div>
                </a>
                <a href='img/instagram/i4.jpg' className='single-instagram d-block img-pop-up'>
                    <div className='instagram-img'>
                        <img src='img/instagram/i4.jpg' alt=''/>
                        <div className='instagram-text'>
                            <i className='ti-instagram'></i>
                        </div>
                    </div>
                </a>
                <a href='img/instagram/i5.jpg' className='single-instagram d-block img-pop-up'>
                    <div className='instagram-img'>
                        <img src='img/instagram/i5.jpg' alt=''/>
                        <div className='instagram-text'>
                            <i className='ti-instagram'></i>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}
export default Team