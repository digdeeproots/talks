Think like a tool builder, not an app / lib developer
- App/lib devs have an app or lib to build, and ask themselves "how could I make sure this software is free of important defects?"
- Tool builders have a set of developers and sk themselves "how can I ensure these developers always create code that is defect free?"

@ai: add a short slide to the upshift sequence stating that vigilance toil comes from defects. Also tie to that when we talk about app dev vs tool dev - the difference is how they vew app defects. App dev: "the coder will make mistakes; we need to find them and fix them before they pile up", tool dev: "I control the rate at which the coder creates mistakes". (but paraphrase)

vigilance toil comes from defects, fundamentally. If we didn't worry about defects, we'd just operate at the hope level. We only need to go above that level when we worry about what unintended things the code (or coding process) might do.

In the safety scale, app devs focus on probabilistic and deterministic - because that's what you need in order to ensure that this one app is doing what you intended. Tool builders focus on the higher levels, because that's what yuo need in order to ensure that the process of software development creates the results it intends. App/lib developers treat unit tests as a guard; tool-builders treat unit tests as a work product. Thus app developers try to get unit tests to be good, comlete, etc. Tool builders assume all unit tests are inherently flawed, and try to ensure that developers are safe without them or in the presence of harmful ones.

# Understanding your customer

A coding agent is **deterministic software with specific non-deterministic thinking steeps**. Every choke point the agent passes through is a designable surface. Naming the surfaces names the levers.

## A turn, mechanically

1. **Hydrate *working memory* ** from the session file — turn goal, task list, map of named text sequences ("documents"), typed-block DAG (block is text sequence).
2. **Look at the user message queue** from input.
3. Think: **what is the turn goal and constraints** Update working memory (turn *goal* and DAG).
4. Think: **Update tasks and pick the next actions** — each action is a *tool* call: which tool, which arguments, how to interpret the response. Tools are the only way the agent reads or writes anything outside its own working memory. *(Tooling lever.)*
5. **Execute the actions.** Each response carries information; many tool calls also *mutate state*.
6. Think: **Interpret responses (*feedback*).** Thoughts about responses become new working-memory entries.
7. Think: **Prune working memory** when it bloats. Decide what's still useful, replace memory with the keep set.
8. Think: **Check the goal.** Met → go to step 8. Not met → back to step 2.
9. **Persist working memory** to the session file.

Two consequences worth naming:

- **Tool errors and tool successes are the same shape** — both are response info that gets thought about. The agent does not branch on error; it incorporates.
- **"Read this file and do what it says" is a memory-shaping move, not a tool call.** It injects an ordered sequence of steps into working memory that strongly biases the next-task choice. Skills, slash commands, and instructional includes are all variants of this one move.

The in-turn loop names **five levers**: Goals, Memory, Tooling, State control, Feedback. Reachable Context — what info sources the agent can even address — is implicit in step 4

## Between turns

Everything that happens while the agent is not running is also a designable surface — and gives the other half of the levers.

1. **Evaluate what it produced** (commits, files, tool outputs); decide whether/how to act. *(State control lever)*
2. **Run additional software** — deterministic or another agent — over the result. *(Workflow lever.)*
3. **Choose the next prompt.** *(Goals lever.)*
4. **Choose the next identity** — which agent runtime, which system prompt, which persona. *(Identity, candidate lever.)*
5. **Edit the session file** and pick the resume / fork point. *(Memory lever.)*
6. **Change other info sources** the agent can reach. *(Reachable Context lever.)*
7. **Change the toolbox.** *(Tooling lever.)*

## Why this matters for the talk

Carelessness is not produced by adding more vigilance inside the agent. It is produced by redesigning the surfaces the agent touches — the levers above. The two diagrams in the TOC walk these surfaces directly: the **Agent's Universe** names the levers; the **Recipe** says how to engineer one of them at a time.
