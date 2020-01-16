import React from 'react';

const Help = props => {
    return (
        <div>
            <section className='features-area section-gap-top'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='section-title'>
                                <h2>Como <span>Você Pode</span> Ajudar</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row feature_inner'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='feature-item'>
                                <i className='fi flaticon-compass'></i>
                                <h4>Doação</h4>
                                <p>
                                    Ao enxergar as necessidades do próximo e fazer algo para supri-las, nos 
                                    tornamos mais justos e igualitários. Doar vai muito além de “transferir 
                                    gratuitamente a outra pessoa". Doar é um ato de desprendimento, renúncia, 
                                    entrega e amor ao próximo.
                                </p>
                                <a href='#' className='primary-btn2'>Saiba Mais</a>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='feature-item'>
                                <i className='fi flaticon-desk'></i>
                                <h4>Oração</h4>
                                <p>
                                    Nós acreditamos no poder da oração que é feita com fé em Deus, no nome de Jesus 
                                    Cristo. E cremos que a oração nos capacita a realizar a obra que Deus nos determinou, 
                                    provendo os recursos e removendo os impedimentos de nosso caminho.
                                </p>
                                <a href='#' className='primary-btn2'>Saiba Mais</a>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='feature-item'>
                                <i className='fi flaticon-bathroom'></i>
                                <h4>Voluntáriado</h4>
                                <p>
                                    O trabalho voluntário pode ser uma ótima oportunidade para desenvolver novas habilidades 
                                    pessoais, profissionais e espirituais. Todo o trabalho irá te proporciona a descoberta de 
                                    novas amizades e vivências de experiências únicas e intensas.
                                </p>
                                <a href='#' className='primary-btn2'>Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Help
