import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO, { SITE_URL } from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<link rel="canonical" href={`${SITE_URL}/projects`} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							{window.innerWidth > 600 && <Logo width={46} />}
						</div>
					</div>
					<div className="projects-container">
						<h1 className="title projects-title">
							Here are some projects I've worked on.
						</h1>

						<div className="subtitle projects-subtitle">
							These include public reasearch projects both affiliated and unaffiliated, personal and passion projects, and some things I've done just for fun. Feel free to check them out, most of them link to either a Github repository or an academic style paper. Some of these are unpolished or works in progress, but I hope you find them interesting nonetheless.
						</div>

						<div className="projects-list" style={{ marginLeft: '20px', marginRight: '20px' }}>
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
