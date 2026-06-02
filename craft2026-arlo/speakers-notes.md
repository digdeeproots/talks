# Speakers Notes — Careless by Design
*Craft 2026 / SAS Open Space · 20-25 min*

---

## How to use this file

Open in a second window / monitor. Each slide is numbered to match the ID in `slides.html`.
Blank slides are listed briefly — they're intentional pause space.

Navigation: `←` `→` `Space` advances. `Home` / `End` jump to start/end.
`T` jumps to the TOC hub from anywhere. On the TOC, only card clicks advance — forward keys are disabled.
After each beat's last slide, next-key returns to the TOC. Same for the closing sequence.

---

## Slides

### 01 — BLANK (opening)
*House lights. Let people settle. Say nothing until you're ready.*

---

### 02 — Title: Careless by Design
Don't read the slide. Pause. Let the title land — "careless by design" sounds wrong on purpose.

---

### 04 — Speed limits didn't track engine improvements

Open the motorcar story. Do NOT explain where it's going yet.

> "Speed limits in the early motorcar era didn't track engine improvements. When engines got better, limits didn't go up. Something else had to improve first."

Let that be puzzling.

---

### 06 — They tracked braking improvements

> "They tracked braking improvements. Not better engines — better brakes. We sped up when they invented better brake pads that could stop the wheels. Again with better tire materials. In the modern era, when ABS became standard."

Pause.

> "Because you can't go faster if you can't stop."

---

### 08 — "Better brakes let you stop caring about stopping"

Read the quote slowly. It's the thesis of the whole talk.

> "Better brakes don't just let you stop. They let you stop *caring* about stopping."

Pause. Then:

> "Early drivers weren't slow because their engines were weak. They were slow because they had to be *careful*. Every curve demanded attention. Better brakes took away that need for care."

> "They carried a lot of <strong>vigilance toil</strong>. When the braking system is insufficient, the human driver has to pick up the slack."

---

### 10 — AI = engine / Safety = brakes

> "AI is the engine. Safety systems are the brakes. We are early in this era, and most of us are picking up the slack for poor safety systems."

---

### 11 — BLANK
*Section transition. Slow down.*

---

### 12 — work-toil became vigilance-toil

> "Most of us using AI have made a swap we didn't fully notice. Work-toil — the grinding of writing code — went down. But vigilance-toil went up. Watching AI closely enough that nothing goes wrong is still toil. It's more stressful toil. Less interesting toil."

> "We haven't delegated. We've relocated the burden."

---

### 14 — "Keeping the lights on"

> "And this isn't new. This isn't an AI problem. Teams in brownfield codebases have been in this trap for years — no AI required."

> "Teams 'keeping the lights on' spend all their time on defects, regressions, debt fires. I helped rescue a project once that spent 2 weeks building new features, and then had to lock the codebase for 2.5 years to repair the damage and get releasable."

Pause. Look for recognition — some will be nodding.

> "That feeling has a name. It has a formula."

---

### 16 — The formula

> "Vigilance toil is proportional to two things multiplied together. Your throughput is the frequency of events that could break stuff. And your stuff to protect is your existing functionality and customers."

> "Greenfield teams have almost nothing to protect. That's why new projects feel fast."

> "Brownfield teams have value to protect. Every change you make has to not break everything that already exists. Weak safety is catastrophic."

> "In Brownfield, each feature usually requires more time on Vigilance than Work."

---

### 18 — AI multiplied it

> "Add AI with poor safety systems. Change events go up 2x to 4x. Which means vigilance toil goes up 4x. That's OK in Greenfield, but in Brownfield vigilance already cost more than the work! If your safety was marginal before, it breaks immediately."

> "This problem existed before teams touched AI. AI just made the math undeniable."

---

### 19 — BLANK
*Pivot to the two examples.*

---

### 21 — Demo: Movement-based branching *(placeholder)*

Live demo of the MCP tool. Start a movement, do a small change, commit with risk notation, merge. Show what the agent sees vs. what runs underneath.

Don't name the lever. Don't say "tooling". The audience names what they see; we name it later in the upshift.

Scripted walkthrough is out of scope for this movement.

---

### 23 — Story: Find key moments in a transcript *(placeholder)*

Semi-demo. Walk through four transitions in sequence:

