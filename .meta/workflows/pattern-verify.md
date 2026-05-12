# Pattern: Verify Record

A reusable checkpoint that runs at the end of every step. It scans what was learned or decided during the current Claude Code work session for this step and ensures every significant insight is recorded in a structured, findable form -- not just mentioned in conversation or buried in prose.

This is what prevents insights from falling through the gaps between steps.

---

## How to Invoke

Step files call this pattern after their main work and commit, with:

```
Run the verify-record pattern (workflow/pattern-verify.md):
  step:     [name of the step just completed, e.g. "orient"]
  outputs:  [files written by this step, one per line]
  context:  [other files already read -- optional]
```

The pattern runs, makes any needed fixes, commits them, and returns control to the step file.

---

## What Counts as Significant

A significant insight is anything the coach said or decided during this step that:

- Will shape how a future step executes (a decision, a gap, a constraint, an explicit task)
- Will shape how a future day's orient or plan runs (a carry-forward, a team behavior pattern, a planning direction)
- Reveals a mismatch between what the workflow expected and what actually happened
- Was a correction to something already written (and the correction may imply a structural gap)

Things that don't count: general conversation, things already in a structured field, one-off remarks with no future relevance.

---

## What "Recorded in a Useful Way" Means

Recorded means: in a structured field that a future step will actually read and act on.

Not recorded means any of these:
- It only appears in `planning_notes` or another prose blob, with no structured field pointing to it
- It exists in the conversation but not in any file
- It's in an `extra-context` string that no step uses for decisions
- It's a task or obligation that was named but not in `carry_forward_tasks` or `day-state.tasks`

When in doubt, ask: if a fresh Claude Code session opened tomorrow with only the files (no conversation history), would this insight surface automatically? If no, it's not recorded usefully.

---

## Procedure

**Step 1 -- List what was said.**

Scan the conversation from this step's session: everything the coach said, all corrections they made, planning decisions, named tasks, things they flagged as important. Produce an internal list of 3-8 significant insights. Do not show this list to the user.

**Step 2 -- Check each one.**

For each insight, determine: is it in a structured field that a future step will read? Check the files listed in `outputs:` and `context:`. If yes, note where. If no, it's a gap.

**Step 3 -- For each gap:**

a. Name the insight and which future step would need it.

b. Identify the best location: which file, which field or section.

c. Read `workflow/day-state.schema.md` to check whether that field exists.

d. **If the field doesn't exist:** add it everywhere it belongs before writing to it:
   - `workflow/day-state.schema.md` -- full schema block and field reference table
   - `workflow/00-collect-raw-data.md` -- seed value in the analysis.json write block
   - Any step that will write to this field -- add the write with a comment explaining when to populate it
   - Any step that will read this field -- add the read with a note on how to use it
   - Commit the schema and workflow changes before writing the insight itself

e. Write the insight to the field in the appropriate output file. Use the same read-update-write pattern as all other steps.

**Step 4 -- Report and commit.**

If no gaps were found:

> "Verify: all significant insights recorded."

No commit needed.

If gaps were fixed:

> "Verify: [N] gap(s) found and fixed."
>
> - [Field added or updated]: [one sentence: what was missing and where it now lives]
> - ...

Then commit:

```bash
git -C "D:/_OtherProfessional/coaching-clients" add -A
git -C "D:/_OtherProfessional/coaching-clients" commit -m "verify: <STEP> <CLIENT> <SERIES> <DAY>"
```

If there is a gap you cannot resolve without the coach's input (the insight is ambiguous, you're not sure where it belongs, or adding the field requires a structural decision):

> "Verify: one thing I'm not sure how to record -- [one sentence: what the insight is and why you're unsure]. Where should this live?"

Take one round of input. Then resolve it using steps 3b-3e above.

---

## Schema Change Protocol

When adding a new field to `analysis.json`, follow this order exactly:

1. Update `workflow/day-state.schema.md` -- full schema block + field reference row
2. Update `workflow/00-collect-raw-data.md` -- add the field with its default value to the analysis seed
3. Update the step that owns (writes) the field -- add the write block with comment
4. Update any steps that read and act on the field -- add read instructions
5. Commit all schema/workflow changes together: `"schema: add <field-name> to analysis.json; wire into <step(s)>"`
6. Then write the actual insight to the field and commit that separately

For fields added to other files (lesson-plan.md sections, series-goal.json, etc.), follow the same principle: update the schema/documentation first, then write the data.
