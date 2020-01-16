import React from 'react';

const Newsletter = props => {
    return (
        <div>
             <div className='cta-area'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7'>
                            <p className='top_text'>Mantenha-se Informado</p>
                            <h1>Inscreva-se e Receba Nossas Novidades </h1>
                            <div id='mc_embed_signup'>
                                <form target='_blank' action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01'
                                method='get'> 
                                <div class="row align-items-center">
								<div class="col-lg-5 mb-lg-0 mb-3">
									<input class="form-control" placeholder="Seu Nome" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your name'"
									 required="" type="email" />
								</div>
								<div class="col-lg-5 mb-lg-0 mb-3">
									<input class="form-control" name="EMAIL" placeholder="Seu Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email'"
									 required="" type="email" />
								</div>
								<div class="col-lg-2">
									<button class="primary-btn" type="submit">Enviar</button>
									<div className='btn-newsletter'>
										<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
									</div>
									<div class="info"></div>
								</div>
							</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newsletter