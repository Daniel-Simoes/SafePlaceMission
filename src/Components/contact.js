import React from 'react';

const Contact = props => {
    return(
        <div>
           <section class="section-gap">
                <div class="container">
            

                <div class="row">
                    <div class="col-12">
                    <h2 class="contact-title">Deixe-nos Uma Mensagem</h2>
                    </div>
                    <div class="col-lg-8">
                    <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
                        novalidate="novalidate">
                        <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                            <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Digite Sua Mensagem"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                            <input class="form-control" name="name" id="name" type="text" placeholder="Nome" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                            <input class="form-control" name="email" id="email" type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                            <input class="form-control" name="subject" id="subject" type="text" placeholder="Titulo" />
                            </div>
                        </div>
                        </div>
                        <div class="form-group mt-2 mb-5 mb-lg-0">
                        <button type="submit" class="button button-contactForm primary-btn">Enviar</button>
                        </div>
                    </form>
                    </div>

                    <div class="col-lg-4">
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="fa fa-phone"></i></span>
                        <div class="media-body">
                        <h3><a href="tel:454545654">+855 10 231 055</a></h3>
                        <p>Estamos Também No WhatsApp</p>
                        </div>
                    </div>
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="fa fa-envelope-o"></i></span>
                        <div class="media-body">
                        <h3><a href="mailto:support@colorlib.com">safeplacemission@gmail.com</a></h3>
                        <p>Envie-nos Suas Dúvidas a Qualquer Momento.</p>
                        </div>
                    </div>
                    </div>
                </div>
    </div>
  </section> 
        </div>
    )
}
export default Contact
















