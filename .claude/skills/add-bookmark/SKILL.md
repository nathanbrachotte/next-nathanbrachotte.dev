---
name: add-bookmark
description: Add a URL to content/bookmarks.mdx — research the site, place it under the right section/headline, then commit and push. Use when the user gives a URL to bookmark.
---

# Add Bookmark

Add a URL to `content/bookmarks.mdx`, then commit & push.

## Input
A URL (required). Optional context from the user about category/placement — honor it over your own guess.

## Steps

1. **Research the URL** with WebFetch. Get a one-sentence summary of what it is/does.
2. **Read** `content/bookmarks.mdx` to see current sections and conventions.
3. **Pick placement**: match the site to the best existing section/sub-headline (top-level `##`, `####`, `#####`, and nested bullets). If it clearly belongs under an existing nested group (e.g. shadcn add-ons indent under the `shadcn` bullet), nest it. Only create a new headline if nothing fits — confirm with the user first in that case.
4. **Format the entry** to match neighbors:
   - `- [label](url) - short description`
   - Label is usually the bare domain (e.g. `lucide.dev`) OR the product/component name when the bare domain is unhelpful. Match what nearby entries do.
   - Description: terse, lowercase-ish, what makes it useful. Skip the dash+description only if neighbors omit it.
   - Match indentation of the surrounding list exactly.
5. **Edit** the file with the new entry.
6. **Commit & push** automatically (no confirmation needed):
   - Commit message: `add <short-name> bookmark`
   - End with `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
   - `git push`

## Notes
- Don't duplicate an existing entry — if the URL/domain is already present, tell the user instead.
- Keep changes scoped to the one new bookmark line.
