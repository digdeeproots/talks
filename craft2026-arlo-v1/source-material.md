# Source Material Summary

## Agency Delegation Model

**Location:** `D:\_DeepRoots\ai-dev-maturity-model`

### Core Idea
A 6-stage model (A0–A5) that maps agency transfer from human to AI. The primary axis is *who decides what happens next*, not capability or tooling.

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

---

## Minions Ecosystem

**Location:** `D:\_Lairs\minions`, source at `D:\_Lairs\minions\wings\workshop-01`

### Core Idea
An orchestration platform for AI-driven development in brownfield environments. Separates deterministic workflow decisions (TypeScript: what to do next, who does it) from non-deterministic creative work (Claude agents doing the actual building). Humans stay in the loop via a Throne Room UI.

### Key Architectural Insights
- **Dead drops**: Fully async message routing between agents. Enables pause/resume, parallelism, easy testing.
- **Deterministic workflows + non-deterministic creative work**: Routing logic is TypeScript; code writing is AI. Prevents non-deterministic routing failures.
- **Rapidly changing worlds**: Agent's world (tools, context, constraints, model) changes sub-task to sub-task — even mid-identity (memory persists while world changes).
- **Filesystem-first**: All state on disk, git-managed. Perfect resumability.
- **Gap-driven**: Discomforts → gaps → slices → stories. Self-improving via telemetry.

### Current State
- **Gap 1 (deterministic orchestration)**: Complete and working — slice planning, demos, mission authoring, Throne Room integration.
- **Gap 2 (refined dev process)**: Designed, implementation in progress.
- Brownfield-specific: parallel worktrees, vertical slices, movement branching (provable/covered/thorough/risky).

---

## Zero Bugs / Safeguarding

**References:** deliver:Agile 2018, deliver:Agile 2019, Agile Israel 2017 (BugsZero).

### Core Idea
Safeguarding: use your defect stream to prevent defects, not find them faster. Zero bugs has nothing to do with testing. Every bug is a handcrafted developer mistake. Systems present thousands of opportunities. Developers avoid 99%. Safeguarding eliminates the opportunities themselves.

Mechanism: when a bug occurs, find the hazard (what made the mistake likely?), make it a little better. Slightly less likely, slightly smaller impact, or slightly easier to detect next time. Small, frequent investments that amortize.

### What AI Changes
Consistency and persistence. Zero bugs never required scale or speed — it required doing the same workflow over and over, without fatigue or drift. Humans don't sustain that discipline. AI does.

### Safeguarding as Orchestration
Safeguarding should itself become part of the orchestration system. Detect things you don't like (code smells, test failures, quality signals), then run a deterministic workflow with non-deterministic choices and deterministic tooling to safeguard the ecosystem — tools, workflows, data, context.
