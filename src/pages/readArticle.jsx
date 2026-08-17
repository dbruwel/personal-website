import React, { Suspense, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Notfound from "./404";

import INFO from "../data/user";
import { findArticle } from "../data/articles";
import { SITE_URL } from "../data/seo";

import "./styles/readArticle.css";

const ArticleStyle = styled.div`
	${(props) => props.$css}
`;

// The markdown renderer pulls in KaTeX, which is only needed on this page.
const Markdown = React.lazy(() => import("../components/articles/markdown"));

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = findArticle(slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	if (!article) {
		return <Notfound />;
	}

	// Old links addressed articles by number; send them to the named URL.
	if (article.slug !== slug) {
		return <Navigate to={`/article/${article.slug}`} replace />;
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article.description} />
				<meta name="keywords" content={article.keywords.join(", ")} />
				<meta property="og:url" content={`${SITE_URL}/article/${article.slug}`} />
				<link rel="canonical" href={`${SITE_URL}/article/${article.slug}`} />
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							{window.innerWidth > 600 && <Logo width={46} />}
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<div
								className="read-article-back-button"
								role="button"
								tabIndex={0}
								aria-label="Go back"
								onClick={() => navigate(-1)}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										navigate(-1);
									}
								}}
							>
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faChevronLeft}
								/>
							</div>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article.displayDate}
								</div>
							</div>

							<h1 className="title read-article-title">
								{article.title}
							</h1>

							<div className="read-article-body">
								<ArticleStyle $css={article.style}>
									<Suspense fallback={null}>
										<Markdown>{article.body}</Markdown>
									</Suspense>
								</ArticleStyle>
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

export default ReadArticle;
