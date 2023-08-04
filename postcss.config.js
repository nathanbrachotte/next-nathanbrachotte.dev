module.exports = {
  plugins: {
    tailwindcss: {},
    // Use oklab() and oklch() and fallback if not supported
    '@csstools/postcss-oklab-function': { preserve: true },
    autoprefixer: {},
  },
}
