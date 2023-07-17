// 1. Import `createTheme`
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"


const theme2  = createTheme({
  type: "light",
  theme: {
    colors: {

      primaryLight: 'red',
      primaryLightHover: 'red',
      primaryLightActive: 'red',
      primaryLightContrast: 'red',
      primary: '#9A97EE',
      primaryBorder: 'blue',
      primaryBorderHover: 'red',
      primarySolidHover: 'red',
      primarySolidContrast: '$white',
      primaryShadow: 'red',
      secondary:'#93F6E4',

      gradient: 'linear-gradient(90deg, #9A97EE 0%, #93F6E4 100%);',
      link: '#5E1DAD',

      myColor: '#FDFEB0'

    },
    space: {},
    fonts: {}
  }
})

export default theme2

