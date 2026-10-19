# LearnUp EdTech — Modern Frontend Learning Platform

**LearnUp** is a modern, responsive, accessible EdTech web platform built entirely with **semantic HTML5**, **modular CSS3**, and **Vanilla JavaScript (ES6+ modules)**. It provides an intuitive, polished learning experience without any external frameworks, libraries, or backend dependencies.

---

## 1. Project Overview & Features

LearnUp is structured across four primary pages, each delivering dedicated functionality:

### 🏠 Home Page (`index.html`)
- **Modern Hero Section**: High-impact headline, value proposition lead text, and primary call-to-action buttons ("Explore Courses" and "My Learning").
- **Key Metrics Strip**: Highlights platform achievements (6+ In-depth courses, 4.8 average rating, 100% free demo access).
- **Popular Courses**: Displays top-rated featured courses with duration, lesson counts, ratings, and instructor details.
- **Explore Categories**: Interactive category tiles (Web Development, Programming, Design, Data Science) that navigate directly to filtered catalog views.
- **Why Learn with LearnUp**: Outlines 4 core learning benefits (Project-Based, Self-Paced Flexibility, Industry Experts, Skill Certification).
- **Call-to-Action Banner**: Encourages prospective learners to explore the catalog.

### 📚 Course Catalogue (`courses.html`)
- **Full Catalog Grid**: Displays all available courses with difficulty and category badges.
- **Instant Search**: Real-time keyword filtering across title, description, instructor, and category.
- **Category Filter**: Filter courses by specific disciplines.
- **Difficulty Filter**: Filter by Beginner, Intermediate, or Advanced levels.
- **Multi-Filter Support**: Search and dropdown filters can be used individually or combined.
- **Live Counter**: Accessible results counter (`aria-live="polite"`) announcing matching courses.
- **Helpful Empty State**: Shows a dedicated message and a "Clear All Filters" button when no courses match.
- **Reset Button**: Single-click reset to restore the full course catalog.

### 📖 Course Details Page (`course-details.html`)
- **URL Query Parameter Parsing**: Dynamically reads and validates `?id=` from the URL (e.g. `course-details.html?id=1`).
- **Graceful Error Handling**: Displays a friendly "Course Not Found" message with navigation back to the catalog if an invalid or missing ID is provided.
- **Course Header**: Shows course title, category, difficulty, duration, rating, student enrollment count, and instructor.
- **Learning Outcomes**: Structured grid of tangible skills learners will gain.
- **Prerequisites**: Clear expectations and recommended background knowledge.
- **Comprehensive Curriculum**: Module-by-module syllabus showing lesson titles, durations, and preview badges.
- **Instructor Profile**: Educator credentials, avatar, and background.
- **Interactive Enrollment**: "Enroll Now • Free" button with frontend-only state toggle, celebrating enrollment and providing a direct link to the Learning Dashboard.

### 📊 Learning Dashboard (`dashboard.html`)
- **Overview Metrics**: Summary stat cards showing total enrolled courses, completed lessons count, and average completion percentage.
- **Courses in Progress**: Enrolled courses with visual and screen-reader accessible progress bars (`role="progressbar"`).
- **Lesson Tracking**: Shows completed lessons out of total lessons along with percentage completion.
- **Continue Learning Links**: Direct access to jump back into any active course.
- **Empty State Simulation**: An interactive control button allowing reviewers to test both the populated enrolled state and the empty state ("You are not currently enrolled in any courses").

---

## 2. Technology Requirements & Stack

LearnUp adheres strictly to pure, standards-based web technologies:

- **HTML5**: Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), accessible forms with explicit labels, and skip-to-content navigation.
- **CSS3**: CSS custom properties (`:root` variables), Flexbox, CSS Grid layouts, fluid typography, subtle box shadows, accessible `:focus-visible` indicators, and responsive media queries.
- **Vanilla JavaScript (ES6+)**: Pure ECMAScript with arrow functions, array methods (`filter`, `map`, `reduce`), template literals, destructuring, and DOM APIs.
- **ES Modules (`import` / `export`)**: Modular code architecture organized into single-responsibility files without global scope pollution.
- **No External Frameworks**: Zero dependencies on React, Angular, Vue, Bootstrap, Tailwind, jQuery, or Node runtime packages.

