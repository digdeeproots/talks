---
quality: raw
status: in-progress
---

# Universe Levers — Careless by Design

The **Agent's Universe** is everything the agent perceives and can act on. Each lever is a place you can push to engineer carelessness — a facet of the universe you redesign so that the agent's actions land in a safer region.

For each lever: **what it is**, **why it's a lever** (the mechanism by which it changes vigilance), **probe questions**, and **examples** drawn from the talk's stories.

Lever names are still settling — current canonical names are listed first, with prior names noted.

---

## Memory

**What it is.** What the agent recalls — within a session, across sessions, between projects. The persistent mental state the agent brings to each invocation.

**Why it's a lever.** Memory determines what mental models the agent carries forward. If it remembers a decision that has since been reversed, it can build on contradictions. If memory is reset deliberately at the right boundary, the agent can only build on what is currently true. Most teams treat memory as inevitable; treating it as a designed surface is the move.

**Probe questions.**
- What does the agent remember of past sessions? Of past *decisions*?
- Is the memory deliberate, or accumulated by accident?
- When should memory be reset, and what counts as the reset boundary?

**Examples.**
- *Delete completed stories rather than mark them done.* Rewrite all future stories to reflect the current direction. Reset agent context to a defined base state. The agent has no access to alternative pasts — decision inconsistency becomes structurally impossible.

---

## Reachable Context *(prior name: Context)*

**What it is.** What information the agent can actually get to. Not "session context" — *reachability*. Which directories are in its search space, which tools surface other info, what generic search will stumble across, what is only findable by probing in a specific way.

**Why it's a lever.** Reachability shapes what the agent considers. Hiding information removes it as a basis for decisions; surfacing information makes it salient. Curating reachability is a way of saying — through the structure of the environment, not through prompts — what is and isn't relevant.

**Probe questions.**
- What's in the agent's filesystem? What's not?
- Which directories will a generic `grep` cross? Which only respond to specific probes?
- What can the agent find by browsing, that it wouldn't find by reasoning?

**Examples.**
- *(Dedicated story TBD.)* Wing-based git worktrees isolate per-agent state and prevent cross-agent file access. CLAUDE.md path-routing rules ("prepend `work/local/` to unqualified paths") shape what the agent reaches for by default.
- Provide a curated dependencies marketplace
- When working on a platform library in the monorepo, prevent reading or grepping any of the projects that depend on it.
- Summarize every file in the codebase, then provide a RAG search tool + language server (for references) as a replacement for grep.

@ai: elaborate my examples into stories; make the last more clearly align with reachable context, or move it to tooling.

---

## Goals

**What it is.** How narrowly the task is defined. The shape of the success criterion.

**Why it's a lever.** A broad goal ("write the status email") gives the agent freedom to do many things — including drift, structure invention, format change. A narrow goal ("fill these named sections with sentences of given length") gives the agent a small, verifiable surface. Narrow goals push more of the work into deterministic territory; the AI gets the irreducible creative part.

**Probe questions.**
- What is the agent being asked to produce?
- Can someone other than the agent check whether the goal was met?
- Where is the boundary between AI creative decision and deterministic execution?

**Examples.**
- *Status email as structured spec.* Per-section content, length, named metrics. Claude writes sentences; deterministic code assembles structure, recipients, rendering.
- *Transcript analysis goal lockdown.* From "work with me to identify what matters" to "extract key moments and the session pull quote, where a key moment is defined as [criteria]." The criteria are themselves part of the goal.

---

## Tooling

**What it is.** What operations are in the agent's toolbox, and what is deliberately not.

**Why it's a lever.** The toolbox defines the space of possible moves. If a class of mistake requires a tool the agent doesn't have, that class of mistake is structurally impossible. Conversely, every tool you include is a place the agent can fail — so curate ruthlessly.

**Probe questions.**
- Which tools does the agent have? Which are dangerous?
- For each dangerous tool, is there a safer wrapper that exposes only the good behaviors?
- What is deliberately not in the toolbox?

