/**
 * LearnUp EdTech - Centralized Sample Data Module
 *
 * NOTE: This is a frontend-only demonstration project.
 * All course information, curriculum, and learning progress are fictional sample data.
 * No data is persisted to localStorage, sessionStorage, cookies, or a database.
 */

export const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    category: "Web Development",
    difficulty: "Beginner",
    instructor: "Alex Johnson",
    instructorRole: "Senior Frontend Engineer & Educator",
    duration: "6 hours",
    icon: "💻",
    description: "Learn HTML5, CSS3, and modern JavaScript to build responsive, accessible websites from scratch.",
    longDescription: "Master the foundations of front-end web development. This course takes you from writing your first line of semantic HTML to building interactive, modern web pages with CSS Flexbox, Grid, and clean ES6+ JavaScript. Perfect for beginners aspiring to become professional web developers.",
    lessons: 12,
    rating: 4.9,
    studentsCount: 1420,
    prerequisites: "No prior coding experience required. Just a computer and curiosity.",
    learningOutcomes: [
      "Structure pages with modern, accessible semantic HTML5 tags",
      "Design flexible, responsive layouts using CSS Flexbox and Grid",
      "Write modular, event-driven JavaScript for user interactivity",
      "Understand web accessibility (a11y) standards and mobile-first design"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Semantic HTML5 Architecture",
        lessons: [
          { id: "1-1", title: "Introduction to HTML5 & Document Structure", duration: "25 min", isPreview: true },
          { id: "1-2", title: "Semantic Tags: Header, Main, Nav, and Footer", duration: "30 min", isPreview: false },
          { id: "1-3", title: "Accessible Forms, Labels, and Validation", duration: "35 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 2: Modern Responsive CSS3",
        lessons: [
          { id: "1-4", title: "CSS Box Model & Custom Properties (Variables)", duration: "30 min", isPreview: true },
          { id: "1-5", title: "Flexbox Mastery for Component Layouts", duration: "40 min", isPreview: false },
          { id: "1-6", title: "CSS Grid for Full-Page Layouts", duration: "45 min", isPreview: false },
          { id: "1-7", title: "Mobile-First Media Queries & Breakpoints", duration: "35 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 3: JavaScript DOM & Interactivity",
        lessons: [
          { id: "1-8", title: "ES6+ Syntax Essentials: Let, Const, Arrow Functions", duration: "30 min", isPreview: false },
          { id: "1-9", title: "DOM Selection, Manipulation, and Event Listeners", duration: "45 min", isPreview: false },
          { id: "1-10", title: "JavaScript ES Modules (import & export)", duration: "30 min", isPreview: false },
          { id: "1-11", title: "Building a Live Interactive Component", duration: "40 min", isPreview: false },
          { id: "1-12", title: "Course Capstone Project & Best Practices", duration: "55 min", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Python Programming",
    category: "Programming",
    difficulty: "Beginner",
    instructor: "Sarah Miller",
    instructorRole: "Software Architect & Python Specialist",
    duration: "8 hours",
    icon: "🐍",
    description: "Understand Python basics, variables, loops, data structures, and functional programming.",
    longDescription: "Step into the world of programming with Python, one of the most versatile and beginner-friendly languages in tech. You will build a rock-solid foundation in Python syntax, core data structures, algorithms, and practical problem-solving techniques.",
    lessons: 16,
    rating: 4.8,
    studentsCount: 2150,
    prerequisites: "Basic computer literacy. No programming experience required.",
    learningOutcomes: [
      "Understand Python syntax, variable data types, and control flow",
      "Work confidently with lists, tuples, dictionaries, and sets",
      "Write reusable, clean functions and handle runtime exceptions",
      "Read and process files and build practical automation scripts"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Getting Started with Python",
        lessons: [
          { id: "2-1", title: "Python Environment & Running Scripts", duration: "20 min", isPreview: true },
          { id: "2-2", title: "Variables, Numbers, and String Formatting", duration: "30 min", isPreview: false },
          { id: "2-3", title: "Conditional Statements & Boolean Logic", duration: "35 min", isPreview: false },
          { id: "2-4", title: "While Loops and For Loops in Practice", duration: "40 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 2: Python Data Structures",
        lessons: [
          { id: "2-5", title: "Lists and List Comprehensions", duration: "35 min", isPreview: true },
          { id: "2-6", title: "Tuples, Sets, and Immutability", duration: "25 min", isPreview: false },
          { id: "2-7", title: "Dictionaries: Key-Value Mapping & Iteration", duration: "40 min", isPreview: false },
          { id: "2-8", title: "Nested Data Collections & Practical Exercises", duration: "45 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 3: Functions and Modular Code",
        lessons: [
          { id: "2-9", title: "Defining Functions, Parameters, and Return Values", duration: "30 min", isPreview: false },
          { id: "2-10", title: "Scope, Default Arguments, and *args / **kwargs", duration: "35 min", isPreview: false },
          { id: "2-11", title: "Lambda Functions and Built-in Utilities", duration: "25 min", isPreview: false },
          { id: "2-12", title: "Modular Architecture and Python Packages", duration: "30 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 4: Real-World Applications",
        lessons: [
          { id: "2-13", title: "File I/O: Reading and Writing Data Files", duration: "30 min", isPreview: false },
          { id: "2-14", title: "Error Handling with Try, Except, and Finally", duration: "35 min", isPreview: false },
          { id: "2-15", title: "Building an Interactive Command-Line Tool", duration: "50 min", isPreview: false },
          { id: "2-16", title: "Python Capstone & Code Quality Standards", duration: "45 min", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "UI/UX Design Essentials",
    category: "Design",
    difficulty: "Intermediate",
    instructor: "Jordan Lee",
    instructorRole: "Principal Product Designer",
    duration: "5 hours",
    icon: "🎨",
    description: "Explore user-friendly interfaces, visual hierarchy, wireframing, and modern design systems.",
    longDescription: "Learn to design digital experiences that users love. This course bridges the gap between aesthetic visual design and intuitive user experience. Learn design thinking, accessibility, user research, wireframing, prototyping, and design systems.",
    lessons: 10,
    rating: 4.9,
    studentsCount: 980,
    prerequisites: "Basic familiarity with web interfaces and digital apps.",
    learningOutcomes: [
      "Apply the 5 stages of Design Thinking to solve user problems",
      "Master visual hierarchy, typography pairings, and color theory",
      "Build wireframes, interactive user flows, and component specs",
      "Ensure digital designs meet WCAG accessibility compliance"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: UX Fundamentals & Research",
        lessons: [
          { id: "3-1", title: "The UX Design Process: Empathize & Define", duration: "30 min", isPreview: true },
          { id: "3-2", title: "User Personas, Journey Maps, and User Stories", duration: "35 min", isPreview: false },
          { id: "3-3", title: "Information Architecture and Navigation Trees", duration: "30 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 2: Visual Interface Design",
        lessons: [
          { id: "3-4", title: "Typography Scale and Readability in Digital Products", duration: "30 min", isPreview: true },
          { id: "3-5", title: "Color Palettes, Contrast Ratios, and Accessibility", duration: "35 min", isPreview: false },
          { id: "3-6", title: "Grid Systems, White Space, and Visual Balance", duration: "30 min", isPreview: false },
          { id: "3-7", title: "Designing Cohesive Component Libraries", duration: "40 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 3: Prototyping & Usability Testing",
        lessons: [
          { id: "3-8", title: "Low-Fidelity to High-Fidelity Wireframes", duration: "35 min", isPreview: false },
          { id: "3-9", title: "Conducting Productive Usability Tests", duration: "35 min", isPreview: false },
          { id: "3-10", title: "Design Handoff to Frontend Developers", duration: "40 min", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "JavaScript Masterclass",
    category: "Web Development",
    difficulty: "Intermediate",
    instructor: "Alex Johnson",
    instructorRole: "Senior Frontend Engineer & Educator",
    duration: "10 hours",
    icon: "⚡",
    description: "Deepen your JavaScript expertise with closures, prototypes, async programming, and ES modules.",
    longDescription: "Take your JavaScript skills to an advanced professional level. Delve deep into the JavaScript runtime, closures, prototypal inheritance, promises, async/await, event bubbling, and modern architectural patterns without reliance on third-party frameworks.",
    lessons: 20,
    rating: 4.9,
    studentsCount: 1890,
    prerequisites: "Basic HTML, CSS, and elementary JavaScript fundamentals.",
    learningOutcomes: [
      "Understand the JavaScript Event Loop, call stack, and microtask queue",
      "Master closures, lexical scoping, and functional composition",
      "Handle asynchronous operations with Promises and Async/Await",
      "Structure complex vanilla web applications with ES modules"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Execution Context & Scoping",
        lessons: [
          { id: "4-1", title: "The JavaScript Engine and Execution Context", duration: "30 min", isPreview: true },
          { id: "4-2", title: "Lexical Scope and Closures in Practice", duration: "35 min", isPreview: false },
          { id: "4-3", title: "The 'this' Keyword and Function Binding", duration: "40 min", isPreview: false },
          { id: "4-4", title: "Prototypes and Prototypal Inheritance", duration: "35 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 2: Asynchronous JavaScript",
        lessons: [
          { id: "4-5", title: "Event Loop, Task Queues, and Concurrency", duration: "35 min", isPreview: true },
          { id: "4-6", title: "Deep Dive into Promises & Error Propagation", duration: "40 min", isPreview: false },
          { id: "4-7", title: "Async / Await Patterns and Clean Error Handling", duration: "35 min", isPreview: false },
          { id: "4-8", title: "Working with Web APIs & Fetch", duration: "30 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 3: Modern Architectural Patterns",
        lessons: [
          { id: "4-9", title: "Modular Architecture using ES6 Import & Export", duration: "30 min", isPreview: false },
          { id: "4-10", title: "State Management in Vanilla JavaScript", duration: "45 min", isPreview: false },
          { id: "4-11", title: "Event Delegation and Custom Events", duration: "30 min", isPreview: false },
          { id: "4-12", title: "Observer and Pub/Sub Design Patterns", duration: "40 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 4: Performance, Testing & Security",
        lessons: [
          { id: "4-13", title: "Debouncing, Throttling, and Animation Frames", duration: "30 min", isPreview: false },
          { id: "4-14", title: "Memory Leaks and Garbage Collection", duration: "30 min", isPreview: false },
          { id: "4-15", title: "DOM Sanitization and Preventing XSS Attacks", duration: "35 min", isPreview: false },
          { id: "4-16", title: "Building a Full Vanilla Single-Page App Engine", duration: "60 min", isPreview: false },
          { id: "4-17", title: "Unit Testing Vanilla JavaScript Logic", duration: "35 min", isPreview: false },
          { id: "4-18", title: "Browser Storage Alternatives & In-Memory Stores", duration: "25 min", isPreview: false },
          { id: "4-19", title: "Optimizing Web Vitals & Asset Bundling", duration: "35 min", isPreview: false },
          { id: "4-20", title: "Final Masterclass Capstone Review", duration: "50 min", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Data Science Introduction",
    category: "Data Science",
    difficulty: "Advanced",
    instructor: "Priya Sharma",
    instructorRole: "Data Scientist & Statistical Researcher",
    duration: "12 hours",
    icon: "📊",
    description: "Discover data analysis, statistical methods, visualization libraries, and exploratory insights.",
    longDescription: "Uncover actionable insights from raw data. Learn the end-to-end data science lifecycle from data wrangling and statistical testing to building beautiful exploratory charts and regression models.",
    lessons: 18,
    rating: 4.7,
    studentsCount: 1670,
    prerequisites: "Basic Python programming and high-school algebra.",
    learningOutcomes: [
      "Perform exploratory data analysis (EDA) on real-world datasets",
      "Manipulate tabular datasets using modern data frameworks",
      "Create compelling statistical visualizations and dashboards",
      "Understand foundational statistical hypothesis testing"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Foundations of Data Analysis",
        lessons: [
          { id: "5-1", title: "The Data Science Workflow & Environment", duration: "30 min", isPreview: true },
          { id: "5-2", title: "Descriptive Statistics: Mean, Median, Variance", duration: "35 min", isPreview: false },
          { id: "5-3", title: "Probability Distributions and Normalization", duration: "40 min", isPreview: false },
          { id: "5-4", title: "Handling Missing Values and Data Anomalies", duration: "35 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 2: Data Wrangling & Manipulation",
        lessons: [
          { id: "5-5", title: "Working with Tabular Data Structures", duration: "45 min", isPreview: true },
          { id: "5-6", title: "Filtering, Slicing, and Aggregating Data", duration: "40 min", isPreview: false },
          { id: "5-7", title: "Joining and Merging Relational Tables", duration: "35 min", isPreview: false },
          { id: "5-8", title: "Reshaping Data: Pivot Tables and Melt Operations", duration: "35 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 3: Data Storytelling & Visualization",
        lessons: [
          { id: "5-9", title: "Principles of Effective Data Visualization", duration: "30 min", isPreview: false },
          { id: "5-10", title: "Bar Charts, Histograms, and Density Plots", duration: "40 min", isPreview: false },
          { id: "5-11", title: "Scatter Plots, Heatmaps, and Correlation Matrices", duration: "35 min", isPreview: false },
          { id: "5-12", title: "Interactive Charts and Reporting Dashboards", duration: "45 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 4: Applied Predictive Modeling",
        lessons: [
          { id: "5-13", title: "Introduction to Supervised Machine Learning", duration: "40 min", isPreview: false },
          { id: "5-14", title: "Linear and Multiple Regression Analysis", duration: "50 min", isPreview: false },
          { id: "5-15", title: "Classification Basics and Logistic Regression", duration: "45 min", isPreview: false },
          { id: "5-16", title: "Model Evaluation: Confusion Matrices & ROC Curves", duration: "40 min", isPreview: false },
          { id: "5-17", title: "Feature Selection and Overfitting Prevention", duration: "35 min", isPreview: false },
          { id: "5-18", title: "Data Science Capstone Presentation", duration: "60 min", isPreview: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Responsive Web Design",
    category: "Design",
    difficulty: "Beginner",
    instructor: "Michael Chen",
    instructorRole: "Design Systems Architect",
    duration: "4 hours",
    icon: "📱",
    description: "Create modern websites that seamlessly adapt across mobile, tablet, and desktop screens.",
    longDescription: "Ensure your web designs look stunning on any screen resolution. Learn fluid typography, responsive image techniques, CSS Grid auto-fit layouts, and adaptive touch-friendly user interfaces.",
    lessons: 8,
    rating: 4.8,
    studentsCount: 1120,
    prerequisites: "Basic familiarity with HTML and CSS syntax.",
    learningOutcomes: [
      "Master CSS viewport units (vw, vh, clamp, min, max)",
      "Build fluid layouts using CSS Grid auto-fit and auto-fill",
      "Implement responsive typography and scalable media",
      "Test and debug layouts across multiple device viewports"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Fluid Layout Foundations",
        lessons: [
          { id: "6-1", title: "Understanding Viewports and Responsive Scaling", duration: "25 min", isPreview: true },
          { id: "6-2", title: "Modern CSS Units: rem, em, ch, and clamp()", duration: "30 min", isPreview: false },
          { id: "6-3", title: "Fluid Typography without JavaScript", duration: "30 min", isPreview: false }
        ]
      },
      {
        moduleTitle: "Module 2: Responsive Grids and Media",
        lessons: [
          { id: "6-4", title: "CSS Grid Auto-Fit and Auto-Fill Techniques", duration: "35 min", isPreview: true },
          { id: "6-5", title: "Responsive Images: srcset, sizes, and picture element", duration: "35 min", isPreview: false },
          { id: "6-6", title: "Touch Friendly Navigation Menus for Mobile", duration: "30 min", isPreview: false },
          { id: "6-7", title: "Optimizing Layout Shift (CLS) and Performance", duration: "30 min", isPreview: false },
          { id: "6-8", title: "Responsive Portfolio Project Review", duration: "45 min", isPreview: false }
        ]
      }
    ]
  }
];

export const categories = [
  {
    name: "Web Development",
    icon: "🌐",
    description: "Build modern web apps with HTML, CSS, JavaScript, and modular web architecture."
  },
  {
    name: "Programming",
    icon: "💻",
    description: "Develop strong problem-solving skills with versatile programming languages."
  },
  {
    name: "Design",
    icon: "🎨",
    description: "Master UI/UX principles, design systems, accessibility, and visual aesthetics."
  },
  {
    name: "Data Science",
    icon: "📊",
    description: "Extract actionable insights using statistical analysis and data visualization."
  }
];

export const benefits = [
  {
    icon: "🎯",
    title: "Project-Based Learning",
    description: "Build real-world projects that solidify your knowledge and stand out in your portfolio."
  },
  {
    icon: "⏱️",
    title: "Self-Paced Flexibility",
    description: "Learn on your own schedule with lifetime access to bite-sized, structured lessons."
  },
  {
    icon: "👨‍🏫",
    title: "Industry Experts",
    description: "Learn directly from experienced practitioners passionate about mentoring learners."
  },
  {
    icon: "🏆",
    title: "Skill Certification",
    description: "Track your progress and celebrate each milestone with proof of completed learning."
  }
];

export const initialLearningProgress = [
  {
    courseId: 1,
    completedLessons: 5,
    totalLessons: 12,
    lastAccessed: "Yesterday"
  },
  {
    courseId: 2,
    completedLessons: 8,
    totalLessons: 16,
    lastAccessed: "3 days ago"
  }
];

// In-memory working copy for frontend demo session.
// Notice: We strictly DO NOT persist this to localStorage, cookies, or databases.
export const learningProgress = initialLearningProgress.map(item => ({ ...item }));

/**
 * Check if a course is currently enrolled in memory.
 * @param {number|string} courseId
 * @returns {boolean}
 */
export function isEnrolled(courseId) {
  const numericId = Number(courseId);
  if (isNaN(numericId)) return false;
  return learningProgress.some(item => item.courseId === numericId);
}

/**
 * Enroll in a course, adding it to the shared in-memory learningProgress state.
 * Prevents duplicate enrollments.
 * @param {number|string} courseId
 * @returns {{ success: boolean, alreadyEnrolled: boolean, message: string, record?: object }}
 */
export function enrollCourse(courseId) {
  const numericId = Number(courseId);
  if (isNaN(numericId)) {
    return { success: false, alreadyEnrolled: false, message: "Invalid course ID." };
  }

  if (isEnrolled(numericId)) {
    return { success: false, alreadyEnrolled: true, message: "Already enrolled in this course." };
  }

  const course = getCourseById(numericId);
  if (!course) {
    return { success: false, alreadyEnrolled: false, message: "Course not found." };
  }

  const newRecord = {
    courseId: numericId,
    completedLessons: 0,
    totalLessons: course.lessons || 10,
    lastAccessed: "Just now"
  };

  // Prepend so newly enrolled course appears at the top of the dashboard
  learningProgress.unshift(newRecord);

  return {
    success: true,
    alreadyEnrolled: false,
    message: `Successfully enrolled in ${course.title}!`,
    record: newRecord
  };
}

/**
 * Returns current enrolled progress array.
 * @returns {Array}
 */
export function getLearningProgress() {
  return learningProgress;
}

/**
 * Clears in-memory enrollments for testing empty states.
 */
export function clearLearningProgress() {
  learningProgress.length = 0;
}

/**
 * Restores initial sample enrollments.
 */
export function restoreSampleLearningProgress() {
  learningProgress.length = 0;
  for (const item of initialLearningProgress) {
    learningProgress.push({ ...item });
  }
}

/**
 * Helper function to look up a course by ID.
 * @param {number|string} id
 * @returns {object|undefined}
 */
export function getCourseById(id) {
  const numericId = Number(id);
  if (isNaN(numericId)) return undefined;
  return courses.find(course => course.id === numericId);
}

/**
 * Helper to retrieve distinct categories from courses.
 * @returns {string[]}
 */
export function getCourseCategories() {
  return [...new Set(courses.map(course => course.category))];
}

/**
 * Helper to retrieve distinct difficulties from courses.
 * @returns {string[]}
 */
export function getCourseDifficulties() {
  return [...new Set(courses.map(course => course.difficulty))];
}

// Sync enrollment from URL search query parameter (e.g. ?enrolled=3) on initial load
if (typeof window !== "undefined" && window.location && window.location.search) {
  try {
    const params = new URLSearchParams(window.location.search);
    const enrolledParam = params.get("enrolled");
    if (enrolledParam) {
      const ids = enrolledParam.split(",").map(Number);
      for (const id of ids) {
        if (!isNaN(id) && !isEnrolled(id)) {
          enrollCourse(id);
        }
      }
    }
  } catch (_) {
    // Ignore URL parse errors in non-browser environments
  }
}
