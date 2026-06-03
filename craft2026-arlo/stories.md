---
quality: raw
status: in-progress
---

# Stories — Careless by Design

One place for all the detail on each story / demo. Slides and speaker notes draw from here.

Organized by **Agent's Universe lever**. Each story names the vigilance cost it addresses, the lever it pulls, and the safety level shift it achieves.

---

## The Maintenance Trap (setup, non-AI)

*Used to: name vigilance toil and ground the 2-factor formula.*

A brownfield team — no AI — spending most of their capacity on "keeping the lights on." Defects, regressions, debt fires. Not building anything new.

Concrete: Arlo once helped rescue a project that spent 2 weeks building new features, then had to lock the codebase for 2.5 years to repair the damage and get releasable.

**Vigilance toil ∝ throughput × existing body of work.** Greenfield: body ≈ 0, toil ≈ 0. Brownfield: body is large, so every unit of new work generates vigilance toil proportional to everything that already exists.

This is the recognition moment for the audience. They've felt this. They didn't know it had a name or a formula.

---

## Tooling — Movement-based branching *(first demo)*

*Vigilance cost: "Will the agent correctly assess risk and follow our commit notation policy? Will it cleanly branch and merge so it plays well with our other systems?"*

*Safety: Level 1 (vigilance) → 4 (prevention).*

With raw git, an agent can force-push, delete branches, corrupt history. Risk assessment depends on the agent every commit. Watch every commit or pay later.

Minions never touch git. There is no git tool in their toolbox. Instead an MCP tool implements **movement-based branching**: the AI can start a movement, commit along it, and merge. It doesn't know what git commands run underneath. All the right behaviors are implemented in the tool. None of the wrong ones are accessible.

Risk is assessed by the tool, not the AI. The tool judges what operations the AI used and how, and produces a deterministic risk assessment.

For merge conflicts: the minion that did the work gets its history cloned, handed a limited git toolset, and given just enough access to resolve the conflict on that one branch. Once resolved, it's booted out and the deterministic tool takes back over.

Pre-commit hooks are integrated with the running watch mode. The AI can run tests and lint with cached results. But when a commit happens, the deterministic tool pauses and enforces all pre-commit requirements. The AI can't work around them.

**The AI cannot violate git invariants. There's nothing to route around.**

Recipe: *narrow the toolbox to operations whose every instance is safe.*

---

## Tooling — AST-only refactoring

*Vigilance cost: "Did my restructuring change what the code actually does, even slightly?"*

*Safety: behavioral correctness reaches Level 5 (carefree); design correctness stays at Level 1.*

No edit-file tool for Minions. Only AST-based transformation tools — provably safe refactorings. The AI makes design choices; deterministic code executes them.

Two named domains emerge:

- **Design correctness** — *was this the right move?* The AI can be wrong. Undo is as easy as do; wrong abstractions are cheap to reverse.
- **Behavioral safety** — *did it change what the code does?* The tool guarantees no. Not possible to violate within scope.

"Wrong about the design" and "introduced a bug" become categorically different failure modes. Only the first remains possible.

Works the same for human developers using AST-aware refactoring tools. The lever isn't AI-specific; it's tool-shape-specific.

---

## Workflow + Work-product state control — Transcript fetcher *(quick story, told as semi-demo)*

*This story pulls **two** levers, not one. Sequencing and when-Claude-runs are **workflow** moves. The schema and validation routing — controlling the shape of the analysis itself and what happens when the result doesn't conform — is **work-product state control**. Useful in the talk to show that a single workflow can be improved one lever at a time, on different levers, in sequence.*

*Vigilance cost: "Did the AI keep going past the point where I should have been consulted? Did it fetch the wrong transcript and proceed to build a lesson plan on it — while I'm assuming it got the right one?"*

*Safety: Level 1 (vigilance) → 3 (deterministic checks) → progressively to 4+ as more states get handled deterministically.*

A daily coaching workflow: pull transcripts from Fireflies, do lesson planning, write the daily status email, extract techniques, build recipes, track against the week's goals.