**Examples.**
- *Movement-based branching MCP tool.* No raw git. The AI cannot force-push, delete branches, or violate commit notation policy.
- *AST-only refactoring tools.* No edit-file. Behavioral safety within scope is guaranteed by the tool; only design correctness remains a possible failure mode.

---

## Invocation Timing

**What it is.** When the agent runs versus when deterministic code runs.

**Why it's a lever.** Every agent invocation is a place where the agent can be wrong. Pushing work into deterministic code that runs *instead of* the agent eliminates that risk per scope. The agent gets called only when deterministic code can't handle the situation.

**Probe questions.**
- Where in the workflow does the agent run? Why there?
- What deterministic processing precedes or follows each invocation?
- What conditions trigger the agent versus skip it?

**Examples.**
- *Transcript fetcher.* Deterministic code fetches; agent runs only on failure, with the specific error as context.
- *do-today sequencing.* Deterministic code decides what step is needed, runs that step, exits. The agent is never asked to manage its own sequencing.

@expand this to workflow. There are several levels and kinds: skills are an example of non-deterministic workflow. Process docs are non-deterministic; workflows that are invoked deterministically / manually. Scripted invocation is automation and deterministic for invocation, but still non-deterministic after that. Missions are deterministic workflows with individual non-deterministic steps. And then you can also add deterministic steps.

---

## State Control *(prior name: Result handling / Work-product state control)*

**What it is.** What happens to commits, files, MCP tool calls, and other agent outputs before and after they affect real state. Where the agent modifies state directly versus where it modifies a *representation* that gets verified and transformed before becoming real state.

**Why it's a lever.** Between "agent produced output" and "world changed" is a designable space. Add a checkpoint, an archive, a verification, a remapping. The agent can be careless about a class of mistake if the post-action machinery catches and reverses it.

**Probe questions.**
- What happens between agent action and irreversible effect?
- Does the output go to real state directly, or to a representation first?
- What deterministic verification runs between agent and world?

**Examples.**
- *Archive table.* Before any migration runs, every pre-migration row is preserved. Always restorable.
- *Bidirectional value remapping.* After the agent writes a migration, deterministic code verifies the source-to-destination map before execution.
- *Determinism Sandwich.* Deterministic pre-processing → AI creative decision → deterministic execution.

---

## Feedback

**What it is.** Closing loops for the agent. What signals it receives about the effects of its work — both *within a turn* (tool results, synchronous validators, guardians that fire on each edit) and *across turns* (test outcomes, schema failures, human responses fed back as next-turn context). Real-time feedback shapes the agent's next move inside the current invocation. After-the-fact feedback shapes the next invocation.

**Why it's a lever.** Without feedback, the agent repeats the same mistake — it has no view of what went wrong. With feedback, the agent can self-correct mid-turn, self-correct between turns, or escalate cleanly when self-correction fails. Feedback can be deterministic (schema validation, test results, build errors, structured tool errors) or human (review, text-to-speech notifications, response to a guess). The shape and timing of the feedback determine what the agent learns and when.

The lever is distinct from State Control. State Control governs *what happens to the output*; Feedback governs *what the agent learns about that*. A migration archive table is State Control. A test that tells the agent "the value map disagrees with reality" is Feedback.

**Probe questions.**
- What does the agent see while a turn is in flight? What only between turns?
- Is the feedback automatic, or does it depend on someone reviewing?
- Do tool errors return structured, actionable detail, or generic failure?
- What does the agent do with a failed-feedback signal — try again? Escalate? Halt?
- What signals would change the agent's next move, and are they being delivered?

