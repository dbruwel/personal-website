import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

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
								<div className="title resume-title">
									{INFO.resume.title}
								</div>

								<div className="subtitle resume-subtitle">
									<strong style={{ fontSize: '1.1em', color: 'black' }}>EDUCATION:</strong><br/>
									{INFO.resume.education.map((edu, index) => (
										<div key={index} style={{ marginBottom: '1em' }}>
											<strong>{edu.institute} &mdash; {edu.graduation}</strong><br/>
											<em>{edu.degree}</em><br/>
											{edu.details}<br/>
										</div>
									))} <br/>
									<strong style={{ fontSize: '1.1em', color: 'black' }}>TECHNICAL SKILLS:</strong><br/>
									{INFO.resume.skills.map((skill, index) => (
										<div key={index} style={{ marginBottom: '1em' }}>
											<strong>{skill.title}</strong><br/>
											{skill.description}<br/>
										</div>
									))}
									<strong style={{ fontSize: '1.1em', color: 'black' }}>PRIZES & DISTINCTIONS:</strong>
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
