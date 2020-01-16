import React from 'react';
import { NavLink } from 'react-router-dom';

const News = props => {
    return (
        <div>
             <section className='blog-area section-gap-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12'>
                            <div className='home-blog-left'>
                                <h2>Últimas Postagens do nosso Informativo</h2>
                                <p>
                                 Visite regularmente o Informativo Mensal e fique por dentro de nossas Noticías.
                                </p>
                                <NavLink exact activeClassName="active" className='primary-btn mt-5' to='/blog'>Informativo<i className='ti-angle-right ml-1'></i></NavLink>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 single-blog'>
                            <div className='thumb'>
                                <img className='img-fluid' src='img/blog/b3.jpg' alt=''/>
                            </div>
                            <div className='single-blog-info'>
                            <p className='tag'><span>QUÉSEDE SANTOS</span><span>Dezembro, 2019</span></p>    
                            <NavLink exact activeClassName="active" to='/blog'><h4>Por que começamos pelo Camboja?</h4></NavLink>  
                            </div>
                        </div>  
                        <div className='col-lg-4 col-md-6 single-blog'>
                            <div className='thumb'>
                                <img className='img-fluid' src='img/blog/b1.jpg' alt=''/>
                            </div>
                            <div className='single-blog-info'>
                                <p className='tag'><span>QUÉSEDE SANTOS</span><span>Setembro, 2019</span></p>
                                <NavLink exact activeClassName="active" to='/blog'><h4>Por que começamos pelo Camboja?</h4></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default News