import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";
import "./style/markdown.css";

const REMARK_PLUGINS = [remarkGfm, remarkMath];
const REHYPE_PLUGINS = [[rehypeKatex, { throwOnError: false, strict: false }]];

/**
 * Renders an article body written in markdown, with LaTeX support:
 * $inline$ math and $$display$$ blocks are typeset by KaTeX.
 */
const Markdown = ({ children }) => {
	return (
		<div className="markdown-body">
			<ReactMarkdown
				remarkPlugins={REMARK_PLUGINS}
				rehypePlugins={REHYPE_PLUGINS}
				components={{
					a: ({ href, children: linkChildren, ...props }) => {
						const external = /^https?:\/\//i.test(href || "");
						return (
							<a
								href={href}
								{...props}
								{...(external
									? {
											target: "_blank",
											rel: "noopener noreferrer",
									  }
									: {})}
							>
								{linkChildren}
							</a>
						);
					},
				}}
			>
				{children}
			</ReactMarkdown>
		</div>
	);
};

export default Markdown;
