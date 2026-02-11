# 📱 Mobile Comparison Platform

A modern and interactive mobile comparison web application built using
**React JS, Redux Toolkit, and Tailwind CSS**.

This application enables users to add mobile products, manage them
through global state, and dynamically compare multiple devices
side-by-side with intelligent highlighting of the best options.

------------------------------------------------------------------------

## 🚀 Overview

The Mobile Comparison Platform simulates a real-world product comparison
experience similar to leading e-commerce platforms.

Users can:

-   Add custom mobile products
-   Select multiple devices for comparison
-   Instantly analyze price and rating differences
-   Visually identify the best deal and top-rated product

------------------------------------------------------------------------

## ✨ Key Features

### 📝 Product Management

-   Add new products with validation
-   Fields: Name, Brand, Price, Rating
-   Form validation with error handling
-   Centralized state using Redux Toolkit

### 📊 Smart Comparison System

-   Compare 2 or more products
-   Dynamic comparison table rendering
-   Automatic highlighting:
    -   Lowest price
    -   Highest rating
-   Prevents comparison when fewer than 2 products are selected

### 🎨 UI & UX

-   Fully responsive layout
-   Tailwind CSS utility-based styling
-   Clean, modern dark theme
-   Conditional styling based on logic

------------------------------------------------------------------------

## 🛠 Tech Stack

-   React JS
-   Redux Toolkit
-   React Redux
-   Tailwind CSS
-   JavaScript (ES6+)

------------------------------------------------------------------------

## 🏗 Architecture & Implementation

-   Component-driven structure
-   Redux slice for product state management
-   Derived state logic for lowest price and highest rating
-   Controlled form inputs
-   Scalable validation system
-   Clean separation of concerns

------------------------------------------------------------------------

## 📂 Project Structure

src/ │ ├── Components/ │ ├── AddProductForm.jsx │ ├── ComparePage.jsx │
├── Redux/ │ ├── Slice/ │ │ └── ProductsSlice.js │ └── store.js │ ├──
App.js └── index.js

------------------------------------------------------------------------

## ⚙️ Installation

git clone https://github.com/your-username/mobile-comparison.git cd
mobile-comparison npm install npm start

Application runs at: http://localhost:3000

------------------------------------------------------------------------

## 📈 What This Project Demonstrates

-   Practical usage of Redux Toolkit
-   Advanced conditional rendering in React
-   Dynamic table generation
-   Data-driven UI updates
-   Scalable and maintainable folder structure

------------------------------------------------------------------------

## 🔮 Future Enhancements

-   Product search & filtering
-   Data persistence using localStorage
-   API integration for real mobile data
-   Authentication system
-   Performance optimization

------------------------------------------------------------------------

## 👨‍💻 Author

Hilal Hassan\
Frontend Developer
