import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const TopProjects = () => {
	return (
		<>
		<div className="all-projects-container">
			{INFO.projects.slice(0, 3).map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
		<div className="homepage-see-more">
			<Link to={"/projects"}>
				<div className="homepage-see-more-link">
					See All{" "}
					<FontAwesomeIcon
						style={{ fontSize: "10px" }}
						icon={faChevronRight}
					/>
				</div>
			</Link>
		</div>
		</>
	);
};

export default TopProjects;
