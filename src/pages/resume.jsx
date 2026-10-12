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

									{/* INDUSTRY EXPERIENCE */}
									{INFO.resume.experience && INFO.resume.experience.length > 0 && (
										<>
											<h2 className="resume-section-heading">INDUSTRY EXPERIENCE:</h2><br />
											{INFO.resume.experience.map((job, index) => (
												<div key={index} style={{ marginBottom: '1em' }}>
													<h3 className="resume-entry-heading">{job.company} &mdash; {job.duration}</h3><br />
													<em>{job.role}</em><br />
													<ul>
														{job.points.map((point, i) => (
															<li key={i}>{point}</li>
														))}
													</ul>
												</div>
											))}
										</>
									)}

									{/* RESEARCH */}
									{INFO.resume.research && INFO.resume.research.length > 0 && (
										<>
											<h2 className="resume-section-heading">RESEARCH:</h2><br />
											{INFO.resume.research.map((item, index) => (
												<div key={index} style={{ marginBottom: '1em' }}>
													<strong>{item.title}</strong> &mdash; {item.year}<br />
													<em>{item.supervisor}</em><br />
													{item.details}<br />
												</div>
											))}
											<br />
										</>
									)}

									{/* PAPERS IN PREPARATION (Conditionally rendered if array is not empty) */}
									{INFO.resume.publications && INFO.resume.publications.length > 0 && (
										<>
											<h2 className="resume-section-heading">PAPERS IN PREPARATION:</h2><br />
											{INFO.resume.publications.map((pub, index) => (
												<div key={index} style={{ marginBottom: '1em' }}>
													<strong>{pub.title}</strong><br />
													<em>{pub.authors}</em><br />
												</div>
											))}
											<br />
										</>
									)}

									{/* TALKS & SCHOOLS */}
									{INFO.resume.talks && INFO.resume.talks.length > 0 && (
										<>
											<h2 className="resume-section-heading">TALKS & SCHOOLS:</h2><br />
											{INFO.resume.talks.map((talk, index) => (
												<div key={index} style={{ marginBottom: '1em' }}>
													<strong>{talk.venue}</strong> &mdash; {talk.year}<br />
													<em>Talk: {talk.title}</em><br />
												</div>
											))}
											<br />
										</>
									)}

									{/* TEACHING */}
									{INFO.resume.teaching && INFO.resume.teaching.length > 0 && (
										<>
											<h2 className="resume-section-heading">TEACHING:</h2><br />
											{INFO.resume.teaching.map((job, index) => (
												<div key={index} style={{ marginBottom: '1em' }}>
													<strong>{job.institute}</strong> &mdash; {job.duration}<br />
													<em>{job.role}</em><br />
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
