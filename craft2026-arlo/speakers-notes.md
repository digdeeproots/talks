# Speakers Notes — Careless by Design
*Craft 2026 / SAS Open Space · 20-25 min*

---

## How to use this file

Open in a second window / monitor. Each slide is numbered to match `slides.html`.  
Blank slides are listed but have no notes — they're intentional silence / transition space.

Navigation: `←` `→` `Space` advances. `Home` / `End` jump to start/end.  
Model iframe (slide 24): click to interact, `Escape` to return to deck.

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

> "They tracked braking improvements. Not better engines — better brakes."

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

Pause. Look for recognition in the room — some will be nodding.

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
*Section transition. This is the pivot into the model.*

---

### 20 — Two dimensions

Briefly introduce the model. Don't dwell.

> "To talk concretely about what to do, I need two dimensions. Most people have heard of one: agency — who does the work. Human to AI on a spectrum."

> "The one most people haven't named: careless safety. How easily does your environment prevent mistakes? Not 'how safe is it if you're careful' — how safe is it if the implementor is *careless*?"

> "The insight: most teams think they're choosing how much to delegate. They're actually choosing how much vigilance toil to generate."

---

### 21 — BLANK

---

### 22 — Careless Safety Spectrum

Walk through the levels briefly. Don't read them all.

> "Level 5: the right action is the easy action. You don't try the wrong thing and get caught — the tool makes the correct action trivially easy."

> "Level 4: mistakes can't propagate. The type system, the enforced workflow — it catches the class of mistake before anyone else sees it."

> "Levels 4 and 5 are the only ones that reach zero vigilance within their scope. Everything below still requires a human to watch."

> "Level 0: hope. It's free, but it's not cheap."

---

### 23 — BLANK

---

### 24 — Model (iframe)
*Click to let audience explore the model. Walk them through a few responsibilities.*  
*Escape returns to deck when ready to continue.*

Key things to show in the model if interactive:
- One responsibility with a work delegation and safety level
- The gap between the two: that's vigilance toil
- Moving the safety level up one notch: what that looks like

---

### 25 — BLANK

---

### 26 — What does vigilance look like in human brownfield?

> "Before we talk about AI, let's ground the model in something you already know. Human brownfield teams. No agents."

> "What kinds of vigilance do you carry every day?"

Invite the room to name some. Capture a few. Then continue.

---

### 27 — BLANK

---

### 28 — AST refactoring tools (level 5)

> "You've probably used these. Rename-with-all-references. Extract method with behavioral safety guarantees."

> "Within that tool's scope — within what it can do — there is zero risk of accidentally changing behavior. You can be *completely careless* about that class of mistake. The tool handles it."

> "You can still be wrong about the design. That's a different domain. But execution correctness in that scope? Zero vigilance required."

---

### 29 — BLANK

---

### 30 — Type systems (level 4)

> "Type systems are often thought of as a developer-experience tool. But they're an assurance mechanism."

> "When the type checker runs before your output is visible to anyone else — and when it's enforced so you can't easily bypass it — that class of mistake cannot propagate. Someone else can never see it."

> "That's level 4. Not because of when it runs. Because it blocks propagation."

---

### 31 — BLANK

---

### 32 — Zero risk vs low risk

This is a key conceptual slide. Slow down.

> "Here's a distinction I want to draw carefully: low risk versus zero risk within a bounded scope."

> "Low risk still requires vigilance. Some fraction of the time, something will go wrong. You still need to be watching."

> "Zero risk within a bounded scope requires no vigilance at all. Once you've engineered that class of mistake out of existence, you spend nothing on it."

> "This is the engineering move: don't make mistakes less likely — define a scope within which they're impossible."

---

### 33 — BLANK

---

### 34 — Recipe: one notch at a time

> "The recipe is simple. Pick one error class you're carrying vigilance toil for. Find what safety level you're currently at. Move up one notch."

> "Don't try to solve everything. One zero-risk zone at a time. Each zone permanently frees budget for the next thing."

---

### 35 — BLANK
*Pause. Transition to the AI-specific section.*

---

### 36 — 4x throughput = 4x toil

> "Now add AI. Throughput goes up — let's say 4x. What happens?"

Point at the formula from slide 16.

> "Vigilance toil times four. If your safety was already marginal, it breaks immediately. Executive function can't sustain 4x the review burden."

---

### 37 — BLANK

---

### 38 — No human to blame

> "There's another dynamic that makes this worse. At low agency, when something fails, you can attribute it to individual human error. You tell yourself Bob will improve. Stakeholders tolerate it."

