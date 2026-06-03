---
quality: raw
status: in-progress
---

# Plan — Careless by Design (Craft 2026)

The forward-looking plan for the *Careless by Design* talk. Describes the target shape of the deck and what still needs to land. Reference docs: `topic.md`, `core-insight.md`, `stories.md`, `universe-levers.md`, `key-ideas.md`, `status.md`.

## Format

- **45 min total**, 15 min reserved for Q&A → **30 min talk proper**.
- Reach the **TOC slide** within **15–20 min**.
- Remaining **10–15 min**: audience-directed exploration off the TOC.
- Q&A keeps cycling through the same TOC.

## What the audience leaves with

- A name for what they've been paying — **vigilance toil**.
- The three-factor formula and the one factor they actually control — **cost to protect**.
- A picture of the **customer** (the agent's loop) and the **universe** (the seven levers).
- The **recipe** for iterative carelessness improvement.
- One concrete first step they can take Monday.

## Target deck shape

### Front half — linear (≈15–20 min)

```
Bridge:       s1 · s2 · s4 · s6 · s8 · s11           motorcar opening
Toil:         s12 · s14 · s16 · s18 · s19            2-factor formula
Demo 1:       s21                                    MBB tool — live demo
Story 1:      s23                                    transcript fetcher — semi-demo
Recap:        s29 (Ex 1) · s31 (Ex 2)                same 4-row table grid
Formula:      s25                                    3-factor formula
Anchor:       s17                                    vigilance toil = defects you worry about
Upshift:      s24 · s20 · s26 · s37a · s37b · s34 · s28 · s27
              two kinds of engineer · big idea · how? ·
              one agent turn · between turns · agent's universe ·
              safety categories · the recipe
Pivot:        s30                                    blank
```

### TOC hub — visual menu (s33)

Two diagrams side-by-side, audience picks:

- **Carelessness is a process** — the recipe loop visualized: name vigilance → build guardian → classify signal → lock with a lever → decide next.
- **Agent's Universe** — the seven levers as a labelled diagram.

Cards: closing sequence + per-lever case-study entries + per-recipe-step mini-sequences. Forward keys disabled on TOC; only card-clicks advance. T-key summons TOC. Each beat's last slide carries `data-return-to-toc`.

### Back half — audience-directed (≈10–15 min)

- **Pick a lever card** → 3-slide arc: setup → intervention → name-the-experience.
- **Pick a recipe-step card** → mini-arc walking that step.
- Cycle until a natural break.
- Closing sequence inserted at a clean moment, then return to TOC for Q&A.

Lever case-study sequences (each: setup → intervention → name):

```
Memory             s38 → s39 → s40
Goals              s41 → s42 → s43
Workflow           s44 → s45 → s46
Tooling (access)   s47 → s48 → s49
Tooling (ops)      s50 → s51 → s52
State control      s53 → s54 → s55
Feedback           — case study TBD —
```

Each name-slide fills in **Scope / Lever / Cost to protect**.

### Close

Four slides (already working): synthesis → formula callback → AI/Universe = engine/brakes → "Better brakes let you stop *caring* about stopping." Closing is a TOC card; speaker triggers it. Last slide returns to TOC for Q&A.

## What still needs to change

### Big — content gaps

- [ ] **TOC hub two diagrams.** Real diagrams for *Carelessness is a process* and *Agent's Universe*. Currently the hub uses flat beat-title cards as placeholder.
- [ ] **Feedback case study.** No story drafted; card greyed out. Other six levers each have a 3-slide arc. Pull from `stories.md` (commit-tool quality reviewer or required-demo / browser-walker) and build the arc.
- [ ] **Recipes section in the TOC.** Decide what a back-half recipe artifact looks like vs the meta-recipe on s27 — and build the slides for it.
- [ ] **Demo 1 script (s21).** Movement-based branching — word-for-word what to say and what to show on screen.
- [ ] **Demo 2 script (s23).** Transcript fetcher semi-demo — the transition sequence walk in detail.

### Medium — known rough edges

- [ ] **s37a (One Agent Turn) iteration.** Diagram is at raw quality; tools/external connections were deliberately deferred and need to land. Speaker notes need to be re-walked once the diagram settles.
- [ ] **s37b (Between Turns) review.** Has not been touched since the s37a redesign; check it still reads coherently as the right-hand half of the customer model.
- [ ] **Upshift slide for app-dev vs tool-dev rate framing.** Slide s17 lands the anchor (vigilance = defects you worry about) and s24 carries the rate vs find-and-fix framing; verify the two read as a clean sequence.

### Small — polish, last

- [ ] Final prose pass on `speakers-notes.md`.
- [ ] Final prose pass on slide copy in `slides.html`.
- [ ] Sweep `stories.md` for the still-TBD lines (Feedback section, etc.).

## Working principles for the remaining work

- One commit per logical step. Movements close on natural integration points.
- Diagrams stay at **raw** quality until the content is settled; polish last.
- Always tie back to **vigilance toil**. If a slide doesn't connect to a worry class, cut or rewrite it.
- Lever names are canonical per `universe-levers.md`. If a name changes there, propagate everywhere.