1. **Sequencing → deterministic.** Deterministic code decides what step is next. Agent no longer manages its own sequence.
2. **Fetch → deterministic.** Code fetches; agent only called on failure. Changed invocation and goal simultaneously.
3. **Analysis goal locked down.** Concrete output spec replaces open-ended instruction. TTS notification; you work elsewhere until called.
4. **Analysis format locked down.** Schema validation reprompts on failure. Careless about what each key moment includes.

Semi-demo script is out of scope for this movement.

---

### 29 — Example 1 recap

Walk back to the first demo. The point of this slide is to *name* what changed; the audience saw it, now we attach words. The table is shaped exactly like the s31 table — one column per intervention, same four rows — so the audience reads them in parallel.

> "Two demos. Let's look at what they had in common."

> "First one: one column, because one intervention. Risk-aware commit + branching. What we *changed* is the tool — that's the row marked Changed."

Walk the column top to bottom.

> "Metacognition: down. The AI is no longer thinking about commit semantics, branch policy, risk codes — the tool decides."

> "Work toil: empty. We didn't reduce work toil here; the AI still does the same amount of work. This row will be empty on a lot of interventions."

> "Vigilance toil: this is the row that names what stopped being scary. *Did the AI pick the right risk code? Will the branch land cleanly? Is history readable?* Those questions used to live in my head. They don't anymore. The tool answers them by construction."

Don't name the formal terms yet. Hold them for two slides.

---

### 31 — Example 2 recap

Five columns now — five separable interventions. Same four rows as s29 so the audience reads them in parallel. The Vigilance Toil row holds the live questions each intervention silenced.

> "Second example: five columns, because five separable interventions. Each one walked the same loop we just walked once."

Walk the columns left to right, reading the Changed and the Vigilance Toil rows.

> "**Written workflow.** Changed the workflow. The procedure left my head onto disk. Inside a session I was still vigilant — but the question *Am I remembering to gather the right info?* stopped being mine to answer."

> "**pnpm do-today.** Changed invocation. Deterministic code drives the loop, decides what step is next, then exits. *Is the AI taking the right next step?* — silenced. Metacognition went down too: the agent doesn't ask itself *what should I do next?* anymore."

> "**Deterministic fetch.** Changed invocation *and* goal at once. Det code fetches; the AI is only called on failure with the specific error. *Did the AI get the right input?* — silenced. Work toil went down because the AI stopped doing fetch by hand."

> "**Narrow goal.** Find key moments. Period. *Is the AI over-working or taking shortcuts?* — silenced. Metacognition dropped: the AI stops asking *how much do I tell it now?* Work toil dropped: it stops generating content it could pull straight from the transcript."

> "**Structured, iterative analysis.** Changed feedback. Schema validation tells the agent when its output is wrong; the agent retries. *Is the output complete or misleading?* — silenced. I'm careless about structure."

> "Five interventions, five levers touched. ⬇️ in every row that filled in."

---

### 32a / 32b / 32c — Naming the recurring terms (progressive reveal)

Three slides. Same layout, one new term per slide. Don't introduce them out of context; each term comes out of the walk-through you just did.

**32a — Scope only.**

> "Three things keep showing up. Let's name them."

> "**Scope** — the class of error one intervention addresses. Always one at a time. Never 'the whole problem.' Each column we just walked through was one class."

Pause. Click forward.

**32b — Scope + Lever.**

> "**Lever** — a facet of the agent's universe you can engineer. We touched five today across the two examples: tooling, workflow, invocation, goal, feedback. There are more."

Pause. Click forward.

**32c — Scope + Lever + Cost to protect.**

> "**Cost to protect** — how much vigilance toil is spent to prevent errors in this scope. Before each intervention it was high; after, near zero. That drop is what we engineered."

Then bridge to the theory:

> "Now we can say something general about the math."

---

### 25 — Cost to protect

Cost to protect is the third factor. The walk-through just gave us the building blocks; now they assemble.

> "Vigilance toil is throughput times amount to protect times *cost to protect*. Throughput we don't lower — that's why we use AI. Amount to protect is what we're trying to grow — that's the business. Cost to protect is the one we engineer."

> "Cost to protect is the price of holding one scope safely. Lower it on one error category, lower the total. Lever × scope drives cost."

Then pivot:

---

### 17 — Where vigilance toil comes from

Short anchor slide. One claim, said once, and we move on.

