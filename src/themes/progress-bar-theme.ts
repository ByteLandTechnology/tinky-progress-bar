import type { ComponentTheme } from "tinky-theme";
import type { BoxProps, TextProps } from "tinky";
import type { ProgressBarProps } from "../components/ProgressBar.js";

const CHARS = {
  square: "■",
  squareLightShade: "░",
};

/**
 * Default theme for the ProgressBar component.
 * Includes styles for container, completed part, and remaining part,
 * as well as configuration for characters used.
 */
const progressBarTheme: ComponentTheme<ProgressBarProps> = {
  styles: {
    container: (): BoxProps => ({
      flexGrow: 1,
      minWidth: 0,
    }),
    completed: (): TextProps => ({
      color: "magenta",
    }),
    remaining: (): TextProps => ({
      dimColor: true,
    }),
  },
  config: (): {
    completedCharacter: string;
    remainingCharacter: string;
  } => ({
    completedCharacter: CHARS.square,
    remainingCharacter: CHARS.squareLightShade,
  }),
};

export default progressBarTheme;
export type ProgressBarTheme = typeof progressBarTheme;
export type ProgressBarThemeProps = ProgressBarProps;
