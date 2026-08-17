/**
 * Articles are written as markdown files in content/articles/.
 * `npm run articles` (run automatically by `npm start` and `npm run build`)
 * compiles them into articles.generated.js — edit the markdown, not this file.
 */
import articles from "./articles.generated";

export const findArticle = (slug) => {
	if (!slug) return undefined;

	const bySlug = articles.find((article) => article.slug === slug);
	if (bySlug) return bySlug;

	// Legacy /article/1 links, which addressed articles by position.
	if (/^\d+$/.test(slug)) return articles[Number(slug) - 1];

	return undefined;
};

export default articles;
