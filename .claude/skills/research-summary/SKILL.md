---
name: research-summary
description: Research a topic on the web and produce a concise, sourced summary. Use when the user asks to look something up, research a topic, compare options, or summarize what's currently known/available online.
---
# Web Research & Summarization

Research a topic online and hand back a tight, sourced summary rather than a raw link dump.

## Steps

1. Clarify the question if it's ambiguous (what decision or use case the research serves) — otherwise proceed with the obvious reading.
2. Search using `WebSearch`, and fetch the most promising results with `WebFetch` for detail.
3. Cross-check any claim that's surprising or load-bearing against a second source before including it.
4. Write the summary:
   - Lead with the direct answer/recommendation in 1-3 sentences.
   - Follow with key supporting points, each tied to a source.
   - Note disagreement or uncertainty across sources explicitly rather than picking one silently.
   - List sources (title + URL) at the end.
5. Keep it proportional to the question — a quick factual lookup gets a few sentences, not a report.

## Notes

- Prefer primary sources (docs, official sites, papers) over aggregators/blogspam when both are available.
- Flag anything time-sensitive (pricing, versions, availability) with how current the source appears to be.
- Don't present a single blog's opinion as settled fact.
