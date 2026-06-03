// Rewrite the 7 transcript-fetcher demo slides (s23-0 .. s23f) to a uniform
// layout: kicker, Command + I-do grid, collapsible Output pane that lazy-fetches
// the example file from demo-files/. Also creates placeholder files.

const fs = require('fs');
const path = require('path');

const slidesPath = 'craft2026-arlo/slides.html';
const filesDir = 'craft2026-arlo/demo-files';
fs.mkdirSync(filesDir, { recursive: true });

const steps = [
  {
    id: 's23-0',
    kicker: 'Step 0 · Prompt Claude and watch',
    cmdHint: '(CLI invocation to be filled in)',
    doSteps: [
      'Run Claude with the prompt.',
      'Watch every step and interrupt when something looks wrong.',
      'Re-prompt with corrections.',
      'Repeat for every run, every day.',
    ],
    outFile: 'demo-files/s23-0.md',
    outLabel: 'Result · raw conversation',
    outPlaceholder: '(Transcript excerpt to be filled in — paste a sample conversation here.)',
  },
  {
    id: 's23a',
    kicker: 'Step 1 · Written workflow',
    cmdHint: '(CLI invocation to be filled in)',
    doSteps: [
      'Hand Claude the workflow file.',
      'Watch every step it takes.',
      'When a gap shows up, edit the workflow file.',
      'Re-run on the next day with the improved file.',
    ],
    outFile: 'demo-files/s23a.md',
    outLabel: 'Output · workflows/daily.md',
    outPlaceholder: '(Workflow file excerpt to be filled in.)',
  },
  {
    id: 's23b',
    kicker: 'Step 2 · Document iteration pattern',
    cmdHint: '(CLI invocation to be filled in)',
    doSteps: [
      'Run the doc-iteration pattern on the workflow file.',
      'Review each pass.',
      'Direct edits via the iteration loop.',
      'Commit the improved workflow.',
    ],
    outFile: 'demo-files/s23b.md',
    outLabel: 'Output · workflows/daily.md (revised)',
    outPlaceholder: '(Diff or revised excerpt to be filled in.)',
  },
  {
    id: 's23c',
    kicker: 'Step 3 · pnpm do-today',
    cmdHint: 'pnpm do-today',
    doSteps: [
      'Run the script.',
      'Let deterministic code decide the next step.',
      'Approve or reject the proposed action between steps.',
    ],
    outFile: 'demo-files/s23c.ts.txt',
    outLabel: 'Output · scripts/do-today.ts',
    outPlaceholder: '(Script excerpt to be filled in.)',
  },
  {
    id: 's23d',
    kicker: 'Step 4 · Narrow goal',
    cmdHint: '(CLI invocation to be filled in)',
    doSteps: [
      'Hand Claude the narrowed goal: "find key moments."',
      'Let it propose; respond with eval.',
      'Stop interviewing about everything. Answer only to fill gaps.',
    ],
    outFile: 'demo-files/s23d.md',
    outLabel: 'Output · workflows/find-key-moments.md',
    outPlaceholder: '(Goal spec excerpt to be filled in.)',
  },
  {
    id: 's23e',
    kicker: 'Step 5 · Scripted fetch',
    cmdHint: '(CLI invocation to be filled in)',
    doSteps: [
      'Run the deterministic fetcher.',
      'On success, do nothing; Claude was never invoked.',
      'On failure, look at what Claude was handed and what it returned.',
    ],
    outFile: 'demo-files/s23e.json',
    outLabel: 'Output · fetch-transcript output',
    outPlaceholder: '(Fetch result or failure-handoff JSON to be filled in.)',
  },
  {
    id: 's23f',
    kicker: 'Step 6 · Iterative analysis',
    cmdHint: '(CLI invocation to be filled in)',
    doSteps: [
      'Run analysis with schema validation.',
      'On validation failure, Claude is re-called with the specific gap.',
      'Compose the final analysis from independent, re-orderable steps.',
    ],
    outFile: 'demo-files/s23f.json',
    outLabel: 'Output · analysis.json (schema-validated)',
    outPlaceholder: '(Schema and sample analysis JSON to be filled in.)',
  },
];

function makeSlide(s) {
  const items = s.doSteps.map(t => `        <li>${t}</li>`).join('\n');
  return `  <section class="slide case-study" id="${s.id}">
    <div class="slide-content">
      <p class="kicker">${s.kicker}</p>
      <div class="demo-step">
        <div class="demo-pane demo-cmd">
          <p class="demo-pane-label">Command</p>
          <pre class="demo-placeholder">${s.cmdHint}</pre>
        </div>
        <div class="demo-pane demo-do">
          <p class="demo-pane-label">I do</p>
          <ol>
${items}
          </ol>
        </div>
      </div>
      <details class="demo-output">
        <summary>${s.outLabel}</summary>
        <pre class="demo-output-file" data-file="${s.outFile}">(click to load)</pre>
      </details>
    </div>
  </section>`;
}

// Read slides.html, find each step section by id, replace with new HTML.
let html = fs.readFileSync(slidesPath, 'utf8');
let replaced = 0;
for (const s of steps) {
  const re = new RegExp(`  <section class="slide[^"]*" id="${s.id.replace(/[-]/g, '\\-')}">[\\s\\S]*?</section>`);
  if (re.test(html)) {
    html = html.replace(re, makeSlide(s));
    replaced++;
  } else {
    console.log('MISS:', s.id);
  }
}
fs.writeFileSync(slidesPath, html);
console.log('Replaced', replaced, 'of', steps.length);

// Create placeholder files (don't clobber existing ones if any).
for (const s of steps) {
  if (!fs.existsSync(s.outFile)) {
    fs.writeFileSync(s.outFile, s.outPlaceholder + '\n');
    console.log('Created', s.outFile);
  } else {
    console.log('Exists, skipped:', s.outFile);
  }
}
