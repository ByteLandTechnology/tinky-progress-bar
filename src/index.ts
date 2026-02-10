/**
 * @packageDocumentation
 * Main entry point for the tinky-progress-bar package.
 * Exports the ProgressBar component and its theme.
 */

// Export components
export { ProgressBar } from "./components/ProgressBar.js";
export type { ProgressBarProps } from "./components/ProgressBar.js";

// Export theme
export { default as progressBarTheme } from "./themes/progress-bar-theme.js";
export type { ProgressBarTheme } from "./themes/progress-bar-theme.js";
