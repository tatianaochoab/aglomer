module.exports = {
  env: {
<<<<<<< HEAD
   browser: true,
   es6: true,
   jest: true   
=======
    SKIP_PREFLIGHT_CHECK=true,	
    browser: true,
    es2020: true,
>>>>>>> anderson
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
<<<<<<< HEAD
  "semi": [2, "always"]
=======
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
>>>>>>> 21908a29064939486b201530b780b8097369edac
  }
}
