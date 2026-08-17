import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import { SITE_URL } from "../data/seo";

import "./styles/acknowledgments.css";

const Acknowledgments = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{`Acknowledgments | ${INFO.main.title}`}</title>
				<meta property="og:url" content={`${SITE_URL}/acknowledgments`} />
				<link rel="canonical" href={`${SITE_URL}/acknowledgments`} />
			</Helmet>

			<div className="page-content">
				<NavBar />
				<div className="content-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
					<div className="acknowledgments-logo-container">
						<div className="acknowledgments-logo">
							{window.innerWidth > 600 && <Logo width={46} />}
						</div>
					</div>

					<div className="acknowledgments-container" style={{ flex: 1 }}>
						<div className="acknowledgments-main">
							<div>
								<h1 className="title acknowledgments-title">
									Acknowledgments
								</h1>
								<div className="subtitle acknowledgments-subtitle">
									<p>Some assets and elements of this website are not my own—I would like to credit their original authors below.</p>
									<ul>
										<li>
											The image of the dose test was taken at the University of Sydney in the Nanoscience Hub.
										</li>
										<li>
											The triangulation of a torus logo on the about page is sourced from the <a href="https://en.wikipedia.org/wiki/Triangulation_(topology)" target="_blank" rel="noopener noreferrer">
												Wikipedia page on triangulations
											</a>.
										</li>
										<li>
											The website design is based on a template by <strong>Tharindu N. Madhusanka</strong>,
											available on GitHub under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
												MIT License
											</a>.
										</li>
										<li>
											Icons and logos used include:
											<ul>
												<li>
													<a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Font Awesome</a>
												</li>
												<li>
													Flat icon from <a href="https://cdn-icons-png.flaticon.com/512/337/337946.png" target="_blank" rel="noopener noreferrer">
														Flaticon
													</a>
												</li>
												<li>
													Python logo from <a href="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png" target="_blank" rel="noopener noreferrer">
														programming-languages-logos CDN
													</a>
												</li>
											</ul>
										</li>
										<li>
											The form in the contact page is powered by <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">Formspree</a>.
										</li>
									</ul>
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

export default Acknowledgments;
