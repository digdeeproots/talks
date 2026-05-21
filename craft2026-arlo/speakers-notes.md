# Speakers Notes — Careless by Design
*Craft 2026 / SAS Open Space · 20-25 min*

---

## How to use this file

Open in a second window / monitor. Each slide is numbered to match `slides.html`.  
Blank slides are listed but have no notes — they're intentional silence / transition space.

Navigation: `←` `→` `Space` advances. `Home` / `End` jump to start/end.  
Model iframe (slide 36): click to interact, `Escape` to return to deck.

---

## Slides

### 01 — BLANK (opening)
*House lights. Let people settle. Say nothing until you're ready.*

---

### 02 — Title: Careless by Design
Introduce yourself briefly if needed. Don't read the slide.  
Pause. Let the title land. "Careless by design" sounds wrong on purpose.

---

### 03 — BLANK
*Let the wrong-feeling title sit with them.*

---

### 04 — Speed limits didn't track engine improvements

Open the motorcar story. Do NOT explain where it's going yet.

> "Speed limits in the early motorcar era didn't track engine improvements. When engines got better, limits didn't go up. Something else had to improve first."

Let that be puzzling.

---

### 05 — BLANK

---

### 06 — They tracked braking improvements

> "They tracked braking improvements. Not better engines — better brakes. We sped up when they invented better brake pads that could stop the wheels. Again with better tire materials that increased traction. In the modern era, when ABS became standard."

Pause.

> "Because you can't go faster if you can't stop."

---

### 07 — BLANK

---

### 08 — "Better brakes let you stop caring about stopping"

Read the quote slowly. It's the thesis of the whole talk.

> "Better brakes don't just let you stop. They let you stop *caring* about stopping."

Pause. Then:

> "Early drivers weren't slow because their engines were weak. They were slow because they had to be *careful*. Every curve demanded attention. Better brakes took away that need for care."

---

### 09 — BLANK

---

### 10 — AI = engine / Safety = brakes

> "AI is the engine. Safety is the brakes."

> "The vigilance toil you're carrying — watching every output, double-checking every change — is what happens when your brakes haven't kept up with your engine."

---

### 11 — BLANK
*Section transition. Slow down.*

---

### 12 — You swapped work-toil for vigilance-toil

> "Most of us using AI have made a swap we didn't fully notice. Work-toil — the grinding of writing code — went down. But vigilance-toil went up. Watching AI closely enough that nothing goes wrong is still toil. It's more stressful toil. Less interesting toil."

> "We haven't delegated. We've relocated the burden."

---

### 13 — BLANK

---

### 14 — "Keeping the lights on"

> "And this isn't new. This isn't an AI problem. Teams in brownfield codebases have been in this trap for years — no AI required."

> "You know what 'keeping the lights on' means. Defects, regressions, debt fires. Not building anything new. Just watching, responding, maintaining."

Pause. Look for recognition — some will be nodding.

> "That feeling has a name. It has a formula."

---

### 15 — BLANK

---

### 16 — The formula

Write it out: **toil ∝ throughput × existing body**

> "Vigilance toil is proportional to two things multiplied together: your throughput — how fast you're making changes — and your existing body of work — how much is already there that can break."

> "Greenfield teams have almost no existing body. So even with weak safety, toil is low. That's why new projects feel fast."

> "Brownfield teams have a large existing body. Every change you make has to not break everything that already exists. Weak safety is catastrophic."

---

### 17 — BLANK

---

### 18 — AI multiplied it

> "Add AI to a brownfield codebase. Throughput goes up — maybe 4x. What happens to vigilance toil? It goes up 4x. If your safety was already marginal, it breaks immediately."

> "AI didn't create this problem. Teams had it before they touched AI. AI just made the math undeniable."

---

### 19 — BLANK
*Section transition. Pivot to the design principle.*

---

### 20 — Careless design principle

Read it slow. Both halves matter.

> "Don't ask them to be more careful. Redesign the environment so that even more careless behavior still succeeds."

> "This applies to humans. It applies to AI. It's the same principle. And it points at something specific: the environment. The world the implementor lives in."

> "So what is the AI's world? What can we actually redesign?"

Let that question hang. Then:

> "Let me show you two examples before we name the model."

---

### 21 — BLANK

---

### 22 — Tooling: AST refactoring tools

> "You've probably used these. Rename-with-all-references. Extract method with behavioral safety guarantees."

> "Within that tool's scope — within what it can do — there is zero risk of accidentally changing behavior. You can be *completely careless* about that class of mistake. The tool handles it."

> "You can still be wrong about the design. That's a different domain. But execution correctness in that scope? Zero vigilance required."

