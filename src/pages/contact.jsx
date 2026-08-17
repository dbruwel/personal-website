import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import ContactForm from "../components/contact/contactForm";

import INFO from "../data/user";
import SEO, { SITE_URL } from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<meta property="og:url" content={`${SITE_URL}/contact`} />
				<link rel="canonical" href={`${SITE_URL}/contact`} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							{window.innerWidth > 600 && <Logo width={46} />}
						</div>
					</div>

					<div className="contact-container">
						<h1 className="title contact-title">
							Get in Touch.
						</h1>

						<div className="subtitle contact-subtitle">
							I'm open to freelance work, collaborations, and passion projects—not limited to marketing. I'm always interested in applying my experience to new domains. If you have an interesting challenge, I'd love to hear about it.
							Feel free to email me directly at&nbsp;
							<a href={`mailto:${INFO.main.email}`} className="contact-link">
								{INFO.main.email}
							</a>, fill out the form below, or reach out on social media.
						</div>
					</div>

					<ContactForm />

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
