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
- Named terms and the logic underlying iterative carelessness improvement
- Two diagrams: **Carelessness is a process** (transitions toward carelessness) and the **Agent's Universe** (levers to pull)
- A first step: how to get started at engineering carelessness (the first transition, the pattern)
- The recipe for iterative carelessness improvement. Every pass through the workflow makes one vigilance cost more explicit, then makes it go away. Modeled on *automation as a process* — same shape, applied to vigilance toil instead of work toil.

## What has been cut

These were load-bearing in prior versions and are now out:

- **The "agency" dimension (A0–A5).** No more 2D model. The talk runs on one axis: vigilance toil and the universe that produces or prevents it.
- **The agency model entirely.** The AI agency maturity model, the other repo, and the walking of that model — all gone.
- **"Worry" as a named concept.** The audience does not need a new noun. We talk directly about *vigilance cost* and *safety options*.
- **The 5-step recipe with "Name the Worry" as step 2.** Replaced by the two-diagram TOC and recipes-on-demand for each transition.
- **AI = engine / Safety = brakes as opening framing.** The brake metaphor still opens, but the "AI is the engine" frame is held back until the closing payoff, where it re-emerges as "Universe = brakes."
- **SAS open space talk.** Already given. Not a planning concern.

## The new flow

### Front half: get to the TOC slide fast (15-20 min)

1. **Bridge — motorcar opening.** As fast as possible. Engines didn't raise speed limits; brakes did. "Better brakes let you stop *caring* about stopping." Hold back the AI mapping.
2. **First demo — movement-based branching with risk-aware commit notation.** As fast as possible. A *tooling* lever. Show, don't yet name. Live demo; needs a scripted walkthrough of exactly what to say and show.
3. **Quick story — transcript fetcher.** Told as a semi-demo: walk through some of the transition states it went through on its way from vigilance to deterministic. A *result-handling* lever.
4. **Upshift.** Rise to the big idea (carelessness as goal), then the recipe (how), then the universe (where the levers live). Order: principle (s20) → safety vocabulary (s28) → recipe (s27, new) → AST callback (s22) → universe (s34). The recipe is the meta-pattern: name the vigilance → build a guardian → read its output as signal (classifies into caught / missed / verified-safe) → lock one class in with a universe lever at a chosen safety level.
5. **The TOC slide.** Two diagrams side by side, walked through quickly. Both diagrams are *placeholder content* — to be filled in by a later step in this plan.
   - **Carelessness is a process** — incremental transitions toward more carelessness. *Placeholder transitions:* vigilance → probabilistic → deterministic → prevention → carefree. The real sequence will be refined later. Each transition has a recipe.
   - **Agent's Universe** — the levers. Each lever has examples on demand.
     - **Memory** — what the agent recalls, for how long, across sessions.
     - **Reachable Context** — what info the agent can get to. Not session context — *reachability*. Which directories are in its search space, which tools surface other info, what generic search (filesystem grep) will stumble across, what is only findable by probing in a specific way. *Name may change.*
     - **Goals** — how narrowly the task is defined.
     - **Tooling** — what operations are in the toolbox, and what is deliberately not.
     - **Invocation timing** — when the agent runs versus when deterministic code runs.
     - **Work-product state control** — what happens to commits, files, MCP tool calls, and other agent outputs before and after the agent runs. Where the agent can directly modify state, and where it modifies a representation that we transform back and forth from real state with checks and determinism. *Was "Result handling" — needs a name that covers this broader scope.*

### Back half: audience-directed exploration (10-15 min)

The TOC slide is a visual menu. Audience picks; I present.

- **Pick a transition** → I present a recipe, maybe with an example.
- **Pick a lever** → I present an example. Probably no recipe.

Keep cycling. At a natural break, insert the closing sequence (see Close), then return to the TOC slide — now augmented with an *other questions* entry — for general Q&A. The audience will likely keep exploring in the same style.

### Close

Four-slide closing sequence (already working in current slides.html): synthesis → formula callback → AI/Universe = engine/brakes → "Better brakes let you stop *caring* about stopping."

The closing sequence is a card on the TOC, alongside the six beat examples. Speaker triggers it at a natural moment by clicking the card. After the close's last slide, next-key returns to the TOC for Q&A.

## Open questions

These shape the plan but are not yet decided.

- **The two TOC diagrams.** Both need a clean visual form. Transition sequence and lever rubric have not been laid out yet. Planned as a later step in this plan.
- **Lever names.** Plan calls them *Reachable Context* and *Work-product state control*; current slides use the shorter *Context* and *Result handling*. Pick canonical names and propagate to both.

## Doing this work

Plan-shaping and cleanup happen together in this session. The two are coupled — we can't trim the old docs until the new direction is clear.

### Order of work

