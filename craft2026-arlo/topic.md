---
quality: raw
status: in-progress
---

# Talk Topic — Craft 2026 / SAS Open Space

## Working Title

*Careless by Design: AI with Zero Bugs in Ugly Code*

## Target Audience

Early market engineers: actively using AI or about to. Not the innovator cohort years ahead. They feel the vigilance burden. They want better delegation but don't have the vocabulary or mental model for it yet.

## The Problem We're Solving

Most engineers using AI have swapped work-toil for vigilance-toil. Watching the AI closely enough that nothing goes wrong is just different toil — more stressful, not less. They haven't actually delegated. They've relocated the burden.

And this isn't even an AI problem. Teams in brownfield codebases have been in this trap for years — "keeping the lights on" is vigilance toil without a single agent in sight.

## The Shift We're Offering

A framework for understanding and reducing vigilance toil: what it is, where it comes from, how to measure it, and how to invest in the safety that eliminates it. Concrete recipes for creating zero-risk zones, starting in non-AI brownfield and scaling to AI. Agency opportunities open as vigilance is addressed.

## Core Insight

You can only go as fast as your brakes allow. AI is an engine improvement. Safety is the brakes. Teams obsess over the engine while neglecting the brakes. The bottleneck is never where they're looking.

See `core-insight.md` for the full development.

## Why Arlo / Why Deep Roots

Safeguarding. Arlo has been applying "design for carelessness" to human developers for decades — using defect streams to redesign environments rather than asking people to try harder. He's also built Minions: an orchestration system that demonstrates rapidly-changing agent worlds in brownfield code. He's not describing a theory. He's showing a practice.

The motorcar metaphor unifies Safeguarding (brakes for human developers) and Minions (brakes for AI agents). Same principle. Two implementations. Decades apart.

## MC Introduction

Arlo Belshee has spent two decades mending legacy code and developing practices like #ZeroBugs, Risk-aware Commit Notation, and Naming as a Process. But each of these has a flaw: they require consistency. Now he has a core conviction: when someone is inconsistent, don't ask them to be more careful. Redesign their environment so carelessness still succeeds. He's applied that same principle to coding agents, building Minions: an orchestration system for AI in brownfield codebases. Please welcome Arlo Belshee.

## Abstract (draft)

You swapped work-toil for vigilance-toil. Watching AI closely enough that nothing goes wrong is still toil. More stressful, less interesting toil.

Speed limits didn't go up when car engines got better. They went up when brakes got better, because good brakes mean you don't have to be careful about your speed. Early drivers were slow not because their engines were weak, but because they had to be. Better brakes made careless driving safe.

AI is the engine. The Safety Environment is the brakes. It prevents mistakes before you even make them. The vigilance toil you're carrying is what happens when your brakes haven't kept up.

This session maps the two dimensions of delegation: who does the work (agency), and how easily the environment prevents unintended side effects (safety). We work through what makes each level safe, starting in human brownfield teams and scaling to AI. Demos and recipes throughout.

#ZeroBugs has applied this to human developers for a decade. When someone makes a mistake, don't ask them to be more careful. Redesign the environment so that even more careless behavior still succeeds. Now it applies to agents.

## Key Moments / Stories

### 1. The Motorcar (open)

Speed limits in the early motorcar era didn't track engine improvement. They tracked braking improvement.

Early drivers weren't slow because their engines were weak. They were slow because they had to be careful. Every curve, every junction required constant attention to stopping distance, to what could go wrong. Driving required vigilance.

Better brakes didn't just let you stop faster. They let you stop being so careful. You could be careless about your speed and still be fine. Speed limits rose because brakes made careless driving safe.

Well, that's an oversimplification. It wasn't just brakes. They went up with better brakes that could stop faster, then with better tires that could prevent skidding even in water, then with ABS.

When engines got more powerful, people didn't get to work more quickly. Fatalities might have increased, who knows. But braking systems got people to work more quickly and with less exhaustion. They reduced vigilance.

Setup for everything that follows: AI is an engine improvement. The vigilance toil you're carrying is what happens when your brakes haven't kept up.


(slide: motorcar picture)

