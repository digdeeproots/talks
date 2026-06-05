# Raw Data: Smartleaf — series-01 day-02

**Meeting:** ensemble with Arlo
**Date:** 2026-04-07
**Series / Day:** Series 1, Day 2 of 10
**Duration:** 120 min
**Participants:** sseibel@smartleaf.com, gnormand@smartleaf.com, akessler@smartleaf.com, licuanan@smartleaf.com, edascoli@smartleaf.com
**Fireflies ID:** 01KNHDFS6T5B1V5E77NFPMRYRC

---

## The Work

Implementing "partial target households" — individual accounts within a household count as household members for wash-sale purposes but maintain individual investment targets. Legacy Ruby codebase. Scope of impact not knowable by static reasoning alone due to Ruby's dynamic nature.

---

## Core Challenge

**How do you make feature development safe when you don't know what you don't know?**

Matching effort and attention to risk. Knowing when you have — and haven't — found the complete set of things you need to consider. Mapping the full space as it is, not just what you remember.

**Business stake:** Improved delegation confidence. Arlo can assign work to the team and trust that they will find the risks they should and address them — they won't create bugs, even when the code or use cases get twisty.

---

## Observations

### What Stood Out

"The Zero to One Problem" — the first complete iteration of a new process always costs the most. Today was that investment. The team spent 45 minutes building the Mikado iteration recipe, which is both typical and essential. Once you have the recipe, subsequent iterations are dramatically cheaper. The session was exactly as slow as it should have been.

### Surprises

- ~40 risks surfaced in the Mikado graph — the team was surprised at the volume. They expected far fewer.
- The team self-organized an afternoon ensemble session (without Arlo) to attempt the recipe immediately. This was not planned; they did it on their own initiative.

### Moments of Insight

- The team succeeded in building a recipe they understand and believe they can execute. That's the definition of a good first iteration — not speed, but shared understanding and the confidence to try.
- The hooks and technique names (Risk-Directed Focus, Mikado Method, Zero Hidden Risks) landed without resistance. No need to push or explain past confusion; naming gave the team a vocabulary for what they were already doing.

### Moments of Struggle

- Recipe creation took 45 minutes of careful, iterative thinking. Necessary, not a problem — but the team felt the weight of it. The retro noted "many rabbit holes — easy to get lost."

### New Behaviors

- Created `.meta` directory: Mikado risk graph, iteration recipe, telemetry, scripts — all in source control, all in one place, with full branching capability.
- Transformed Day 1's informal risk list into a formal Mikado Risk Graph (~40 nodes).
- Self-organized an afternoon practice session without the coach.

---

## Techniques

| Technique | New Today? | Green Path Stage | Hook | First Recipe | Evidence | Notes |
|-----------|:----------:|:----------------:|------|--------------|----------|-------|
| Risk-Directed Focus | No | Inspired | Most teams aim their best attention at whatever is in front of them. This makes the choice deliberate. | Identify the highest-risk node; apply spotlight attention there. | Team used it implicitly to prioritize which node to tackle first in the recipe. | Mindset, not standalone recipe. Behavior is Mikado applied to risk. Target: Smart Robot by end of series. |
| Mikado Method | Yes | Simple Robot (early) | You can't always answer a question directly — but you can always answer *whether* you can answer it. That question, applied recursively, is how you discover the true shape of the work. | Can we simply answer this question without risk of being wrong? If yes: answer it. If no: enumerate specific risks, recurse. Once all child nodes resolve, propagate up. | Recipe created and committed to `.meta`. Team scheduled self-directed afternoon session to attempt it. | First formal introduction today with full recipe and live use. Target: Smart Robot by end of series. |
| Zero Hidden Risks | No | Inspired | You can't find what you don't know to look for — but you can find something that *must always happen* and instrument that instead. Everything flows through the choke point. | Recipe 1: identify choke point, inject stack trace, run full test suite, collect traces. | Recipe 1 carried forward from Day 1. Recipe 2 (impact analysis) will be introduced Days 2–3 as it naturally comes up. | Recipe 2 not yet introduced. Will surface tomorrow as they hit nodes requiring it. Target: Smart Robot by end of series. |

*Green Path stages: Inspired → Simple Robot → Smart Robot → Solo*
*Rough day ranges: Simple Robot days 2–6, Smart Robot days 5–8, Solo days 7–10 (ranges overlap)*

---

## Team Learning

The team is at early Simple Robot on Mikado Method — they have the recipe, understand the intent, and are attempting to follow it without needing to re-derive it. Risk-Directed Focus and Zero Hidden Risks are at Inspired — the team has encountered the techniques and can follow prompts, but is not yet reliably self-applying them. Target for all three is Smart Robot by end of series (roughly days 5–8); Simple Robot is the expected range for days 2–6. The naming of techniques appears to have accelerated progress: once named, the team had handles for what they were doing and didn't need the coach to restate context.

The afternoon self-directed session is the clearest signal of this: the team believes enough in the recipe to try it on their own the same day it was created.

Anticipate a completeness-check failure mode in the afternoon session (see Risks). This is expected and useful — failing to notice that you haven't proven completeness is the thing Day 3 will help them see.

---

## What the Code Said

