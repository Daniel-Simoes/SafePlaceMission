import React from 'react';
import { NavLink } from 'react-router-dom';

const Tease = props => {
    return (
        <div>
            <section className='about_area lite_bg'>
                <div className='container'>
                    <div className='row align-items-end'>
                        <div className='col-lg-5'>
                            <div className='about_details lite_bg'>
                                <h2>Safe Place Mission </h2>
                                <p className='top_text'>
                                    Safe Place Mission é uma instituição que atua com enfoque no enfrentamento a exploração
                                    sexual e tráfico humano e tem em seu DNA o evangelho de Cristo e corresponder o
                                    chamado para as missões.
                                </p>
                                <p className='mb-0'>
                                    Atuamos em diferentes locais e culturas e, por isso, cumprimos
                                    a nossa missão sem ferir os valores culturais das nações, pois, cremos que a cultura
                                    também é uma expressão do caráter de Deus. O mesmo Jesus que redime corações,
                                    também se importa em redimir as culturas das nações.
                                </p>
                                <NavLink exact activeClassName="active" className='primary-btn mt-5' to='/about'>Saiba Mais<i className='ti-angle-right ml-1'></i></NavLink>
                                <div className='active-brand-carusel'>
                                    <div className='single-brand'>
                                        <img className='mx-auto w-auto' src='img/brands/b1.png' alt=''/>
                                    </div>
                                    <div className='single-brand'>
                                        <img className='mx-auto w-auto' src='img/brands/b2.png' alt=''/>
                                    </div>
                                    <div className=' single-brand'>
                                        <img className='mx-auto w-auto' src='img/brands/b3.png' alt=''/>
                                    </div>
                                    <div className=' single-brand'>
                                        <img className='mx-auto w-auto' src='img/brands/b2.png' alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 offset-lg-3 col-md-6 offset-md-1 d-lg-block d-none'>
                            <div className='about_right'>
                                <div className='video-inner justify-content-center align-items-center d-flex'>
                                    <a id='play-home-video' className='video-play-button' 
                                    href='https://www.youtube.com/watch?v=QFy8iPBYDLU'>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about_bg d-lg-block d-none'></div>
                </div>
            </section>
        </div>
    )
}
export default Tease