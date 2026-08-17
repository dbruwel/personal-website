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
				<meta property="og:url" content={`${SITE_URL}/resume`} />
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

									{/* EDUCATION */}
									<h2 className="resume-section-heading">EDUCATION:</h2><br />
									{INFO.resume.education.map((edu, index) => (
										<div key={index} style={{ marginBottom: '1em' }}>
											<h3 className="resume-entry-heading">{edu.institute} &mdash; {edu.graduation}</h3><br />
											<em>{edu.degree}</em><br />
											{edu.details}<br />
										</div>
									))}
									<br />

									{/* PUBLICATIONS (Conditionally rendered if array is not empty) */}
									{INFO.resume.publications && INFO.resume.publications.length > 0 && (
										<>
											<h2 className="resume-section-heading">PUBLICATIONS:</h2><br />
											{INFO.resume.publications.map((pub, index) => (
												<div key={index} style={{ marginBottom: '1em' }}>
													<strong>{pub.title}</strong> &mdash; {pub.year}<br />
													<em>{pub.journal}</em><br />
													{pub.details}<br />
												</div>
											))}
											<br />
										</>
									)}

									{/* CONFERENCES & WORKSHOPS */}
									{INFO.resume.conferences_and_workshops && INFO.resume.conferences_and_workshops.length > 0 && (
										<>
											<h2 className="resume-section-heading">CONFERENCES & WORKSHOPS:</h2><br />
											{INFO.resume.conferences_and_workshops.map((conf, index) => (
												<div key={index} style={{ marginBottom: '1em' }}>
													<strong>{conf.title}</strong> &mdash; {conf.year}<br />
													{conf.details}<br />
												</div>
											))}
											<br />
										</>
									)}

									{/* AWARDS & GRANTS */}
									{INFO.resume.awards_and_grants && INFO.resume.awards_and_grants.length > 0 && (
										<>
											<h2 className="resume-section-heading">AWARDS & GRANTS:</h2><br />
											{INFO.resume.awards_and_grants.map((award, index) => (
												<div key={index} style={{ marginBottom: '0.5em' }}>
													{award.title} &mdash; {award.year}<br />
												</div>
											))}
											<br />
										</>
									)}

									{/* TECHNICAL SKILLS */}
									<h2 className="resume-section-heading">TECHNICAL SKILLS:</h2><br />
									{INFO.resume.technical_skills.map((skill, index) => (
										<div key={index} style={{ marginBottom: '1em' }}>
											<h3 className="resume-entry-heading">{skill.title}</h3><br />
											{skill.description}<br />
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
