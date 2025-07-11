import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy_policy";
import TermsOfService from "./pages/tos";
import Acknowledgments from "./pages/acknowledgments";
import PdfViewer from "./pages/pdfViewer";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/tos" element={<TermsOfService />} />
				<Route path="/privacy_policy" element={<PrivacyPolicy />} />
				<Route path="/acknowledgments" element={<Acknowledgments />} />
				<Route path='/projects/view_pdf/:filename' element={<PdfViewer />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
