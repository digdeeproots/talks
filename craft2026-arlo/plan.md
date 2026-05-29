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
- Named terms and the logic underlying iterative carelessness improvement. Also the pattern that is represented in the diagram
- Two diagrams: the **carelessness is a process** (transitions toward carelessness) and the **Agent's Universe** (levers to pull)
- A first step: how to get started at engineering carelessness (the first transition, the pattern).
- The recipe for iterative carelessness improvement. Focuses on having every time using the workflow make one vigilance cost more explicit, then go away. Based heavily on automation as a process - it is basically the same, but focusing on the vigilance toil instead of the work toil.

## What has been cut

These were load-bearing in prior versions and are now out:

- **The "agency" dimension (A0–A5).** No more 2D model. The talk runs on one axis: vigilance toil and the universe that produces or prevents it.
- **"Worry" as a named concept.** The audience does not need a new noun. We talk directly about *vigilance cost* and *safety options*.
- **The 5-step recipe with "Name the Worry" as step 2.** Replaced by the two-diagram TOC and recipes-on-demand for each transition.
- **AI = engine / Safety = brakes as opening framing.** The brake metaphor still opens, but the "AI is the engine" frame is held back until the closing payoff, where it re-emerges as "Universe = brakes."
- **SAS open space talk.** Already given. Not a planning concern.
- **The agency model.** The whole ai agency maturity model, that other repo, and the walking of that model. All gone entirely.

## The new flow

### Front half: get to the TOC slide fast (15-20 min)

1. **Bridge — motorcar opening.** As fast as possible. Engines didn't raise speed limits; brakes did. "Better brakes let you stop *caring* about stopping." Hold back the AI mapping.
2. **First demo.** As fast as possible. (Candidate: movement-based branching with risk-aware commit notation — a *tooling* lever.) Show, don't yet name.
3. **Quick story.** Just enough setup for the upshift. (Candidate: the archive-table migration — a *result-handling* lever.)
4. **Upshift.** Lands two concepts: @ai: will be more than two. We'll design this iteratively, but details can wait until we get into this section. Let's the flow right and then refine this sequence.
   - **Carelessness is a process** — stop asking for more care; redesign the universe so even careless behavior succeeds.
   - **Universe levers** — the agent's universe is the design surface. (Use the "big comments" already in the speaker notes around the upshift section as the spine here.)
5. **The TOC slide.** Two diagrams side by side, walked through quickly:
   - **The Careless Process** — incremental transitions toward more carelessness (e.g., vigilance → probabilistic → deterministic → prevention → carefree). Each transition has a recipe. @ai: we will be refining this process incrementally later as well. The sequence isn't what you've written, but that's probably good enough as a placeholder. Mark it (and the one above) as placeholder content, for us to fill in later. And have a later step in the plan to do so.
   - **The universe** — the levers (Memory · Reachable Context · Goals · Tooling · Invocation timing · Result handling). Each lever has examples. @ai: small but important shift here: context is not about what is in the session's context. It is about what the agent can reach. Eg, which directories do we map into its search space? Are there tools that bring in other info? What info is reachable with generic search tools (like file system grep), and what is only there if you probe for it in a specific way? This one may need a new name, but it is all about what info the agent can get to, what it will stumble across, and what it can find only by looking specifically for it. Also, Result Handling may need a more generic term. This isn't only that the agent returns some result and we run it through a tool. It also includes how we handle the commits that it made, the files it changed, the MCP tool calls it did, etc. What do we do before and after it runs? Basically, here we are controlling the work product's state, and where the agent can directly modify that state or directly modify something that it thinks is the state but which we actually transform back and forth between the real state - with checks and determinism.

### Back half: audience-directed exploration (10-15 min)

The TOC slide is a visual menu. Audience picks; I present.

- **Pick a transition** → I present a recipe, maybe with an example.
- **Pick a lever** → I present an example. Probably no recipe.

Keep cycling until time pressure or a natural break. Then open to general Q&A. The audience will likely keep exploring in Q&A style anyway.

### Close

Universe = brakes. "Better brakes let you stop caring about stopping." Exit question: *which part of your AI's universe hasn't been designed yet?*

@ai: this includes all 4 slides in the closing sequence. That sequence seems to work well. So we'll probably insert it at some point in the TOC review, then come back to the TOC (with an extra "other questions" thing) for Q&A

## Open questions

These shape the plan but are not yet decided.

- **First demo choice.** Movement-based branching is the leading candidate. Confirm it lands the *tooling* lever cleanly enough to be the only example before the upshift. @ai: confirmed
- **Quick story choice.** Archive-table migration is the leading candidate. Could also be the transcript fetcher. @ai: transcript fetcher. As semi-demo story (story showing some of the transition states it went through).
- **The two TOC diagrams.** Both need a clean visual form. The careless-process diagram is new — the transitions and recipes have not been laid out yet.
- **Time risk.** 15-20 min to the TOC is tight if the demo is live. Need a fallback (recorded or staged) for when something goes wrong. @ai: I'm comfortable with a live demo. We just need to script out what I'm going to say and show.
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
