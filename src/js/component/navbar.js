import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://www.iconspng.com/uploads/star-wars-logo.png" width="100" height="80" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						<li>some item here</li>
					</ul>
				</div>
				</Link>
			</div>
		</nav>
	);
};
