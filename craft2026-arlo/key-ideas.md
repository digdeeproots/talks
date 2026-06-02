Think like a tool builder, not an app / lib developer
- App/lib devs have an app or lib to build, and ask themselves "how could I make sure this software is free of important defects?"
- Tool builders have a set of developers and sk themselves "how can I ensure these developers always create code that is defect free?"

vigilance toil comes from defects, fundamentally. If we didnt't worry about defects, we'd just operate at the hope level. We only need to go above that level when we worry about what unintended things the code (or coding process) might do.

In the safety scale, app devs focus on probabilistic and deterministic - because that's what you need in order to ensure that this one app is doing what you intended. Tool builders focus on the higher levels, because that's what yuo need in order to ensure that the process of software development creates the results it intends. App/lib developers treat unit tests as a guard; tool-builders treat unit tests as a work product. Thus app developers try to get unit tests to be good, comlete, etc. Tool builders assume all unit tests are inherently flawed, and try to ensure that developers are safe without them or in the presence of harmful ones.
