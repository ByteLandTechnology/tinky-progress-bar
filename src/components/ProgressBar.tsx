import { useState } from "react";
import { Box, type DOMElement, Text, measureElement } from "tinky";
import { useComponentTheme } from "tinky-theme";
import progressBarTheme from "../themes/progress-bar-theme.js";

/**
 * Props for the ProgressBar component.
 */
export interface ProgressBarProps {
  /**
   * Progress.
   * Must be between 0 and 100.
   *
   * @default 0
   */
  readonly value: number;
}

/**
 * A terminal progress bar component.
 * Renders a customizable progress bar that fills available space.
 *
 * @param props - Component props
 * @returns React element
 *
 * @example
 * ```tsx
 * <ProgressBar value={50} />
 * ```
 */
export function ProgressBar(props: ProgressBarProps) {
  const { value } = props;
  const [width, setWidth] = useState(0);

  // Ref to the container element
  const [ref, setRef] = useState<DOMElement | null>(null);

  // Measure the width of the container to determine available space.
  // This runs on every render when ref is available to ensure responsiveness.
  if (ref) {
    const dimensions = measureElement(ref);

    if (dimensions.width !== width) {
      setWidth(dimensions.width);
    }
  }

  const progress = Math.min(100, Math.max(0, value));
  const complete = Math.round((progress / 100) * width);
  const remaining = width - complete;

  const { styles, config } = useComponentTheme<ProgressBarProps>(
    "ProgressBar",
    progressBarTheme,
    props,
  );

  // Resolve config (it could be a function)
  const configValue = typeof config === "function" ? config(props) : config;

  return (
    <Box ref={setRef} {...styles.container}>
      {complete > 0 && (
        <Text {...styles.completed}>
          {(configValue?.completedCharacter as string | undefined)?.repeat(
            complete,
          )}
        </Text>
      )}

      {remaining > 0 && (
        <Text {...styles.remaining}>
          {(configValue?.remainingCharacter as string | undefined)?.repeat(
            remaining,
          )}
        </Text>
      )}
    </Box>
  );
}
