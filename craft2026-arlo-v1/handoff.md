# Session Handoff

*Written 2026-05-12 for the next Claude session picking up this work.*

## Read These First (in order)

1. `CLAUDE.md` — project conventions and commit discipline
2. `.meta/context/speaker.md` — who Arlo is and how he collaborates
3. `craft2026-arlo/status.md` — current phase and milestones
4. `craft2026-arlo/concept-sort.md` — the full list of what's in/out of this talk
5. `craft2026-arlo/core-insight.md` — the core ideas, distilled
6. `craft2026-arlo/topic.md` — the talk document (working title, audience, problem, abstract TBD)

## State of the Work

**Done:**
- Working title: *Careless by Design: AI with Zero Bugs in Ugly Code*
- Audience: early-market engineers using AI or about to. Not innovators years ahead.
- Concept sort complete: CENTER, BOUNDARY, and nothing else (DROPPED was deleted normatively)
- Future-talk (2029 direction: world builders, abundance, decider protocol, organizational scale) archived in `craft2026-arlo/future-talk/` — do not bring it back into this talk
- Source material read: agency delegation model (`D:\_DeepRoots\ai-dev-maturity-model`), Minions ecosystem (`D:\_Lairs\minions`), safeguarding/BugsZero body of work

**Next step: draft the abstract.** topic.md has a `??` placeholder. Draft it from concept-sort.md and core-insight.md, commit, show Arlo for review using the doc review mode of pattern-iterate.

## Non-Obvious Context

**The future-talk is a hard boundary.** Everything about abundance, the Arbor, the decider protocol, organizational world design, finding world builders — none of it is in this talk. It lives in `future-talk/` only. Don't let it creep back in even when it seems relevant.

**"Zero bugs" in the title is provisional.** Safeguarding/zero bugs is in the CENTER of this talk but as a brief anchor (proof the principle predates AI), not as a full section. If the abstract reveals the title over-promises on zero bugs content, the title is open for revision.

**Arlo's best talk format:** 3-5 min intro to orient, then an open-ended exploratory model the audience steers. The model for this talk hasn't been built yet — don't force one. If it emerges from the content, great. Don't build a cheap structuring construct.

**Concept that landed hardest with a test audience:** work-toil vs. vigilance-toil. Lead with it.

**Parallel project (separate from this talk):** Building a decider protocol facilitation tool (open source, git-backed, TypeScript, web front-end, Claude as facilitator). Target: half-built demo by May 21. To be built using Minions. This is a side project — don't conflate it with talk prep.

**Commit discipline:** Every logical step is a separate commit. Commit before showing Arlo anything. Commit his edits before responding to them. See `CLAUDE.md` for the full rule.

**Pattern-iterate updates made this session:**
- Direct edits are normative but not necessarily complete — propagate everywhere
- Deletions are normative — remove from everywhere, no back-compat
- Both rules are in `.meta/workflows/pattern-iterate.md`
