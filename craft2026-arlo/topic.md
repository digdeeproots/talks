---
quality: raw
status: in-progress
---

# Talk Topic — Craft 2026

## Working Title

*Careless by Design: AI with Zero Bugs in Ugly Code*

## Target Audience

Early market engineers: actively using AI or about to. Not the innovator cohort years ahead. They feel the vigilance burden. They want better delegation but don't have the vocabulary or mental model for it yet.

## The Problem We're Solving

Most engineers using AI have swapped work-toil for vigilance-toil. Watching the AI closely enough that nothing goes wrong is just different toil — more stressful, not less. They haven't actually delegated. They've relocated the burden.

And this isn't even an AI problem. Teams in brownfield codebases have been in this trap for years — "keeping the lights on" is vigilance toil without a single agent in sight.

## The Shift We're Offering

A framework for understanding and reducing vigilance toil: what it is, where it comes from, and how to invest in the environment to eliminate it. Concrete recipes and examples for engineering carelessness into the agent's universe — and a model for doing it incrementally over time.

## Core Insight

You can only go as fast as your brakes allow. AI is an engine improvement. The Agent's Universe is the brakes. Teams obsess over the engine while neglecting the universe. The bottleneck is never where they're looking.

See `core-insight.md` for the full development.

## Why Arlo / Why Deep Roots

Safeguarding. Arlo has been applying "design for carelessness" to human developers for decades — using defect streams to redesign environments rather than asking people to try harder. He's also built Minions: an orchestration system that demonstrates rapidly-changing agent worlds in brownfield code. He's not describing a theory. He's showing a practice.

The motorcar metaphor unifies Safeguarding (brakes for human developers) and Minions (brakes for AI agents). Same principle. Two implementations. Decades apart.

## MC Introduction

Arlo Belshee has spent two decades mending legacy code and developing practices like #ZeroBugs, Risk-aware Commit Notation, and Naming as a Process. But each of these has a flaw: they require consistency. Now he has a core conviction: when someone is inconsistent, don't ask them to be more careful. Redesign their environment so carelessness still succeeds. He's applied that same principle to coding agents, building Minions: an orchestration system for AI in brownfield codebases. Please welcome Arlo Belshee.

## Abstract (draft)

You swapped work-toil for vigilance-toil. Watching AI closely enough that nothing goes wrong is still toil. More stressful, less interesting toil.

Speed limits didn't go up when car engines got better. They went up when brakes got better, because good brakes mean you don't have to be careful about your speed. Early drivers were slow not because their engines were weak, but because they had to be. Better brakes made careless driving safe.

This session names what you've been paying — vigilance toil — and the one factor you actually control: the cost to protect. We work through the agent's universe as a design surface: memory, reachable context, goals, tooling, invocation timing, and how the work product itself is handled. Demos and recipes throughout, with the back half driven by audience choice.

#ZeroBugs has applied this to human developers for a decade. When someone makes a mistake, don't ask them to be more careful. Redesign the environment so that even more careless behavior still succeeds. Now it applies to agents.

## Backup Q&A Questions

1. For someone in full "keep the lights on" mode, no AI, where do they start? What's the smallest brake investment that frees the most vigilance budget?
2. When you first started building Minions, what did you get wrong about safety? What vigilance toil did you create for yourself?
3. You said zero risk within a bounded scope is categorically different from low risk. What does it feel like when you've actually achieved that, vs. when you just have low risk?
4. What's the most surprising place you've applied careless engineering — somewhere it wasn't obvious at first?
5. How do you know which safety level you're actually at? How do you diagnose where you are?
6. You deleted stories and reset context — weren't you worried about losing something important? How do you know what's safe to forget?
