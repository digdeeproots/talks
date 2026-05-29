---
quality: raw
status: in-progress
---

# Plan — Careless by Design (Craft 2026)

This is the working plan for the *Careless by Design* talk at Craft 2026. It reflects the direction we are heading after re-arranging slides and pruning the old framing. Other docs in this folder (topic.md, core-insight.md, status.md, speakers-notes.md) are partially or fully out of date and will be brought into alignment.

## Format

- **45 min total**, 15 min reserved for Q&A → **30 min talk proper**.
- Reach the *visual table of contents* slide within **15-20 min**.
- Remaining 10-15 min in the talk proper: audience-directed exploration off the TOC slide.
- Q&A will likely keep cycling in the same style — that's fine.

## What the talk does

A talk for engineers using AI (or about to). One core move: **stop being more careful; redesign the world so carelessness still succeeds**.

The audience leaves with:
- A name for what they've been paying — **vigilance toil**
- The three-factor formula and the one factor they actually control — **cost to protect**
- Two diagrams: the **careless process** (transitions toward carelessness) and the **universe** (levers to pull)
- One question to take with them — *which part of my universe hasn't been designed yet?*

## What has been cut

These were load-bearing in prior versions and are now out:

- **The "agency" dimension (A0–A5).** No more 2D model. The talk runs on one axis: vigilance toil and the universe that produces or prevents it.
- **"Worry" as a named concept.** The audience does not need a new noun. We talk directly about *vigilance cost* and *safety options*.
- **The 5-step recipe with "Name the Worry" as step 2.** Replaced by the two-diagram TOC and recipes-on-demand for each transition.
- **AI = engine / Safety = brakes as opening framing.** The brake metaphor still opens, but the "AI is the engine" frame is held back until the closing payoff, where it re-emerges as "Universe = brakes."
- **SAS open space talk.** Already given. Not a planning concern.

## The new flow

### Front half: get to the TOC slide fast (15-20 min)

1. **Bridge — motorcar opening.** As fast as possible. Engines didn't raise speed limits; brakes did. "Better brakes let you stop *caring* about stopping." Hold back the AI mapping.
2. **First demo.** As fast as possible. (Candidate: movement-based branching with risk-aware commit notation — a *tooling* lever.) Show, don't yet name.
3. **Quick story.** Just enough setup for the upshift. (Candidate: the archive-table migration — a *result-handling* lever.)
4. **Upshift.** Lands two concepts:
   - **Careless engineering** — stop asking for more care; redesign the universe so even careless behavior succeeds.
   - **Universe levers** — the agent's universe is the design surface. (Use the "big comments" already in the speaker notes around the upshift section as the spine here.)
5. **The TOC slide.** Two diagrams side by side, walked through quickly:
   - **The careless process** — incremental transitions toward more carelessness (e.g., vigilance → probabilistic → deterministic → prevention → carefree). Each transition has a recipe.
   - **The universe** — the levers (Memory · Context · Goals · Tooling · Invocation timing · Result handling). Each lever has examples.

### Back half: audience-directed exploration (10-15 min)

The TOC slide is a visual menu. Audience picks; I present.

- **Pick a transition** → I present a recipe, maybe with an example.
- **Pick a lever** → I present an example. Probably no recipe.

Keep cycling until time pressure or a natural break. Then open to general Q&A. The audience will likely keep exploring in Q&A style anyway.

### Close

Universe = brakes. "Better brakes let you stop caring about stopping." Exit question: *which part of your AI's universe hasn't been designed yet?*

## Open questions

These shape the plan but are not yet decided.

- **First demo choice.** Movement-based branching is the leading candidate. Confirm it lands the *tooling* lever cleanly enough to be the only example before the upshift.
- **Quick story choice.** Archive-table migration is the leading candidate. Could also be the transcript fetcher.
- **The two TOC diagrams.** Both need a clean visual form. The careless-process diagram is new — the transitions and recipes have not been laid out yet.
- **Time risk.** 15-20 min to the TOC is tight if the demo is live. Need a fallback (recorded or staged) for when something goes wrong.
- **What survives from v1.** craft2026-arlo-v1/ has older stories (migration, git, coaching workflow). Most have made it forward. Worth a sweep to confirm nothing useful was left behind.

## Doing this work

Plan-shaping and cleanup happen together in this session. The two are coupled — we can't trim the old docs until the new direction is clear.

### Order of work

1. **Iterate this plan to clarity.** This file is the source of truth for direction.
2. **Trim the other docs to match.** topic.md, core-insight.md, status.md — keep only what aligns with the new direction. Delete the rest as if it had never been there.
3. **Leave slides.html and speakers-notes.md messy.** They get reworked in later sessions, using this plan and the same iterate pattern.

### Out of scope for this session

- Rewriting slides.html
- Rewriting speakers-notes.md
- Final-quality prose on any doc
- Detailed design of the two TOC diagrams
- Choosing among the demo / story candidates

## Status

| Doc | Aligned with plan? | Action |
|-----|--------------------|--------|
| plan.md (this) | — | Iterate to internal quality |
| topic.md | No — A0–A5, Worry, old recipe | Trim to align |
| core-insight.md | No — Worries, agency axis | Trim to align |
| status.md | No — references 2D model, SAS | Trim to align |
| speakers-notes.md | Partial | Leave messy this session |
| slides.html | Partial | Leave messy this session |
