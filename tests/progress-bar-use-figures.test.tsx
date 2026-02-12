import { describe, expect, test, vi } from "vitest";
import { Box } from "tinky";
import { render } from "tinky-test";
import { dim, magenta } from "ansis";

vi.mock("tinky-figures", () => ({
  useFigures: () => ({
    square: "=",
    squareLightShade: "-",
  }),
  unicodeFigures: {
    square: "X",
    squareLightShade: "Y",
  },
}));

import { ProgressBar } from "../src/components/ProgressBar.js";

describe("ProgressBar defaults", () => {
  test("uses figures provided by useFigures", () => {
    const { lastFrame } = render(
      <Box width={10}>
        <ProgressBar value={50} />
      </Box>,
    );

    expect(lastFrame()).toBe(magenta("=".repeat(5)) + dim("-".repeat(5)));
  });
});