---

### 2. The Maintenance Trap (vigilance toil, non-AI)

A brownfield team — no AI — spending most of their capacity on "keeping the lights on." Defects, regressions, debt fires. Not building anything new.

The vigilance toil formula: toil ∝ throughput × existing body of work. Greenfield: body ≈ 0, so toil ≈ 0. Brownfield: body is large, so every unit of new work generates vigilance toil proportional to everything that already exists.

This is the recognition moment. The audience who's been in maintenance mode knows this feeling. They didn't know it had a name, a formula, or a solution.

(slide: toil formula)

---

### 3. The Migration That Lost Data (vigilance toil → careless design)

Working on an app where Minions were creating database migrations. Yoloing them at first — it went fine for a while. Then it made a small mistake that wasn't obvious, and there was data loss.

The tempting response: add more guardrails. Tell it to always save data, never lose data. That's asking for more care. It will still mess up.

Instead: made it more careless. Three changes.

First, an archive table. Even if it screws up the migration, the pre-migration state of every data item is preserved. Always restorable.

Second, after it figures out the migration, another step creates a bidirectional remapping — every value from source to destination and back. It verifies that every mapping goes somewhere. Since you still want to be able to delete things, there's a designated legacy-data slot in the schema for "not currently used." The remapping routes unused data there. Nothing is lost. Deterministic code can check that the mapping is allowed (meets my criteria); a test can turn the mapping into a verification of the code and run the migration to make sure that it does as the mapping says.

Third, extracted all the migration machinery into a library. Debugged that library. Now the deterministic code handles execution; the AI only creates the migration itself. Narrowed the problem space enough that it does a lot better.

Result: it can be careless, and it will still be OK.

Recipe: **archive first, then deterministic execution, then narrow the AI's scope**.

---

### 4. Git Is Off-Limits (tooling restriction = safety level 4)

Minions never touch git. Too many ways to screw up. Instead, there's an MCP tool with movement-based branching. The AI can start a movement, make commits, and merge — but it doesn't know what those operations do internally. All the right git behaviors are implemented in the tool.

For merge conflicts: the minion that did the work gets its history cloned, handed a limited git toolset, and given just enough access to resolve the conflict on that one branch. Once resolved, it's booted out and the deterministic tool takes back over.

Pre-commit hooks are integrated with the watch mode already running. The AI can run tests and lint — and get cached results fast. But when a commit happens, the deterministic tool pauses and enforces all pre-commit requirements. The AI can't work around them.

This is level 4 safety: the AI cannot produce a git state that violates the invariants, because the tool makes it structurally impossible.

---

### 5. Refactoring via Safe AST Tools Only (level 5)

No edit-file tool for the minions. Only AST-based transformation tools — provably safe refactorings. The AI makes design choices; deterministic code executes them.

The safety split here: the tool guarantees execution correctness (behavioral safety, reversibility) within its scope, but says nothing about design correctness (whether this was the right move). Two named domains.

You can be wrong about the design. That's cheap to fix — the tool makes it equally easy to undo. You cannot accidentally introduce a behavior change, ever. That's free.

This is level 5: the right action (behaviorally safe refactoring) is the only available action.

---

### 6. The Coaching Workflow / do-today (progressive safety)

A daily workflow for coaching work: pull transcripts from Fireflies, do lesson planning, write the daily status email, extract techniques, build recipes, track against the week's goals.

Started as just workflow files — tell Claude to read the file and follow it. That's safety level 1: full vigilance burden. You watch every output.

Over time, more moved to deterministic code. Transcript fetching: now a fully debugged deterministic fetcher that gets the right transcript for the right day and team. On failure, it invokes Claude to help resolve — but only on failure. It knows when it screwed up, so you don't have to be vigilant.

The status email is the clearest example. Templates define sections. Structured JSON maps to templates. Claude writes a few sentences of analysis; deterministic code assembles everything else. A script generates the HTML preview. You check the wording, approve. Deterministic code grabs the recipient list and creates the email file. You hit send.

You never have to be vigilant about structure, rendering, recipient list. Those are zero-risk zones. You only pay attention to the words.

