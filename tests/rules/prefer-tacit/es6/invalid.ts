import dedent from "dedent";

import type { InvalidTestCase } from "~/tests/helpers/util";

const tests: ReadonlyArray<InvalidTestCase> = [
  {
    // No typedef but assuming types.
    // No fixer.
    code: `const foo = x => f(x);`,
    optionsSet: [[{ assumeTypes: { allowFixer: false } }]],
    errors: [
      {
        messageId: "generic",
        type: "ArrowFunctionExpression",
        line: 1,
        column: 13,
      },
    ],
  },
  {
    // No typedef but assuming types.
    // With fixer.
    code: `const foo = x => f(x);`,
    optionsSet: [[{ assumeTypes: { allowFixer: true } }]],
    output: dedent`
      const foo = f;
    `,
    errors: [
      {
        messageId: "generic",
        type: "ArrowFunctionExpression",
        line: 1,
        column: 13,
      },
    ],
  },
];

export default tests;
