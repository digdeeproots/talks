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
*Pivot to the design principle.*

---

### 20 — Careless design principle

Read it slow. Both halves matter.

> "Stop being more careful. Change the world. Make even more careless behavior succeed."

> "This applies to humans. It applies to AI. It's the same principle. And it points at something specific: the environment. The world the implementor lives in."

> "So what is the AI's world? What can we actually redesign?"

Let that question hang. Then:

> "Let me show you two examples before we name the model."

---

### 22 — Tooling: AST refactoring tools

> "You've probably used these. Rename-with-all-references. Extract method with behavioral safety guarantees."

> "Within that tool's scope — within what it can do — there is zero risk of accidentally changing behavior. You can be *completely careless* about that class of mistake. The tool handles it."

> "You can still be wrong about the design. That's a different domain. But execution correctness in that scope? Zero vigilance required."

Point at the italicized line at the bottom.

> "That worry is gone. Not reduced. Gone. Within that scope."

> "The tool is part of the developer's world. Whoever designed that tool made carelessness safe — by choosing what to put in the toolbox."

---

### 24 — Result handling: Archive table

> "We were using Minions — our AI orchestration system — to generate database migrations. And it made a small mistake that caused data loss."

> "The tempting response: add a guardrail. Tell it to be more careful. That doesn't work. It will still mess up."

> "Instead: we added an archive table. Before any migration runs, every pre-migration row is preserved and restorable. The AI can now be careless about data loss — the environment is careful so we don't have to be."

> "That's what I mean by redesigning the world around the AI."

Point at the italicized line.

> "That worry is gone."

> "The archive table is what happens *after* the AI acts, before the action has irreversible effects. That's a different part of the world than the toolbox. Let's call it result handling."

---

### 25 — BLANK
*Pivot to the model.*

Stuff to add; rework around.

* The cost to protect is not determined by your agent's ability. It is determined by the universe around your agent. Change thee universe and you change your vigilence toil. Change the agent and you might use fewer tokens or time to do the work, but vigilence toil is unchanged. Your agent skills are irrelevant. Which agent you use is irrelevant. Your LLM is irrelevant. All that matters is the universe around your agent - what you allow it to do and what you make it capable of doing.
* The goal is not to make a better agent. It is to make a universe in which even crappy agents will succeed. That is carelessness engineering.

General flow:
1. Bridge (without the AI / safety stuff brakes slide?)
2. Vigilance toil (2-factor form)
3. 2 examples: demo movement-based branching (risk notation), and either demo of transcript download & analysis or story tell about archive table.
4. Vigilance toil (3-factor form)
5. Upshift - walk through the learning sequence. Get to the goal (carelessness). Then present the rest as "how do we achieve that goal?"
6. Universe of levers (the solo ground / design surface for post-upshift thinking, also the rubric / model to reference in the recipe - with one probe question or concrete mechanism for each).
7. The recipe.
8. audience-guided stories / examples: pick a lever, get a story. Or pick a process stage, get a recipe.
9. Close


---

### 28 — Careless Safety Spectrum

Walk through briefly. Don't read them all.

> "Level 5: the right action is the easy action. The wrong action is structurally hard to attempt."

> "Level 4: mistakes can't propagate. The type system, the enforced workflow — it catches the class of mistake before anyone else sees it."

> "Levels 4 and 5 are the only ones that reach zero vigilance within their scope. Everything below still requires a human to watch."

> "Level 0: hope. It's free, but it's not cheap."

---

### 33 — TOC hub

Land here after the upshift. This is the visual menu for the back half.

> "Here's where we go from here. Pick anything. We'll walk it together. Come back here, pick another."

Cards (placeholder; real two-diagram TOC lands in a later session):
- Memory / Decision inconsistency → s38
- Goals / Consistency violation → s41
- Invocation timing / Oversight gap → s44
- Tooling / Scope enforcement → s47
- Tooling (operations) / Accidental behavior change → s50
- Result handling / Data loss → s53
- Synthesis / Closing sequence → s56

Click a card to enter that sequence. After the sequence's last slide, next-key returns here automatically. Press `T` from anywhere to summon the TOC.

Insert the closing sequence at a natural break — not necessarily after all six beats.

---

### 34 — Universe as design surface

> "The agent's universe. Everything it perceives and can act on."

Point to each element as you name it.

> "Memory: what it can recall, for how long, across sessions."
> "Context: what information is surfaced at invocation — what it can see."
> "Goals: how narrowly the task is defined — what it's trying to accomplish."
> "Tooling: what operations are in the toolbox — and crucially, what's not."
> "Invocation timing: when the AI runs versus when deterministic code runs."
> "Result handling: what happens between its output and the world changing."

> "Each of these is a design choice. Each can create or eliminate a zero-risk zone. Step 5 of the recipe is choosing which lever to pull."

---

### 38 — Beat 1 setup: Decision inconsistency

> "Discovery during iterative demos."

> "Here's what happens. We're working towards a plan, mid-demo we discover a new idea. That idea shifts a lot of future work. Now the code doesn't align with the plan that nominally built it and the plan doesn't align with what we want next."

> "The Worry: decision inconsistency. 'Does this contradict something we decided earlier? Are we building on conflicting assumptions?'"

> "Currently at level 1. Every session: re-explain the context, re-anchor intent. And the AI still sometimes picks up the old direction."

---

### 39 — Beat 1 story: Memory

> "Universe aspect: Memory. This one is delightfully Orwellian."

> "Here's what we do. As part of every story completion, we delete the story entirely. Not mark it done. Delete it."

> "Then we rewrite all the future — not done — stories to be consistent with the new direction. All plans are in source control, so we can always revert. But we don't carry history forward."

