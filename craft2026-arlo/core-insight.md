---
quality: raw
---

# Core Insight

## The Motorcar Frame

Speed limits didn't go up when car engines got better. They went up when brakes got better. Capability without safety isn't speed — it's danger. You can only go as fast as you can stop.

AI is an engine improvement. Vigilance toil is what happens when your brakes don't keep up.

## Work-Toil vs. Vigilance-Toil

Most engineers using AI have swapped work-toil for vigilance-toil. Watching AI closely enough that nothing goes wrong is still toil — more stressful, less interesting. They haven't delegated; they've relocated the burden.

This isn't new. Teams in brownfield codebases — no AI — get into the same trap. "Keeping the lights on" is mostly vigilance toil. Responding to defects, regressions, debt fires. Not building. Watching.

## The Formula

Vigilance toil is not proportional to throughput alone. It is proportional to:

**throughput × existing body of work**

Greenfield: existing body ≈ 0. Weak assurance is survivable.
Brownfield: existing body is large. Weak assurance is catastrophic.

AI increases throughput. It does not reduce the existing body. So AI in brownfield multiplies vigilance toil by your throughput gain — unless assurance advances in step.

## The Two Dimensions

The model has two axes:
- **Agency**: who performs the work (human → AI, A0–A5)
- **Assurance**: how easily the environment prevents unintended side effects (0–5)

Transferring agency without transferring assurance is the vigilance trap. The gap between the two is what costs you.

The safe path is a narrow diagonal through the 2D grid. Falling off it — more agency than your assurance can cover — produces vigilance toil you cannot actually sustain.

## The Assurance Spectrum (0–5)

- **5 — Guided correctness**: the right action is the easy action. The wrong action is hard to attempt. (Refactoring tools, compiler-backed find-all-references.)
- **4 — Prevention**: mistakes cannot propagate past the originator. (Type systems, AST tooling enforced by workflow.)
- **3 — Deterministic detection**: catches known classes reliably. Predictable gaps — entirely misses some categories. (Tests, linters, compilers.)
- **2 — Non-deterministic guardian**: probabilistic detection. Unpredictable gaps. Useful for discovering new categories, then hardening to 3/4. (LLM judges, AI drift detection.)
- **1 — Human review**: full vigilance burden. Decays with scale and attention.
- **0 — None**.

Levels 4–5 reach zero vigilance within their scope. Levels 0–3 do not.

Zero risk within a bounded scope is categorically different from low risk. Low risk still requires vigilance — some fraction of the time, something goes wrong and you need to catch it. Zero risk within a scope does not.

## The Design Principle

When someone makes a mistake, the wrong response is "be more careful." The right question: what could we change about the context and system so that someone being *even more careless* than we were would still succeed?

This is also the condition for delegation. The delegatee must be able to be careless and still succeed. Your job isn't to make agents careful — it's to make careless behavior safe.

**Careless Engineering**: designing tools, environments, workflows, and agent worlds so that careless implementors (human or AI) can thrive. Not making implementors more careful. Making carelessness safe.

## The Back Half of the Motorcar

Work toil: engine improvements. Throughput, speed, capability.
Vigilance toil: braking systems. Safety, sustainability, assurance.

You can only go as fast as your brakes allow. Teams obsess over the engine (better AI, better prompts, more models) while neglecting the brakes (assurance investments, environment design). The bottleneck is never where they're looking.

The exit: invest in brakes first. Then let the engine loose.
