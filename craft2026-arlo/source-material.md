# Source Material Summary

## Option A: AI Agency Levels / Maturity Model

**Location:** `D:\_DeepRoots\ai-dev-maturity-model`

### Core Idea
A 6-stage model (A0–A5) that maps agency transfer from human to AI. The primary axis is *who decides what happens next*, not capability or tooling. The non-obvious insight: identity dissolves before roles disappear — people resist AI adoption because of who they are, not because of job loss.

### Stages
- A0: Human-only
- A1: Human commands tasks (AI responds)
- A2: Human commands the loop (AI executes bounded work)
- A3: Human supervises the loop (AI selects and sequences)
- A4: Human is inside the loop (AI holds operational agency)
- A5: Personal sovereign systems (out-of-scope for now)

### Supporting Content
- Detailed responsibility matrix: 21 responsibilities, who owns each at each stage
- Four "fate-determining choices" (system of record, determinism boundaries, evaluation explicitness, memory strategy)
- Emotional arc at each stage — what must be let go of to progress
- A working Vue 3 web app for interactive exploration
- Well-developed, polished, essentially presentation-ready

### Talk Strength
Very polished. Novel framing vs. capability-centric frameworks. Broad audience (leaders, teams, anyone using AI). Could be given now with minimal prep.

---

## Option B: Minions Ecosystem

**Location:** `D:\_Lairs\minions`, source at `D:\_Lairs\minions\wings\workshop-01`

### Core Idea
An orchestration platform for AI-driven development in brownfield environments. Separates *deterministic workflow decisions* (TypeScript, what to do next, who does it) from *non-deterministic creative work* (Claude agents doing the actual building). Humans stay in the loop via a Throne Room UI that shows mission progress and asks for approval at each verified increment.

### Key Architectural Insights
- **Dead drops**: Fully async message routing between agents — no synchronous call/response. Enables pause/resume, parallelism, easy testing.
- **Deterministic coordination + creative execution**: Routing logic is TypeScript; code writing is AI. Prevents non-deterministic routing failures.
- **Frequent verification over upfront planning**: Build tiny increment, human verifies, incorporate feedback, repeat. Inverse waterfall.
- **Filesystem-first**: All state on disk, git-managed. Perfect resumability.
- **Gap-driven**: Discomforts → gaps → slices → stories. Self-improving via telemetry.

### Current State
- **Gap 1 (deterministic orchestration)**: Complete and working — slice planning, demos, mission authoring, Throne Room integration.
- **Gap 2 (refined dev process)**: Designed, implementation in progress — parallel slice execution, operations/cells/dead drops runtime.
- Brownfield-specific: parallel worktrees, vertical slices, movement branching (provable/covered/thorough/risky).

### Talk Strength
Arlo's strongest material. Unique, concrete, contrarian (vs. fully-automated or fully-manual camps). Directly applicable patterns. But system is mid-build — Gap 2 incomplete — which means some claims aren't yet proven by working code.

---

## Option C: Zero Bugs / Safeguarding (existing body of work)

