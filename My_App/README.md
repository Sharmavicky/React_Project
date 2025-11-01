# Product List Application

A modern React application that displays a product catalog using the Fake Store API.

## Features

- Display products in a responsive grid layout
- Loading state management
- Error handling
- Custom data fetching hook
- Responsive design with Tailwind CSS
- Modern UI with hover effects and transitions

## Tech Stack

- React 19.1.1
- Vite 7.1.7
- Tailwind CSS 4.1.16
- ESLint for code quality

## Project Structure

```
My_App/
├── Components/           # React components
│   ├── Hero_Section.jsx
│   ├── Loading.jsx
│   ├── Navbar.jsx
│   └── Products.jsx
├── CustomeHooks/        # Custom React hooks
│   └── useFetch.jsx     # Custom hook for data fetching
├── src/                 # Source files
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── assets/          # Static assets
├── public/              # Public assets
└── index.html           # HTML entry point
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sharmavicky/React_Project.git
```

2. Navigate to the project directory:
```bash
cd My_App
```

3. Install dependencies:
```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Features in Detail

### Products Component
- Displays products in a responsive grid
- Handles loading and error states
- Shows product images, titles, and prices
- Implements hover effects for better user interaction

### Custom Hook: useFetch
- Manages API calls with proper state management
- Handles loading states
- Provides error handling
- Returns data in a structured format

### Styling
- Fully responsive design using Tailwind CSS
- Mobile-first approach
- Smooth transitions and hover effects
- Clean and modern UI

## API Integration

The application uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data.

## Code Quality

- ESLint configuration for code quality
- React best practices and modern patterns
- Custom hooks for reusable logic
- Proper error handling and loading states

## License

MIT License

## Author

Vicky Sharma