**Baseline — Prompt Claude + vigilance.** Tell Claude what to do. Watch execution and interrupt when it goes wrong. Full vigilance burden.

**Six transitions follow, in the order the s31 upshift recap uses them.** Each is a single increment that moves one specific vigilance cost from a lower safety level to a higher one.

1. **Written workflow.** *(Workflow.)* Move the prompt into a workflow file. Tell Claude to read it and follow it. The vigilance burden during execution is unchanged — full watch — but the workflow is now an artifact I can iteratively improve between runs.
   *Vigilance question this transition silences:* "Am I remembering to gather the right info?"
2. **Doc iter pattern.** *(Workflow.)* Apply the doc-iteration pattern to the workflow file itself: structured human reviews on each pass, batched directives, the file improves cumulatively. The work toil of authoring the workflow drops; the workflow file gets steadily sharper.
3. **`pnpm do-today`.** *(Workflow — invocation.)* Extract sequencing into deterministic code. Claude wrote a script — `do-today` — that assesses the current state, decides what step is needed next, does deterministic processing, launches Claude, catches the result, and quits. Run again for the next step. Sequencing is no longer in Claude's hands.
   *Vigilance question this transition silences:* "Is the AI taking the right next step?"
4. **Narrow goal.** *(Goal.)* Refine Claude's goal to just "find key moments." It uses the transcript, the retro notes, and me as info sources. It doesn't need to determine what happened or gather enough for the lesson plan or status email — only to identify what is salient and approximately when in the transcript.
   *Vigilance question this transition silences:* "Is the AI over-working or taking shortcuts?"
5. **Scripted fetch.** *(Workflow — invocation + goal.)* Replace the probabilistic Fireflies MCP fetch with a fully debugged deterministic fetcher. On success: Claude is never invoked, doesn't even know a fetch happened. On failure — wrong date, ambiguous session, network error — Claude is called with the specific failure as context.
   *Vigilance question this transition silences:* "Did the AI get the right input?"
6. **Iterative analysis.** *(Work-product state control + Feedback.)* Lock down the analysis schema. Claude initially wrote transcript analyses as unstructured markdown. That looseness was useful — it let us discover what information actually mattered and who would consume it — but it required vigilance. Once the shape stabilized, we moved to structured JSON with a schema, and deterministic code now validates every analysis. When validation fails, Claude is re-called with the specific failure as context and fills the gap. This also unlocked something else: the workflow stopped being linear. Independent, re-orderable steps now read and write the same analysis, each contributing its own insights.
   *Vigilance question this transition silences:* "Is the output complete or misleading?"

Results:
- **Result: the system decides when to call Claude.** *(Workflow.)* It calls Claude only when deterministic code admits it can't handle something. You don't have to decide when to trust it. The system decides by condition.
- **Guess-and-check rhythm.** *(Feedback.)* The system knows when to have Claude guess and when (and how) to surface the result for human check. It stops asking the human to predict or explain things up front and instead lets the human *respond* to a concrete proposal. Text-to-speech notifies the human only when there's something to respond to. The human can do other work in the meantime; the system pulls them back in when needed. This closes the loop for both sides: Claude learns from the response, the human is freed from continuous oversight.

**Key insight for the talk:** each transition was a single increment that moved one specific vigilance cost from a lower safety level to a higher one. Together: the workflow that used to require constant attention now runs itself.

**Meta-pattern worth surfacing:** *unstructured first* to discover what information matters and who uses it; *then iterate on provability within categories* — locking stuff down one worry at a time. The looseness is how you learn the categories. The structure is how you eliminate the vigilance.

---

## Goals — Status email as structured spec

*Vigilance cost: "Does this email follow the same structure as last time? Did Claude invent sections? Did it change the format?"*

*Safety: Level 1 → multiple zero-risk zones (structure, recipients, rendering all reach Level 4+).*

Same coaching workflow, the email step.

Started at Level 1: "read this file and follow it." Watched every output.

Then: templates define sections. Workflow files identify what goes where. Input files moved from loose markdown to structured JSON as the format solidified. Structured data maps cleanly to templates.

