# 🛍️ Product List Application

A modern React application that displays a product catalog using the **Fake Store API**.

---

## 🔗 Live Demo
[👉 View Project on Netlify](https://mernstack-assignment-5.netlify.app/)

---

## ✨ Features

- 🧱 Display products in a **responsive grid layout**
- ⚡ **Loading state** management
- ❌ **Error handling** for failed API requests
- 🔄 **Custom data fetching hook**
- 📱 Fully **responsive design** with Tailwind CSS
- 🎨 **Modern UI** with smooth hover effects and transitions

---

## 🧰 Tech Stack

- ⚛️ **React 18.x**
- ⚡ **Vite 5.x**
- 🎨 **Tailwind CSS 3.x**
- 🧹 **ESLint** for code quality and consistency

---

## 📁 Project Structure

```
My_App/
├── Components/ # React components
│ ├── Hero_Section.jsx
│ ├── Loading.jsx
│ ├── Navbar.jsx
│ └── Products.jsx
├── CustomHooks/ # Custom React hooks
│ └── useFetch.jsx # Custom hook for data fetching
├── src/ # Source files
│ ├── App.jsx # Main application component
│ ├── main.jsx # Application entry point
│ └── assets/ # Static assets (images, icons, etc.)
├── public/ # Public assets
└── index.html # HTML entry point
```


---

## ⚙️ Getting Started

### 🔑 Prerequisites
- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn**

### 🚀 Installation

1. **Clone the repository**
```bash
$ git clone https://github.com/Sharmavicky/React_Project.git

2. Navigate to the project directory

$ cd My_App

3. Install dependencies

$ npm install

🧩 Development

Start the development server:

$ npm run dev

🏗️ Building for Production

To create a production build:

$ npm run build


Preview the production build:

$ npm run preview
```

💡 Features in Detail

🛒 Products Component

Displays products in a clean, responsive grid
Handles loading and error states gracefully
Shows product images, titles, and prices
Includes hover effects for better interactivity

🔄 Custom Hook: useFetch

Manages API calls with state management
Handles loading and error conditions
Returns data in a clean, reusable format

🎨 Styling

Fully responsive design with Tailwind CSS
Mobile-first layout approach
Smooth transitions and hover effects
Clean and modern UI design

🌐 API Integration

This application uses the Fake Store API to fetch product data dynamically.

🧠 Code Quality

✨ ESLint configured for consistent code style
🧩 Custom hooks for reusable logic
💥 Error handling and proper state management
✅ Follows React best practices