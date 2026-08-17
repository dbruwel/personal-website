import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const INFO = {
	main: {
		title: "Daniel Bruwel",
		name: "Daniel Bruwel",
		email: "daniel@bruwel.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/dbruwel",
		linkedin: "https://www.linkedin.com/in/daniel-bruwel-70a937301/",
	},

	homepage: {
		title: "Hi, I'm Daniel Bruwel,",
		description:
			`I am a mathematician and researcher. I’m currently completing my MPhil in Computational Topology at The University of Sydney, while also working as a Technical Lead in marketing science at Atomic212.
			As a mathematician in the data science industry, I typically like to focus on understanding and abstracting the underlying mechanics of systems to build structural / microfoundations models, rather than relying purely on statistical curve fitting.
      I am always open and keen for research collaborations and complex analytical projects, it doesn't have to be in the marketing industry.
      Outside of mathematics, I spend most of my time scuba diving and staying close to the ocean.
      The image shown was taken during a quantum computing project at the University of Sydney, displaying the results of a dose test for exposure parameters on a new type of photoresist.`,
	},

	about: {
		title: "I'm a Mathematician & Researcher",
		description: [
			{
				subtitle: "Background",
				content: "I have a background in pure mathematics and physics, my current research focuses on computational topology at The University of Sydney with Dr. Spreer and Prof. Altmann, specifically on codimension 2 surfaces as obstructions to perfect Morse matchings. Alongside my academic work, I act as a Technical Lead in the media industry, specifically in marketing science."
			},
			{
				subtitle: "My Approach to Applied Problems",
				content: `When addressing applied problems, my focus is on defining the fundamental mechanics of the system. Rather than relying on standard statistical curve fitting, I prefer to build mechanistic models based on explicit microfoundations. This may be to establishing theoretical bounds for a system's behavior or model its generative processes. I typically prioritise building a rigorous / abstract mathematical architecture before introducing observational data.`
			},
			{
				subtitle: "Applied Focus Areas",
				content:
					`I am best suited for problems that require building theoretical models from the ground up or proving the limitations and properties of such models. I frequently prototype these models (using Python, JAX, and PyMC) and present findings in a variety of different ways. However, I generally step back when a project shifts primarily toward routine data engineering, pipeline maintenance, or standard reporting.`
			},
			{
				subtitle: "Collaborations",
				content: "I am always interested in research or applying mathematical frameworks to new domains. If you are working on an unstructured problem, a research collaboration, or a freelance project that requires structural modeling, I would be keen to discuss it."
			}
		],
	},

	resume: {
		title: "Resume",
		education: [
			{
				institute: "The University of Sydney",
				degree: "Master of Philosophy (MPhil) in Computational Topology",
				details: "Thesis: Investigating codimension 2 manifolds as obstructions to perfect Morse matchings.",
				graduation: "2026 - Present",
			},
			{
				institute: "The University of Sydney",
				degree: "Bachelor of Science (Honours)",
				details: "Pure Mathematics & Physics (Astrophysics Program, Dalyell Scholar). Honours Thesis: Modern Computational Approaches to Targeted Searches for 3-Sphere Triangulations.",
				graduation: "2022 - 2025",
			}
		],
		publications: [
			{
				title: "Transformer approaches to generating 3-manifold triangulations",
				journal: "ArXiv",
				year: "2026",
				details: "Currently in preparation / Under review."
			}
		],
		conferences_and_workshops: [
			{
				title: "AMSI Winter School",
				year: "2026",
				details: "Attended programs on Geometric Analysis. Awarded Winter School Grant.",
			},
			{
				title: "AMSI Summer School",
				year: "2026",
				details: "Attended programs on Computational Topology and TDA.",
			}
		],
		awards_and_grants: [
			{
				title: "Denison Research Scholarship",
				year: "2024",
			},
			{
				title: "Dean’s List of Excellence in Academic Performance",
				year: "2023",
			},
			{
				title: "Physics Foundation Prize for Intermediate Physics",
				year: "2023",
			},
			{
				title: "Dean’s List Award",
				year: "2022",
			},
			{
				title: "University of Sydney Academic Prizes",
				year: "2022",
			},
			{
				title: "The University of Sydney Physics Foundation Scholarship No I",
				year: "2022",
			},
		],
		technical_skills: [
			{
				title: "Applied & Computational Mathematics",
				description: "Optimization, State-Space Modeling, Bayesian Inference, Topological Data Analysis (TDA), Information Geometry, Optimal Control Theory"
			},
			{
				title: "Languages & Frameworks",
				description: "Python (JAX, PyMC, PyTorch), R, SQL, MATLAB, C++"
			},
			{
				title: "Mathematical Software",
				description: "Magma, SageMath, Regina"
			},
		],
	},

	articles: {
		title: "Notes & Articles",
		description:
			"This sections contains a collection of notes and articles. These mainly serve as a way for me to put down my informal thoughts, or ideas that don't warrant formal writeups. Many of these are ongoing drafts or living documents; feedback and discussion are always welcome.",
	},

	projects: [
		{
			title: "Optimal Policy Selection Under Bilateral Preferences",
			description: <p><em>Work in progress</em><br />Bilateral preference systems are common in many real world situations. This project explores some methods for selecting optimal policy sets in such systems.</p>,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			links: [{ url: "https://github.com/dbruwel/optimal-bilateral-preferences" }],
		},
		{
			title: "Optimal Play in Chopsticks",
			description: <p><em>Work in progress</em><br />Chopsticks is a simple children's game, often with just two players. This project explores the attractors of the game via a simple direct search.</p>,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			links: [{ url: "https://github.com/dbruwel/chopsticks-optimal-play" }],
		},
		{
			title: "Computing Resonances of Chaotic Systems via Chebyshev Polynomials and Hofbauer Extensions.",
			description: <p>The transfer operator is critical for the study of dynamic systems. This research project focusses on a novel technique to compute the eigenvalues of the transfer operator for chaotic systems.</p>,
			logo: "https://www.svgrepo.com/show/513273/book-opened.svg",
			linkText: "View Project",
			links: [
				{ url: "/files/resonances_of_chaotic_systems.pdf", text: "Read Paper", icon: faFilePdf },
				{ url: "https://github.com/dbruwel/chebyshev-hofbauer-resonances", text: "View Repository", icon: faGithub }
			],
		},
		{
			title: "On the Automated Classification of Tidal Features in Galaxy Images.",
			description:
				"Tidal features in galaxies are critical to understanding long-term galactic formation. This research project combines classical and computer vision approaches to classify tidal features in galaxies.",
			logo: "https://www.svgrepo.com/show/513273/book-opened.svg",
			linkText: "View Project",
			links: [{ url: "/files/tidal_feature_classification.pdf" }],
		},
		{
			title: "A Dynamic Model of Stellar Populations.",
			description:
				"This research project proposes a stellar evolution model inspired by the dynamic compartment modeling techniques used in epidemiology.",
			logo: "https://www.svgrepo.com/show/513273/book-opened.svg",
			linkText: "View Project",
			links: [{ url: "/files/stellar_populations.pdf" }],
		},
		{
			title: "A Dynamic Model of Stellar Populations - Modeling Stars With Fixed Lifetimes.",
			description:
				"This research project further investigates dynamic compartment modeling techniques from epidemiology, applied to stellar evolution. This approach adjusts the model to account for fixed stellar lifetimes rather than a continuous lifetime distribution.",
			logo: "https://www.svgrepo.com/show/513273/book-opened.svg",
			linkText: "View Project",
			links: [{ url: "/files/modeling_stars_with_fixed_lifetimes.pdf" }],
		},
		{
			title: "Training Meta Neural Networks Using Data Generated From an Agent Based Model.",
			description:
				"Meta neural networks enable rapid adaptation to new tasks by leveraging prior experience, while agent-based models simulate complex systems through interactions of autonomous agents. This project investigates the training meta neural networks using agent-based models.",
			logo: "https://www.svgrepo.com/show/513273/book-opened.svg",
			linkText: "View Project",
			links: [{ url: "/files/meta_abm.pdf" }],
		},
		{
			title: "Recurrent Compact Quantum Groups.",
			description:
				"Gelfand duality motivates the existence of non commutative analogs of compact topological groups. This project investigates such objects and explores how the idea of recurrence can be applied to them.",
			logo: "https://www.svgrepo.com/show/513273/book-opened.svg",
			linkText: "View Project",
			links: [{ url: "/files/recurrent_quantum_groups.pdf" }],
		},
		{
			title: "Using Cascaded Jaynes-Cummings Systems to Distinguish Between Pulses With One and Two Photons.",
			description:
				"Photon sorters are important for enabling precise control and manipulation of quantum light states. This research project investigates numeric simulations of photon sorters based on Jaynes-Cummings non-linear optical systems.",
			logo: "https://www.svgrepo.com/show/513273/book-opened.svg",
			linkText: "View Project",
			links: [{ url: "/files/photon_sorting.pdf" }],
		},
	],
};

export default INFO;