Instead of "write the status email," the AI receives a structured spec: this section gets two sentences of trend analysis, this section gets a named metric, this section gets one recommendation. Claude writes sentences. Deterministic code assembles everything else — structure, recipient list, HTML rendering.

A script generates the HTML preview in the browser. Check the wording, approve, and the script deterministically grabs the recipient list, creates the email file, and opens it. Hit send.

**You never have to be vigilant about structure, recipient list, or rendering. Those are zero-risk zones, permanently.** You only pay attention to the words.

Recipe: *give the AI a goal that is trivial to verify; use other techniques to create safety for the rest of the task.*

---

## Memory — Delete completed stories

*Vigilance cost: "Does this contradict something we decided earlier? Are we building on conflicting assumptions?"*

*Safety: Level 1 → structurally impossible (Level 4).*

Discovery happens mid-demo: a new idea reshapes future work. Now the code no longer aligns with the plan that nominally built it, and the plan no longer aligns with what we want next.

In a traditional setup: every session re-explains context, re-anchors intent. And the AI still sometimes picks up the old direction.

The Orwellian move:

- As part of every story completion, **delete the story entirely**. Not mark it done — delete it.
- Rewrite all future (not-done) stories to be consistent with the new direction.
- All plans are in source control, so we can always revert. But we don't carry history forward.
- Reset agent context to a defined base state — a point where the AI understands the general intent but has no memory of alternative pasts.

The AI is unaware of any other directions that were considered. It looks at the code (the present) and sees a plan that builds from there in one clear direction. It cannot blend old ideas with new ones. It has no access to old ideas.

**The plan was always this direction. It just doesn't know otherwise.**

Decision inconsistency: structurally impossible.

---

## Feedback

*Working definition: closing loops for the agent — bringing the impact of its actions into its visible sphere, so it can self-correct or escalate. See `universe-levers.md` for the full rubric.*

### Commit tool as quality reviewer

*Vigilance cost: "Did the AI sneak in code-quality issues — dead branches, missing tests, smelly abstractions — that I now have to spot in review?"*

*Safety: Level 1 (vigilance) → 4 (prevention) for known issue categories.*

The commit tool used to be a passthrough: stage, write message, done. Quality checks lived in the human's eye during review. The AI could land work that was technically correct but full of issues a reviewer would flag — and often did.

The change: every commit invocation runs a battery of quality checks and returns them *as the tool result*. Lint, type, test, dead-code detection, complexity thresholds, missing-test heuristics — whatever the project cares about. The result is not pass/fail; it is a structured list of problems, each tagged "must-fix before commit" or "could-fix now."

The AI now sees its own code through the same filter the reviewer would. It picks what to address, makes the fixes, and re-invokes commit. The loop closes inside one turn: the tool tells the agent what is wrong; the agent decides what to do about it; the next commit attempt re-runs the checks.

The human never sees the smelly-but-fixed states. They only see commits that passed.

**Key insight for the talk:** the agent's actions used to be evaluated by a human, asynchronously, at review time. Now they are evaluated by deterministic code, synchronously, at the moment of action. The agent's behavior changed not because it became more careful, but because the universe started telling it the truth immediately.

---

@ai: add a reachable context section. Please elaborate forms of the following stories. 1) working in a monorepo, when changing functionality in any package, I want to prevent it from altering other packages. So I remove the others from the AI's reachable context. When it searches for them, all it can find is the API types & factories, and no implementation to change. It can also se its adaptors and ports, so it can change thos eif it wants to alter its relationship with another package. Refactoring tools can see both - if the API is internal. 2) Multi-phase re-design. I worked out the endpoint that I wanted to attain. Then I worked out the first phase which leaves me in a good partial-progress state that is all working and happier. Then during execution, I prevent access to the final endpoint. The execution sees the first phase as the final design, so can't be distracted by stuff beyond that phase. I apply this recursively down to some small scope, giving each scope a clear final destination and plan to get there, without worrying about what else may be happening after. 3) Context expansion. Add a tool for vector-based code search. Get a summary for each class & method, throw them all into a vector db, and then provide that as a search context to the agents, to be preferred over grep. 4) Plan optionality. The plan is held in source control (via a plan MCP tool), not an external system. Represent optionality with a node that says to generate options. When the workflow gets to that node, it asks the AI to brainstorm more potential options. Then it takes that set plus the original, and creates one `probably-wrong` branch for each. In each branch, it replaces the plan node with a node for the selected option - as if that were the choice made. Then run them all in parallel. None knows that multiple options are being evaluated or what the other options are. Then we choose, after all terminate (and we filter out failures) what we like from each, then combine that to the final solution.

