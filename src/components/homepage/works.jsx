import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./usyd-logo.png"
								alt="atomic-logo"
								className="work-image"
							/>
							<div className="work-element">
								<h3 className="work-title">University of Sydney</h3>
								<div className="work-details">
									<div className="work-subtitle">MPhil in Computational Topology</div>
									<div className="work-duration">2026 - Present</div>
								</div>

							</div>
						</div>
						<div className="work">
							<img
								src="./atomic-logo.jpeg"
								alt="atomic-logo"
								className="work-image"
							/>
							<div className="work-element">
								<h3 className="work-title">Atomic212&deg;</h3>
								<div className="work-details">
									<div className="work-subtitle">Data Scientist</div>
									<div className="work-duration">2023 - Present</div>
								</div>

							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
