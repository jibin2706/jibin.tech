import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.7,
  headerFontFamily: ['Montserrat'],
  bodyFontFamily: ['PT Serif'],
  googleFonts: [
    {
      name: 'PT Serif',
      styles: ['400'],
    },
    {
      name: 'Montserrat',
      styles: ['700', '900'],
    },
  ],
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