---

### Required demo + demo prep

*Vigilance cost: "Did the AI ship something that looks done and passes tests but doesn't actually work?"*

*Safety: Level 1 (vigilance) → 4 (prevention) for "is this demo-able."*

A two-stage feedback loop wrapped around every user-visible chunk of work:

1. **Required demo.** At the end of each plan chunk, the coding agent must produce a demo and attach it to the plan, then suspend itself. Without a demo, the chunk is not done. The plan tool will not advance.
2. **Demo verification.** Before I see the demo, a separate system walks through it in a real browser. If any step fails — broken click target, missing route, console error, wrong state — those failures become structured feedback returned to the coder, which is re-woken to fix them. The cycle repeats until the demo passes its own walkthrough.
3. **Demo walk + note capture.** I then walk the verified demo and make freeform notes — what I liked, what surprised me, what I want changed.
4. **Note triage.** A separate system reads my notes and sorts each into *now* (re-wakes the coder for immediate work) or *future* (added to the plan as a downstream item).

The human only ever sees demos of code that demonstrably works. The agent never blocks on "is this finished" — the plan tool answers, by gating on demo verification.

**Key insight for the talk:** feedback here spans three different actors and two different timescales. The browser walker closes a tight loop for the coder; the note triager closes a slower loop between the human and the plan. Both are deterministic infrastructure; neither requires the human to remember to check.

---

## Work-product state control — Archive table for migrations

*Vigilance cost: "Did the migration change what the data means? Can I get it back if something went wrong?"*

*Safety: Level 0 (hope) → 4 (prevention).*

Started at Level 0. The AI generated migrations; they ran; data changed state. One small mistake caused unrecoverable data loss.

Tempting response: tell it to always save data, never lose data. That's asking for more care. It would still mess up.

Three changes instead, each a zero-risk zone:

1. **Archive table.** Before any migration runs, every pre-migration row is preserved. Always restorable, regardless of what the migration does.
2. **Bidirectional remapping.** After the AI figures out the migration, another step creates a full value map — source to destination and back. Deterministic code verifies every mapping goes somewhere. Since you still want to be able to delete things, there's a designated legacy-data slot in the schema for "not currently used"; the remapping routes unused data there. Nothing is lost. A test turns the map into a migration check and runs the migration to verify it does what the map says.
3. **Extracted library.** All the migration machinery — execution, backups — was debugged once and extracted. The AI writes only the migration definition. Deterministic code handles execution.

**Deterministic pre-processing → AI creative decision → deterministic execution.** The Determinism Sandwich.

Data loss is structurally impossible. The AI can be careless about it.

---

## Notes from v1 worth keeping nearby

These ideas surfaced in the v1 exploration and may earn a place in the talk or its docs:

- **"Be more careless, responsibly."** The mantra phrasing. Sharper than "stop being more careful."
- **"What does your agent's world look like?"** The framing question that opens the universe-as-design-surface idea.
- **Gardener metaphor.** You are not managing an agent. You are gardening its world. You shape the soil, remove the rocks, build the trellises. The plant grows according to its nature. Could inform the visual form of the Agent's Universe diagram (agent at center, layers of designed world around it).
- **Carelessness as a design spec.** When you design a guardrail, the spec is not "prevent bad behavior" — it is "make careless behavior succeed." These produce very different designs.
- **Amortization reframe.** A 15-minute improvement you never have to make again beats a 4-hour fix you'll make repeatedly. Most teams optimize for speed of fix; they should optimize for amortization rate. Supports the iterative-carelessness-improvement recipe.
