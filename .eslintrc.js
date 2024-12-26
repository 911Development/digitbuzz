module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Disable the 'React' in scope rule
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "off", // Turn off this rule as well
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
