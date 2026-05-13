---
quality: raw
status: in-progress
---

# Talk Topic — Craft 2026 / SAS Open Space

## Working Title

*Careless by Design: AI with Zero Bugs in Ugly Code*
(zero bugs angle may shift — title under review)

## Target Audience

Early market engineers: actively using AI or about to. Not the innovator cohort years ahead. They feel the vigilance burden. They want better delegation but don't have the vocabulary or mental model for it yet.

## The Problem We're Solving

Most engineers using AI have swapped work-toil for vigilance-toil. Watching the AI closely enough that nothing goes wrong is just different toil — more stressful, not less. They haven't actually delegated. They've relocated the burden.

## The Shift We're Offering

A mental model for choosing levels of delegation, and a design principle for making those levels actually work: design the agent's environment for carelessness and forgetfulness, not for capability. When you do this, delegation becomes safe and trust becomes earned — not assumed.

## Core Insight

The single non-obvious thing: you don't make AI delegation work by making the AI more careful or more capable. You make it work by designing the world the AI lives in so that careless behavior succeeds. Low risk isn't enough — you need no risk within a class of operations. That's a different design goal.

## Why Arlo / Why Deep Roots

Safeguarding. Arlo has been applying "design for carelessness" to human developers for decades — using defect streams to redesign environments rather than asking people to try harder. Now the same principle applies to AI agents. He's also built Minions: an orchestration system that demonstrates rapidly-changing agent worlds in brownfield code. He's not describing a theory. He's showing a practice.

## MC Introduction

Arlo Belshee has spent two decades turning legacy code from a liability into a learning opportunity, developing practices like #ZeroBugs, Risk-aware Commit Notation, and Naming as a Process that have been adopted by teams across the industry. His core conviction: when someone makes a mistake, don't ask them to be more careful. Redesign their environment so that carelessness still succeeds. Over the last two years, he's applied that same principle to coding agents, building Minions: an orchestration system that lets AI work freely in brownfield codebases without requiring constant vigilance. Please welcome Arlo Belshee.

@ai: tighten it about 25%. Keep it feeling flowing, not punchy, but remove extraneous phrasing. You might drop any part of the info that isn't serving.

## Backup Q&A Questions

Questions to seed conversation if Q&A goes short.

1. What's the most surprising place you've applied careless design — something that wasn't obviously in need of it?
2. When you first started building Minions, what did you get wrong about where to trust the AI versus the deterministic code?
3. For someone just starting to delegate to AI, what's the one environmental change that gives the most safety per unit of effort?
4. You said low risk isn't enough — you need zero risk within a class of operations. What does it feel like when you've actually achieved that?

## Abstract (draft)

You swapped work-toil for vigilance-toil. Watching AI closely enough that nothing goes wrong is still toil. More stressful, less interesting toil.

AIs are fast enough that even rare risks happen too often. Even a small failure rate demands constant vigilance, which defeats the point. Low risk isn't enough to delegate safely. We need a known class of operations with zero risk.

The exit is Careless Design: build the agent's world so careless behavior still succeeds. That's different from making AI more capable.

This session maps the agency delegation model, from human-does-everything to AI-holds-operational-agency. We work through what makes each level safe: narrow tools, deterministic workflows, deliberately scoped context. We do this in ugly brownfield code, where the hazards are sharpest.

#ZeroBugs has applied this to human developers for a decade. When someone makes a mistake, don't ask them to be more careful. Instead, improve the environment so that even more careless behavior would still succeed. Now it applies to agents.

## Key Moments / Stories

3-5 concrete moments, stories, or demos that will make this talk memorable.

### 1. The Migration That Lost Data

Working on an app where Minions were creating database migrations. Yoloing them at first — it went fine for a while. Then it made a small mistake that wasn't obvious, and there was data loss.

The tempting response: add more guardrails. Tell it to always save data, never lose data, blah blah. It's still going to mess up.

Instead: made it more careless. Three changes.

First, an archive table. Even if it screws up the migration, the pre-migration state of every data item is preserved. Always restorable.

Second, after it figures out the migration, another step creates a bidirectional remapping — every value from source to destination and back. It verifies that every mapping goes somewhere. Since you still want to be able to delete things, there's a designated legacy-data slot in the schema for "not currently used." The remapping routes unused data there. Nothing is lost.

Third, extracted all the migration machinery — how migrations execute, how backups happen — into a library. Debugged that library. Now the deterministic code handles execution; the AI only creates the migration itself. Narrowed the problem space enough that it does a lot better.

Result: it can be careless, and it will still be OK.

---

### 2. Git Is Off-Limits

Minions never touch git. Too many ways to screw up. Instead, there's an MCP tool with movement-based branching. The AI can start a movement, make commits along a movement, and merge a movement — but it doesn't know what those operations do internally. All the right git behaviors (merging, rebasing, branch lifecycle) are implemented in the tool.

For merge conflicts: the minion that did the work gets its history cloned, handed a limited git toolset, and given just enough access to resolve the conflict on that one branch. Once resolved, it's booted out and the deterministic tool takes back over.

