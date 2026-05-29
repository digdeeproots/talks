---
quality: raw
status: in-progress
---

# Plan — Careless by Design (Craft 2026 / SAS)

This is the working plan for the *Careless by Design* talk. It reflects the direction we are heading after re-arranging slides and pruning the old framing. Other docs in this folder (topic.md, core-insight.md, status.md, speakers-notes.md) are partially or fully out of date and will be brought into alignment.

## Where the talk is going

A 20-25 min talk for engineers using AI (or about to). One core move: **stop being more careful; redesign the world so carelessness still succeeds**.

The audience leaves with:
- A name for what they've been paying — **vigilance toil**
- The three-factor formula and the one factor they actually control (**cost to protect**)
- The lens for redesign — the **agent's universe** (Memory, Context, Goals, Tooling, Invocation timing, Result handling)
- One question to take with them — *which part of my universe hasn't been designed yet?*

## What has been cut

These were load-bearing in prior versions and are now out:

- **The "agency" dimension (A0–A5).** No more 2D model. The talk runs on one axis: vigilance toil and the universe that produces or prevents it.
- **"Worry" as a named concept.** The audience does not need a new noun. We talk directly about *vigilance cost* and *safety options*.
- **The 5-step recipe with "Name the Worry" as step 2.** The recipe is being reworked (see Open Questions).
- **AI = engine / Safety = brakes as opening framing.** The brake metaphor still opens, but the "AI is the engine" frame is held back until the closing payoff, where it re-emerges as "Universe = brakes."

## The new flow

This is the spine. Section names and timings are approximate.

1. **Bridge / motorcar opening.** Engines didn't raise speed limits; brakes did. "Better brakes let you stop *caring* about stopping." Hold back the AI mapping.
2. **Vigilance toil (2-factor form).** Name it. Formula: `toil ∝ throughput × amount to protect`. Brownfield vs greenfield. AI multiplies throughput.
3. **Two examples (before naming any model).** Show, then name. Candidates:
   - Demo: movement-based branching (risk-aware commit notation). *Tooling lever.*
   - Demo or story: transcript download/analysis, OR the archive-table migration story. *Result-handling lever.*
4. **Vigilance toil (3-factor form).** Reveal the third factor: `× cost to protect`. This is what we control. The two examples just reduced it.
5. **Upshift.** Walk up the logic chain: experiences → generalization → big idea (*carelessness*) → the design surface. End with: "carelessness is the goal; how do we get there?"
6. **Universe of levers.** Memory · Context · Goals · Tooling · Invocation timing · Result handling. Each with a probe question or concrete mechanism. This is the rubric the audience walks away with.
7. **The recipe.** Reworked: vigilance cost → safety option → universe lever. (See Open Questions: may become a second diagram, *careless process*, that lives in Q&A / follow-up rather than the main flow.)
8. **Audience-guided stories.** Pick a lever, get a story. Or pick a process stage, get a recipe. Stronger at Craft; tighter / pre-selected at SAS.
9. **Close.** Universe = brakes. "Better brakes let you stop caring about stopping." Exit question: *what hasn't been designed yet in your AI's universe?*

## Open questions

These shape the plan but are not yet decided.

- **Recipe form.** Is it one diagram in the main flow, or two diagrams (universe levers + careless process) with the recipe living in follow-up material? The @ai: note in slides.html leans toward two diagrams.
- **Second example in section 3.** Transcript download/analysis demo, or the archive-table story? Demo gives kinetic energy; story is faster.
- **SAS variant.** Same talk, compressed. Where do we cut — section 3 to one example, skip live audience guidance in section 8, or both?
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
- Building the upshift sequence in detail
- Choosing the second example for section 3

## Status

| Doc | Aligned with plan? | Action |
|-----|--------------------|--------|
| plan.md (this) | — | Iterate to internal quality |
| topic.md | No — A0–A5, Worry, old recipe | Trim to align |
| core-insight.md | No — Worries, agency axis | Trim to align |
| status.md | No — references 2D model | Trim to align |
| speakers-notes.md | Partial | Leave messy this session |
| slides.html | Partial | Leave messy this session |
