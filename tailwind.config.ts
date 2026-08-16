import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: 'var(--espresso)',
        cocoa: 'var(--cocoa)',
        faded: 'var(--faded)',
        cream: {
          DEFAULT: 'var(--cream)',
          card: 'var(--cream-card)',
          deep: 'var(--cream-deep)',
        },
        line: 'var(--line)',
        caramel: {
          DEFAULT: 'var(--caramel)',
          deep: 'var(--caramel-deep)',
        },
        terracotta: 'var(--terracotta)',
        sage: 'var(--sage)',
        chalk: {
          DEFAULT: 'var(--chalk)',
          soft: 'var(--chalk-soft)',
          line: 'var(--chalk-line)',
          board: 'var(--chalk-board)',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        hand: ['var(--font-caveat)', 'cursive'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        menu: '0 1px 2px rgba(64,45,26,0.05), 0 18px 40px -18px rgba(64,45,26,0.28)',
      },
    },
  },
  plugins: [],
}
export default config
