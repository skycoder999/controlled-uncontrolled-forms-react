import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<Link className="navbar-brand" to="#">
							Hidden brand
						</Link>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" to="/">
									Table
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/form1">
									Form1
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/form2">
									Form2
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link disabled"
									to="#"
									tabindex="-1"
									aria-disabled="true"
								>
									Disabled
								</Link>
							</li>
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