> "Where does vigilance toil actually come from? Defects. Specifically: defects we have to worry about."

> "If there were no defects to worry about, we'd just *hope* and never look. Every step above hope on the safety scale is paid for one worry at a time."

Beat. Then set up the next slide:

> "So if vigilance toil is paid per worry — the question becomes: who do you think is *creating* the worries?"

---

### 24 — Two kinds of engineer

Transition slide. Reframes the audience's role before we tell them how to act in it. Two columns; same defects, two different jobs.

> "Two kinds of engineer look at the same defects and see different jobs."

Walk the left column.

> "An app or library developer asks: *how do I make this code defect-free?* The defects exist; the job is to find and fix them before they pile up. Lives at probabilistic and deterministic safety. Tests are something to tend."

Walk the right column.

> "A tool builder asks: *how do I make sure these developers ship defect-free code?* — where 'these developers' might be humans, might be AI agents. The job isn't catching defects after they happen. The job is controlling the *rate* at which they get created. Lives at prevention and carefree. Tests are a work product the developers might break."

Land it.

> "If your AI is one of the developers, you are the tool builder. The work isn't writing better AI. The work is engineering the world so that the defect rate drops."

> "So what would it look like if cost-to-protect were the design problem?"

---

## Upshift

The job of this block: rise to the big idea (carelessness as the goal), state *how* (change the universe, raise safety on one class), then walk the design surface (universe + vocabulary + recipe). Order: principle (s20) → how (s26) → customer model (s37a/s37b) → universe (s34) → vocabulary (s28) → recipe (s27) → blank pivot (s30). (AST callback s22 removed: redundant with Beat 5 in the back half, which covers the same AST-tools case study fully.)

---

### 20 — The big idea

Read it slowly.

> "Stop improving the engine. Improve the brakes."

Pause.

> "That's the move. Not 'better AI' — better world around the AI. Brakes are what let the engine matter."

Then the line that lands the goal:

> "Make even crappier AI succeed."

Pause.

> "Which agent you use, which LLM, how good your prompts are — none of that changes the vigilance you carry. The universe around the agent does. That's where the engineering work is. The goal is a world where even a careless agent succeeds."

Then set up what comes next:

> "If that's the goal, how?"

---

### 26 — How?

> "Be a tool builder. Two moves: change the *universe*. Raise safety on one *error category*."

Point to each line:

> "Not the agent — the world around it. Not all errors — one category at a time. That's the whole shape of the work."

Then bridge:

> "So: what *is* the universe? Let's look at the customer for our tools — the agent itself — and see where the universe actually has joints."

---

### 37a — Understanding the customer (1/2): one turn, mechanically

This diagram says: the agent is deterministic software with non-deterministic thinking steps. Working Memory is the center; every step touches it. There's a cycle in the middle, two steps before it, one step after. The cycle keeps running until the goal is met.

Open with the big picture.

> "An agent turn is mechanical. Eight steps. Two before the cycle, five in the cycle, one after. Working memory in the middle — every step reads or writes it."

Walk the pre-cycle.

> "Step 1: hydrate. The agent reads its session file off disk and loads working memory — turn goal from last time, task list, documents, the typed DAG. That's an *act*: a real read from outside."

> "Step 2: set the turn goal from the new user input. That's a *think* — the agent dispatches the input to the LLM. The thought cloud asks: *what is being asked this turn?* The answer comes back as tokens and gets written to working memory as the turn goal."

Now walk the cycle, finger-tracing the loop.

> "Step 3, top of the cycle: pick the next action. Think. *Which action gets me closer to the goal?* The chosen action gets written to working memory."

> "Step 4, right side: execute the action. Act. A tool call goes out — read, write, run, fetch. The tool touches the File System or an External Source. The raw response comes back and gets written to working memory."

> "Step 5, bottom-right: interpret the response. Think. *What does this response mean?* The interpretation gets written. Notice — tool errors and tool successes look the same to the agent. Both are just response info that gets thought about."

> "Step 6, bottom-left: prune memory. Think. *What in memory is still useful?* The agent decides what to keep and writes that back — replacing working memory with the keep set."

> "Step 7, left side: check the goal. Think. *Is the goal met?* If not yet — loop back to step 3 and pick the next action. If yes — exit the cycle."

Walk the post-cycle.

