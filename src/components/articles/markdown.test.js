import { render, screen } from "@testing-library/react";

import Markdown from "./markdown";
import articles from "../../data/articles";

test("renders markdown structure", () => {
	const { container } = render(
		<Markdown>{"## Heading\n\nSome **bold** text.\n\n- one\n- two"}</Markdown>
	);

	expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
		"Heading"
	);
	expect(container.querySelectorAll("li")).toHaveLength(2);
});

test("typesets inline and display latex", () => {
	const { container } = render(
		<Markdown>{"Let $n = 2$.\n\n$$\nE = mc^2\n$$"}</Markdown>
	);

	expect(container.querySelectorAll(".katex").length).toBeGreaterThanOrEqual(
		2
	);
	expect(container.querySelector(".katex-display")).not.toBeNull();

	// The typeset output keeps the source in a MathML annotation, so the
	// equations stay copy-pasteable and readable to screen readers.
	const annotations = [
		...container.querySelectorAll('annotation[encoding="application/x-tex"]'),
	].map((node) => node.textContent);
	expect(annotations).toContain("E = mc^2");

	// No stray dollar signs left over from the markdown source.
	expect(container.querySelector(".katex-html").textContent).not.toContain(
		"$"
	);
});

test("every article compiled from content/articles has usable metadata", () => {
	expect(articles.length).toBeGreaterThan(0);

	for (const article of articles) {
		expect(article.slug).toMatch(/^[a-z0-9-]+$/);
		expect(article.title).toBeTruthy();
		expect(article.description).toBeTruthy();
		expect(article.displayDate).toBeTruthy();
		expect(article.body.length).toBeGreaterThan(0);
	}
});