Pre-commit hooks are integrated with the watch mode that's already running. The AI can run tests, lint, and whatever else — and get cached results fast. But when a commit happens, the deterministic tool pauses and enforces all the pre-commit requirements. The AI can't work around them.

---

### 3. Commit Discipline via Workflow + Revert

Workflow files define a very specific thing to accomplish. When the AI finishes, the workflow assesses the result. If it did too much, it reverts and tries again — with guidance that it did too much last time and needs to stop earlier.

When done, either a deterministic merge fires off (AI just summarizes what it did for the message), or the AI fires it off directly. Either way, explicit control over logical steps, with the AI making commits on each logical sub-step.

---

### 4. Refactoring via Safe AST Tools Only

No edit-file tool for the minions. Only AST-based transformation tools — provably safe refactorings, however they're implemented internally. The AI makes design choices; deterministic code executes them. This matters especially in brownfield code where free-form edits are risky.

Caveat: this depends on language and available tooling. When safe tools exist, expose them. When they don't, that's a gap worth naming.

---

### 5. The Coaching Workflow / do-today

A daily workflow for coaching work: pull transcripts from Fireflies, do lesson planning, write the daily status email, extract techniques, build recipes, track against the week's goals.

It started as just workflow files — tell Claude to read the file and follow it. That's the first step and it's enough to get going.

But Claude can't clear its own context or exit itself. So Claude created a script — `do-today` — that runs one step of the day's work, does some deterministic processing, launches Claude, catches the result, and quits. Run it again for the next thing. Keep going until done. This extracted the workflow sequencing into deterministic code.

Over time, more moved out of Claude's hands. Transcript fetching started via the Fireflies MCP server; now there's a fully debugged deterministic fetcher that gets the right transcript for the right day and team. On failure, it invokes Claude to help resolve — but only on failure. It knows when it screwed up, so you don't have to be vigilant.

The status email is the clearest example of progressive structure. Templates define sections. Workflow files identify what goes where. Input files started as loose markdown, became structured JSON as the format solidified. The structured data maps cleanly to the templates. Claude writes a few sentences of analysis; deterministic code assembles everything else. A script generates the HTML preview in the browser. You check the wording, approve, and the script deterministically grabs the recipient list, creates the email file, and opens it. You hit send.

You never have to be vigilant about whether the structure is right, whether the plan section is there, whether it will render in email clients. Those are solved. You only pay attention to the words.

## Content Flow (skeleton)

**Format:** Short setup, then extended explore — audience-guided at Craft (they can steer depth after the model is laid out), more directed at SAS (remote audience, may not be able to speak). Demos and recipes woven throughout.

**Exit state:** They leave asking "where can I design for carelessness?" — in their AI systems, and in the human systems they live inside. They have language for it: *careless design*, *designed carelessly*. They know it's a rigorous practice, not a shortcut.

---

### Emotion Arc

| Phase | Feeling | What's happening |
|-------|---------|-----------------|
| Opening | Recognition, mild pain | "You swapped work-toil for vigilance-toil." They feel seen. This is them. |
| Reframe | Surprise, maybe amusement | The name lands: *Careless Design*. That's rigorous? That's the point. |
| Exploration | Curiosity, building confidence | Walk the agency model. Demos. Recipes. Audience steers the depth. |
| Click | Expansion | This isn't just for AI. Safeguarding has done this for human developers for a decade. And: I can apply this to myself — design my own environment so I can be more careless. |
| Exit | Agency, vocabulary | New question in hand: where can I make this more careless? |

The click has two layers. First: the AI principle and the human-developer principle are the same thing — not an analogy, the same. Second: it points inward — they can apply careless design to the systems they themselves are in, not just the systems they build.

---

### Section Skeleton

1. **The vigilance trap** — open with recognition: you relocated toil, not eliminated it. Name the problem sharply. Keep this short.

2. **The principle** — careless design. Don't ask for more care; design the world so carelessness succeeds. Give it the rigor framing: this is harder and more precise than asking people to try harder.

3. **The model** — agency levels, from human-does-everything to AI-holds-operational-agency. For each level: what makes it safe? What environmental transformations are required? This is the framework they'll use.

4. **Demos + recipes** — concrete: migration story, git off-limits, coaching pipeline, AST-only refactoring. Recipes the audience can take home. This is the bulk of the talk. Audience steers which threads get depth.

5. **The generalization** — safeguarding for human developers → safeguarding for AI agents. Same principle, decade of practice behind it. Then: you can apply this to the systems you live inside too.

6. **Exit / open space** — surface the question. Where can you design for carelessness? In your AI. In your team's systems. In how you work. Leave room for the audience to explore this together.

---

### Talk structure rules

We will follow these rules at all times when creating this talk.

- Follow the Green Path: hook, then story, then recipe, then concept. Never lead with concept.
- Model exploration is great, and it still follows the flow. Just that one aspect of the model becomes the hook.
- Integrate steps and loop. Instead of a big block introducing the model and then a big block of demos, we do little passes, each of which shows some part of the model and a demonstration - in green path order. In fact, the model may be second much of the time.
- Introduce just enough of the model up front that the audience can orient and navigate.