> "Step 8: persist. Act. The agent reads its whole working memory and writes it back to the session file. That file is what gets loaded by step 1 next time the agent runs."

Land the universe-levers payoff.

> "Now look at where the levers live. Every think step is a dispatch to the LLM — Goals and Memory shape what gets asked. Every act step is a tool call — Tooling, State Control, and Feedback shape what happens at that boundary. The outside boxes — file system, external sources, session file — those are Reachable Context. Every arrow on this diagram is something we can re-engineer."

---

### 37b — Understanding the customer (2/2): between turns

This diagram says: an agent does not persist. Two consecutive turns are two separate runs of software with a file in between. Everything we do between turns is operating on that file or on the next invocation.

> "An agent doesn't persist. Turn N runs and finishes. Turn N+1 hydrates from a session file and runs. The chain of 'I' the AI seems to have? That's our doing — we wrote the file."

Point at the session file.

> "The session file is the agent's identity at rest. Turn-N outputs equal turn-(N+1) inputs. It's editable. It's forkable. We can rewrite a turn's memory and re-launch from that point."

Walk the badges by region.

> "On the way *out* of turn N: we can evaluate what it did — state control and feedback. We can run more software on the result — workflow."

> "On the file itself: we edit the memory directly. We change what info the next turn can reach."

> "On the way *into* turn N+1: we choose the next prompt — Goals. We choose the next identity — which agent, which system prompt."

> "And spanning the gap: we change the toolbox."

Land it.

> "Inside a turn, we got six lever attachment points. Between turns we got seven more. Every place we can move."

Then transition into the theory or the safety vocabulary.

---

### 34 — The agent's universe

This slide answers the "where" question. Where the levers live.

> "The agent's universe. Everything it perceives and can act on. Seven levers right now."

Point to each as you name it.

> "Memory — what the agent recalls within a session, across sessions, between projects."
> "Reachable Context — what information the agent can actually get to, what its filesystem and tools surface."
> "Goals — how narrowly the task is defined."
> "Tooling — what operations are in the toolbox, and what is deliberately not."
> "Workflow — when the agent runs versus when deterministic code runs."
> "State control — what happens to outputs before the world changes."
> "Feedback — what the agent learns about the impact of its actions."

> "Each is a class of error you can address. Pick one, push there."

Then hand off to the safety vocabulary:

> "Now — when we push, how far do we push? That's the other half of the answer."

---

### 28 — Sets of safety

This is vocabulary, not a ladder. The audience needs names for the safety levels so the recipe has something to talk about. The third column names the cognitive load each level costs.

Walk briefly. Don't read all of it.

> "Six named sets. Each one: how much vigilance, what kind, what cognitive load it costs."

> "Level 5, carefree. Right action easy, wrong action structurally hard. *Negative* cognitive load — it frees nearby attention too."
> "Level 4, prevention. Mistakes can't propagate. Zero load in scope."
> "Level 3, deterministic. Known classes caught; you spot-read the known gap."
> "Level 2, probabilistic. Random spot-checks, pace unpredictable."
> "Level 1, vigilance. Watch every action."
> "Level 0, hope. No attention paid — until something fails silently."

Then the part most people miss:

> "These aren't rungs you climb in order. One project lives at many of these levels at once — different domain, different rung. Refactoring might be at Level 4 because your tools enforce it. Data migration might be at Level 0 because no one wrote the archive table yet."

> "And going up isn't always the move. Sometimes you choose to drop a domain to a lower level because a higher one isn't worth the engineering. The vocabulary just lets you say where you are and where you're going — per domain, deliberately."

> "Adding AI typically drops the level of multiple domains at once. The math from earlier is what makes that expensive."

---

### 27 — The recipe

The meta-pattern for engineering carelessness. Point to the diagram as you walk it.

> "Here's the move. Same shape every time."

**Step 1 — Apply the vigilance-as-process template.** Done once, up front. Stand up the four scaffolds the loop will refine:

- **Empty guardian set.** Define where in your workflow a guardian could run — even if that slot is empty for now.
- **One-step workflow.** The actor — agent or human — gets one instruction: "do it." No orchestration.
- **Vigilance expectation.** Write down every concern you can already see that a human has to watch for, and when.
- **Spot-checker.** Stand up the first AI check, partial by design. Catches some of what you've been watching for; not all of it. Subsequent loops fill it in.

