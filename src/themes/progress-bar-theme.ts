import type { ComponentTheme } from "tinky-theme";
import type { BoxProps, TextProps } from "tinky";
import type { ProgressBarProps } from "../components/ProgressBar.js";

export interface ProgressBarThemeConfig extends Record<string, unknown> {
  readonly completedCharacter?: string;
  readonly remainingCharacter?: string;
}

/**
 * Default theme for the ProgressBar component.
 * Includes styles for container, completed part, and remaining part.
 */
export const progressBarTheme: ComponentTheme<ProgressBarProps> = {
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
  config: (): ProgressBarThemeConfig => ({}),
};

export type ProgressBarTheme = typeof progressBarTheme;
export type ProgressBarThemeProps = ProgressBarProps;
