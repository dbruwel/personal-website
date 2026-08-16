import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import { SITE_URL } from "../data/seo";

import "./styles/tos.css";

const TermsOfService = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{`Terms of Service | ${INFO.main.title}`}</title>
				<link rel="canonical" href={`${SITE_URL}/tos`} />
			</Helmet>

			<div className="page-content">
				<NavBar />
				<div className="content-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
					<div className="tos-logo-container">
						<div className="tos-logo">
							{window.innerWidth > 600 && <Logo width={46} />}
						</div>
					</div>

					<div className="tos-container" style={{ flex: 1 }}>
						<div className="tos-main">
							<div>
								<h1 className="title tos-title">
									Terms of Service
								</h1>

								<div className="subtitle tos-subtitle">
									<p>
										<strong>1. Acceptance of Terms:</strong> By using this website, you agree to these Terms of Service.
									</p>
									<p>
										<strong>2. Intellectual Property:</strong> All articles, written content, and downloadable papers are the
										intellectual property of the website owner unless otherwise stated. Github repositories linked on this
										site are governed by their respective licenses.
									</p>
									<p>
										<strong>3. Use of External Links:</strong> This website may contain links to third-party websites. These links
										are provided for convenience and do not imply endorsement. The website owner is not responsible for the
										content of external sites.
									</p>
									<p>
										<strong>4. Third-Party Services:</strong> This website may utilize third-party services such as analytics
										and embedded content (e.g., Github embeds). Your interaction with these services is governed by their
										respective terms.
									</p>
									<p>
										<strong>5. No Guarantees:</strong> The website owner makes no guarantees of responses to inquiries submitted
										through the contact form or any other means.
									</p>
									<p>
										<strong>6. Personal Opinions:</strong> The content on this website represents the personal opinions of the
										owner and does not reflect the views of any employer or affiliated organization.
									</p>
									<p>
										<strong>7. Changes to the Terms:</strong> The website owner reserves the right to modify these terms at
										any time. Continued use of the website constitutes acceptance of the updated terms.
									</p>
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

export default TermsOfService;