> "That's the template. Four pieces, in place. The rest is the loop."

**Core loop (steps 2–5, repeating):**

**Step 2 — Name the vigilance.**

> "What specifically keeps making you check? Not 'is the work good' — what *class* of error? Decision inconsistency. Format drift. Data loss. Name it."

**Step 3 — Identify a hole.**

> "What did the spot-checker miss or flag? That hole is a missing universe element. Update your vigilance list — some items just moved from 'watching' to 'understood gap'."

**Step 4 — Lock one error category.**

> "Pick the gap you understand best. Change the universe — add a guardian or workflow step — so that whole class is structurally addressed at whatever safety level makes sense."

> "Now the vigilance that class produced is gone. Permanently."

**Step 5 — Adjust vigilance.**

> "Remove what's now locked in. The list shrinks. Then: back to step 2 with the next vigilance item — or forward to the decision."

**Exit:**

**Step 6 — Make a decision.**

> "Accept the work the agent did, or reset and re-run inside your safer universe. The recipe doesn't say which. It makes the risk profile legible so the choice is clean."

Pause.

> "This is what carelessness engineering looks like in practice. Each pass: name one cost, identify the hole, lock it in, adjust, decide. Loop until you're careless about the thing."

---

### 30 — BLANK

*Pivot from the upshift to the audience-directed back half. Let the recipe and universe settle for a beat before the TOC appears.*

---

### 33 — TOC hub

Land here after the upshift. This is the visual menu for the back half.

> "Here's where we go from here. Pick anything. We'll walk it together. Come back here, pick another."

Sectioned: **Case studies** (existing 6 + a pending Feedback slot), **Recipes** (none yet), **Closing**.

Case-study cards:
- Memory / Decision inconsistency → s38
- Goals / Consistency violation → s41
- Workflow / Oversight gap → s44
- Tooling / Scope enforcement → s47
- Tooling (operations) / Accidental behavior change → s50
- State control / Data loss (archive table) → s53
- Feedback / Story TBD (greyed out — no destination yet)

Recipes section: empty for now. We haven't built any case-as-recipe slides yet.

Closing card:
- Synthesis / Closing sequence → s56

Each case study is currently 2 slides (setup → story). The plan is to expand each to 3 (starting state → intervention → name the experience); that expansion is pending. Click a card to enter that sequence. After the sequence's last slide, next-key returns here automatically. Press `T` from anywhere to summon the TOC.

Insert the closing sequence at a natural break — not necessarily after all six beats.

---

### 38 — Beat 1 setup: Decision inconsistency

> "Discovery during iterative demos."

> "Here's what happens. We're working towards a plan, mid-demo we discover a new idea. That idea shifts a lot of future work. Now the code doesn't align with the plan that nominally built it and the plan doesn't align with what we want next."

> "Vigilance cost: decision inconsistency. 'Does this contradict something we decided earlier? Are we building on conflicting assumptions?'"

> "Every session: re-explain the context, re-anchor intent. And the AI still sometimes picks up the old direction."

---

### 39 — Beat 1 story: Memory

> "Universe lever: Memory. This one is delightfully Orwellian."

> "Here's what we do. As part of every story completion, we delete the story entirely. Not mark it done. Delete it."

> "Then we rewrite all the future — not done — stories to be consistent with the new direction. All plans are in source control, so we can always revert. But we don't carry history forward."

> "Then we reset context to a defined base state — a point where the AI already understands the general intent, but has no memory of alternative pasts."

> "The AI is unaware of any other directions that were considered. It just looks at the code — that's the present — and sees a plan that builds from there in one clear direction. It can't blend old ideas with new ones. It has no access to old ideas."

> "The plan was always this direction. It just doesn't know otherwise."

Pause.

> "Decision inconsistency: structurally impossible."

---

### 40 — Beat 1 name the experience

Read the four lines. Don't elaborate.

> "Scope: cross-session decision inconsistency. Cost to protect: zero — conflicting decisions are structurally impossible. Lever: Memory."

Then return to the TOC.

---

### 41 — Beat 2 setup: Consistency violation

> "Recurring structured output. Specifically: the coaching workflow. Daily — pull transcripts, plan lessons, write the status email, extract techniques."

> "Vigilance cost: consistency violation. Does this email follow the same structure as last time? Did the AI invent sections? Did it change the format?"