1. **Iterate this plan to clarity.** This file is the source of truth for direction. *(done)*
2. **Trim the other docs to match.** topic.md, core-insight.md, status.md, stories.md. *(done)*
3. **Restructure slides.html and speakers-notes.md** to match this plan. *(done)*
4. **Next movement(s):** any of the "Later sessions" items below.

### What "restructure" means for this movement

Target quality: **raw-to-internal**. Roughly right order and content. Not final prose.

Concretely:

- Process the embedded `@ai:` directives in slides.html (currently three: s16 brownfield-math addition, upshift placeholder block, recipe rework block).
- Rip out concepts the plan has cut: the old 5-step Recipe, the Worry noun, the 6-beat A0–A5 model walkthrough framing.
- Replace the recipe/model block with the two-diagram TOC structure: **Carelessness is a process** + **Agent's Universe**. Diagrams themselves stay as placeholders (real content is a later session) — but the slot and the framing must exist.
- Reorder slides to match the plan's flow: motorcar → vigilance toil (2-factor → 3-factor) → two examples (movement-based branching demo, transcript-fetcher story) → upshift placeholder → TOC slide → audience-directed back half → close.
- Rewrite speakers-notes.md sections to match the new deck order and the new conceptual frame. Keep speaker-notes prose workmanlike, not polished.
- The 6 Beat slides (38–54) are currently structured around Worry/Model. They become the audience-pickable lever examples in the new back half. Reframe their notes (drop "Worry", drop level-shift narration), but keep the underlying examples — they're the material the back half draws from.
- The Careless Safety Spectrum walk-through is part of the upshift, as are the slides currently in the upshift section.
- Make sure slide navigation works in the new sequence.
- Extend slide navigation to allow clidking on things in the visual TOC to jump to something, then so that next from the final slide on an example comes back to the TOC. Use a faked-up TOC with the 6 beat stories as simple cards so that we can verify navigation works.

### Out of scope for this movement

- Final-quality prose on any doc.
- Filling in the two TOC diagrams (transition sequence, lever rubric).
- Detailed upshift sequence design.
- Scripting the first demo (movement-based branching) word-for-word.
- Scripting the transcript-fetcher semi-demo in detail.

### Later sessions (tracked)

- Fill in the **Carelessness is a process** diagram. (Now means: visualize the recipe loop — name → guardian → classify → lever — not transitions along the spectrum.)
- Fill in the **Agent's Universe** diagram.
- Script the **first demo** (movement-based branching).
- Script the **transcript-fetcher story** as a semi-demo.
- Final prose pass on slides.html and speakers-notes.md.

## Status

| Doc | Aligned with plan? | Action |
|-----|--------------------|--------|
| plan.md (this) | Yes | — |
| topic.md | Yes, trimmed | — |
| core-insight.md | Yes, trimmed; formula now 2→3 factor | — |
| status.md | Yes, trimmed | — |
| stories.md | Yes, new, gathers all story detail | — |
| speakers-notes.md | Yes, structurally aligned | Prose pass later |
| slides.html | Yes, structurally aligned | Diagram fill + demo scripts later |

## Current deck state (post-restructure)

**Front half** (linear nav): s1, s2 → motorcar s4, s6, s8, s11 → vigilance 2-factor s12, s14, s16, s18, s19 → MBB demo placeholder **s21** → transcript-fetcher placeholder **s23** → archive table s24 → 3-factor formula s25 → upshift (s20 principle, s28 safety vocabulary, **s27 recipe**, s22 AST callback, s34 universe) → TOC hub **s33**.

**Back half** (audience-directed): TOC has 7 cards — 6 beat examples (Memory s38–s39, Goals s41–s42, Invocation timing s44–s45, Tooling s47–s48, Tooling-ops s50–s51, Result handling s53–s54) plus Synthesis/Closing (s56, s58, s10, s60). Last content slide of every sequence carries `data-return-to-toc`. T-key summons the TOC. Forward keys are disabled on the TOC; only card-clicks advance.

**Placeholders standing in for later-session work:**
- TOC cards are simple beat titles; real two-diagram TOC (Carelessness is a process + Agent's Universe) is later.
- s21 (MBB demo) and s23 (transcript-fetcher) are scaffolds; demo scripts are later.
- Upshift block (s22, s28, s20, s34) is the placeholder upshift; real upshift sequence is later.

**Terminology baked into deck + notes this movement:**
- "Vigilance cost:" replaced "The Worry:" on all beat setups and the upshift's strike-through callouts.
- "Universe lever:" replaces "Universe aspect:" in beat speaker notes.
- A0–A5 level-shift narration ("Level 1 → 4", "Started at level 1", "Currently at level 1") is removed from beat narration. The Spectrum slide (s28) still names the levels as reference.
