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
			`I am a mathematician and researcher. I’m currently completing my MPhil in Pure Mathematics at The University of Sydney, while also working as a Data Scientist at Atomic 212.
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
				content: "I have a background in pure mathematics and physics. My current research at The University of Sydney, supervised by A/Prof. Jonathan Spreer, looks at knottedness in triangulated 3-manifolds: how knotted substructures obstruct fast simplification algorithms, and what the expansion and hyperbolicity of the Pachner graph mean for random-walk mixing times. Alongside my academic work, I am a Data Scientist at Atomic 212, a media agency, where I build Bayesian models of the causal effect of advertising."
			},
			{
				subtitle: "My Approach to Applied Problems",
				content: `When addressing applied problems, my focus is on defining the fundamental mechanics of the system. Rather than relying on standard statistical curve fitting, I prefer to build mechanistic models based on explicit microfoundations. This may be to establishing theoretical bounds for a system's behavior or model its generative processes. I typically prioritise building a rigorous / abstract mathematical architecture before introducing observational data.`
			},
			{
				subtitle: "Applied Focus Areas",
				content:
					`I am best suited for problems that require building theoretical models from the ground up or proving the limitations and properties of such models. I frequently prototype these models (using Python, JAX, and PyMC) and present findings in a variety of different ways. I care just as much about the engineering around a model: at Atomic 212 I look after the team's infrastructure, code review and coding standards, because a model is only useful if it is reproducible and others can build on it.`
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
				degree: "Master of Philosophy (Pure Mathematics)",
				details: "Thesis: Knottedness in Triangulated Manifolds (supervised by A/Prof. Jonathan Spreer). Studying how knotted substructures obstruct fast simplification algorithms for triangulated 3-manifolds, and the expansion and hyperbolicity of the Pachner graph and its implications for random-walk mixing times.",
				graduation: "2026 - Sep 2027 (expected)",
			},
			{
				institute: "The University of Sydney",
				degree: "Honours in Pure Mathematics, First Class",
				details: "Thesis: Navigating the Pachner Graph: Algorithms for Searching and Sampling Triangulations. Designed random-walk methods and trained transformer models (JAX, on NCI’s national supercomputer) to search and sample 3-manifold triangulations, exploring 1.2 billion distinct triangulations.",
				graduation: "2025",
			},
			{
				institute: "The University of Sydney",
				degree: "Bachelor of Science (Advanced), WAM 89%",
				details: "Dalyell Scholar. Majors: Mathematics & Physics.",
				graduation: "2022 - 2024",
			}
		],
		experience: [
			{
				company: "Atomic 212 (Media Agency)",
				role: "Data Scientist (part-time)",
				duration: "2023 - Present",
				points: [
					"Built Bayesian hierarchical models (PyMC, JAX) to estimate the causal effect of advertising from short, noisy time series, using discrete-choice microfoundations to tighten identification and double ML to adjust for confounders such as seasonality and search demand. Deployed across 12+ national brands.",
					"Led an information-theoretic analysis bounding how much these models can learn from typical client data, characterising when effects are and aren’t identifiable. Drive the team’s R&D on new methods.",
					"Scoped and delivered projects end-to-end with client and strategy teams, spanning experimental design, forecasting, agent-based simulation, and geo analysis.",
					"First data scientist hired. Helped hire 3 of the next 4 and technically lead 1–3 at a time, and own the team’s engineering infrastructure and practices (GitLab, Google Cloud, code review, coding standards).",
				],
			}
		],
		research: [
			{
				title: "Denison Summer Research Scholarship",
				supervisor: "with Dr Caroline Wormell",
				year: "Summer 2024",
				details: "Computed resonances (rates of correlation decay) of chaotic maps via spectral methods in Python.",
			}
		],
		publications: [
			{
				title: "Learning 3-Manifold Triangulations",
				authors: "with K. Hoek, A. Narayanan and J. Spreer",
			},
			{
				title: "Computing Resonances of Chaotic Systems via Chebyshev Polynomials and Hofbauer Extensions",
				authors: "with C. Wormell",
			}
		],
		talks: [
			{
				venue: "AustMS",
				title: "Generating 3-Manifold Triangulations with Transformers",
				year: "Dec 2026 (accepted)",
			},
			{
				venue: "AMSI Winter School (UQ)",
				title: "Evasiveness: When Topology Helps Computation",
				year: "2026",
			}
		],
		teaching: [
			{
				institute: "The University of Sydney",
				role: "Mathematics Tutor, Abstract and Computational Algebra",
				duration: "2026 - Present",
			}
		],
		awards_and_grants: [
			{
				title: "AMSI Scholarship",
				year: "2026",
			},
			{
				title: "Dean’s List of Excellence in Academic Performance",
				year: "2022, 2023, 2024",
			},
			{
				title: "Physics Foundation Prize for Intermediate Physics",
				year: "2023",
			},
			{
				title: "Physics Foundation Scholarship No I",
				year: "2022",
			},
		],
		technical_skills: [
			{
				title: "Programming & Tools",
				description: "Python (NumPy, Pandas, PyMC, JAX), Git, Google Cloud, HPC (NCI), Bash, LaTeX"
			},
			{
				title: "Maths & Statistics",
				description: "Bayesian inference, MCMC, random walks & Markov chains, causal inference, experimental design, forecasting"
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
			title: "Navigating the Pachner Graph: Algorithms for Searching and Sampling Triangulations.",
			description: <p>My honours project and ongoing research. Random walks, simulated annealing and transformer models (JAX, trained on NCI's national supercomputer) for searching and sampling triangulations of 3-manifolds, with a focus on one-vertex 3-spheres.</p>,
			logo: "https://www.svgrepo.com/show/513273/book-opened.svg",
			linkText: "View Project",
			links: [
				{ url: "https://github.com/dbruwel/pachner-graph-triangulations/blob/main/thesis/main.pdf", text: "Read Thesis", icon: faFilePdf },
				{ url: "https://github.com/dbruwel/pachner-graph-triangulations", text: "View Repository", icon: faGithub }
			],
		},
		{
			title: "Optimal Policy Selection Under Bilateral Preferences",
			description: <p>Bilateral preference systems are common in many real world situations. This project explores some methods for selecting optimal policy sets in such systems.</p>,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			links: [{ url: "https://github.com/dbruwel/optimal-bilateral-preferences" }],
		},
		{
			title: "Optimal Play in Chopsticks",
			description: <p>Chopsticks is a simple children's game, often with just two players. This project explores the attractors of the game via a simple direct search.</p>,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			links: [{ url: "https://github.com/dbruwel/chopsticks-optimal-play" }],
		},
		{
			title: "Ising Deduplication",
			description: <p>Estimating deduplicated advertising reach from pairwise channel overlaps, using the maximum entropy (Ising) model that matches them, then splitting a budget of impressions across channels.</p>,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			links: [{ url: "https://github.com/dbruwel/ising-deduplication" }],
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
