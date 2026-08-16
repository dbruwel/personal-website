import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";


import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, links } = props;

	const [modalOpen, setModalOpen] = useState(false);

	const preventScroll = (e) => e.preventDefault();

	// A project with a single destination is a real link so crawlers (and
	// middle-click / open-in-new-tab) can follow it. Only the multi-destination
	// case needs a scripted trigger, since it opens a chooser rather than navigating.
	const singleLink = links.length === 1 ? links[0].url : null;

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') {
				setModalOpen(false);
			}
		};

		if (modalOpen) {
			document.body.style.overflowY = 'hidden';
			document.documentElement.style.overflowY = 'hidden';

			document.addEventListener('touchmove', preventScroll, { passive: false });

			document.addEventListener('keydown', handleKeyDown);
		} else {
			document.body.style.overflowY = '';
			document.documentElement.style.overflowY = '';

			document.removeEventListener('touchmove', preventScroll);

			document.removeEventListener('keydown', handleKeyDown);
		}
		return () => {
			document.body.style.overflowY = '';
			document.documentElement.style.overflowY = '';
			document.removeEventListener('touchmove', preventScroll);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [modalOpen]);

	const projectBody = (
		<div className="project-container">
			<div className="project-logo">
				<img src={logo} alt="logo" />
			</div>
			<h2 className="project-title">{title}</h2>
			<div className="project-description">{description}</div>
			<div className="project-link">
				<div className="project-link-icon">
					<FontAwesomeIcon icon={faLink} />
				</div>

				<div className="project-link-text">{linkText}</div>
			</div>
		</div>
	);

	return (
		<React.Fragment>
			{singleLink ? (
				<a className="project" href={singleLink}>
					{projectBody}
				</a>
			) : (
				<div
					className="project"
					style={{ cursor: 'pointer' }}
					role="button"
					tabIndex={0}
					aria-haspopup="dialog"
					onClick={() => setModalOpen(true)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							setModalOpen(true);
						}
					}}
				>
					{projectBody}
				</div>
			)}

			{modalOpen && (
				<div className="project-modal-overlay" onClick={() => setModalOpen(false)}>
					<div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
						<button
							onClick={() => setModalOpen(false)}
							className="project-modal-close-button"
						>
							<FontAwesomeIcon icon={faTimes} />
						</button>
						{links.map(({ url, text, icon }) => (
							<a href={url} rel="noopener noreferrer" key={text}>
								<div className="project-modal-link">
									<div className="project-modal-link-icon">
										<FontAwesomeIcon icon={icon} />
									</div>

									<div className="project-modal-link-text">{text}</div>
								</div>
							</a>
						))}
					</div>
				</div>
			)
			}
		</React.Fragment >
	);
};


export default Project;
