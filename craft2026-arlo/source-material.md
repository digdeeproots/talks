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

## Synthesis Note

These two topics are deeply connected. The maturity model is the *map* (what does it mean to delegate more?). Minions is the *territory* — a concrete answer to what A3/A4 looks like for brownfield developers. A unified talk could use the maturity model as framing and minions as the demonstration of how to actually get there.