Point at the italicized line at the bottom.

> "That worry is gone. Not reduced. Gone. Within that scope."

> "The tool is part of the developer's world. Whoever designed that tool made carelessness safe — by choosing what to put in the toolbox."

---

### 23 — BLANK

---

### 24 — Result handling: Archive table

> "We were using Minions — our AI orchestration system — to generate database migrations. And it made a small mistake. Not obvious. And there was data loss."

> "The tempting response: add a guardrail. Tell it to be more careful. That doesn't work. It will still mess up."

> "Instead: we added an archive table. Before any migration runs, every pre-migration row is preserved and restorable. The AI can now be careless about data loss — the environment is careful so we don't have to be."

> "That's what I mean by redesigning the world. Not the AI. The world around it."

Point at the italicized line.

> "That worry is gone."

> "The archive table is what happens *after* the AI acts, before the action has irreversible effects. That's a different part of the world than the toolbox. Let's call it result handling."

---

### 25 — BLANK
*Pivot to the model.*

---

### 26 — Two dimensions

Briefly introduce the model. Don't dwell.

> "To talk concretely about what to do, I need two dimensions. Most people have heard of one: agency — who does the work. Human to AI on a spectrum."

> "The one most people haven't named: careless safety. How easily does your environment prevent mistakes? Not 'how safe is it if you're careful' — how safe is it if the implementor is *careless*?"

> "The insight: most teams think they're choosing how much to delegate. They're actually choosing how much vigilance toil to generate."

---

### 27 — BLANK

---

### 28 — Careless Safety Spectrum

Walk through briefly. Don't read them all.

> "Level 5: the right action is the easy action. The wrong action is structurally hard to attempt."

> "Level 4: mistakes can't propagate. The type system, the enforced workflow — it catches the class of mistake before anyone else sees it."

> "Levels 4 and 5 are the only ones that reach zero vigilance within their scope. Everything below still requires a human to watch."

> "Level 0: hope. It's free, but it's not cheap."

---

### 29 — BLANK

---

### 30 — Worries

> "The model gives names to what we're being careful about. It calls them Worries."

> "A Worry is the gut-check — the thing an experienced developer feels when they encounter a kind of work. Not abstract risk. The specific thing you're watching for, every time."

Read a few from the list.

> "Capability regression. Accidental behavior change. Data loss. Scope enforcement gap. Decision inconsistency."

> "These are things you're being careful about *right now*. Most teams have names for the failures, not the Worries. The model names the Worries so you can measure them and invest in eliminating them."

---

### 31 — BLANK

---

### 32 — The Recipe

> "Here's what we're going to do with the model. Five steps."

Read them.

> "Identify the kind of work. Name the Worry. Look at what safety level we're actually at. Look at what level 4 or 5 would require. Then — and this is the interesting part — figure out which part of the AI's world we need to redesign to get there."

> "Step 5 is where the world-building happens. Let me show you what's available."

---

### 33 — BLANK

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

### 35 — BLANK

---

### 36 — Model (iframe)
*Click to let audience explore the model. Walk them through a Worry and its safety options.*  
*Escape returns to deck when ready to continue.*

Show in the model if interactive:
- A kind of work (e.g. Evolving the design)
- Its Worries (Accidental behavior change, Design regression)
- The safety options for one Worry, and what level each reaches

---

### 37 — BLANK
*Transition. Now we walk the recipe.*

> "Let's use it. Six times. Each time, a different kind of work, a different Worry, a different part of the universe."

---

### 38 — Beat 1 setup: Decision inconsistency

> "Planning and scoping during iterative demos."

> "Here's what happens. We're working towards a plan, mid-demo we discover a new idea. That idea shifts a lot of future work. Now the code doesn't align with the plan that nominally built it."

> "The Worry: decision inconsistency. 'Does this contradict something we decided earlier? Are we building on conflicting assumptions?'"

> "Currently at level 1. Every session: re-explain the context, re-anchor intent. And the AI still sometimes picks up the old direction."

---

### 39 — Beat 1 story: Memory

> "Universe aspect: Memory."

> "Here's what we do. As part of every story completion, we delete the story entirely. Not mark it done. Delete it."

> "Then we rewrite all the future — not done — stories to be consistent with the new direction. All plans are in source control, so we can always revert. But we don't carry history forward."

> "Then we reset context to a defined base state — a point where the AI already understands the general intent, but has no memory of alternative pasts."

> "The AI is unaware of any other directions that were considered. It just looks at the code — that's the present — and sees a plan that builds from there in one clear direction. It can't blend old ideas with new ones. It has no access to old ideas."

> "The plan was always this direction. It just doesn't know otherwise."

Pause.

