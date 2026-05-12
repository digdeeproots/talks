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
The principle: don't try to make AI more careful. Change the environment so careless behavior still succeeds. What can the agent see? What choices does it face? What decisions has deterministic code already made so the agent never encounters them?

**Designing for forgetfulness**
Agents don't need to carry full context. They need exactly what's required for this sub-task, no more. Designing for forgetfulness means scoping the agent's world deliberately — not stuffing in everything and hoping.

**Rapidly changing the world around agents sub-task to sub-task**
The agent's world isn't fixed. Good orchestration lets you change it instantly: different tools, different context, different constraints, different model — even mid-identity (memory persists while the world changes). This is what makes agents composable and trustworthy rather than monolithic and fragile.

**Deterministic decisions + non-deterministic creative work**
The architectural separation. Routing, sequencing, and workflow decisions belong in deterministic code. Creative work (code generation, analysis, synthesis) belongs to the agent. Mixing them is where systems break. Separating them is the move that enables trust.

**What's required at each agency level**
Concrete prerequisites for advancing. Not just "trust AI more" but what specifically must be true about the environment before delegation is safe at each level.

**Choosing levels of agency deliberately**
You don't have to maximize delegation. The right level depends on the operation, the context, the stakes. Part of the model is knowing when NOT to go higher.

**Brownfield as the hard case**
Ugly code is the right context because it's where the real world lives, and where the hazards are visible and sharp. It makes the problem concrete. "Designing for carelessness" is most obviously necessary when the environment is actively dangerous.

---

## BOUNDARY — May Be In or Out

**Zero bugs / safeguarding as grounding example**
Strong historical grounding — safeguarding has been doing "design for carelessness" for developers for decades. Risk: could dominate or feel like a detour. Value: proves the principle isn't new, just applied to a new actor. Probably in as a brief anchor, not a full section.

**The toil insight (personal scale: getting back an hour)**
The motivating frame — AI should give you back the hour that was always the real work, not create a new kind of toil. In as motivation, but without the societal arc (crossroads, layoffs, etc. — those are future-talk).

**Minions as existence proof**
The concrete demonstration of rapidly changing agent worlds. Probably in, but depth depends on time. The key thing to show: world changes sub-task to sub-task are cheap and safe when deterministic orchestration handles routing.

**The agent's world: what can it see / what's invisible**
What the agent perceives is a design choice. You choose what to surface, what to hide. Deliberate blindness can be a safety mechanism. This might be center — it's the practical expression of "designing for carelessness."

**"Be more careless responsibly"**
The mantra from safeguarding: when someone makes a mistake, instead of "be more careful," ask "what could we change so even more careless behavior succeeds?" Probably in — it's the memorable hook for the principle.

**The defect stream as feedback signal**
Using what breaks to improve the environment. Relevant as one concrete example of how you learn which hazards to eliminate. Boundary — only if there's space.

---

## DROPPED — Out (saved in future-talk archive)

- The crossroads / societal transformation
- 39 of 40 hours framing as a civilization-scale statement
- Careless abundance
- Find the world builders / recognition call
- The Arbor / Making Abundance project
- Decider protocol / consent-based governance
- Organizational world design (human/group scale)
- The Culture novels (even indirect)
- Sociocracy / steward ownership
- The abundance engine
- Fractal principle across human/group/org scales
