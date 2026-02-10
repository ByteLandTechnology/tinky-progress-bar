**tinky-progress-bar**

---

# tinky-progress-bar

A customizable progress bar component for [Tinky](https://github.com/ByteLandTechnology/tinky) applications.

## Installation

```bash
npm install tinky-progress-bar
# or
yarn add tinky-progress-bar
# or
pnpm add tinky-progress-bar
# or
bun add tinky-progress-bar
```

## Usage

```tsx
import React from "react";
import { render, Box } from "tinky";
import { ProgressBar } from "tinky-progress-bar";

const App = () => (
  <Box flexDirection="column">
    <ProgressBar value={50} />
  </Box>
);

render(<App />);
```

## Props

| Prop    | Type     | Default | Description                                    |
| :------ | :------- | :------ | :--------------------------------------------- |
| `value` | `number` | `0`     | The progress value. Must be between 0 and 100. |

## Theming

The `ProgressBar` component can be themes using `tinky-theme`.

### Default Theme

```ts
const progressBarTheme = {
  styles: {
    container: {
      flexGrow: 1,
      minWidth: 0,
    },
    completed: {
      color: "magenta",
    },
    remaining: {
      dimColor: true,
    },
  },
  config: {
    completedCharacter: "■",
    remainingCharacter: "░",
  },
};
```

### Customizing the Theme

You can customize the appearance by providing a theme to your `ThemeProvider` or overriding specific styles.

```tsx
import React from "react";
import { render, Box } from "tinky";
import { ThemeProvider } from "tinky-theme";
import { ProgressBar } from "tinky-progress-bar";

const customTheme = {
  components: {
    ProgressBar: {
      styles: {
        completed: {
          color: "green",
        },
        remaining: {
          dimColor: false,
          color: "gray",
        },
      },
      config: {
        completedCharacter: "#",
        remainingCharacter: "-",
      },
    },
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>
    <Box width={30}>
      <ProgressBar value={75} />
    </Box>
  </ThemeProvider>
);

render(<App />);
```

## Acknowledgments

- [ink-ui](https://github.com/vadimdemedes/ink-ui) - Inspiration for ProgressBar component by Vadim Demedes

## License

MIT
