```json
{
  "name": "axion-react-components",
  "version": "0.0.2",
  "private": false,
  "type": "module",
  "main": "src/index.js",
  "module": "src/index.js",
  "files": [
    "src/components",
    "src/index.js"
  ],
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^3.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "vite": "^4.4.9"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@types/react": "^18.2.7",
    "@types/react-dom": "^18.2.4",
    "eslint": "^9.33.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/XSpiritWizardX/axion-react-components.git"
  },
  "author": "Dustin Bovee",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/XSpiritWizardX/axion-react-components/issues"
  },
  "homepage": "https://github.com/XSpiritWizardX/axion-react-components#readme"
}
```



# Axion React Components

**Axion** — Artificial eXecution & Intelligence for Orchestration Nexus
A futuristic, neon-styled React component library built for **modern apps**.

---

## Features
- Fully responsive and mobile-friendly
- Neon/futuristic UI style
- Clickable, reusable components
- React 18 + 19 compatible
- Easily importable via npm or GitHub

---

## Installation

### From npm
```bash
npm install axion-react-components
```
### From github
```bash
npm install git+ssh://git@github.com/XSpiritWizardX/axion-react-components.git
```

## Usage

### Import Components Example

```js
    import { RotatingButton, NeonCard, LoginForm, SignupForm } from 'axion-react-components';

```

```jsx
<RotatingButton
  label="Click Me"
  onRotatingButtonClick={() => alert('Button clicked!')}
  variant="primary"
/>


<NeonCard
  title="Axion Card"
  onClick={() => alert('Card clicked!')}
>
  This is the content of the NeonCard.
</NeonCard>


<LoginForm
  onLogin={(data) => console.log('Login data:', data)}
/>


<SignupForm
  onSignup={(data) => console.log('Signup data:', data)}
/>



```

## Development
* Run dev server

```bash
npm run dev
```

* build library
```bash
npm run build
```

* Lint code
```bash
npm run lint
```


## Folder Structure

```css
src/
└─ components/
   ├─ RotatingButton/
   ├─ NeonCard/
   └─ AuthForm/
       ├─ LoginForm.jsx
       └─ SignupForm.jsx
src/index.js   # exports all components

```

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push & open a pull request

## License
MIT License © Dustin Bovee
