import React from 'react';

const Schedule = props => {
    return (
        <div>
            <section className='upcoming_event_area section-gap-top'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className='section-title'>
								<h2><span>Próximos </span> Eventos</h2>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-lg-6'>
							<div className='single_upcoming_event'>
								<div className='row align-items-center'>
									<div className='col-lg-6 col-md-6'>
										<figure>
											<img className='img-fluid w-100' src='img/event/e1.jpg' alt='' />
											
										</figure>
									</div>
									<div className='col-lg-6 col-md-6'>
										<div className='content_wrapper'>
											<h3 className='title'>
												<a href='event-details.html'>Evento</a>
											</h3>
											<p> Descrição do Evento </p>
											<div className='d-flex count_time justify-content-lg-start justify-content-center' id='clockdiv1'>
												<div className='single_time'>
													<h4 className=''>15</h4>
													<p>Dia</p>
												</div>
												<div className='single_time'>
													<h4 className=''>Fev</h4>
													<p>Mês</p>
												</div>
												<div className='single_time'>
													<h4 className=''>19:00</h4>
													<p>Horário</p>
												</div>
											</div>
											<a href='#' className='primary-btn2'>Evento Organizado pela Missão</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='single_upcoming_event'>
								<div className='row align-items-center'>
									<div className='col-lg-6 col-md-6'>
										<figure>
											<img className='img-fluid w-100' src='img/event/e2.jpg' alt='' />
										</figure>
									</div>
									<div className='col-lg-6 col-md-6'>
										<div className='content_wrapper'>
											<h3 className='title'>
												<a href='event-details.html'>Evento</a>
											</h3>
											<p> Descrição do Evento </p>
											<div className='d-flex count_time justify-content-lg-start justify-content-center' id='clockdiv1'>
												<div className='single_time'>
													<h4 className=''>15</h4>
													<p>Dia</p>
												</div>
												<div className='single_time'>
													<h4 className=''>Fev</h4>
													<p>Mês</p>
												</div>
												<div className='single_time'>
													<h4 className=''>19:00</h4>
													<p>Horário</p>
												</div>
											</div>
											<a href='#' className='primary-btn2'>Evento Organizado pela Missão</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='col-lg-6'>
							<div className='single_upcoming_event'>
								<div className='row align-items-center'>
									<div className='col-lg-6 col-md-6'>
										<figure>
											<img className='img-fluid w-100' src='img/event/e3.jpg' alt='' />
										</figure>
									</div>
									<div className='col-lg-6 col-md-6'>
										<div className='content_wrapper'>
											<h3 className='title'>
												<a href='event-details.html'>Evento</a>
											</h3>
											<p> Descrição do Evento </p>
											<div className='d-flex count_time justify-content-lg-start justify-content-center' id='clockdiv1'>
												<div className='single_time'>
													<h4 className=''>15</h4>
													<p>Dia</p>
												</div>
												<div className='single_time'>
													<h4 className=''>Fev</h4>
													<p>Mês</p>
												</div>
												<div className='single_time'>
													<h4 className=''>19:00</h4>
													<p>Horário</p>
												</div>
											</div>
											<a href='#' className='primary-btn2'>Evento Organizado pela Missão</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='col-lg-6'>
							<div className='single_upcoming_event'>
								<div className='row align-items-center'>
									<div className='col-lg-6 col-md-6'>
										<figure>
											<img className='img-fluid w-100' src='img/event/e4.jpg' alt='' />
										</figure>
									</div>
									<div className='col-lg-6 col-md-6'>
										<div className='content_wrapper'>
											<h3 className='title'>
												<a href='event-details.html'>Evento</a>
											</h3>
											<p> Descrição do Evento  </p>
											<div className='d-flex count_time justify-content-lg-start justify-content-center' id='clockdiv1'>
												<div className='single_time'>
													<h4 className=''>15</h4>
													<p>Dia</p>
												</div>
												<div className='single_time'>
													<h4 className=''>Fev</h4>
													<p>Mês</p>
												</div>
												<div className='single_time'>
													<h4 className=''>19:00</h4>
													<p>Horário</p>
												</div>
											</div>
											<a href='#' className='primary-btn2'>Evento Organizado pela Missão</a>
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
export default Schedule