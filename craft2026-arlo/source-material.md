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

Mechanism: when a bug occurs, find the hazard (what made the mistake likely?), eliminate it. A 22-minute practice per bug. Over time, the defect stream funds systematic investment in the highest-frequency hazard categories.

### Refactoring as the Common Thread
Refactoring is the mechanism that keeps code safe to change. Hazard elimination is almost always a refactoring — it makes the code structurally impossible to misuse in the same way again.

### What AI Changes
- Hazard elimination is usually refactoring — previously expensive and slow. AI makes it cheap enough to do at scale.
- AI can identify which hazard categories dominate across the whole defect stream.
- In brownfield, years of accumulated hazards can now be addressed category by category.
- AI itself introduces new hazard types (hallucinations, wrong codebase assumptions) if the workflow isn't designed carefully.

### Connection to the Other Topics
- Minions is effectively an AI-powered safeguarding engine: gap-driven development = systematic hazard elimination; movement branching = hazard classification per commit; telemetry = learning from the defect stream.
- The maturity model explains the agency shift required: using AI to run safeguarding campaigns requires A3+, not just A2 code generation.

---

## Synthesis Note

These bodies of work form a complete story:
- **Safeguarding** is the "what" — zero bugs means eliminating opportunities for mistakes, not testing harder.
- **Refactoring** is the mechanism — it keeps code safe to change; every hazard elimination is a refactoring.
- **AI** is the "why now" — hazard elimination was too expensive at scale before; AI changes that economics.
- **Minions** is the "how" — a concrete architecture for running systematic safeguarding campaigns on brownfield code.
- **Maturity model** is the "map" — where are you on the agency arc, and what must shift to use AI for safeguarding rather than just code generation?

**SAS talk** = what + why now (safeguarding + AI economics). Seeds an open space with a concrete, provocative claim.
**Craft talk** = the how (minions as the concrete answer). Deep dive for practitioners who want to build this.
