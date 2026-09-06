---
name: doc-generator
description: Generate a PDF or Markdown document (report, memo, one-pager) from notes, data, or conversation content. Use when the user asks to produce a report, write-up, PDF, or shareable document from information already gathered.
---
# Document Generation

Turn notes, data, or conversation content into a finished document.

## Steps

1. Confirm scope: what the document covers, and target format (Markdown file, or PDF).
2. Draft the content as Markdown first — clear headings, short paragraphs, tables for tabular data — regardless of final format.
3. If the target is Markdown: write it to a file with a descriptive name.
4. If the target is PDF: write the Markdown, then render it using a locally available tool, in this order of preference:
   - `pandoc input.md -o output.pdf` if `pandoc` is installed.
   - A headless HTML→PDF conversion (e.g. a small script with a Markdown-to-HTML step, then Chrome/`wkhtmltopdf`) if pandoc is unavailable.
   - If neither is available, tell the user what's missing and deliver the Markdown instead.
5. Save the output file under the project (or a path the user specifies) and tell the user where it landed.

## Notes

- Don't fabricate figures, quotes, or sources — use only what the user provided or what's verifiably in the codebase/conversation.
- For a long or reusable document with an audience, consider publishing it as an Artifact instead of (or in addition to) a local file — see the `artifact-design` skill first.
- Keep formatting simple: headings, lists, tables, and code blocks convert reliably; avoid exotic Markdown that renderers may mangle.
