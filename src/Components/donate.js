import React from 'react';

const Donate = props => {
    return (
        <div>
            <section className='popular-cause-area section-gap-top'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='section-title'>
                                <h2><span>Popular</span> Causes</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='card single-popular-cause'>
                                <div className='card-body'>
                                    <figure>
                                        <img className='card-img-top img-fluid' src='img/causes/c1.jpg' alt=''/>
                                    </figure>
                                    <div className='card_inner_body'>
                                        <div className='tag'>Education</div>
                                        <h4 className='card-title'>Educação e Acolhimento Infantil</h4>
                                       
                                        <div className='d-flex justify-content-between donation align-items-center'>
                                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QTCSGBJJMSX2N&source=url" class="primary-btn">Doar</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='card single-popular-cause'>
                                <div className='card-body'>
                                    <figure>
                                        <img className='card-img-top img-fluid' src='img/causes/c2.jpg' alt=''/>
                                    </figure>
                                    <div className='card_inner_body'>
                                        <div className='tag'>Conforto</div>
                                        <h4 className='card-title'>Ambientes saudáveis para as crianças</h4>
                                        
                                        <div className='d-flex justify-content-between donation align-items-center'>
                                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QTCSGBJJMSX2N&source=url" class="primary-btn">Doar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='card single-popular-cause'>
                                <div className='card-body'>
                                    <figure>
                                        <img className='card-img-top img-fluid' src='img/causes/c3.jpg' alt=''/>
                                    </figure>
                                    <div className='card_inner_body'>
                                        <div className='tag'>EXPLORAÇÃO SEXUAL</div>
                                        <h4 className='card-title'>Combate a exploração sexual e tráfico humano</h4>
                                        
                                        <div className='d-flex justify-content-between donation align-items-center'>
                                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QTCSGBJJMSX2N&source=url" class="primary-btn">Doar</a>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Donate