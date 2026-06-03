// Shared recipe diagram — single source of truth.
//
// Used in two places:
//   • s27 (the upshift recipe slide) — display-only.
//   • s33 (the TOC hub) — clickable; each step jumps to its mini-recipe sequence.
//
// To regenerate either usage, call window.injectRecipeSvg(el, { clickable, onStepClick }).
// To change the diagram itself, edit RECIPE_SVG_MARKUP below; both call sites update.
//
// Plain global-script form (no module / no fetch) — works under file:// without a server.

(function () {
  const RECIPE_SVG_MARKUP = `
    <svg viewBox="0 0 820 540" width="100%" style="max-height:62vh; display:block; margin:0 auto;" role="img" data-recipe-svg-root>
      <defs>
        <marker id="rec-arr" markerWidth="8" markerHeight="5.5" refX="7" refY="2.75" orient="auto">
          <polygon points="0 0, 8 2.75, 0 5.5" fill="#e8a020" opacity="0.85"/>
        </marker>
        <marker id="rec-arr-lt" markerWidth="8" markerHeight="5.5" refX="7" refY="2.75" orient="auto">
          <polygon points="0 0, 8 2.75, 0 5.5" fill="rgba(240,237,230,0.35)"/>
        </marker>
      </defs>

      <!-- Step 1: pre-loop, done once -->
      <g data-step="1">
        <rect x="110" y="6" width="600" height="130" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>
        <text x="410" y="24" text-anchor="middle" font-size="9.5" fill="rgba(192,154,96,0.7)" font-weight="700" letter-spacing="1.8">STEP 1 &mdash; DONE ONCE</text>
        <text x="410" y="46" text-anchor="middle" font-size="15" fill="rgba(240,237,230,0.85)" font-weight="600">Apply the vigilance-as-process template</text>
        <text x="180" y="78" font-size="12.5" fill="rgba(240,237,230,0.7)">&bull; Empty guardian set</text>
        <text x="180" y="100" font-size="12.5" fill="rgba(240,237,230,0.7)">&bull; One-step workflow</text>
        <text x="450" y="78" font-size="12.5" fill="rgba(240,237,230,0.7)">&bull; Vigilance expectation</text>
        <text x="450" y="100" font-size="12.5" fill="rgba(240,237,230,0.7)">&bull; Empty spot-checker</text>
      </g>
      <line x1="410" y1="136" x2="410" y2="160" stroke="rgba(240,237,230,0.25)" stroke-width="1.5" marker-end="url(#rec-arr-lt)"/>

      <!-- Core loop -->
      <g data-step="2">
        <rect x="220" y="162" width="380" height="50" rx="10" fill="rgba(232,160,32,0.09)" stroke="rgba(232,160,32,0.55)" stroke-width="1.5"/>
        <text x="410" y="180" text-anchor="middle" font-size="9.5" fill="#c09a60" font-weight="700" letter-spacing="1.8">STEP 2</text>
        <text x="410" y="199" text-anchor="middle" font-size="16" fill="#f0ede6" font-weight="600">Name the vigilance</text>
      </g>
      <line x1="410" y1="212" x2="410" y2="230" stroke="#e8a020" stroke-width="1.5" opacity="0.65" marker-end="url(#rec-arr)"/>
      <g data-step="3">
        <rect x="220" y="232" width="380" height="50" rx="10" fill="rgba(232,160,32,0.09)" stroke="rgba(232,160,32,0.55)" stroke-width="1.5"/>
        <text x="410" y="250" text-anchor="middle" font-size="9.5" fill="#c09a60" font-weight="700" letter-spacing="1.8">STEP 3</text>
        <text x="410" y="269" text-anchor="middle" font-size="16" fill="#f0ede6" font-weight="600">Identify a hole</text>
      </g>
      <line x1="410" y1="282" x2="410" y2="300" stroke="#e8a020" stroke-width="1.5" opacity="0.65" marker-end="url(#rec-arr)"/>
      <g data-step="4">
        <rect x="220" y="302" width="380" height="50" rx="10" fill="rgba(232,160,32,0.09)" stroke="rgba(232,160,32,0.55)" stroke-width="1.5"/>
        <text x="410" y="320" text-anchor="middle" font-size="9.5" fill="#c09a60" font-weight="700" letter-spacing="1.8">STEP 4</text>
        <text x="410" y="339" text-anchor="middle" font-size="16" fill="#f0ede6" font-weight="600">Lock one error category</text>
      </g>
      <line x1="410" y1="352" x2="410" y2="370" stroke="#e8a020" stroke-width="1.5" opacity="0.65" marker-end="url(#rec-arr)"/>
      <g data-step="5">
        <rect x="220" y="372" width="380" height="50" rx="10" fill="rgba(232,160,32,0.09)" stroke="rgba(232,160,32,0.55)" stroke-width="1.5"/>
        <text x="410" y="390" text-anchor="middle" font-size="9.5" fill="#c09a60" font-weight="700" letter-spacing="1.8">STEP 5</text>
        <text x="410" y="409" text-anchor="middle" font-size="16" fill="#f0ede6" font-weight="600">Adjust vigilance</text>
      </g>

      <!-- Cycle: 5 -> 2 -->
      <path d="M 600,397 C 755,397 755,187 600,187" fill="none" stroke="#e8a020" stroke-width="1.5" stroke-dasharray="6,3" opacity="0.75" marker-end="url(#rec-arr)"/>
      <text font-size="10" fill="#e8a020" opacity="0.6" transform="translate(742,304) rotate(90)">next iteration</text>

      <!-- Exit -->
      <line x1="410" y1="422" x2="410" y2="462" stroke="rgba(240,237,230,0.35)" stroke-width="1.5" marker-end="url(#rec-arr-lt)"/>
      <g data-step="6">
        <rect x="220" y="464" width="380" height="50" rx="10" fill="rgba(255,255,255,0.055)" stroke="rgba(255,255,255,0.32)" stroke-width="1.5"/>
        <text x="410" y="482" text-anchor="middle" font-size="9.5" fill="rgba(192,154,96,0.65)" font-weight="700" letter-spacing="1.8">STEP 6</text>
        <text x="410" y="501" text-anchor="middle" font-size="16" fill="#f0ede6" font-weight="600">Make a decision</text>
      </g>
    </svg>
  `;

  // Mini-recipe sequence anchors per step. Each step has one entry slide; the
  // sequence ends at a slide carrying `data-return-to-toc` so forward-nav loops back.
  const STEP_ANCHORS = {
    1: 's-rec-1a',
    2: 's-rec-2a',
    3: 's-rec-3a',
    4: 's-rec-4a',
    5: 's-rec-5a',
    6: 's-rec-6a',
  };

  function injectRecipeSvg(host, opts) {
    opts = opts || {};
    host.innerHTML = RECIPE_SVG_MARKUP;
    if (opts.clickable) {
      const steps = host.querySelectorAll('[data-step]');
      steps.forEach(g => {
        g.style.cursor = 'pointer';
        g.addEventListener('click', () => {
          const step = g.getAttribute('data-step');
          const anchor = STEP_ANCHORS[step];
          if (anchor && typeof opts.onStepClick === 'function') {
            opts.onStepClick(anchor, step);
          }
        });
      });
    }
  }

  window.RECIPE_SVG = RECIPE_SVG_MARKUP;
  window.RECIPE_STEP_ANCHORS = STEP_ANCHORS;
  window.injectRecipeSvg = injectRecipeSvg;
})();
