import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO, { SITE_URL } from "../data/seo";

import "./styles/resume.css";

const Resume = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<link rel="canonical" href={`${SITE_URL}/resume`} />
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="resume-logo-container">
						<div className="resume-logo">
							{window.innerWidth > 600 && <Logo width={46} />}
						</div>
					</div>

					<div className="resume-container">
						<div className="resume-main">
							<div>
								<h1 className="title resume-title">
									{INFO.resume.title}
								</h1>

								<div className="subtitle resume-subtitle">
									<h2 className="resume-section-heading">EDUCATION:</h2><br/>
									{INFO.resume.education.map((edu, index) => (
										<div key={index} style={{ marginBottom: '1em' }}>
											<h3 className="resume-entry-heading">{edu.institute} &mdash; {edu.graduation}</h3><br/>
											<em>{edu.degree}</em><br/>
											{edu.details}<br/>
										</div>
									))} <br/>
									<h2 className="resume-section-heading">TECHNICAL SKILLS:</h2><br/>
									{INFO.resume.skills.map((skill, index) => (
										<div key={index} style={{ marginBottom: '1em' }}>
											<h3 className="resume-entry-heading">{skill.title}</h3><br/>
											{skill.description}<br/>
										</div>
									))}
									<h2 className="resume-section-heading">PRIZES & DISTINCTIONS:</h2>
									{INFO.resume.awards.map((award, index) => (
										<div key={index}>
											{award.title} &mdash; {award.year}<br/>
										</div>
									))}
								</div>
							</div>
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

export default Resume;
