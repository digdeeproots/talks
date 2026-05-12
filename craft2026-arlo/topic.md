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

## Abstract (draft)

Most engineers using AI have already found the trap: you do less work, but you watch more closely. Watching AI closely enough that nothing goes wrong is just different toil, more stressful, not less. You haven't delegated. You've relocated.

Getting out of the vigilance trap requires a design shift. The goal isn't to make AI more careful. It's to design the world the AI lives in so that careless behavior still succeeds. That's a different target than most teams are aiming at.

This session introduces the agency delegation model, a map from "human does everything" to "AI holds operational agency," and the principle that makes higher levels safe: design for carelessness and forgetfulness. The key insight: even a small failure rate requires constant vigilance, which defeats delegation entirely. The threshold for safe delegation isn't low risk. It's no risk within a class of operations.

We'll explore what that looks like in practice: narrowing tools so certain mistakes become impossible, separating deterministic workflows from non-deterministic creative work, changing the agent's world sub-task to sub-task. We'll do this in ugly brownfield code, where the hazards are sharpest and the stakes are real.

This principle is older than AI. Safeguarding has applied it to human developers for a decade: when someone makes a mistake, don't ask them to be more careful, ask what you could change so that even more careless behavior would still succeed. Now it applies to agents. When you get it right, you don't get an AI that's supervised. You get one that's trusted.

## Key Moments / Stories

3-5 concrete moments, stories, or demos that will make this talk memorable.

??

## Content Flow (skeleton)

Narrative arc: what happens in what order?

??
