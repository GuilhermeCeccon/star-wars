/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../components/Banner'

function Home() {
    return (
       <div>
		   <Banner title="" message=""/>
			<section id="two" className="wrapper style1 special">
				<div className="inner">
					<header>
						<h2>Apresentação dos participantes:</h2>
					</header>
					<div className="apresentation">
						<div className="box person">
							<div className="image round img">
								<img src={require("../images/foto.jpg")} alt="Person 1" />
								<div className="text">
									<h4>Guilherme Ceccon Da Luz</h4>
									<p>E-mail: <strong className="info">1116633@imed.edu.br</strong></p>
									<p>RA: <strong className="info">1116633</strong></p>
									<p>"Desenvolvedor Front-end e estudante de Ciência da computação na IMED."</p>
								</div>
							</div>
							<div className="image round img">
								<img src={require("../images/pic04.jpg")} alt="Person 1" />
								<div className="text">
									<h4>Nome</h4>
									<p>"shaushaushas suasuhahsa sasausbuasbas asabusbausbas suabsuabsas asa uasbuasasbu suavsuasva AAAAAAAAAAAAAAAAA".</p>
									<i class="icon fab fa-github-square"></i>
									<i class="icon fab fa-linkedin"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
       </div>
    )
}

export default Home;