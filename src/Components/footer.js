import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = props => {
    return(
        <div>
            <footer className='footer'>
                <div className='footer-area'>
                    <div className='container'>
                        <div className='row section_gap'>
                            <div className='col-lg-5 col-md-6 col-sm-6'>
                                <div className='single-footer-widget tp_widgets'>
                                    <h4 className='footer_title large_title'>Safe Place</h4>
                                    <p>
                                        Safe Place Mission é uma plataforma missionária, com foco no enfrentamento a 
                                        exploração sexual e tráfico humano, bem como a propagação do evangelho entre 
                                        povos não alcançados.
                                    </p>
                                    <p>
                                        Copyright&copy; <script>document.write(new Date().getFullYear());</script> 
                                        Todos os direitos reservados - Safe Place Mission
                                    </p>
                                </div>
                            </div>
                            <div className='offset-lg-1 col-lg-2 col-md-6 col-sm-6'>
                                <div className='single-footer-widget tp_widgets'>
                                    <h4 className='footer_title'>Links Rápidos</h4>
                                    <ul className='list'>
                                        <li><NavLink exact activeClassName="active" to='/'>Inicio</NavLink></li>
                                        <li><NavLink exact activeClassName="active" to='/about'>Sobre Nós</NavLink></li>
                                        <li><NavLink exact activeClassName="active" to='/causes'>Nossas Causas</NavLink></li>
                                        <li><NavLink exact activeClassName="active" to='/events'>Eventos</NavLink></li>
                                        <li><NavLink exact activeClassName="active" to='/blog'>Informativos</NavLink></li>
                                        <li><NavLink exact activeClassName="active" to='/contacts'>Contatos</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='offset-lg-1 col-lg-3 col-md-6 col-sm-6'>
                                <div className='single-footer-widget tp_widgets'>
                                    <h4 className='footer_title'>Contato</h4>
                                    <div className='ml-5'>
                                        <p className='sm-head'><span className='fa fa-phone'></span> Telefone </p>
                                        <p>
                                            +855 10 231 055
                                        </p>
                                        <p className='sm-head'><span className='fa fa-envelope'></span> Email </p>
                                        <p>
                                            safeplacemission@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
	        </footer>
        </div>
    )
}
export default Footer
