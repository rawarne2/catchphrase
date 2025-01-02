### Game Rules:

1. Setup & Categories
   - Game features multiple categories (Sports, Movies & TV, Places, Fun and Games, People)
   - Teams start by selecting a category
   - First game starts with Team 1; subsequent games start with alternate team

2. Basic Gameplay
   - 60-second timer per game
   - Warning beeps during final 10 seconds
   - Active player must:
     * Look at the word on screen
     * Memorize it
     * Put device behind their back
     * Give verbal clues to their team

3. Guessing Rules
   - Active player CANNOT:
     * Say the actual word
     * Use rhyming words
     * Say "rhymes with"
   - Opposing team watches screen to enforce rules
   - Active team tries to guess word without seeing screen

4. Scoring System
   - Correct guess: 1 point to guessing team
   - Pass: 0.5 points to opposing team
   - Rule violation (saying word/rhyme): 1 point to opposing team

5. Turn Changes
   - After correct guess:
     * Add point to guessing team
     * New word appears
     * Device passes to other team
   - After violation:
     * Add point to opposing team
     * "Team X's Turn" screen appears
     * New player must press "Ready" after memorizing word
   - After pass:
     * Add 0.5 points to opposing team
     * New word appears
     * Same team continues

6. Game End
   - Timer reaches zero
   - Final score displayed
   - "Done" button returns to category selection
   - Next game starts with opposite team



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
