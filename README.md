# 🚀 React Native Starter Template

A production-ready React Native boilerplate with TypeScript, GraphQL, Redux Toolkit, and CI/CD setup. Designed to help teams kick off new mobile app projects with clear structure and best practices.

---

## 🧱 Features

- ⚛️ **React Native** (Latest)
- 🛠️ **TypeScript**
- 📦 **Redux Toolkit** for state management
- 🔮 **Apollo Client** for GraphQL
- 🎯 **RTK Query** for local state & cache
- 💅 **Styled-Components**
- 🌐 **React Navigation**
- 🔐 **Keychain & NetInfo Integration**
- 📁 Structured Component-Based Architecture
- ✅ **ESLint**, **Prettier**
- 🤖 **GitHub Actions** CI/CD (optional)
- 🌎 `.env` environment config support
- 🧪 Testing-ready (Jest setup)

---

## 📁 Folder Structure

```
.
├── android/
├── ios/
├── src/
│   ├── app/                  # Redux store & app-level configs
│   ├── assets/               # Fonts, images, lotties
│   ├── components/           # Reusable UI components
│   ├── features/             # RTK slices / business logic
│   ├── graphql/              # Queries & mutations
│   ├── navigation/           # Stack/Tab navigators
│   ├── screens/              # App screens
│   ├── services/             # API, auth, etc.
│   └── utils/                # Helpers, constants, types
├── .github/                  # GitHub workflows (CI/CD)
├── .env                      # Env variables
├── .eslintrc / eslint.config.mjs
├── .prettierrc.js
└── README.md
```

---

## 🧩 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-org/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Setup `.env`

```env
API_URL=https://your-api-url.com
ENV=development
```

### 4. Run the app

```bash
yarn android
# or
yarn ios
```

---

## 🚥 Git & Commit Rules

We follow [Conventional Commits](https://www.conventionalcommits.org):

```bash
feat: add user login screen
fix: resolve crash on splash screen
chore: update dependencies
docs: update readme and contribution guide
```

---

## 💡 Scripts

| Command       | Description              |
|---------------|--------------------------|
| `yarn lint`   | Lint check with ESLint   |
| `yarn format` | Format code with Prettier|
| `yarn test`   | Run unit tests           |
| `yarn android`| Run app on Android       |
| `yarn ios`    | Run app on iOS           |

---

## 🛠 Technologies Used

- React Native
- TypeScript
- Redux Toolkit
- RTK Query
- GraphQL + Apollo Client
- React Navigation
- ESLint + Prettier
- Jest
- GitHub Actions (CI/CD)

---

## 🚧 CI/CD

This repo includes GitHub Actions for:

- ✅ **CI**: Linting, building the app
- 🚀 **CD**: Build APK (manual deployment; iOS excluded)

You can customize `.github/workflows/ci.yml` and `cd.yml` to fit your deployment needs.

---

## 🧠 Contributing

Coming soon...

---

## 📄 License

[MIT](LICENSE)

---