The Mikado Risk Graph now has ~40 nodes. This surprised the team — far more risks than expected when they started. The graph surfaced integration risks around account management and SMAs that weren't visible from the feature description alone. The volume is itself a data point: the codebase has many more touch points for "household membership" than anyone's mental model contained.

---

## Team Dynamics & Energy

Recipe creation was fully distributed — everyone contributed, the brain role was very active, and roles rotated multiple times during the 45 minutes. No single person carried it. This matches what was seen in Day 1: the mob has collective intelligence that individuals don't.

Energy was high enough that the team scheduled an extra session the same afternoon. That's a strong signal — they're engaged, not just compliant.

---

## Session Goal & Outcome

**Today's Goal:** Name the techniques, install hooks, formally introduce Mikado Method with recipe and first live use. Provide Day 1 synopsis at start (per Gavin's retro suggestion).

**Outcome:** Met fully. Opening landed without friction. Recipe created, committed, understood. `.meta` directory set up. Team ready to iterate.

**Forward Impact:** Team is doing a self-directed afternoon session. Tomorrow begins executing the recipe — not building it. The investment is behind us.

---

## Team Sentiment

Retro was positive. Team expressed delight in the `.meta` directory and docs-in-source-control. Key insight noted: "A lot more risks and details than it first seemed." Confusion items were about recipe gaps (stopping conditions, diagram storage) rather than the techniques themselves — that's the right kind of confusion. Overall, engaged and enthusiastic enough to self-organize extra practice time.

---

## Lesson Plan vs. Reality

Plan executed as intended. Day 2 opening plan followed in sequence: synopsis → hooks and names → Mikado recipe → first live use. The `.meta` directory setup was an addition not in the original plan, but essential and clearly right. Zero Hidden Risks Recipe 2 not yet introduced — still on track; it will surface naturally tomorrow.

---

## For Daily Status Email

**Headline:** The Zero to One Problem — the most expensive session of the series, and exactly what good looks like.

**Synopsis:** Day 2 introduced all three techniques by name, with hooks. The main work was "The Zero to One Problem" — building the first full Mikado iteration recipe. It took 45 minutes, which is typical: the first iteration always costs the most, and every subsequent one is dramatically cheaper. The team formalized ~40 risks into their Mikado graph, set up `.meta` in source control, and finished by scheduling a self-directed afternoon session to practice the recipe on their own. That's the real headline: the team didn't wait for the next coached session to try what they learned.

**Key Points:**
- The Zero to One Problem: first recipe iteration took 45 minutes — typical, necessary, and now behind us
- ~40 risks in the Mikado graph; team surprised at the volume
- Team self-organized an afternoon practice session without the coach — strong engagement signal
- Everything now in source control: graph, recipe, telemetry, scripts, all in `.meta`

**Progress Signal:** On track — Day 2 arc calls for first contact with techniques and initial attempts; team has a working recipe and is self-directing practice.
**Confidence:** High — because the team is driving their own learning, not waiting to be driven.

---

## Tomorrow

**Goal:** Execute the Mikado iteration recipe as many times as possible. Introduce Zero Hidden Risks Recipe 2 as it naturally comes up.
**Opening:** Brief refresher, then open the recipe and get to work.

### Task Checklist
- [ ] Probe for afternoon session outcome — did they attempt the completeness check? What did it look like?
- [ ] Listen for the sample-vs-census distinction: did they notice the difference, or did they stop at "we found some risks"?
- [ ] Be ready to introduce Zero Hidden Risks Recipe 2 when they hit a node requiring impact analysis
- [ ] Watch for stopping-condition confusion (retro item) — address it in the recipe when it surfaces naturally
- [ ] Note whether the brain role stays active without coaching prompts

---

## Risks & Open Questions

| Item | Type | Urgency | Notes |
|------|------|---------|-------|
| Completeness check failure mode in afternoon session | Risk | H | Team likely won't notice they haven't proven completeness — not a problem yet, but Arlo needs to surface it tomorrow |
| Stopping condition: how to accept a risk without acting | Question | M | Recipe gap, intentionally deferred — will be added to recipe when it arises naturally |
| Diagram storage | Question | L | Raised in retro, unresolved — may need a lightweight solution before the graph gets much larger |

---

## Coach Reflections

Nothing would be done differently. The session went as intended; the team responded to naming and hooks without friction; the recipe took the time it needed to take.

---

## Discoveries

- **"The Zero to One Problem"** — Arlo's name for the phenomenon where the first iteration of a new process is always the most expensive. Not yet named to this team; will be introduced in the Day 2 status email.
- **Completeness check taxonomy** (for future coaching reference): (1) no check at all — didn't think about it; (2) sample not census — finds many but not all; (3) can't operationalize — knows what a good check would look like but can't evaluate it; (4) genuine guarantee — chokepoint, static analysis, or equivalent. Only (4) is acceptable for Mikado risk discovery.
- **Brain role is very active** in this ensemble. Worth tracking whether it remains distributed as techniques become more familiar.
- **Team self-organizing extra practice** the same day the recipe was built. A signal worth noting — this group is internally motivated, not just compliant.

---

*Generated: 2026-04-07*
*Source: Fireflies "ensemble with Arlo" (01KNHDFS6T5B1V5E77NFPMRYRC)*
