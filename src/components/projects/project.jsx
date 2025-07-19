import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";


import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, links } = props;

	const [modalOpen, setModalOpen] = useState(false);

	const preventScroll = (e) => e.preventDefault();

	const handleClick = (e) => {
		e.preventDefault();
		if (links.length === 1) {
			window.location.href = links[0].url;
		} else {
			setModalOpen(true);
		}
	};

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

	return (
		<React.Fragment>
			<div className="project" onClick={handleClick} style={{ cursor: 'pointer' }}>
				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>

						<div className="project-link-text">{linkText}</div>
					</div>
				</div>
			</div>

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
