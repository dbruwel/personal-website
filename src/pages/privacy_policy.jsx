import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/privacy_policy.css";

const PrivacyPolicy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{`Privacy Policy | ${INFO.main.title}`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar />
				<div className="content-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
					<div className="privacy-policy-logo-container">
						<div className="privacy-policy-logo">
							{window.innerWidth > 600 && <Logo width={46} />}
						</div>
					</div>

					<div className="privacy-policy-container" style={{ flex: 1 }}>
						<div className="privacy-policy-main">
							<div>
								<div className="title privacy-policy-title">
									Privacy Policy
								</div>

								<div className="subtitle privacy-policy-subtitle">
									<p>
										<strong>1. Information Collected:</strong> This website collects data submitted through the contact form,
										including name, email address, and message content. This information is used solely for responding to
										inquiries and is not shared with third parties.
									</p>
									<p>
										<strong>2. Cookies:</strong> This website may use cookies for basic functionality or analytics. You can disable
										cookies in your browser settings if you prefer not to allow this.
									</p>
									<p>
										<strong>3. Third-Party Data Use:</strong> Links to Github, research papers, and other external sources may
										involve third-party data collection. Your interaction with these links is subject to their respective privacy
										policies.
									</p>
									<p>
										<strong>4. Security:</strong> While reasonable measures are taken to secure the website, the owner is not
										responsible for unauthorized access or data breaches related to third-party services.
									</p>
									<p>
										<strong>5. Contact:</strong> If you have any privacy concerns, please reach out via the contact information
										provided on this website.
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

export default PrivacyPolicy;
