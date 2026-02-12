import { describe, expect, test } from "vitest";
import { progressBarTheme } from "../src/themes/progress-bar-theme.js";

describe("progressBarTheme", () => {
  test("exposes optional characters in config with empty defaults", () => {
    const props = { value: 0 };
    const configValue =
      typeof progressBarTheme.config === "function"
        ? progressBarTheme.config(props)
        : progressBarTheme.config;

    expect(configValue).toEqual({});
  });
});
