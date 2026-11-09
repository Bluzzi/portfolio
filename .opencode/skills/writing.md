---
name: writing
description: Load before writing any text of any kind (code comments, user-visible strings, docs, instruction or skill files, commit messages). Defines the punctuation and style rules that all written text in this repo must follow.
---

## Rules

- The site content is French (UI strings, `<html lang="fr">`, dayjs date formatting) but code, identifiers and comments are English.
- Never use em dashes in anything you write: code comments, docs, instruction files, commit messages. Prefer commas, parentheses, colons or separate sentences.
- In user-visible text (UI strings, page content, any text a visitor reads), never use a colon inside a paragraph or sentence. Code comments are exempt. Restructure the sentence instead: split it with a period, or fold the enumeration into the sentence.
- Segment code into logical blocks with a short English comment ending in a colon, like `// Navigate to the home page:` in `e2e/home.ts` or `// Plugins:` in `src/lib/utils/day-js.ts`. This exact style is used across the repo.

## Example (user-visible text)

Bad:

> Faire évoluer la scalabilité d'un projet sous toutes ses formes, pour qu'elle suive le rythme des clients : l'architecture et le Cloud, le code, mais aussi les recrutements de l'équipe technique. Tout grandit ensemble, sans jamais devoir tout reconstruire en chemin.

Good:

> Faire évoluer la scalabilité d'un projet sous toutes ses formes, pour qu'elle suive le rythme des clients, de l'architecture et du Cloud jusqu'aux recrutements de l'équipe technique, en passant par le code. Tout grandit ensemble, sans jamais devoir tout reconstruire en chemin.
