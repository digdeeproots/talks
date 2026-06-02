Think like a tool builder, not an app / lib developer
- App/lib devs have an app or lib to build, and ask themselves "how could I make sure this software is free of important defects?"
- Tool builders have a set of developers and sk themselves "how can I ensure these developers always create code that is defect free?"

vigilance toil comes from defects, fundamentally. If we didnt't worry about defects, we'd just operate at the hope level. We only need to go above that level when we worry about what unintended things the code (or coding process) might do.

In the safety scale, app devs focus on probabilistic and deterministic - because that's what you need in order to ensure that this one app is doing what you intended. Tool builders focus on the higher levels, because that's what yuo need in order to ensure that the process of software development creates the results it intends. App/lib developers treat unit tests as a guard; tool-builders treat unit tests as a work product. Thus app developers try to get unit tests to be good, comlete, etc. Tool builders assume all unit tests are inherently flawed, and try to ensure that developers are safe without them or in the presence of harmful ones.

# Understanding your customer
* Coding agents are determinstic software. That makes them easy to control/guide.

## Each turn

They do:
1. Establish a goal for this turn. Read the user's input and decide what to do.
2. Create a working memory, based on your *session file*. Working memory contains a task list, an unordered set of documents (a map from name to a sequence of text), and a DAG of typed text blocks.
3. Think about a set of next tasks to do. Tasks are *tool* commands - which tool to use, what arguments to pass it, and how to think about the result. Tools are different ways to read and write to/from either the file system, the working memory, the conversation I/O to the user, or some other info source.
4. Execute one or more tasks. Each task / tool usage gives a response. It also usually directly alters one info source, based on information in some other set of info soruces plus the arguments given it by the task.
5. Think about the responses. Use your thoughts to update your working memory.
6. Examine your working memory. Is it getting too full, so that important info is at risk of being lost? If so, selectively forget some stuff. Think about what is most useful for the task at hand, and then replace your working memory with the result of that thinking.
6. Think about your turn goal. Has it been met? If so, stop. If not, go back to 3. If so, continue with turn end.
7. Write down your working memory to a session file, so you can resume or fork from here.

Tool "errors" are the same as "successes" - both are just response info which is thought about, and those thoughts are added to working memory.
One magical action that can be invoked: "read this file and do what it says" causes the agent to read a file and add it to working memory as a sequence of steps to (roughly) follow to accomplish its goal. This significantly impacts selection of the next tasks. Skills are ways we allow the agent to invoke these itself, and we can also invoke this action by direct command (to read any arbitrary file), or from a file that it is already reading as instructions.

@ai: clean up the above. Make it more precise and concise. Tighten and highlight the key concepts. And then emphasise the universe levers. This defines the levers for the universe - the places where we can alter the agent's behavior. Actually, it gives half the levers. The others are things that we can do between turns.

## Between turns

We can
1. Evalueate the commits it did and take action.
2. Run additional software (deterministic or non-deterministic).
3. Decide what to ask it to do next.
4. Decide which agent to invoke (and what system prompt to use).
5. Modify the session file. And pick where in it to resume / fork from.
6. Modify any of the other information sources.
7. Pick which tools to allow.
