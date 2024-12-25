// script.js
let currentIndex = 0; // Tracks the current project index

document.getElementById("findProject").addEventListener("click", function () {
    const language = document.getElementById("language").value;
    const time = document.getElementById("time").value;
    const projectOutput = document.getElementById("projectOutput");

    const projects = {
        all: [
            "Tic-Tac-Toe Game", "To-Do List App", "Weather App", "Simple Calculator", "Personal Portfolio",
            "Blog Website", "Snake Game", "Quiz App", "Stopwatch", "Number Guessing Game",
            "E-commerce Product Page", "Rock Paper Scissors Game", "Temperature Converter",
            "Memory Matching Game", "Digital Clock", "Simple Chat App", "Markdown Previewer",
            "Landing Page Design", "Form Validation App", "Budget Tracker", "Basic Inventory System",
            "Pomodoro Timer", "Dynamic Resume Builder", "Note-Taking App", "Task Manager",
            "Book Library App", "Random Quote Generator", "Online Poll System", "Event Countdown Timer",
            "Basic Authentication System", "Tip Calculator", "Music Playlist Manager", "Photo Gallery Viewer",
            "Movie Recommendation System", "Unit Converter", "Contact Manager", "Virtual Whiteboard",
            "Social Media Post Scheduler", "Customizable Calendar", "Password Strength Checker",
            "Flashcard Learning App", "Simple Blog CMS", "Currency Converter", "Basic Drawing App",
            "Weather Forecast Dashboard", "News Aggregator", "Habit Tracker", "Expense Tracker",
            "File Upload and Viewer", "AI Chatbot Interface", "Productivity Tracker"
        ],
        python: [
            "Tic-Tac-Toe Game", "Weather API Fetcher", "Basic Calculator", "Number Guessing Game",
            "Rock Paper Scissors", "Simple Chatbot", "Currency Converter", "File Organizer",
            "Task Scheduler", "Pomodoro Timer", "Password Generator", "BMI Calculator",
            "Todo CLI App", "Flashcard Generator", "Web Scraper", "Basic CRUD App",
            "Library Management System", "PDF Merger", "Image Resizer", "Text-to-Speech Converter",
            "Email Sender Script", "Simple Blog", "Quiz Generator", "Weather Notifier",
            "Prime Number Checker", "URL Shortener", "Instagram Automation Script", "File Backup System",
            "Markdown to HTML Converter", "Data Visualization Dashboard", "Basic Blockchain Demo",
            "Python Calculator GUI", "Stock Price Tracker", "Music Player App", "QR Code Generator",
            "Expense Manager CLI", "Data Sorting Tool", "Image Caption Generator", "Custom Logger",
            "Text File Analyzer", "Python Quiz App", "File Encryptor", "Basic Web Scraper",
            "Folder Organizer", "ASCII Art Generator", "Currency Converter CLI", "Desktop Timer App",
            "Python Unit Tester", "Game of Life Simulation"
        ],
        javascript: [
            "Tic-Tac-Toe Game", "Simple Calculator", "Rock Paper Scissors", "Weather Dashboard",
            "Todo List App", "Digital Clock", "Pomodoro Timer", "Image Slider",
            "Dynamic Form Validator", "Basic Quiz App", "Flashcard Viewer", "Random Quote Generator",
            "Word Counter Tool", "Stopwatch App", "Memory Game", "Interactive Map",
            "Markdown Editor", "Expense Tracker", "Dynamic Resume Builder", "Basic Chat App",
            "Photo Gallery", "Unit Converter", "Portfolio Website", "Simple Snake Game",
            "Event Countdown Timer", "Basic Weather App", "Customizable Calendar",
            "Music Player UI", "Currency Converter", "Random Number Generator",
            "Basic Voting System", "Social Media Post Scheduler", "Basic E-commerce Site",
            "Habit Tracker", "Responsive Blog", "Simple Drawing App", "Text Highlighter",
            "AI Chatbot UI", "Interactive Charts", "Data Fetcher", "Basic Inventory App",
            "Task Management System", "Basic File Uploader", "Real-time Chat App",
            "Simple Animation Demo", "Recipe Finder", "Basic Portfolio with Tabs",
            "Basic Calculator with History", "Interactive Flashcards", "Basic Game Leaderboard"
        ],
        html: [
            "Basic Portfolio Page", "Landing Page", "About Me Page", "Product Page", "Photography Portfolio",
            "Simple Resume Page", "HTML5 Audio Player", "Video Gallery", "Restaurant Menu Page",
            "Contact Form", "Login Form", "Interactive Map", "Event Page", "Product Landing Page",
            "Personal Blog", "Digital CV", "Basic Social Media Profile Page", "Simple Article Page",
            "Dashboard UI", "E-commerce Home Page", "Restaurant Booking Page", "Interactive Pricing Table",
            "Testimonial Carousel", "Product Showcase", "Blog Post Page", "Custom Button Designs",
            "Simple Game (HTML5 Canvas)", "Event Countdown", "Dynamic Text Scroller", "Photo Slider",
            "Portfolio with Modal", "File Upload Form", "News Page", "Recipe Website", "Weather App UI"
        ],
        css: [
            "CSS Grid Layout Example", "Flexbox Layout", "Sticky Navigation Bar", "CSS Animations",
            "CSS Image Gallery", "Responsive Grid Layout", "Card Design", "Hover Effects Demo",
            "CSS Buttons and Icons", "Website Theme with CSS Variables", "CSS Parallax Effect", "Circular Menu",
            "CSS Media Queries Demo", "CSS Transitions", "Image Hover Effects", "Custom Scrollbar Design",
            "CSS Typography Examples", "CSS Form Styles", "CSS Image Slideshow", "Dark Mode Toggle",
            "Full-page Background Image", "CSS Timeline", "CSS Floating Menu", "CSS Grid with Items",
            "CSS Loader Animation", "CSS Tooltip Design", "CSS Pricing Table", "Card Hover Effects",
            "Simple Landing Page", "CSS Music Player", "Responsive Navigation Menu", "CSS Animation with Keyframes"
        ],
        java: [
            "Tic-Tac-Toe Game", "Simple Calculator", "Bank Management System", "Student Database",
            "Library Management System", "Weather App", "Rock Paper Scissors Game", "Unit Converter",
            "Online Voting System", "Library Search System", "E-commerce Product Page", "Banking System CLI",
            "Customer Management App", "Online Quiz App", "Order Management System", "Data Encryption System",
            "Hotel Reservation System", "Inventory Management System", "Simple Alarm Clock", "Employee Management",
            "Task Scheduler", "Online Shopping Cart", "Currency Converter", "Order Tracking System",
            "Basic Web Scraper", "Movie Ticket Booking", "Recipe Management App", "Notes App",
            "Currency Exchange Rate Finder", "News Reader", "Weather Forecast App", "Budget Tracker"
        ],
        c: [
            "Tic-Tac-Toe Game", "Number Guessing Game", "Student Record System", "Library Management System",
            "Simple Calculator", "Online Voting System", "E-commerce Cart System", "Employee Management System",
            "Banking System CLI", "Simple Address Book", "Student Grade Management", "Basic Text Editor",
            "Calendar Application", "Quiz Application", "Employee Payroll System", "Movie Ticket Booking System",
            "ATM System", "Online Chat App", "Inventory Management System", "Simple Search Engine",
            "Library Search System", "Order Management System", "Unit Converter", "Grocery List App",
            "File Compression Tool", "Weather App", "BMI Calculator", "Student Database CLI", "File Encryption System"
        ],
        cplusplus: [
            "Tic-Tac-Toe Game", "Simple Calculator", "Number Guessing Game", "Library Management System",
            "Student Record Management", "Bank Management System", "Online Quiz App", "E-commerce Cart",
            "Student Grade Management", "Order Management System", "Data Encryption System", "Movie Ticket Booking",
            "Basic Text Editor", "Employee Payroll System", "Task Management App", "Simple Inventory System",
            "Currency Converter", "Weather App", "Flashcard App", "Address Book App", "File Organizer",
            "File Compression", "Data Sorter", "Quiz Game", "Simple ATM System", "Student Attendance System"
        ]
    };

    const selectedProjects = projects[language] || projects["all"];

    // Check if the current index exceeds the available projects
    if (currentIndex >= selectedProjects.length) {
        currentIndex = 0; // Reset to the first project
    }

    // Display the current project
    projectOutput.innerHTML = `<h2>Suggested Project:</h2><p>${selectedProjects[currentIndex]}</p>`;

    // Move to the next project
    currentIndex++;
});