---

## 3. Project Folder Structure

```text
learnup-edtech/
├── index.html                   # Home page with hero, categories & benefits
├── courses.html                 # Course catalog with real-time search & filters
├── course-details.html          # Dynamic course view with syllabus & enrollment
├── dashboard.html               # Learning progress dashboard with metrics
├── css/
│   └── style.css                # Centralized responsive stylesheet & design system
├── js/
│   ├── main.js                  # Main controller, page detection, search & dashboard
│   ├── components.js            # Reusable UI components (header, footer, cards, empty states)
│   ├── data.js                  # Centralized sample course & progress data
│   └── course-details.js        # Course details URL lookup, syllabus & enrollment logic
├── docs/
│   ├── dom-tree.md              # Semantic DOM hierarchy documentation for all pages
│   ├── uml-class-diagram.md     # Mermaid class & module architecture diagram
│   └── uml-sequence-diagram.md  # Mermaid user interaction sequence diagrams
└── README.md                    # Project documentation & setup instructions
```

---

## 4. How to Run the Website Locally

Because the application uses native **JavaScript ES modules** (`import`/`export`), web browsers require the files to be served over the HTTP/HTTPS protocol (browser security prevents ES modules from loading directly via `file://`).

### Option 1: VS Code Live Server (Recommended)
1. Open the `learnup-edtech` folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Marketplace.
3. Right-click on `index.html` in the file explorer and select **"Open with Live Server"**.
4. The site will automatically open at `http://127.0.0.1:5500/index.html`.

### Option 2: Python HTTP Server
Run from the root of `learnup-edtech`:

```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000/` in your browser.

### Option 3: Node.js (npx serve)
```bash
npx serve .
```

---

## 5. Reusable Components & Modules

### `js/components.js`
- `escapeHtml(str)`: Protects against XSS by sanitizing strings before DOM insertion.
- `renderHeader(activePage)`: Shared accessible navbar with skip-link and mobile menu toggle.
- `renderFooter()`: Shared footer with platform disclaimer and navigation links.
- `renderCourseCard(course)`: Standardized course card with banner, badges, metadata, and link.
- `renderEmptyState(message, actionText, actionHref, actionId)`: Accessible status component for 0-result states.
- `renderProgressBar(completed, total, label)`: WCAG-compliant progress bar (`role="progressbar"`).
- `renderCategoryCard(category)`: Category tile linking to filtered catalog views.
- `renderBenefitCard(benefit)`: Feature benefit card for the home page.

### `js/data.js`
- Central in-memory repository exporting `courses`, `categories`, `benefits`, and `learningProgress`.
- Utility helpers: `getCourseById(id)`, `getCourseCategories()`, and `getCourseDifficulties()`.
- **Zero storage persistence**: Data is held strictly in memory during the browser session.

### `js/main.js`
- Reads `data-page` on `<body>` to route logic cleanly.
- Initializes header and footer on every page.
- Implements real-time course search, category filtering, and difficulty filtering.
- Implements learning dashboard calculations and in-memory state toggle.

### `js/course-details.js`
- Standalone page module for `course-details.html`.
- Extracts and validates the `?id=` query parameter.
- Renders curriculum, learning outcomes, and instructor profile.
- Manages frontend enrollment button state and confirmation alerts.

---

## 6. Project Limitations & Security Disclaimers

1. **Frontend-Only Demonstration**: This project is built solely to demonstrate modern client-side frontend engineering techniques.
2. **No Backend or Database**: There is no database, REST API, or server-side session management.
3. **No Persistent Storage**: In compliance with the project guidelines, no user data is saved to `localStorage`, `sessionStorage`, `IndexedDB`, or cookies. Refreshing the browser resets interactive session toggles back to the default sample state.
4. **Mock Enrollment**: Course enrollment and progress updates are simulated client-side interactions and do not involve real payment processing or user authentication.
