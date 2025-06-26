# Task Manager

A modern, responsive Task Manager application built with **React.js** and **Tailwind CSS**. This project demonstrates component-based architecture, state management with hooks, API integration, and a beautiful dark/light theme switcher.

## ✨ Features

- **Add, complete, and delete tasks**  
  Easily manage your daily tasks with intuitive controls.

- **Filter tasks**  
  View all, active, or completed tasks with a simple filter.

- **Persistent storage**  
  Tasks are saved in your browser using a custom `useLocalStorage` hook.

- **API integration**  
  Fetch and display data from a public API with loading and error states.

- **Responsive design**  
  Looks great on mobile, tablet, and desktop.

- **Dark/Light mode**  
  Toggle between light and dark themes using Tailwind’s dark mode.

- **Reusable UI components**  
  Includes Button, Card, Input, Alert, and more for consistent design.

## 🚀 Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Start the development server**
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🗂️ Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── FeedbackForm.jsx
│   ├── FeedbackList.jsx
│   └── ui/
├── lib/              # Utility functions and hooks
├── App.jsx           # Main application component
├── index.css         # Tailwind CSS styles
└── main.jsx          # Entry point
```

## 🛠️ Technologies Used

- [React.js](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 📸 Screenshots

_Add screenshots of your app in both light and dark mode here!_

## 🌐 Deployment

_You can deploy this app to Vercel, Netlify, or GitHub Pages. Add your deployed URL here._

## 📄 License

MIT

---

Built with ❤️ for the PLP Week 3 Assignment
