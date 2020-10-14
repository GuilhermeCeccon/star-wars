/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header id="header">
				<div className="inner">
					<a href="index.html" className="logo">Theory</a>
					<nav id="nav">
						<Link to="/">Home</Link>
						<Link to="/films">Films</Link>
						<Link to="/peoples">Peoples</Link>
						<Link to="/planets">Planets</Link>
						<Link to="/species">Especies</Link>
						<Link to="/starships">Starships</Link>
            <Link to="/login">Login</Link>
					</nav>
					<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
				</div>
		</header>
    )
}

export default Header;