Recipe: **make one thing zero-risk at a time. Each piece you solve permanently frees vigilance budget for the next thing.**

---

## Content Flow

**Format:** Short setup, then model exploration — audience-guided at Craft, more directed at SAS. Demos and recipes woven throughout. 20-25 min.

**Exit state:** They leave with a four-word question: "What are my brakes?" In their AI systems, their human team systems, the systems they personally live inside. They have language for it: *vigilance toil*, *safety level*, *careless engineering*. They know it's a rigorous practice, not a shortcut.

---

### Emotion Arc

| Phase | Feeling | What's happening |
|-------|---------|-----------------|
| Opening | Curiosity, slight puzzle | The motorcar story. Speed limits + brakes, not engines. Where is this going? |
| Recognition | Mild pain | "You relocated toil, not eliminated it." They feel seen. |
| Framing | Interest, some surprise | The formula. The two dimensions. It clicks that this was always a thing, not an AI problem. |
| Exploration | Curiosity, building confidence | Walk through non-AI cases. The model makes sense. They're finding their own team in it. |
| Expansion | Surprise | AI doesn't create the problem. It multiplies it. And the same investments that fix the human case fix the AI case. |
| Click | Agency | The careless design principle. Not "be more careful." Design the world. |
| Exit | Vocabulary, question | New question: "What are my brakes right now?" They can answer it. |

---

### Section Skeleton

**Rule:** follow the Green Path within each section: hook → story → recipe → concept. Never lead with concept. Model is introduced just enough to orient; then explored through examples.

---

#### 1. The Motorcar (3-4 min)

*Hook + story + the central question*

Speed limits in early motoring. Engines improved — but limits didn't rise. Brakes improved — limits rose. The principle: capability doesn't unlock speed. Safety unlocks speed.

Pose the question: what are the brakes in software development? In AI development?

Don't answer yet. Let it sit.

---

#### 2. Vigilance Toil (4-5 min)

*Recognition + formula + two examples*

Name it: vigilance toil. The cost of watching closely enough that nothing goes wrong. Different from work-toil. More stressful, less interesting.

**Story: the maintenance trap (non-AI).** Brownfield team. 100% "keeping the lights on." Every new feature generates three maintenance items. Not because they're bad engineers — because the existing body is large and safety is weak.

The formula: **toil ∝ throughput × existing body**. Greenfield survives weak safety. Brownfield cannot.

**Story: AI makes it multiplicative.** Add AI to that brownfield team. Throughput 4x. Vigilance toil 4x. If safety was already marginal, it breaks immediately. AI didn't create the problem — it showed you the problem you already had.

---

#### 3. The Two-Dimensional Model (3-4 min)

*Concept introduction — brief, enough to orient*

One dimension you've probably heard of: **agency**. Who does the work. Human → AI, stages A0–A5.

The dimension you probably haven't named: **careless safety**. How easily the environment prevents unintended side effects. Level 0–5.

Introduce the 2D grid. Show the safe path — a narrow diagonal. Falling off: more agency than your careless safety can cover. The result is vigilance toil you cannot sustain.

Key point: most teams think they're choosing how much to delegate. They're actually choosing how much vigilance toil to generate.

---

#### 4. Non-AI Brownfield First (5-6 min)

*The model applied in the non-AI case. Stories and recipes.*

Walk through what vigilance looks like in a manual brownfield codebase. Types of vigilance: capability regression, extensibility reduction, consistency violation, design drift. Each one has a body of work at risk, a cost, and safety options.

The zero-risk point: low risk requires constant vigilance (some fraction of the time, something goes wrong). Zero risk within a bounded scope does not. The engineering move: bound the scope, then guarantee it.

**Story: AST refactoring tools.** Human developer. No AI. Uses an AST-aware refactoring tool. Within that tool's scope: zero risk of behavior change. Wrong about the design? Fine — undo it just as easily. The tool creates a zero-risk zone for execution correctness, leaving design correctness for human judgment.

**Story: type systems as prevention.** The type checker runs before anyone else sees your output. If it catches a class of mistakes at that point, those mistakes cannot propagate. That's level 4 — not because of when it runs, but because it blocks propagation.

