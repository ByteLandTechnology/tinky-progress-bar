/**
 * @packageDocumentation
 * Main entry point for the tinky-progress-bar package.
 * Exports the ProgressBar component and its theme.
 */

// Export components
export {
  ProgressBar,
  type ProgressBarProps,
} from "./components/ProgressBar.js";

// Export theme
export {
  progressBarTheme,
  type ProgressBarTheme,
  type ProgressBarThemeProps,
  type ProgressBarThemeConfig,
} from "./themes/progress-bar-theme.js";
