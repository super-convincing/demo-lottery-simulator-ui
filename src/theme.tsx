import { extendTheme } from '@chakra-ui/react'

const settings = {
  allowedImgTypes: ["image/jpeg", "image/jpg", "image/png"],
  size: {
    containerWidht: "1200px",
  },
  colorTheme: {
    // blue: {
    //   100: "#4e7add",
    //   200: "#4e7add",
    //   300: "#4e7add",
    //   400: "#3564cf",
    //   500: "#3564cf",
    //   600: "#224eb3",
    //   700: "#224eb3",
    //   800: "#224eb3",
    //   900: "#224eb3",
    // },
    // orange: {
    //   100: "#e99d67",
    //   200: "#e99d67",
    //   300: "#e99d67",
    //   400: "#e97f33",
    //   500: "#e97f33",
    //   600: "#e16c18",
    //   700: "#e16c18",
    //   800: "#e16c18",
    //   900: "#e16c18",
    // }
  }
}

export const theme = extendTheme({
  initialColorMode: 'dark',
  colors: settings.colorTheme,
  fonts: {
    heading: ` 'Nunito', sans-serif`,
    body: ` 'Nunito', sans-serif`,
  },
  styles: { global: { body: { bg: "#F2F2F2" } } }
})

