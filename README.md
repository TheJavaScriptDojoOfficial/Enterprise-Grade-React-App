
# 🚀 Enterprise-Grade React Folder Structure

This repository showcases a **scalable, maintainable, and production-ready folder structure** for React projects, ideal for growing teams and large applications.

Built with:
- ⚛️ React 18 + TypeScript
- ⚡ Vite
- 🌪️ TailwindCSS
- 🎯 Redux Toolkit
- 🔐 Route Protection (Private & Public Routes)

---

## 📁 Folder Structure Overview

```
src/
├── assets/               # Global styles, images, fonts
├── components/
│   ├── common/           # Reusable UI components (Button, Modal, etc.)
│   └── layout/           # Header, Footer, Navigation
├── constants/            # Route paths, config variables
├── context/              # (Optional) React context providers
├── features/             # Feature-based modules (auth, dashboard, etc.)
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── authSlice.ts
│   └── dashboard/
├── hooks/                # Custom hooks (useDebounce, useWindowSize)
├── layouts/              # AuthLayout, MainLayout with <Outlet />
├── lib/                  # Axios config and shared instances
├── pages/                # Public pages like Home, NotFound
├── routes/               # Centralized route definitions
├── store/                # Redux store setup
├── types/                # Global TypeScript types & interfaces
├── utils/                # Utility functions (formatDate, etc.)
├── App.tsx               # Root component
├── main.tsx              # Entry point
└── vite-env.d.ts
```

---

## 🧠 Why This Structure?

- **Feature-Based Modules**: Easy to scale & test
- **DRY & Maintainable**: Clean separation of concerns
- **Onboarding-Friendly**: Intuitive layout for new devs
- **Redux Toolkit + Async Thunks**: Enterprise-grade state management
- **Private/Public Routes**: Auth guard logic built-in

---

## 🛠️ Technologies Used

| Tool               | Purpose                              |
|--------------------|--------------------------------------|
| React + TypeScript | Component UI with type safety        |
| Vite               | Lightning-fast build tool            |
| TailwindCSS        | Utility-first modern styling         |
| Redux Toolkit      | Global state management              |
| React Router       | Declarative routing with guards      |
| Axios              | API integration layer                |

---

## 🔐 Authentication Logic

- ✅ `PrivateRoute`: Protects pages like `/dashboard`, redirects to `/login`
- ✅ `PublicRoute`: Prevents logged-in users from visiting `/login` or `/signup`
- ✅ Auth stored in Redux & persisted in `localStorage`
- ✅ Fake API simulation for login (can be replaced with real backend)

---

## 🚦 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/react-enterprise-folder-structure.git
cd react-enterprise-folder-structure

# Install dependencies
npm install

# Start the app
npm run dev
```

> App runs at [http://localhost:5173](http://localhost:5173)

---

## 🔐 Default Login Credentials (For Demo)

| Email              | Password    |
|-------------------|-------------|
| admin@example.com | admin123    |

---

## 💡 Example Pages

- `/login` → Public login page
- `/dashboard` → Protected dashboard with mock data
- `/profile` → Add-on example for nesting under layout
- `/404` → Catch-all NotFound route

---

## 📂 Add a New Feature Module

To add a new feature (e.g. `settings`):
```bash
src/features/settings/
├── components/
├── hooks/
├── pages/
├── services/
├── settingsSlice.ts
```

Then wire it into `rootReducer.ts` and add routes in `AppRoutes.tsx`.

---

## 🧪 Testing Support (Optional)

- You can integrate **Jest**, **React Testing Library**, or **Cypress** depending on your team’s testing strategy.

---

## 👨‍💻 Author

Made with ❤️ by [Sameer Thite](https://github.com/TheJavaScriptDojoOfficial)

---

## 📄 License

MIT © 2024 [Sameer Thite]
