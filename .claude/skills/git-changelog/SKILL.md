---
name: git-changelog
description: Generate a changelog or release notes from git commit history between two refs (tags, branches, or commits). Use when the user asks for release notes, a changelog, or a summary of what changed since a given tag/commit/branch.
---
# Git Changelog Generation

Turn raw commit history into readable release notes.

## Steps

1. Determine the range: default to "since the last tag" (`git describe --tags --abbrev=0`) to `HEAD` unless the user specifies refs.
2. Pull the commits: `git log <from>..<to> --pretty=format:'%h %s (%an)'`.
3. Group by type/intent, inferring from Conventional Commit prefixes when present (`feat`, `fix`, `chore`, `docs`, `refactor`, etc.) and by reading the message when not:
   - Features
   - Fixes
   - Other changes (chores, docs, refactors)
4. Rewrite terse commit subjects into short user-facing bullets — skip merge commits and noise (e.g. "wip", "typo") unless nothing else is in the range.
5. Present the changelog in standard format (`## [version] - date` heading, then grouped bullets), and offer to write it into `CHANGELOG.md` (prepending, not overwriting existing history) if the user wants it saved.

## Notes

- Never invent changes not present in the commit log — if a commit message is unclear, describe it conservatively rather than guessing intent.
- If tags don't follow semver or none exist, ask for or infer a sensible range (e.g. last N commits, or since a given date) instead of failing silently.
- Keep entries scannable: one line per change, no commit hashes in the user-facing text (link them only if the project's changelog convention already does).
