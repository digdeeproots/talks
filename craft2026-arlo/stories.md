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

## Invocation timing — Transcript fetcher *(quick story, told as semi-demo)*

*Vigilance cost: "Did the AI keep going past the point where I should have been consulted? Did it fetch the wrong transcript and proceed to build a lesson plan on it — while I'm assuming it got the right one?"*

*Safety: Level 1 (vigilance) → 3 (deterministic checks) → progressively to 4+ as more states get handled deterministically.*

A daily coaching workflow: pull transcripts from Fireflies, do lesson planning, write the daily status email, extract techniques, build recipes, track against the week's goals.

**Show the transition states.** This is told as a semi-demo so the audience sees the path, not just the destination.

1. **Start: workflow file + vigilance.** Tell Claude to read the file and follow it. Watch every output. Full vigilance burden.
2. **Extract sequencing into deterministic code.** Claude can't clear its own context or exit itself. Claude wrote a script — `do-today` — that assesses the current state, decides what step is needed next, does deterministic processing, launches Claude, catches the result, and quits. Run again for the next step. Sequencing is no longer in Claude's hands.
3. **Replace probabilistic fetch with deterministic.** Transcript fetching started via the Fireflies MCP server (probabilistic — the AI sometimes got it wrong). Now a fully debugged deterministic fetcher gets the right transcript for the right day and team. On success: Claude is never invoked, doesn't even know a fetch happened. On failure — wrong date, ambiguous session, network error — Claude is called with the specific failure as context.
4**Result: the system decides when to call Claude.** It calls Claude only when deterministic code admits it can't handle something. You don't have to decide when to trust it. The system decides by condition.
   @ai: also, somewhere in here we swapped claude from doing transcript analysis into markdown (unstructured), to using structured json, with deterministic code validating the schema. This stopped claude from including irrelevant stuff in the analysis (which tended to confuse later claude instances). It also ensured claude didn't miss any important stuff - when the validation failed, then claude got the info and added to its analysis. This is an important sequence - we used the unstructured formats to figure out what info we needed and who would use it, and we also used it to initially start with a linear workflow and then resolve it into independent, re-orderable steps that each read and write to the same analysis (contributing their insights). Unstructured at first allowed us to keep things loose, but required vigilance. Iterating on provability within categories allowed us to incrementally lock stuff down and stop one worry at a time.

**Key insight for the talk:** each transition was a single increment. Each one moved one specific vigilance cost from level 1 to a higher level. Together: the workflow that used to require constant attention now runs itself.

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
