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
						<h2>Ipsum Feugiat</h2>
						<p>Semper suscipit posuere apede</p>
					</header>
					<div className="apresentation">
						<div className="box person">
							<div className="image round img">
								<img src={require("../images/pic04.jpg")} alt="Person 1" />
								<div className="text">
									<h4>Nome</h4>
									<p> "shaushaushas suasuhahsa sasausbuasbas asabusbausbas suabsuabsas asa uasbuasasbu suavsuasva AAAAAAAAAAAAAAAAA".</p>
									<i class="icon fab fa-github-square"></i>
									<i class="icon fab fa-linkedin"></i>
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