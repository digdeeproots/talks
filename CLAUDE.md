# Claude Code Guide — Deep Roots Talks

This repo holds conference talks by Deep Roots (Arlo Belshee and collaborators). We build talks incrementally: topic clarity, marketing copy, and content flow first; slides and delivery later.

---

## Commit Discipline

Commit constantly. Every logical step is a separate commit. The rule:

- Commit before asking the human to review anything.
- Commit the human's edits before responding to them.
- Never batch commits across turns or logical steps.

The iteration protocol (`.meta/workflows/pattern-iterate.md`) defines the exact commit messages and flow.

---

## Project Context and the `.meta/` Folder

All persistent project context lives in the repo under `.meta/`. This is the source of truth — not external memory systems. When starting a new session, read CLAUDE.md (this file), then read any `.meta/context/` files relevant to the work.

| Path | What lives here |
| :--- | :--- |
| `.meta/context/` | Stable facts: speaker profiles, company context, anything that applies across all talks |
| `.meta/workflows/` | Reusable protocols and scripts |

Talk-specific state (current phase, next step, log) lives in the talk's own folder, in a `status.md` file (e.g., `craft2026-arlo/status.md`).

When you learn something worth keeping — a preference, a constraint, a decision — write it to the appropriate file here and commit it. Do not rely on memory that lives outside the repo.

---

## Workflows

Workflows live in `.meta/workflows/`. When a step file says "run pattern X", read that file and follow it.

| File | Purpose |
| :--- | :--- |
| `pattern-iterate.md` | Blended loop for refining docs with a human collaborator. Use this for any talk content work. |
| `pattern-verify.md` | End-of-step checkpoint to ensure insights are recorded. Run after each major step. |
| `say.ps1` | Text-to-speech utility. `.\\.meta\\workflows\\say.ps1 "text"` |

---

## Talk Structure

Each talk gets:
- A talk page at the root (e.g., `craft2026-arlo.md`) — links to deck, resources, and engagement.
- A deck in `Decks/` — `.pptx` file.
- Supporting resources in `resources/` as needed.
- A talk development folder (e.g., `talks/craft2026-arlo/`) for working drafts, topic doc, outline, etc.

New talks are added to the table in `index.md`.

---

## New Talk Development Order

1. Topic + marketing clarity (title, abstract, audience, key insight)
2. Content flow (narrative arc, section outline)
3. Slide structure
4. Delivery drafts

Use `pattern-iterate.md` for all written output. Start with `raw` quality, move to `internal`, then `final`.

---

## Scripts

All scripts are TypeScript. Place them in `.meta/workflows/` or a talk-specific `scripts/` subfolder.

---

## Working Repo

- Speaker: Arlo Belshee (arlo@digdeeproots.com)
- Company: Deep Roots (digdeeproots.com)
- Platform: GitHub Pages via Jekyll (`_config.yml`, `CNAME`)
