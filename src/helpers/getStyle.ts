import colors from 'tailwindcss/colors'

type Colors = typeof colors
export type Color = keyof Colors
export type ColorValue = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export function getColor(colorName: Color, value: ColorValue = 500): string {
  if (colors[colorName][value]) {
    return colors[colorName][value]
  } else if (typeof colors[colorName] === 'string') {
    return colors[colorName] as string
  }

  return '#000'
}