**Recipe: identify one error class, find its safety level, move up one notch.** Don't try to solve everything. One zero-risk zone at a time. Each zone permanently frees vigilance budget.

---

#### 5. What Changes at 4x (3-4 min)

*The formula made concrete. The transition from human to AI.*

Whether you 4x your team or introduce AI: throughput increases. The existing body of work doesn't change. Vigilance toil scales with the product.

If your safety was at level 1 (vigilance), 4x throughput means 4x the review burden. Human executive function can't sustain that. Something breaks.

**The "no human to blame" dynamic.** At low agency, failures get attributed to individual human error. That fiction is available — you tell yourself Bob will improve. As AI agency increases, the fiction disappears. External stakeholders raise expectations because the human excuse is gone. The same failure rate that was tolerated becomes unacceptable.

Expectation rises. Safety stayed still. Gap widens. Vigilance toil explodes.

**What to change before adding AI:** identify the error classes with high body-at-risk and move their safety to level 3+ first. Then let AI loose. You've already built brakes. Now the engine has somewhere to go.

---

#### 6. Reducing Vigilance Toil (5-6 min)

*The careless design principle. Concrete recipes.*

The design principle: when someone makes a mistake, don't ask them to be more careful. Ask what you could change so that someone being *even more careless* would still succeed. This is careless engineering. The measure of success: how careless can the implementor be and still succeed?

**Story: migration that lost data.** (Full story — archive table, bidirectional remapping, extracted library.) Three investments, each creating a zero-risk zone. Together: the AI can be careless about data migration and it will still be OK.

**Story: git off-limits.** Tooling restriction as level 4 safety. The AI cannot violate git invariants because the tool makes it structurally impossible.

**Recipe: narrow the AI's scope to what you can guarantee.** Work delegation and safety delegation move together. For any new work you're delegating: what safety mechanism covers it? If you don't have one, build it before you delegate.

**The agent's universe as the design surface.** Memory, context, perspective, goals, tooling, invocation timing, result handling. Each element is a design choice. Each can create or eliminate zero-risk zones.

**Coaching workflow.** (Brief version — transcript fetcher, email template, the progressive migration from safety level 1 to level 3+ one piece at a time.)

---

#### 7. Back to the Motorcar (2 min)

*The payoff. The exit question.*

Work toil: engine improvements. Throughput, speed, capability.
Vigilance toil: the carefulness required when your brakes aren't good enough.

You keep improving the engine. The vigilance toil stays. Because the vigilance toil was never about the engine — it was about the brakes.

Better brakes don't just let you go faster. They let you stop being so careful. Each zero-risk zone you build is a class of mistakes you no longer have to watch for. That's the dividend.

**The exit question:** "What are your brakes right now?"

Not rhetorical. Invite them to name one: what is the highest-cost vigilance toil in their current work? What error class? What are they being careful about, every single day, that an environment investment could make unnecessary?

That's where to invest. Not in a better model. In better brakes.

---

### Talk Structure Rules

These rules apply at all times when creating this talk.

- **Green Path always**: hook, then story, then recipe, then concept. Never lead with concept.
- **Model exploration is great** — and it still follows the flow. The model aspect becomes the hook.
- **Integrate steps and loop.** Instead of a big block of model and then a big block of demos, do little passes: part of model + demonstration, in green path order.
- **Introduce just enough model up front** to orient and navigate. The rest is discovered through examples.
- **Non-AI cases first.** Ground the model in human brownfield before bringing AI in. The audience recognizes their own experience first, then sees AI as a multiplier of something they already know.

## Backup Q&A Questions

1. For someone in full "keep the lights on" mode, no AI, where do they start? What's the smallest brake investment that frees the most vigilance budget?
2. When you first started building Minions, what did you get wrong about safety? What vigilance toil did you create for yourself?
3. You said zero risk within a bounded scope is categorically different from low risk. What does it feel like when you've actually achieved that, vs. when you just have low risk?
4. What's the most surprising place you've applied careless engineering — somewhere it wasn't obvious at first?
5. How do you know which safety level you're actually at? How do you diagnose where you are?