**References:** deliver:Agile 2018 (preventing bugs in code you can't test), deliver:Agile 2019 (safeguarding: using your bugs to prevent bugs and fund tech debt fixes), Agile Israel 2017 (BugsZero).

### Core Idea
Safeguarding: use your defect stream to prevent defects, not find them faster. Zero bugs has nothing to do with testing — testing finds bugs after introduction; safeguarding prevents introduction. Every bug is a handcrafted developer mistake. Systems present thousands of opportunities. Developers avoid 99%. Safeguarding eliminates the opportunities themselves.

Mechanism: when a bug occurs, find the hazard (what made the mistake likely?), make it a little better. Not eliminate it. Not do the 20% of work with 80% of the value. Just: slightly less likely, slightly smaller impact, or slightly easier to detect next time. Small, frequent investments that amortize. Over time, the defect stream funds systematic improvement of the highest-frequency hazard categories.

### Refactoring as the Common Thread
Refactoring is the mechanism that keeps code safe to change. Hazard elimination is almost always a refactoring — it makes the code structurally impossible to misuse in the same way again.

### What AI Actually Changes (corrected)
AI has NOT changed the economics of large-scale refactoring yet. What people call "AI refactoring" is mostly remodeling — rewriting with some test support. That's risky, and too risky to delegate. True refactoring (behavior-preserving transformations) is different and remains the safe operation.

The real thing AI changes: **consistency and persistence**. Zero bugs never required scale or speed — it required doing the same workflow over and over, without fatigue, drift, or "let's just fix the bug this time." Sample a problem. Improve the hazard by 15%. Repeat. Humans don't sustain that discipline. AI does.

Not all hazards are design hazards — that's one big category, not the whole. Other categories exist (process, workflow, environmental).

### What Minions Adds
Minions enables higher levels of agency delegation because it enables **guaranteed-safe operations** for a class of operations. This is what makes it safe to delegate further up the maturity model. Without guaranteed-safe operations, you can't trust the system at A3+. With them, you can.

Orchestration systems (Minions) magnify AI's natural capabilities: consistency, persistence, repeatable discipline.

### Connection to the Other Topics
- Maturity model: delegation requires trust; trust requires safe operations; Minions provides that for a class of operations, enabling progression from A2 to A3+.
- Refactoring is still part of the through-line as a safe-operation class — behavior-preserving transformations are trustworthy; rewrites are not.

---

## Option D: Making Abundance / The Arbor

**Location:** `D:\_Abundance\making-abundance\Making Abundance\`

### The Unifying Principle: The Arbor
Structure that reveals rather than constrains. A garden arbor creates multiple paths to light — it doesn't direct growth, it opens space for it. The Arbor Test: "Does this open growing space or close it?"

This is the deeper name for "design for carelessness." Same principle, broader application.

**Manifestations at every scale:**
- Agent level: design the environment so careless behavior succeeds (Minions)
- Human level: safeguarding — design the codebase/process so developer mistakes don't propagate
- Group level: Decider Protocol — structure that enables multiple options to coexist rather than forcing convergence
- Organization level: sociocratic circles, steward ownership, two-tier pricing
- Economy level: the full abundance engine (solar → robots → manufacturing → food, all approaching zero cost)

### The Decider Protocol
Consent-based decision mechanism:
1. Someone proposes something specific
2. Everyone votes simultaneously: thumbs up / sideways (support with concerns) / thumbs down (paramount objection)
3. If thumbs down: ask "What would it take?" — and explore whether multiple paths can coexist rather than forcing convergence
4. Key move: branch, not converge. Parallel exploration (probably wrong — that's the point). Merge what works.

**What it replaces**: decisions by authority (easy but wrong) or decisions by exhaustion (democratic theater that produces groupthink).

**Current state**: No dedicated software exists. The protocol is a human practice (Jim Shore / Shane Warden origin). AI-facilitated version is possible today with a structured prompt — use an LLM as the facilitator. This IS actionable Monday without waiting for software.

### The Abundance Engine (background context, not in the talk)
All four production constraints (energy, manufacturing labor, agricultural labor, thought/coordination) have been independently automated. Costs are approaching zero. Prices aren't following — the gap is the "artificial scarcity stack" (profit extraction at every layer). This is an organizational problem, not a technological one.

The abundance work is much larger than this talk. It is the answer to the open question the talk raises. The talk opens a door; the abundance work is behind it.

### The SI-as-Arbor Insight
SI (specialized intelligence / current AI) lacks persistent selfhood — no long-term desires, no ego at stake. This is not a limitation. It's what makes SI a perfect arbor: it can facilitate without judgment, support branching explorations without bias, help groups notice contraction without social cost. A critic who isn't critical.

---

## Synthesis Note (revised)

These bodies of work form a complete story:
- **Safeguarding** is the "what" — zero bugs means eliminating opportunities for mistakes, not testing harder.
- **Consistency** is the bottleneck — the workflow is simple; what blocked teams was the discipline to do it with every single bug, forever.
- **AI** is the "why now" — AI is good at exactly this category of problem: persistence, repeated discipline without fatigue or drift.
- **Guaranteed-safe operations** is the unlock for delegation — Minions enables a class of operations the AI can be trusted to run unsupervised.
- **The Arbor** is the unifying principle — design the world so right behavior is the easy behavior, at every scale.
- **The Decider Protocol** is the same principle applied to group decisions — structure that enables divergence rather than forcing convergence.
- **Maturity model** is the map — where are you on the agency arc, and what must shift to use AI for safeguarding rather than just code generation?

**SAS talk / Craft talk** = Crisis (toil, the crossroads) → Principle (the Arbor / design for carelessness) → Proof (safeguarding, Minions, Decider Protocol) → Open question (abundance: how do a thousand builders elevate each other?) → Call (find the other world builders).