> "As AI agency increases, that fiction disappears. You can't ask the AI to be more careful. External stakeholders raise their expectations because the human excuse is gone."

> "Same failure rate. No longer acceptable. The gap widens."

---

### 39 — BLANK

---

### 40 — What to change before adding AI

> "So here's what you do before adding AI. Identify the error classes with the highest body-at-risk. Move their safety to level 3 or above. Build the brakes first."

> "Then let the engine run. You've already prepared."

---

### 41 — BLANK
*Transition to the concrete demos / recipes section.*

---

### 42 — Careless design principle

Read it slow.

> "When someone makes a mistake, don't ask them to be more careful. Redesign the environment so that even more careless behavior still succeeds."

> "This applies to humans. It applies to AI. Same principle."

> "The measure of success is not 'how safe is it?' It's 'how careless can the implementor be and still succeed?'"

---

### 43 — BLANK

---

### 44 — Migration story

Tell the full story. This is a demo / story section.

> "We were using Minions to create database migrations. We let it run and it went fine for a while. Then it made a small mistake — not obvious — and there was data loss."

> "The tempting response: add guardrails. Tell it to be more careful. That doesn't work. It will still mess up."

> "Instead, we made it *more careless*. Three changes."

Walk through the three bullets.

> "Now it can be careless about the migration and it will still be OK. The environment made carelessness safe."

---

### 45 — BLANK

---

### 46 — Git is off-limits

> "Minions never touch git. Not because we asked them not to — because there's no git tool available to them."

> "Instead there's an MCP tool: movement-based branching. The AI can start a movement, make commits, merge. But it doesn't know what those operations do internally. All the right behaviors are implemented. None of the wrong ones are available."

> "The AI cannot produce a git state that violates our invariants. Not because it's careful. Because the tool makes it structurally impossible."

---

### 47 — BLANK

---

### 48 — Progressive safety (coaching workflow)

> "The coaching workflow started as just a text file Claude would read. That's level 1 — full vigilance. I was watching every output."

> "Over time, I moved pieces to deterministic code. The transcript fetcher. The email template assembly. Each one became a zero-risk zone."

> "Now I only pay attention to the words. Structure, rendering, recipient list — those are solved. Permanently."

> "Make one thing zero-risk at a time. Each piece you solve frees budget for the next thing."

---

### 49 — BLANK

---

### 50 — The agent's universe

> "The agent's universe — everything it perceives and can affect — is your design surface."

List a few elements, pause on each:
- Memory: what it can recall, for how long
- Context: what information is surfaced at invocation
- Goals: how narrowly the task is scoped
- Tooling: what operations are available (and what isn't)
- Result handling: what happens after it acts

> "Each of these is a design choice. Each can create or eliminate zero-risk zones."

---

### 51 — BLANK
*Final transition. Coming back to the motorcar.*

---

### 52 — Teams obsess over the engine

> "Teams obsess over the engine. Better AI, better prompts, more models. More throughput."

> "But the vigilance toil stays. Because the vigilance toil was never about the engine. It was about the brakes."

---

### 53 — BLANK

---

### 54 — "What are your brakes right now?"

Don't read it. Let it sit.

Then:

> "Not rhetorical. I want you to actually answer this."

> "What is the highest-cost vigilance toil in your work right now? What error class? What are you being careful about, every single day, that an environment investment could make unnecessary?"

Invite responses. This is the open discussion for Craft. Let it go where it goes.

> "That's where to invest. Not in a better model. In better brakes."

---

### 55 — BLANK (Q&A)
*Stay here during Q&A. Black screen. You're the focus.*

**Backup Q&A questions:**

1. For someone in full "keep the lights on" mode, no AI — where do they start? Smallest brake investment, most vigilance freed.
2. What did you get wrong about safety when you first built Minions?
3. What does it feel like when you've actually achieved zero risk within a scope, versus just low risk?
4. Most surprising place you've applied careless engineering?
5. How do you know which safety level you're actually at? How do you diagnose?

---

## Timing guide

| Section | Target | Slides |
|---------|--------|--------|
| 1. Motorcar | 3–4 min | 4–11 |
| 2. Vigilance Toil | 4–5 min | 12–19 |
| 3. The Model | 3–4 min | 20–25 |
| 4. Non-AI Brownfield | 5–6 min | 26–35 |
| 5. What Changes at 4x | 3–4 min | 36–41 |
| 6. Reducing Vigilance Toil | 5–6 min | 42–51 |
| 7. Back to the Motorcar | 2 min | 52–55 |
| **Total** | **25–29 min** | |

*SAS version: compress sections 4–6, skip model iframe, run ~20 min.*
