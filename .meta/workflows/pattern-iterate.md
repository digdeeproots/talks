# Pattern: Blended Iteration Loop

A reusable protocol for refining a document or capturing information with a human collaborator. Step files invoke this by specifying parameters and referencing this file.

---

## How to Invoke

Step files call this pattern with:

```
Run the blended iteration loop (workflow/pattern-iterate.md):
  goal:          [what the output should contain when done — specific, not vague]
  quality:       raw | internal | final
  doc:           [one or more file paths, one per line if multiple]
  context:       [optional — other files already read that inform the loop]
  target:        [optional — the specific section to show and edit within the doc]
  commit_prefix: [optional — replaces "revise:" in all commit messages]
```

The loop runs until the goal is met at the specified quality level, then exits. The caller picks up from there.

**Commit rule:** Every turn ends in a clean git state. Before taking your turn, run `git status` and commit every modified or untracked file in the repo — not just the listed docs. Stage all changes; do not leave anything dirty. The human's turn may touch any file, not only the ones named in `doc:`.

**Treat all edits as your input.** After committing the human's turn, review every changed file — not just the listed docs — for normative edits and `@ai:` commands. The set of files changed is the set of files you must review.

**Multiple docs:** When `doc:` lists more than one file, treat them as a unit — stage and commit all of them together each turn. In doc review, show each file in sequence. For visual or binary files (SVG, images), describe what changed rather than showing raw content: name the elements affected, the attribute values before and after, and the visual effect.

**`target` parameter:** When set, name the specific section being added or replaced (e.g., "the Upshift section within Recipe 2"). In doc review, show only the target section and its containing context (the surrounding recipe, for example) rather than the full file. When writing, replace only the target section and preserve all other content in the file.

**`commit_prefix` parameter:** When set, use it in place of `"revise:"` in every commit message in this loop. The suffix is always the doc filename or a short description of what changed.

---

## Quality Levels

Three levels. Choose based on how the output will be used.

**`raw`** — data capture. Completeness matters; polish doesn't. Gaps marked with `??` are acceptable if minor.
Exit when: all required sections exist and significant gaps are filled.

**`internal`** — correct and usable. A working document someone on the project could rely on.
Exit when: all sections complete, factually accurate, internally consistent. Workmanlike prose is fine.

**`final`** — publication-ready. Something you would send to a client or present to a sponsor.
Exit when: all sections complete, factually accurate, all writing rules satisfied (see below).

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

After the answer: incorporate it silently. Commit:
```bash
git -C "D:/_OtherProfessional/coaching-clients" add <doc(s)> && git -C "D:/_OtherProfessional/coaching-clients" commit -m "revise: <doc name>"
```
Then re-assess whether the loop should continue.

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

Then incorporate the cleaned result into the document. Show a brief summary: "I heard: [2-3 bullets of what you captured]." Let them correct.

Once they confirm (or make corrections and confirm), commit:
```bash
git -C "D:/_OtherProfessional/coaching-clients" add <doc(s)> && git -C "D:/_OtherProfessional/coaching-clients" commit -m "revise: <doc name>"
```

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
- Say "looks good" → commit the AI's changes from this pass, then proceed
- Make corrections → apply them, commit, re-assess
- Leave `@ai:` commands → process them, commit, re-assess

In all cases, commit before the next turn:
```bash
git -C "D:/_OtherProfessional/coaching-clients" add <doc(s)> && git -C "D:/_OtherProfessional/coaching-clients" commit -m "revise: <doc name>"
```

Do not re-show sections that didn't change. If in doubt about whether a change is small enough for diff review, use doc review instead.

---

### Doc Review

Show the full current document (or the relevant section for large documents). Ask:

> "Take a look — edit anything you want. Use `@ai: [instruction]` for things you want me to handle. Tell me when you're done."

After they say they're done:

1. **Commit their edits as-is.** Message: `"revise: [doc name]"`
2. **Propagate normative edits.** Every direct edit is normative — if they changed a pattern in one place, apply it everywhere it applies. Do not preserve the old pattern for back-compat; make everything consistent with what they started. Announce this: "You changed [X] — I applied the same pattern to [N other places]."
3. **Process @ai: commands.** Treat each as a direct instruction. Execute it. Remove the comment. If the instruction implies similar changes elsewhere, apply them without being asked.
4. **Commit your changes.** Message: `"polish: [doc name]"`
5. **Show a diff summary.** What changed, briefly. Ask: "Anything else?"

**On normative completeness:** Direct edits show a direction, not necessarily a complete implementation. When the human edits one instance of a pattern, update all instances — don't wait to be told. When an `@ai:` command implies a structural change (moving something to a different section, adding a concept that should appear elsewhere), apply it fully rather than minimally.

**Deletions are normative edits.** When the human deletes something, treat it as if it was never there — remove it everywhere it appears, not just where it was deleted. Use judgment: sometimes a deletion is a tidy (remove an outdated note); sometimes it means eliminating a concept from this context entirely. When in doubt, apply the deletion more broadly rather than less. Do not add back-compat stubs, references, or summaries of what was removed.

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

Apply before any doc review pass at `final` quality:

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

**The exit trigger (applies at all quality levels):** Either party took a turn without making any substantive changes. Typo fixes and formatting do not count as substantive. Concretely: after the human's turn, if you cannot identify anything you need to do to meet the goal, the loop is done -- the human finished it. Also concretely: if the human signals their turn is over (says "done", "looks good", "your turn", etc.) without making substantive changes, that is approval -- exit immediately.

The quality level descriptions below define what "substantive" means for each level -- use them to judge whether a given change moves the document toward the goal or not.

**raw**: Major `??` gaps filled. All required sections populated.

**internal**: All sections complete. No inconsistencies between sections. Factually accurate (claims match what you know from transcript/retro/context).

**final**: All sections complete. No inconsistencies. Factually accurate. All writing rules applied to the entire document.

When the condition is met:

> "Done — [goal restated in one phrase]. [One sentence on what the document now contains.]"

Then return control to the step file.

---

## Timebox Awareness

If the session has a timebox (managed externally by do-today) and you are near the limit, prioritize:
1. Get the most critical remaining gap filled (interview or word vomit)
2. Commit whatever is complete, even if below target quality
3. Mark the document with `<!-- TODO: [what remains] -->` at the top so the next session knows what's left

Do not ask the human how much time is left — they'll see the terminal title. Keep moving.