> "Decision inconsistency: structurally impossible. Level 0 → 4."

---

### 40 — BLANK

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

> "Structure, recipients, rendering: zero-risk zones. They're solved permanently. You review the words."

Pause.

> "Each piece that goes deterministic is a zero-risk zone you never pay for again. Make one thing zero-risk at a time. Each zone frees vigilance budget for the next thing."

---

### 43 — BLANK

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

### 46 — BLANK

---

### 47 — Beat 4 setup: Scope enforcement gap

> "Source control in an agentic codebase."

> "The Worry: scope enforcement gap. 'Is the scope we defined actually enforced? Or does the agent have more access than it should?'"

> "With raw git: level 1. Watch every commit. An agent with git access can force-push, delete branches, corrupt history. You're vigilant because you have to be."

---

### 48 — Beat 4 story: Tooling

> "Universe aspect: Tooling."

> "Minions never touch git. Not because we asked them not to — because there's no git tool in their toolbox."

> "Instead there's an MCP tool: movement-based branching. The AI can start a movement, commit, merge. But it doesn't know what git commands run underneath. All the right behaviors are implemented in the tool. None of the wrong ones are accessible."

> "Pre-commit hooks are enforced by the tool, not the AI. For merge conflicts: the agent gets a limited git toolset for exactly that one branch, resolves the conflict, then the toolset is revoked."

> "The AI cannot violate git invariants. Not because it's careful. Because there's nothing to route around."

Pause.

> "Level 1 → 4. Structurally impossible."

---

### 49 — BLANK

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

> "Level 0-1 → 5 within scope."

---

### 52 — BLANK

---

### 53 — Beat 6 setup: Data loss

> "Database migrations. The AI generates a migration; it runs; data changes state."

> "The Worry: data loss. 'Did the migration change what the data means? Can I get it back if something went wrong?'"

> "We started here at level 0. No mechanism. Hope. And then one small mistake — not obvious — and there was unrecoverable data loss."

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

### 55 — BLANK
*Final transition.*

---

### 56 — What we did each time

> "Six kinds of work. Six Worries. Six times we walked the recipe."

> "And each time, we did the same thing: we didn't ask for more care. We didn't add more review. We looked at the world the AI lives in — and we redesigned part of it."

Point at the list.

> "Memory. Goals. Invocation timing. Tooling — twice. Result handling."

> "Each choice created a zero-risk zone. Each zone permanently freed vigilance budget for the next thing."

> "That's what brakes are in AI systems. Not better prompts. Not more oversight. A world where careless behavior still succeeds — because the world was designed to catch what the AI won't."

---

### 57 — BLANK

---

### 58 — Teams obsess over the engine

> "Teams obsess over the engine. Better AI, better models, better prompts. More throughput."

> "But the vigilance toil stays. Because the vigilance toil was never about the engine. It was about the brakes."

---

### 59 — BLANK

---

### 60 — "What are your brakes right now?"

Don't read it. Let it sit.

Then:

> "Not rhetorical. I want you to actually answer this."

> "What is the highest-cost Worry in your current work? What kind of work are you being careful about, every single day, that an environment investment could make unnecessary?"

> "Which part of the universe hasn't been designed yet?"

Invite responses. This is the open discussion for Craft. Let it go where it goes.

> "That's where to invest. Not in a better model. In better brakes."

> "Better brakes don't just let you stop. They let you stop caring about stopping."

---

### 61 — BLANK (Q&A)
*Stay here during Q&A. Black screen. You're the focus.*

**Backup Q&A questions:**

1. For someone in full "keep the lights on" mode, no AI — where do they start? Smallest brake investment, most vigilance freed.
2. What did you get wrong about safety when you first built Minions? What vigilance toil did you create for yourself?
3. What does it feel like when you've actually achieved zero risk within a scope, versus just low risk?
4. Most surprising place you've applied careless engineering?
5. How do you know which safety level you're actually at? How do you diagnose?
6. You deleted stories and reset context — weren't you worried about losing something important? How do you know what's safe to forget?

---

## Timing guide

| Section | Target | Slides |
|---------|--------|--------|
| Opening | — | 1–3 |
| 1. Motorcar | 3–4 min | 4–11 |
| 2. Vigilance Toil | 3–4 min | 12–19 |
| 3. Universe intro | 3–4 min | 20–25 |
| Model | 3–4 min | 26–37 |
| 4. Walking the Recipe | 10–12 min | 38–55 |
| 5. Back to Motorcar | 2 min | 56–61 |
| **Total** | **24–30 min** | |

*SAS version: compress section 3 to one example, skip model iframe interaction, run beats 4–6 only (tools + result handling), ~18 min.*