> "Then we reset context to a defined base state — a point where the AI already understands the general intent, but has no memory of alternative pasts."

> "The AI is unaware of any other directions that were considered. It just looks at the code — that's the present — and sees a plan that builds from there in one clear direction. It can't blend old ideas with new ones. It has no access to old ideas."

> "The plan was always this direction. It just doesn't know otherwise."

Pause.

> "Decision inconsistency: structurally impossible."

---

### 41 — Beat 2 setup: Consistency violation

> "Recurring structured output. Specifically: the coaching workflow. Daily — pull transcripts, plan lessons, write the status email, extract techniques."

> "The Worry: consistency violation. Does this email follow the same structure as last time? Did the AI invent sections? Did it change the format?"

> "Started at level 1. 'Read this file and follow it.' Watched every output."

---

### 42 — Beat 2 story: Goals

> "Universe aspect: Goals."

> "Instead of 'write the status email,' the AI receives a structured spec. This section gets two sentences of trend analysis. This section gets a named metric. This section gets one recommendation."

> "Claude writes sentences. Deterministic code assembles everything else — structure, recipient list, HTML rendering."

> "I gave Claude a goal that is trivial to verify, and used other techniques to create safety for the rest of the task."

Pause.

> "Each piece that goes deterministic is a zero-risk zone you never pay for again. Make one thing zero-risk at a time. Each zone frees vigilance budget for the next thing."

---

### 44 — Beat 3 setup: Oversight mechanism gap

> "Session data fetching. The coaching workflow starts with: get the right transcript, for the right team, for today."

> "The Worry: oversight mechanism gap. 'Did the AI keep going past the point where I should have been consulted?' Or in this case: did it fetch the wrong transcript and proceed to build a lesson plan on it — while I'm assuming it got the right one?"

---

### 45 — Beat 3 story: Invocation timing

> "Universe aspect: Invocation timing."

> "Deterministic code fetches the transcript. It knows which team, which day, which session. On success: Claude is never invoked. It doesn't even know a fetch happened."

> "On failure — wrong date, ambiguous session, network error — Claude is called with the specific failure as context. It helps resolve the one thing deterministic code couldn't handle."

> "The system decides when to call Claude. It calls Claude only when deterministic code admits it can't handle something."

> "You don't have to decide when to trust it. The system decides by condition."

---

### 47 — Beat 4 setup: Scope enforcement gap

> "Source control in an agentic codebase."

> "The Worry: policy enforcement gap. Will the agent correctly assess risk? Will it fill in the right commit notation and branch cleanly so that it plays along well with all our other systems?"

> "With raw git: level 1. Watch every commit. An agent with git access can force-push, delete branches, corrupt history. You're vigilant because you have to be."

---

### 48 — Beat 4 story: Tooling

> "Universe aspect: Tooling."

> "Minions never touch git. There's no git tool in their toolbox."

> "Instead there's an MCP tool: movement-based branching. The AI can start a movement, commit, merge. But it doesn't know what git commands run underneath. All the right behaviors are implemented in the tool. None of the wrong ones are accessible."

> "Risk is assessed by the tool, not the AI. It judges what tools the AI used and how, and makes a deterministic risk assessment."

> "The AI cannot violate git invariants It lacks the tools to cheat with."

Pause.

> "Level 1 → 4. Structurally impossible."

---

### 50 — Beat 5 setup: Accidental behavior change

> "Structural refactoring in legacy code. Renames, extractions, relocations across a large codebase."

> "The Worry: accidental behavior change. 'Did my restructuring change what the code actually does, even slightly?'"

> "We showed AST tools solving this for human developers back in section three. Now the question is: what about AI?"

---

### 51 — Beat 5 story: Tooling (operation semantics)

> "Universe aspect: Tooling — but this time it's not about which tools exist. It's about what the available operations can *guarantee*."

> "No edit-file tool for Minions. Only AST-based transformation tools — provably safe refactorings. The AI makes design choices; the tool executes them with behavioral safety guarantees."

Point at the two-up.

> "Two named domains emerge. Design correctness: was this the right move? The AI can be wrong about that. And undo is just as easy as do — wrong abstractions are cheap to reverse."

> "Behavioral safety: did it change what the code does? The tool guarantees no. Not possible to violate within scope."

> "'Wrong about the design' and 'introduced a bug' are now categorically different failure modes. Only the first remains possible."

---

### 53 — Beat 6 setup: Data loss

> "Database migrations. The AI generates a migration; it runs; data changes state."

> "The Worry: data loss. 'Did the migration change what the data means? Can I get it back if something went wrong?'"

> "We started here at level 0. No mechanism. Hope. And then one small mistake caused unrecoverable data loss."

---

### 54 — Beat 6 story: Result handling

> "Universe aspect: Result handling."

> "Three layers. Each intercepts between the AI's output and irreversible effect."

Point at each bullet as you tell it.

> "Archive table: before any migration runs, every pre-migration row is preserved. Always restorable. The AI can be careless about loss."

> "Bidirectional remapping: after the AI writes the migration, another step generates a full value map — source to destination and back — and deterministic code verifies it meets criteria before execution. A test turns the map into a migration check."

> "Extracted library: all the migration machinery was debugged once and extracted. The AI writes only the migration definition. Deterministic code handles execution."

> "Deterministic pre-processing → AI creative decision → deterministic execution. The Determinism Sandwich."

> "Level 0 → 4. Data loss is structurally impossible."

---

### 56 — What we did each time

> "Six kinds of work. Six Worries. Six times we walked the recipe."

> "And each time, we did the same thing: we didn't ask for more care. We didn't add more review. We looked at the world the AI lives in — and we redesigned part of it."

Point at the list.

> "Memory. Goals. Invocation timing. Tooling — twice. Result handling."

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
