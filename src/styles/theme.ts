import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "zinc.800",
        color: "white"
      }
    }
  },

  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif"
  },

  colors: {
    zinc: {
      300: "#d4d4d8",
      600: "#737373",
      800: "#27272a",
      900: "#18181b"
    },
    teal: {
      500: "#2dd4bf",
    },
    blue: {
      500: "#1d4ed8",
    }
  }
})