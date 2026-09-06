---
name: csv-to-json
description: Convert between CSV and JSON, clean up messy tabular data (trim whitespace, fix headers, coerce types), and summarize a dataset's shape. Use when the user pastes or references a CSV/JSON/TSV file and wants it reformatted, cleaned, converted, or inspected.
---
# CSV/JSON Data Formatting

Help the user transform tabular data between CSV, JSON, and TSV, and clean it up along the way.

## Steps

1. Locate the input: a file path the user gave, or data pasted directly in the conversation.
2. Detect the format (CSV, TSV, JSON array-of-objects, JSON Lines).
3. Parse it, then clean common issues:
   - Trim whitespace from headers and values.
   - Normalize header names (consistent casing/snake_case) only if asked or clearly broken.
   - Coerce obvious types: numbers, booleans, ISO dates — leave ambiguous fields as strings.
   - Flag (don't silently drop) rows with missing/mismatched columns.
4. Convert to the requested output format:
   - CSV → JSON: array of objects keyed by header row.
   - JSON → CSV: union of all keys across objects becomes the header row; missing fields are empty cells.
5. Write the result to a file next to the input (or wherever the user specifies) rather than dumping large output inline.
6. Report: row/record count, columns detected, and any rows that were flagged or skipped.

## Notes

- For large files, use `Bash` (e.g. a short Python or `jq`/`awk` one-liner) rather than reading the whole file into the conversation.
- Never invent data to fill missing values — leave gaps empty/null and call them out.