> "First attempt: 'Read this file and follow it.' Watched every output."

---

### 42 — Beat 2 story: Goals

> "Universe lever: Goals."

> "Instead of 'write the status email,' the AI receives a structured spec. This section gets two sentences of trend analysis. This section gets a named metric. This section gets one recommendation."

> "Claude writes sentences. Deterministic code assembles everything else — structure, recipient list, HTML rendering."

> "I gave Claude a goal that is trivial to verify, and used other techniques to create safety for the rest of the task."

Pause.

> "Each piece that goes deterministic is a zero-risk zone you never pay for again. Make one thing zero-risk at a time. Each zone frees vigilance budget for the next thing."

---

### 43 — Beat 2 name the experience

> "Scope: format and structure drift in recurring output. Cost to protect: zero — structure, recipients, rendering all become zero-risk zones. Lever: Goals (a structured spec replaced free-form prose)."

Then return to the TOC.

---

### 44 — Beat 3 setup: Oversight mechanism gap

> "Session data fetching. The coaching workflow starts with: get the right transcript, for the right team, for today."

> "Vigilance cost: oversight mechanism gap. 'Did the AI keep going past the point where I should have been consulted?' Or in this case: did it fetch the wrong transcript and proceed to build a lesson plan on it — while I'm assuming it got the right one?"

---

### 45 — Beat 3 story: Workflow

> "Universe lever: Workflow."

> "Deterministic code fetches the transcript. It knows which team, which day, which session. On success: Claude is never invoked. It doesn't even know a fetch happened."

> "On failure — wrong date, ambiguous session, network error — Claude is called with the specific failure as context. It helps resolve the one thing deterministic code couldn't handle."

> "The system decides when to call Claude. It calls Claude only when deterministic code admits it can't handle something."

> "You don't have to decide when to trust it. The system decides by condition."

---

### 46 — Beat 3 name the experience

> "Scope: wrong-data fetching and over-eager step completion. Cost to protect: near zero — deterministic by default; the agent runs only on declared failure. Lever: Workflow."

Then return to the TOC.

---

### 47 — Beat 4 setup: Scope enforcement gap

> "Source control in an agentic codebase."

> "Vigilance cost: policy enforcement gap. Will the agent correctly assess risk? Will it fill in the right commit notation and branch cleanly so that it plays along well with all our other systems?"

> "With raw git: you watch every commit. An agent with git access can force-push, delete branches, corrupt history. You're vigilant because you have to be."

---

### 48 — Beat 4 story: Tooling

> "Universe lever: Tooling."

> "Minions never touch git. There's no git tool in their toolbox."

> "Instead there's an MCP tool: movement-based branching. The AI can start a movement, commit, merge. But it doesn't know what git commands run underneath. All the right behaviors are implemented in the tool. None of the wrong ones are accessible."

> "Risk is assessed by the tool, not the AI. It judges what tools the AI used and how, and makes a deterministic risk assessment."

> "The AI cannot violate git invariants It lacks the tools to cheat with."

Pause.

> "Structurally impossible."

---

### 49 — Beat 4 name the experience

> "Scope: git operations and the risk-notation policy. Cost to protect: zero — git invariants cannot be violated; there's nothing to route around. Lever: Tooling."

Then return to the TOC.

---

### 50 — Beat 5 setup: Accidental behavior change

> "Structural refactoring in legacy code. Renames, extractions, relocations across a large codebase."

> "Vigilance cost: accidental behavior change. 'Did my restructuring change what the code actually does, even slightly?'"

> "We showed AST tools solving this for human developers back in section three. Now the question is: what about AI?"

---

### 51 — Beat 5 story: Tooling (operation semantics)

> "Universe lever: Tooling — but this time it's not about which tools exist. It's about what the available operations can *guarantee*."

> "No edit-file tool for Minions. Only AST-based transformation tools — provably safe refactorings. The AI makes design choices; the tool executes them with behavioral safety guarantees."

Point at the two-up.

> "Two named domains emerge. Design correctness: was this the right move? The AI can be wrong about that. And undo is just as easy as do — wrong abstractions are cheap to reverse."

> "Behavioral safety: did it change what the code does? The tool guarantees no. Not possible to violate within scope."

> "'Wrong about the design' and 'introduced a bug' are now categorically different failure modes. Only the first remains possible."

