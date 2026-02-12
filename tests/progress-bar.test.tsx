import { describe, test, expect } from "vitest";
import { Box } from "tinky";
import { render } from "tinky-test";
import { dim, magenta } from "ansis";
import { unicodeFigures } from "tinky-figures";
import { ThemeProvider } from "tinky-theme";
import { ProgressBar } from "../src/index.js";

describe("ProgressBar", () => {
  test("renders empty progress bar at 0%", () => {
    const { lastFrame } = render(
      <Box width={20}>
        <ProgressBar value={0} />
      </Box>,
    );

    expect(lastFrame()).toBe(dim(unicodeFigures.squareLightShade.repeat(20)));
  });

  test("renders half-filled progress bar at 50%", () => {
    const { lastFrame, rerender } = render(
      <Box width={20}>
        <ProgressBar value={0} />
      </Box>,
    );

    rerender(
      <Box width={20}>
        <ProgressBar value={50} />
      </Box>,
    );

    expect(lastFrame()).toBe(
      magenta(unicodeFigures.square.repeat(10)) +
        dim(unicodeFigures.squareLightShade.repeat(10)),
    );
  });

  test("clamps value to 0-100 range", () => {
    const { lastFrame } = render(
      <Box width={10}>
        <ProgressBar value={-10} />
      </Box>,
    );

    // Should render empty bar (clamped to 0)
    expect(lastFrame()).toBe(dim(unicodeFigures.squareLightShade.repeat(10)));
  });

  test("value at 100% renders full bar", () => {
    const { lastFrame } = render(
      <Box width={10}>
        <ProgressBar value={100} />
      </Box>,
    );

    expect(lastFrame()).toBe(magenta(unicodeFigures.square.repeat(10)));
  });

  test("uses custom characters from theme config", () => {
    const { lastFrame } = render(
      <ThemeProvider
        theme={{
          components: {
            ProgressBar: {
              config: {
                completedCharacter: "=",
                remainingCharacter: "-",
              },
            },
          },
        }}
      >
        <Box width={10}>
          <ProgressBar value={50} />
        </Box>
      </ThemeProvider>,
    );

    expect(lastFrame()).toBe(magenta("=".repeat(5)) + dim("-".repeat(5)));
  });
});
