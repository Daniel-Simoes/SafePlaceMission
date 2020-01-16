import React from 'react';

const Volunteer = props => {
    return (
        <div>
            <section className='callto-area section-gap relative'>
                <div className='overlay overlay-bg'></div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <p className='top_text'>Precisamos da sua ajuda</p>
                            <div className='call-wrap mx-auto'>
                                <h1>Quer ser Voluntário Trabalhando em sua Área?</h1>
                                <p>
                                    Entre em contato conosco que iremos orienta-los de nossas necessidades e a 
                                    partir daí traçaremos objetivos que poderão ser implantados para continuação 
                                    de nossa MISSÃO.
                                </p>
                                <a href='#' className='primary-btn mt-5'> Cadastre-se<i className='ti-angle-right ml-1'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Volunteer