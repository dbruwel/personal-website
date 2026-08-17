# Personal Website

This repository houses the files for my personal website, a project derived from **Tharindu N. Madhusanka's** website, distributed under the **MIT License**. This derivation acknowledges the original work and adheres to the terms of the MIT License, ensuring appropriate attribution and open-source compliance.

## Website Content and Features

My website is designed to provide a comprehensive and engaging overview of my professional journey, skills, and personal interests. It features the following key sections:

* Home
* About
* Resume
* Projects
* Articles
* Contact

Beyond these core content sections, the website also includes legal and informational pages such as the **Terms of Service**, a comprehensive **Privacy Policy** outlining data handling practices, and an **Acknowledgements** section to credit external resources, libraries, or individuals who have contributed to the website's development or design.

## Writing articles

Articles are markdown files in [`content/articles/`](content/articles), one file per article. Copy `_template.md` to `NN-your-slug.md` and write — files beginning with `_` are ignored.

Each file starts with YAML front matter:

```yaml
---
title: "The Title Shown On The Article Page"
slug: "the-url-for-this-article"   # optional, defaults to the filename
date: 2026-01-31                   # ISO date; articles are listed newest first
description: "Used on the article cards and as the meta description."
keywords: ["Keyword One", "Keyword Two"]
---
```

The body is standard markdown (GitHub flavoured: tables, task lists, strikethrough) with **LaTeX support** — `$inline$` maths and `$$display$$` blocks are typeset with [KaTeX](https://katex.org/docs/supported).

`npm start` watches `content/articles/` and hot-reloads, and `npm run build` compiles the markdown first, so there is nothing extra to run. To compile by hand:

```bash
npm run articles
```

That reads the markdown and writes `src/data/articles.generated.js`, which the app imports. Don't edit the generated file — it is overwritten on every build.
