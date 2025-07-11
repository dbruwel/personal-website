import React, { useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [ isOpen, setIsOpen ] = useState(false);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className={`nav-background-mobile`}>
						<button className="nav-button" onClick={() => setIsOpen(!isOpen)}>
							Menu{"\u00A0"}<FontAwesomeIcon style={{ fontSize: "15px" }} icon={isOpen ? faChevronUp : faChevronDown} />
						</button>
						{isOpen && (
							<div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
								<a href="/">Home</a>
								<a href="/about">About</a>
								<a href="/resume">Resume</a>
								<a href="/projects">Projects</a>
								<a href="/articles">Articles</a>
								<a href="/contact" style={{borderRadius: "0 0 20px 20px"}}>Contact</a>
							</div>
						)}
					</div>
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "resume"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/resume">Resume</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
