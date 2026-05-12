# Concept Sort — Right-Now Talk

Audience: early market. Engineers actively using AI or about to. Not the tiny innovator cohort years ahead. Goal: help them delegate better, get more value from AI, avoid the vigilance trap.

---

## CENTER — Clearly In

**Work-toil vs. vigilance-toil**
The core trap: most teams swap the toil of doing work for the toil of watching AI do work. Vigilance is just different toil — and more stressful. This landed strongly with a test audience. The goal is to actually offload the toil, not relocate it.

**Agency delegation model (A0–A5)**
The map. Levels from "human does everything" to "AI holds operational agency." Engineers need to know where they are, where they want to go, and what's required to get there. Provides vocabulary for the whole talk.

**Low risk vs. no risk — the delegation threshold**
You can't delegate to something you have to watch constantly. Even a small failure rate requires vigilance, which defeats delegation. The threshold for safe delegation isn't "low risk." It's "no risk within this class of operation." This is the key conceptual shift.

**Designing for carelessness**
The principle: don't try to make AI more careful. Change the environment so careless behavior still succeeds. What tools does the agent have? What choices does it face? What decisions has deterministic code already made so the agent never encounters them?

**Designing for forgetfulness**
Agents don't need to carry full context. They need exactly what's required for this sub-task, no more. Designing for forgetfulness means scoping the agent's world deliberately — not stuffing in everything and hoping.

**Rapidly changing the world around agents sub-task to sub-task**
The agent's world isn't fixed. Good orchestration lets you change it instantly: different tools, different context, different constraints, different model — even mid-identity (memory persists while the world changes). This is what makes agents composable and trustworthy rather than monolithic and fragile.

**Deterministic workflows + non-deterministic creative work**
The architectural separation. Routing, sequencing, and workflow decisions belong in deterministic code — but so do actions. Minimize code generation: use deterministic tools to mold the code into a shape that makes codegen easy, have the AI do easy codegen, then more deterministic tools to expand on it. The AI makes design choices (what shape would make this feature easy? which deterministic tools to use?) while deterministic code executes those choices safely. Separating them is the move that enables trust.

**What tools the agent can use**
The tools an agent has access to define what it can do and what mistakes are possible. Give it narrow tools that compose to do the exact job it's trying to accomplish, but with significant gaps for general work. Example: the planner can't edit files — it uses a planning tool that edits files in particular ways. The refactorer has tools for executing deterministic code transformations, not arbitrary edits. Tool narrowness is a safety mechanism.

**"Be more careless — responsibly"**
The mantra from safeguarding: when someone makes a mistake, instead of "be more careful," ask "what could we change so even more careless behavior still succeeds?" The memorable hook for the design-for-carelessness principle.

**Zero bugs / safeguarding**
Safeguarding has been doing "design for carelessness" for developers for a decade — using defect streams to redesign environments rather than asking people to try harder. In as a brief anchor proving the principle predates AI. But more: safeguarding should itself become part of the orchestration system. Detect things you don't like (code smells, test failures, quality signals), then run a deterministic workflow with non-deterministic choices and deterministic tooling to safeguard the ecosystem — tools, workflows, data, context.

**What's required at each agency level**
Concrete prerequisites for advancing. Not just "trust AI more" but what specifically must be true about the environment before delegation is safe at each level.

**Choosing levels of agency deliberately**
You don't have to maximize delegation. The right level depends on the operation, the context, the stakes. Part of the model is knowing when NOT to go higher.

**Brownfield as the hard case**
Ugly code is the right context because it's where the real world lives, and where the hazards are visible and sharp. It makes the problem concrete. "Designing for carelessness" is most obviously necessary when the environment is actively dangerous.

---

## BOUNDARY — May Be In or Out

**The toil insight (personal scale: getting back an hour)**
The motivating frame — AI should give you back the hour that was always the real work, not create a new kind of toil. In as motivation, but without the societal arc (crossroads, layoffs, etc. — those are future-talk).

**Minions as existence proof**
The concrete demonstration of rapidly changing agent worlds. The key thing to show: world changes sub-task to sub-task are cheap and safe when deterministic orchestration handles routing.

**The defect stream as feedback signal**
Using what breaks to improve the environment. One concrete example of how you learn which hazards to eliminate. Only if there's space.

@ai: deltes are edits, and to be treated normatively. Update the process doc to make that clear. It should be as if we had never included the deleted material. Use some judgement when applying that change normatively; it might just be a tidy. But in other cases, like this one, it is meant as a way to eliminate the stuff.

@ai: that's why I wanted to make sure that you saved **everything** to the future talk - including the divergences, the insights along the way that you had recorded, etc. If you haven't, then do so now, so that we are free to edit and delete whatever we want within this talk.
