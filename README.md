# Installtion of react

To install React, you can use npm (Node Package Manager) or yarn. Here are the steps to get started:

1. **Install Node.js and npm**:
   Make sure you have Node.js and npm installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).

2. **Create a new React using Vite App**:
   Open your terminal and run the following command to create a new React project using Vite:
   [Creating a React App](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
    with npm:

   ```bash
   npm create vite@latest
   ```

   or with yarn:

   ```bash
   yarn create vite@latest
   ```
    You will be prompted to enter a project name and select a framework. Choose "React" from the list.
3. **Navigate to your project directory**:
   ```bash
    cd your-project-name
    ```
4. **Install dependencies**:
   Run the following command to install the necessary dependencies:
    with npm:
    ```bash
    npm install
    ```
    or with yarn:
    ```bash
    yarn install
    ```
5. **Start the development server**:
   Run the following command to start the development server:
    with npm:
   ```bash
    npm run dev
    ```
    or with yarn:
    ```bash
    yarn dev
    ```
6. **Open your browser**:
   Open your web browser and navigate to `http://localhost:5173` (or the URL provided in the terminal) to see your new React application in action!
That's it! You have successfully installed React and created a new React application using Vite.

----

# Installtion of Tailwind CSS in React 
To install Tailwind CSS in your React project, follow these steps:
1. **Navigate to your React project directory**:
   If you are not already in your project directory, navigate to it using the terminal:
   ```bash
   cd your-project-name
   ```
2. **Install Tailwind CSS and its dependencies**:
   Run the following command to install Tailwind CSS V4

   Step 1: `Install Tailwind CSS`
    with npm:
    ```bash
    npm install tailwindcss @tailwindcss/vite
    ```
    or using yarn:
    ```bash
    yarn add tailwindcss @tailwindcss/vite
    ```

    Step 2: Initialize `Tailwind CSS` in vite.config.ts or vite.config.js file
    
    ```javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from "@tailwindcss/vite";

    // https://vite.dev/config/
    export default defineConfig({
    plugins: [react(), tailwindcss()],
    })

    ```

    Step 3 : Import Tailwind CSS
    In your main CSS file (e.g., `index.css` or `App.css`), add the following lines to import Tailwind's base, components, and utilities styles:
    ```css
    @import "tailwindcss";
    ```
-----