---

### 52 — Beat 5 name the experience

> "Scope: behavior preservation during refactoring. Cost to protect: zero within scope — behavioral safety guaranteed by the tool. Lever: Tooling (operation semantics, not which tools exist)."

Then return to the TOC.

---

### 53 — Beat 6 setup: Data loss

> "Database migrations. The AI generates a migration; it runs; data changes state."

> "Vigilance cost: data loss. 'Did the migration change what the data means? Can I get it back if something went wrong?'"

> "We started with no mechanism. Hope. And then one small mistake caused unrecoverable data loss."

---

### 54 — Beat 6 story: Result handling

> "Universe lever: Result handling."

> "Three layers. Each intercepts between the AI's output and irreversible effect."

Point at each bullet as you tell it.

> "Archive table: before any migration runs, every pre-migration row is preserved. Always restorable. The AI can be careless about loss."

> "Bidirectional remapping: after the AI writes the migration, another step generates a full value map — source to destination and back — and deterministic code verifies it meets criteria before execution. A test turns the map into a migration check."

> "Extracted library: all the migration machinery was debugged once and extracted. The AI writes only the migration definition. Deterministic code handles execution."

> "Deterministic pre-processing → AI creative decision → deterministic execution. The Determinism Sandwich."

> "Data loss is structurally impossible."

---

### 55 — Beat 6 name the experience

> "Scope: schema migrations against live data. Cost to protect: zero — data loss is structurally impossible. Lever: State control (the Determinism Sandwich)."

Then return to the TOC.

---

### 56 — What we did each time

> "Six kinds of work. Six vigilance costs. Six times we redesigned a piece of the universe."

> "And each time, we did the same thing: we didn't ask for more care. We didn't add more review. We looked at the world the AI lives in — and we redesigned part of it."

Point at the list.

> "Memory. Goals. Workflow. Tooling — twice. Result handling."

> "Each choice created a zero-risk zone. Each zone permanently freed vigilance budget for the next thing."

> "That's what brakes are in AI systems. Not better prompts. Not more oversight. A world where careless behavior still succeeds — because the world was designed to catch what the AI won't."

---

### 58 — Formula callback

Point at the formula.

> "Vigilance toil is proportional to throughput times existing body. That's what you've been carrying."

> "But here's the more precise way to say it: vigilance toil is having to worry about whether you can stop. Every change you make, every feature you ship — you're checking the brakes."

Pause.

> "We built brakes today. Six times."

---

### 60 — Main quote payoff

The race car is moving. Let the image and the quote sit together.

Read it slowly.

> "Better brakes let you stop *caring* about stopping."

Pause. Let it land.

> "That's what each zero-risk zone gives you. Not confidence that nothing will go wrong — freedom from having to think about it."

---

## Q&A

After the closing sequence's last slide (s60), next-key returns to the TOC. Use the TOC as the Q&A backdrop — audience can keep picking levers, or ask open questions.

**Backup Q&A questions:**

1. For someone in full "keep the lights on" mode, no AI — where do they start? Smallest brake investment, most vigilance freed.
2. What did you get wrong about safety when you first built Minions? What vigilance toil did you create for yourself?
3. What does it feel like when you've actually achieved zero risk within a scope, versus just low risk?
4. Most surprising place you've applied careless engineering?
5. How do you know which safety level you're actually at? How do you diagnose?
6. You deleted stories and reset context — weren't you worried about losing something important? How do you know what's safe to forget?

---

## Timing guide

*Provisional. Will get rewritten when the front half restructure lands (upshift, demo, transcript-fetcher story).*

| Section | Target | Slides |
|---------|--------|--------|
| Opening | — | 01–02 |
| Motorcar bridge | 3–4 min | 04–11 |
| Vigilance toil (2-factor) | 3–4 min | 12–19 |
| Two examples (tooling demo, result-handling story) | 4–5 min | 24–25, 22 |
| Upshift → 3-factor formula | 2–3 min | 28, 20, 34 |
| TOC hub lands | — | 33 |
| Audience-directed back half | 10–15 min | 38–54 (cycle via TOC) |
| Closing sequence | 2–3 min | 56, 58, 10, 60 |
| **Total talk proper** | **~30 min** | |

After s60 the deck returns to the TOC for open Q&A.