**Examples.**
- *Real-time guardian on edit.* A pre-commit validator runs synchronously on each agent file write; violations surface as a structured tool error inside the same turn, and the agent retries with the failure visible.
- *Structured tool errors.* A tool returns "expected schema field X, got Y at line Z" rather than a generic 500. The agent corrects in the next step of the same turn, not the next invocation.
- *Schema validation across turns.* When a transcript analysis fails validation, the agent is re-called with the specific failure as context. It fills the gap rather than the human flagging it.
- *Guess-and-check rhythm.* The system knows when to have the agent guess and when to surface the guess for human check. The human responds to a concrete proposal; text-to-speech notifies only when there's something to respond to.
- *Test-driven correction loop.* The agent writes code; tests run; failures come back as next-turn context. The agent's next iteration is shaped by the specific failure, not by general "be more careful" instructions.

---

## Per-turn invocation: 4 axes

A single agent turn is fully parameterized by four things. Three are already full levers; the fourth is a candidate (Identity, below).

1. **Goal** — what the agent is asked to accomplish this turn. *(Goals lever.)*
2. **Invocation context** — when this turn fires and what workflow surrounds it. *(Invocation Timing lever.)*
3. **Memory** — what state the agent carries forward. *(Memory lever.)*
4. **Identity** — who is being asked: agent software (Claude / dev.ai / OpenCoder / ...), LLM, system prompt, persona framing. *(Candidate lever — see below.)*

In a short-invocation model — each agent takes one turn, then stops — three of these can hot-swap between turns: goal, workflow, identity. Memory is the only thing that persists across turns, so **memory is the agent's identity in the durable sense**. Two consecutive turns with the same memory but different personas, LLMs, or agent software read as one agent reinterpreting its prior state, not two agents in conversation.

This framing collapses several earlier ideas. Cross-agent messages turn out to be a special case of turn-start input — already covered by Goal + Invocation. Adjacency (parallel visibility between concurrent agents) remains genuinely different; it is about *concurrent* turns, not sequential reinterpretation.

---

## Candidates worth considering

Not yet promoted to full levers; surfaced here in case they earn it later.

### Identity *(axis 4 above)*

**What it is.** The agent software, the LLM, the system prompt, and the persona framing handed to this turn. Hot-swappable between turns; from the orchestrator's view, this is the choice of "who to ask."

**Why it's a lever.** Different agents are good at different things. Different system prompts surface different failure modes. Different personas frame the same task differently. Choosing identity per turn is choosing what *kind* of thought the next turn produces. Identity is also the cheapest universe change available — no infrastructure, no tool work, just a different invocation.

**Probe questions.**
- Which agent software runs this turn? Why this one?
- Does the system prompt frame the task narrowly enough that the agent doesn't drift into adjacent personas?
- Would a different identity catch a failure mode the current one misses?

### Adjacency

What other agents or humans can see the work in progress and react in real time. Different from Feedback (which is about loop closure for the acting agent) and different from Identity (which is sequential reinterpretation). Adjacency is about *concurrent* visibility — what's watching while the work is happening, and what it can do.

---

## In-turn interactions — modeled and ruled out

In principle, an agent could be interrupted mid-turn, or receive additional messages between its initial input and its final output. These look like new levers, but every concrete benefit they offer can be obtained via existing levers, and they require continuous real-time vigilance by some external actor — which violates the carelessness goal. They are listed here to be explicitly **crossed out** as redundant.

- ~~**Mid-turn interrupts.**~~ Use Invocation Timing: stop the agent at a turn boundary and start a new turn with the new state.
- ~~**In-flight messages.**~~ Use Feedback (synchronous tool results, real-time guardians) for signal-during-action, or Invocation Timing for new instructions.
- ~~**Mid-turn persona change.**~~ Use Identity at the next turn boundary.

If a future case appears where an in-turn interaction is genuinely irreducible to existing levers, it earns promotion. Until then: not a lever.

---

## Note on naming

Lever names are still settling. Where a name has changed from its earlier form, the prior name is noted in parentheses in the heading. The slides currently use shorter forms ("Context," "State control") for readability; this rubric uses the canonical longer forms.
