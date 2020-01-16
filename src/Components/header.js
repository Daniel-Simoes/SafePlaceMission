import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return(
        <div>
            <header className='default-header'>
				<nav className='navbar navbar-expand-lg navbar-light'>
					<div className='container'>
						<a className='navbar-brand' href='index.html'>
							<img src='img/logo/logo.png' alt=''/>
						</a>
						<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
							<span className='fa fa-bars'></span>
						</button>
						<div className='collapse navbar-collapse justify-content-end align-items-center' id='navbarSupportedContent'>
							<ul className='navbar-nav'>
								<li><NavLink exact activeClassName="active" to='/'>Inicio</NavLink></li>
								<li><NavLink exact activeClassName="active" to='/about'>Sobre Nós</NavLink></li>
								<li><NavLink exact activeClassName="active" to='/causes'>Nossas Causas</NavLink></li>
								<li><NavLink exact activeClassName="active" to='/events'>Eventos</NavLink></li>
								<li><NavLink exact activeClassName="active" to='/blog'>Informativos</NavLink></li>
								<li><NavLink exact activeClassName="active" to='/contacts'>Contatos</NavLink></li>	
							</ul>
						</div>
					</div>
				</nav>
			</header>
        </div>
	)
}
export default Header
