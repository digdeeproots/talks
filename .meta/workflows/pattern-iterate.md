# Pattern: Blended Iteration Loop

A reusable protocol for refining a document or capturing information with a human collaborator. Step files invoke this by specifying parameters and referencing this file.

---

## How to Invoke

Call this pattern with:

```
Run the blended iteration loop (workflow/pattern-iterate.md):
  goal:          [what the output should contain when done — specific, not vague]
  quality:       raw | internal | final
  doc:           [one or more file paths, one per line if multiple]
  context:       [optional — other files already read that inform the loop]
  target:        [optional — the specific section to show and edit within the doc]
```

The loop runs until the goal is met at the specified quality level, then exits. The caller picks up from there.

**Commit rule:** Every edit to any listed doc — yours or the human's — gets its own commit before the next turn. Stage all listed docs together; do not batch commits across turns.

**Multiple docs:** When `doc:` lists more than one file, treat them as a unit — stage and commit all of them together each turn. In doc review, show each file in sequence. For visual or binary files (SVG, images), describe what changed rather than showing raw content: name the elements affected, the attribute values before and after, and the visual effect.

**`target` parameter:** When set, name the specific section being added or replaced (e.g., "the Upshift section within Recipe 2"). In doc review, show only the target section and its containing context (the surrounding recipe, for example) rather than the full file. When writing, replace only the target section and preserve all other content in the file.

---

## Quality Levels

Three levels. Choose based on how the output will be used.

**`raw`** — data capture. Completeness matters; polish doesn't. Gaps marked with `??` are acceptable if minor.
Exit when: all required sections exist and significant gaps are filled.

**`internal`** — correct and usable. A working document someone on the project could rely on.
Exit when: all sections complete, factually accurate, internally consistent. Workmanlike prose is fine as long as it passes the writing rules.

**`final`** — publication-ready. Something you would send to a client or present to a sponsor.
Exit when: all sections complete, factually accurate, all writing rules satisfied, consider target audience and use appropriate language / writing.

Additional quality dimensions can be layered on:

| Dimension | Values | Meaning |
|-----------|--------|---------|
| `completeness` | partial / full | Whether all sections must be populated |
| `accuracy` | assumed / verified | Whether claims must be grounded in transcript or retro evidence |
| `prose` | workmanlike / polished | Whether `final` writing rules apply |

If not specified: completeness=full, accuracy=assumed for `raw`/`internal`, accuracy=verified for `final`.

---

## Modes

### Interview

Ask one focused question. Wait for the answer. Update the document based on it. Then re-assess.

**Use when:** you know exactly what information is missing, and only the human can supply it. One specific gap.

**Format:**
> "Quick question: [single specific question about a gap]"

Do not explain why you're asking. Do not ask two questions. Do not ask for confirmation of what you already know — only ask for what you don't know.

After the answer: incorporate it silently. Commit. Use a message that quickly describes the question & answer.

---

### Word Vomit

Ask the human to talk freely about a topic for 1-3 minutes, without organizing their thoughts.

**Use when:** you need the human's perspective on something, but the topic is too broad or too personal for a single interview question. The human knows what they think; they just haven't organized it.

**Format:**
> "Talk me through [topic] — don't worry about structure, just tell me what you saw/think/felt. I'll sort it out."

After they respond, run a cleanup pass:
- Fix obvious transcription or speech-to-text errors
- Break walls of text into sentences
- Do not reorganize — preserve their order and structure
- Do not add your own words, interpretations, or completions
- Preserve pauses, corrections, and reframings — they reveal thinking

Then incorporate the cleaned result into the document. Show a brief summary: "I heard: [bullet-point summary of what you captured]." Let them correct.

Once they confirm (or make corrections and confirm), commit. Use a message that describes the topic they explored and the most important points they made.

---

### Diff Review

Show only what changed since the last review. Format:

> "Changed:
> - [Section or field name]: [brief description of what changed and why]
> - ...
>
> Anything to correct?"

**Use when:** your last pass was surgical — you changed 1-4 specific things and nothing else needs the human's attention.

The human can:
- Respond in the chat
- Edit any document in the repo

Your steps:
1. Read any commands or tweaks from the chat response, but don't execute them yet.
2. Follow the steps for Doc Review in "After they say they're done". Execute commands from the chat response as if they were `@ai:` commands.

Do not re-show sections that didn't change. If in doubt about whether a change is small enough for diff review, use doc review instead.

---

### Doc Review

Show the full current document (or the relevant section for large documents). Ask:

> "Take a look — edit anything you want. Use `@ai: [instruction]` for things you want me to handle. Tell me when you're done."

After they say they're done:

1. **Stage and commit everything that changed.** Run `git diff HEAD` to find all modified files — the human may have edited files outside the listed `doc:` paths. Stage all of them together. Use a message that describes what the human did on their turn.
2. **Propagate normative edits.** Every direct edit is normative. Edits may be partial — they show the direction, not necessarily the complete solution. Apply that direction fully: make the same change everywhere it applies, complete any partially-started changes, and remove anything that contradicts the new direction. No back-compatibility. Make it consistent as if the new direction were always the only direction. Announce: "You changed [X] — I applied the same pattern to [N other places]."
3. **Commit your changes.** Use a message that describes what you changed
4. **Process @ai: commands.** See the `@ai:` resolution protocol below.
5. **Show a diff summary.** What changed, briefly. Ask: "Anything else?"

---

#### `@ai:` resolution protocol

Scan all edited documents for `@ai:` directives. Include all of them in your work, not just ones from the human's most recent turn. Each `@ai:` block is a directive from the human. Resolve every one before declaring the turn done. Three legal outcomes per directive:

**(a) Execute it now.** Carry out the instruction. Remove the `@ai:` comment in the same commit.

**(b) Defer it — needing information from the human.** Leave the entire `@ai:` block in place, verbatim. Append `@ai-needs:` lines listing exactly what you need answered before you can execute. Do not remove or rewrite the directive itself. The unresolved directive comes back to the human in the next doc review as an open question.

**(c) Defer it — needing nothing from the human.** Leave the entire `@ai:` block in place, verbatim. Append a one-line `@ai-deferral-note:` explaining why this commit is not addressing it (usually: scope of the current commit). You **must** then immediately start a follow-up commit that addresses the directive and removes the block. Do not end your turn with an unresolved (c) directive.

**Batching for context safety.** If a single doc review surfaces many directives, you may pick a coherent subset, execute (option a) those, defer the rest with (b) or (c) notes, commit, then iterate: next commit picks the next subset, and so on. Each subset is one commit. This keeps any single commit reviewable and prevents context overload from trying to do everything at once.

**Never silently drop a directive.** Removing an `@ai:` block without addressing it is a protocol violation. If the directive is wrong or no longer applies, leave it in place and add an `@ai-needs:` line asking the human to confirm before deletion.

**Use when:** you've made substantial changes, the document needs full-context validation, it's the first draft, or you're not sure what's wrong.

---

## Selection Algorithm

Each turn, ask these questions in order:

**1. Is there a specific piece of information you're missing that only the human can provide?**
- One specific gap → **interview**
- Broad topic / needs their voice → **word vomit**
- No — you have enough to write; the question is whether it's right → continue to 2

**2. How much did your last pass change?**
- 1-4 targeted changes → **diff review**
- Substantial rewrite, first draft, or you changed something structural → **doc review**
- No pass yet (first turn) → **doc review**

**Override to doc review if:**
- Quality is `final` and you haven't done a full doc review since the last round of significant changes
- You suspect the human has a different mental model than what the document reflects
- The human seems uncertain or dissatisfied after a diff review

**Override to interview if:**
- There is a single question whose answer would dramatically reshape the document — ask it first, before showing a draft that will immediately be wrong

---

## Writing Rules (for `final` quality)

Apply before any doc review pass at `final` or `internal` quality:

- **No em-dashes** (`—`): restructure or use a comma, semicolon, colon, or period
- **No three-beat fragments**: "X. Y. Z." — combine or vary
- **No zombie transitions**: Furthermore, Moreover, Additionally, It is worth noting — cut or rephrase
- **No generic closers**: last sentence zooming out vaguely — cut it
- **No padding**: if a sentence restates the prior one, cut the second
- **No forced bolding**: bold only terms of art and field labels
- **No "not X, but Y" constructions**: state what it is directly
- **Bullets stay tight**: one item per bullet, 1-2 lines max

Apply these to your drafts before showing them. Do not ask about style corrections — fix them silently.

---

## Exit Conditions

Check after every round. When met, do not ask another question or start another pass.

**The exit trigger (applies at all quality levels):** The human took a turn without making any substantive changes. Typo fixes and formatting do not count as substantive. Concretely: if the human signals their turn is over (says "done", "looks good", "your turn", etc.) without making substantive changes, that is approval -- exit immediately.

The quality level descriptions below define what "substantive" means for each level -- use them to judge whether a given change moves the document toward the goal or not.

**raw**: Major `??` gaps filled. All required sections populated.

**internal**: All sections complete. No inconsistencies between sections. Factually accurate (claims match what you know from transcript/retro/context). All writing rules applied to the entire document.

**final**: All sections complete. No inconsistencies. Factually accurate. All writing rules applied to the entire document. Correctly written for target audience.

When the condition is met:

> "Done — [goal restated in one phrase]. [One sentence on what the document now contains.]"
