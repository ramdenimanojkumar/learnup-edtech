/**
 * LearnUp EdTech - Main Application Controller
 *
 * Coordinates shared layouts, page detection, search, filtering,
 * and dashboard interactions using Vanilla JavaScript ES modules.
 */

import {
  courses,
  categories,
  benefits,
  learningProgress,
  getCourseCategories,
  getCourseDifficulties,
  restoreSampleLearningProgress,
  clearLearningProgress
} from "./data.js";

import {
  renderHeader,
  renderFooter,
  renderCourseCard,
  renderEmptyState,
  renderProgressBar,
  renderCategoryCard,
  renderBenefitCard,
  escapeHtml
} from "./components.js";

import { initCourseDetails } from "./course-details.js";

if (typeof window !== "undefined") {
  window.__learnup_main_loaded = true;
}

/**
 * --------------------------------------------------------------------------
 * Home Page View
 * --------------------------------------------------------------------------
 */
function renderHome() {
  const content = document.querySelector("#page-content");
  if (!content) return;

  const popularCourses = courses.slice(0, 3);

  content.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-eyebrow">
            <span aria-hidden="true">🚀</span> Practical Skill Mastery
          </div>
          <h1>
            Learn new skills.<br>
            <span class="hero-gradient-text">Build your future.</span>
          </h1>
          <p class="hero-lead">
            Explore industry-crafted courses, learn at your own pace with bite-sized lessons,
            and take the next confident step toward your career ambitions.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="./courses.html">
              Explore Courses &rarr;
            </a>
            <a class="btn btn-outline btn-lg" href="./dashboard.html">
              My Learning
            </a>
          </div>

          <div class="hero-stats-strip">
            <div class="hero-stat-item">
              <span class="hero-stat-number">${courses.length}+</span>
              <span class="hero-stat-label">In-Depth Courses</span>
            </div>
            <div class="hero-stat-item">
              <span class="hero-stat-number">4.8 / 5</span>
              <span class="hero-stat-label">Average Rating</span>
            </div>
            <div class="hero-stat-item">
              <span class="hero-stat-number">100%</span>
              <span class="hero-stat-label">Free Demo Access</span>
            </div>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="hero-visual-card">
            <div class="hero-visual-header">
              <span style="font-weight: 700; color: var(--text);">Top Pick This Week</span>
              <span class="hero-badge-pill">Featured</span>
            </div>
            <div class="hero-preview-item">
              <span class="hero-preview-icon">💻</span>
              <div>
                <div class="hero-preview-title">Web Development Fundamentals</div>
                <div class="hero-preview-sub">12 lessons &bull; 6 hours &bull; Beginner</div>
              </div>
            </div>
            <div class="hero-preview-item">
              <span class="hero-preview-icon">🐍</span>
              <div>
                <div class="hero-preview-title">Python Programming</div>
                <div class="hero-preview-sub">16 lessons &bull; 8 hours &bull; Beginner</div>
              </div>
            </div>
            <div class="hero-preview-item">
              <span class="hero-preview-icon">⚡</span>
              <div>
                <div class="hero-preview-title">JavaScript Masterclass</div>
                <div class="hero-preview-sub">20 lessons &bull; 10 hours &bull; Intermediate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Courses Section -->
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <h2>Popular Courses</h2>
          <p>Get started with our most highly rated learning paths.</p>
        </div>

        <div class="course-grid">
          ${popularCourses.map(renderCourseCard).join("")}
        </div>

        <div class="section-footer-cta">
          <a class="btn btn-outline btn-lg" href="./courses.html">
            View All ${courses.length} Courses &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- Course Categories Section -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Explore by Category</h2>
          <p>Find focused courses tailored to your specific field of interest.</p>
        </div>

        <div class="category-grid">
          ${categories.map(renderCategoryCard).join("")}
        </div>
      </div>
    </section>

    <!-- Learning Benefits Section -->
    <section class="section">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Why Learn with LearnUp?</h2>
          <p>Designed around modern learning science to help you retain more and build faster.</p>
        </div>

        <div class="benefits-grid">
          ${benefits.map(renderBenefitCard).join("")}
        </div>
      </div>
    </section>

    <!-- Call to Action Banner -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div style="background: linear-gradient(135deg, var(--primary) 0%, #3730a3 100%); color: white; border-radius: var(--radius-lg); padding: 48px 36px; text-align: center;">
          <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 12px;">Ready to elevate your skill set?</h2>
          <p style="max-width: 580px; margin: 0 auto 28px; opacity: 0.9; font-size: 1.05rem;">
            Join thousands of self-directed learners leveling up their web development, programming, and design abilities.
          </p>
          <a href="./courses.html" class="btn btn-lg" style="background: white; color: var(--primary); font-weight: 700;">
            Browse All Courses Now
          </a>
        </div>
      </div>
    </section>
  `;
}

/**
 * --------------------------------------------------------------------------
 * Courses Catalogue View
 * --------------------------------------------------------------------------
 */
function renderCourses() {
  const content = document.querySelector("#page-content");
  if (!content) return;

  const allCategories = getCourseCategories();
  const allDifficulties = getCourseDifficulties();

  // Read optional category parameter from URL (e.g. from homepage category cards)
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategoryParam = urlParams.get("category") || "";

  content.innerHTML = `
    <!-- Header Banner -->
    <section class="page-banner">
      <div class="container page-banner-content">
        <h1>Explore Courses</h1>
        <p>
          Search across our entire catalog or filter by technical category and difficulty level.
        </p>
      </div>
    </section>

    <!-- Catalog Section -->
    <section class="section">
      <div class="container">
        <!-- Filter and Search Toolbar -->
        <div class="filter-toolbar">
          <div class="filter-controls">
            <!-- Search Input -->
            <div class="search-box-wrapper">
              <span class="search-icon" aria-hidden="true">🔍</span>
              <input
                type="search"
                class="search-input"
                id="course-search"
                placeholder="Search by title, description, or instructor..."
                aria-label="Search courses by keyword"
              >
            </div>

            <!-- Category Filter -->
            <div class="filter-select-wrapper">
              <label for="category-filter" class="visually-hidden" style="display:none;">Category</label>
              <select class="filter-select" id="category-filter" aria-label="Filter by category">
                <option value="">All Categories</option>
                ${allCategories.map(cat => `
                  <option value="${escapeHtml(cat)}" ${cat === initialCategoryParam ? "selected" : ""}>
                    ${escapeHtml(cat)}
                  </option>
                `).join("")}
              </select>
            </div>

            <!-- Difficulty Filter -->
            <div class="filter-select-wrapper">
              <label for="difficulty-filter" class="visually-hidden" style="display:none;">Difficulty</label>
              <select class="filter-select" id="difficulty-filter" aria-label="Filter by difficulty">
                <option value="">All Levels</option>
                ${allDifficulties.map(diff => `
                  <option value="${escapeHtml(diff)}">${escapeHtml(diff)}</option>
                `).join("")}
              </select>
            </div>

            <!-- Reset Button -->
            <div class="filter-reset-wrapper">
              <button type="button" class="btn btn-outline" id="reset-filters-btn" title="Reset search and filters">
                Reset
              </button>
            </div>
          </div>
        </div>

        <!-- Filter Status & Result Count -->
        <div class="filter-status-bar">
          <p class="course-count-badge" id="course-count" aria-live="polite">
            Loading courses...
          </p>
          <div class="active-filters-chips" id="active-chips" aria-label="Active filter summary"></div>
        </div>

        <!-- Course Cards Grid Container -->
        <div class="course-grid" id="course-list"></div>
      </div>
    </section>
  `;

  // Grab interactive DOM elements
  const searchInput = document.querySelector("#course-search");
  const categoryFilter = document.querySelector("#category-filter");
  const difficultyFilter = document.querySelector("#difficulty-filter");
  const resetBtn = document.querySelector("#reset-filters-btn");
  const courseList = document.querySelector("#course-list");
  const courseCount = document.querySelector("#course-count");
  const chipsContainer = document.querySelector("#active-chips");

  /**
   * Filters courses and re-renders the course card grid.
   */
  function updateCourses() {
    const searchVal = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const categoryVal = categoryFilter ? categoryFilter.value : "";
    const difficultyVal = difficultyFilter ? difficultyFilter.value : "";

    const filtered = courses.filter(course => {
      const matchSearch =
        !searchVal ||
        course.title.toLowerCase().includes(searchVal) ||
        course.description.toLowerCase().includes(searchVal) ||
        course.instructor.toLowerCase().includes(searchVal) ||
        course.category.toLowerCase().includes(searchVal);

      const matchCategory = !categoryVal || course.category === categoryVal;
      const matchDifficulty = !difficultyVal || course.difficulty === difficultyVal;

      return matchSearch && matchCategory && matchDifficulty;
    });

    // Update result count readout
    const countText = filtered.length === 1
      ? "Showing 1 course"
      : `Showing ${filtered.length} courses`;
    courseCount.textContent = countText;

    // Update active filter chips
    const chips = [];
    if (searchVal) chips.push(`Search: "${escapeHtml(searchVal)}"`);
    if (categoryVal) chips.push(`Category: ${escapeHtml(categoryVal)}`);
    if (difficultyVal) chips.push(`Level: ${escapeHtml(difficultyVal)}`);

    chipsContainer.innerHTML = chips
      .map(chip => `<span class="filter-chip">${chip}</span>`)
      .join("");

    // Render course cards or empty state
    if (filtered.length > 0) {
      courseList.innerHTML = filtered.map(renderCourseCard).join("");
    } else {
      courseList.innerHTML = renderEmptyState(
        "No courses found matching your current search or filter criteria. Try clearing some filters to see more results.",
        "Clear All Filters",
        "#",
        "clear-filters-cta"
      );

      const clearCta = courseList.querySelector("#clear-filters-cta");
      if (clearCta) {
        clearCta.addEventListener("click", e => {
          e.preventDefault();
          resetFilters();
        });
      }
    }
  }

  function resetFilters() {
    if (searchInput) searchInput.value = "";
    if (categoryFilter) categoryFilter.value = "";
    if (difficultyFilter) difficultyFilter.value = "";
    updateCourses();
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener("input", updateCourses);
  }
  if (categoryFilter) {
    categoryFilter.addEventListener("change", updateCourses);
  }
  if (difficultyFilter) {
    difficultyFilter.addEventListener("change", updateCourses);
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", resetFilters);
  }

  // Initial trigger
  updateCourses();
}

/**
 * --------------------------------------------------------------------------
 * Learning Dashboard View
 * --------------------------------------------------------------------------
 */
let isDashboardEmptySimulated = false;

function renderDashboard() {
  const content = document.querySelector("#page-content");
  if (!content) return;

  function drawDashboard() {
    // Read directly from shared in-memory learningProgress unless empty state is simulated
    const currentEnrolled = isDashboardEmptySimulated ? [] : learningProgress;

    // Calculate dashboard overview statistics
    const totalEnrolled = currentEnrolled.length;
    const totalCompletedLessons = currentEnrolled.reduce((sum, item) => sum + item.completedLessons, 0);
    const totalEnrolledLessons = currentEnrolled.reduce((sum, item) => sum + item.totalLessons, 0);
    const averageProgressPercent = totalEnrolledLessons > 0
      ? Math.round((totalCompletedLessons / totalEnrolledLessons) * 100)
      : 0;

    content.innerHTML = `
      <section class="page-banner">
        <div class="container page-banner-content">
          <h1>My Learning Dashboard</h1>
          <p>
            Track your course progress, resume recent lessons, and manage your learning journey.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <!-- Overview Summary Metrics -->
          <div class="dashboard-overview-grid">
            <div class="overview-metric-card">
              <div class="metric-icon-box" aria-hidden="true">📚</div>
              <div class="metric-info">
                <span class="metric-val">${totalEnrolled}</span>
                <span class="metric-label">Enrolled Courses</span>
              </div>
            </div>

            <div class="overview-metric-card">
              <div class="metric-icon-box" aria-hidden="true">✅</div>
              <div class="metric-info">
                <span class="metric-val">${totalCompletedLessons}</span>
                <span class="metric-label">Lessons Completed</span>
              </div>
            </div>

            <div class="overview-metric-card">
              <div class="metric-icon-box" aria-hidden="true">📈</div>
              <div class="metric-info">
                <span class="metric-val">${averageProgressPercent}%</span>
                <span class="metric-label">Average Completion</span>
              </div>
            </div>
          </div>

          <!-- Controls Bar -->
          <div class="dashboard-controls-bar">
            <div class="dashboard-title-group">
              <h2>Courses in Progress</h2>
              <p>Demo notice: Learning progress is frontend simulated and stored in shared memory.</p>
            </div>

            <!-- Demo Toggle button to allow reviewer to test empty state and populated state -->
            <div>
              <button type="button" class="btn btn-outline btn-sm" id="toggle-demo-enrolled-btn">
                ${totalEnrolled > 0 ? "Simulate Empty State" : "Restore Sample Enrolled Courses"}
              </button>
            </div>
          </div>

          <!-- Course Progress List / Empty State -->
          <div id="enrolled-courses-container">
            ${totalEnrolled > 0 ? `
              <div class="course-grid">
                ${currentEnrolled.map(progress => {
                  const course = courses.find(item => item.id === progress.courseId);
                  if (!course) return "";

                  const safeTitle = escapeHtml(course.title);
                  const safeCat = escapeHtml(course.category);
                  const safeInst = escapeHtml(course.instructor);

                  return `
                    <article class="course-card">
                      <div class="course-banner" aria-hidden="true">
                        <span class="course-icon">${course.icon || "💻"}</span>
                      </div>

                      <div class="course-info">
                        <div class="course-header-meta">
                          <span class="tag tag-category">${safeCat}</span>
                          <span class="tag tag-difficulty">${escapeHtml(course.difficulty)}</span>
                        </div>

                        <h3 class="course-title">
                          <a href="./course-details.html?id=${course.id}">${safeTitle}</a>
                        </h3>

                        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 12px;">
                          Instructor: ${safeInst}
                        </p>

                        ${renderProgressBar(
                          progress.completedLessons,
                          progress.totalLessons,
                          `${course.title} Progress`
                        )}

                        <div class="course-card-footer" style="margin-top: 18px;">
                          <a
                            class="btn btn-primary btn-block"
                            href="./course-details.html?id=${course.id}"
                            aria-label="Continue Learning ${safeTitle}"
                          >
                            Continue Learning &rarr;
                          </a>
                        </div>
                      </div>
                    </article>
                  `;
                }).join("")}
              </div>
            ` : renderEmptyState(
              "You are not currently enrolled in any courses. Browse our course catalog and enroll to track your progress here!",
              "Browse Course Catalog",
              "./courses.html"
            )}
          </div>
        </div>
      </section>
    `;

    // Attach toggle handler
    const toggleBtn = document.querySelector("#toggle-demo-enrolled-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        isDashboardEmptySimulated = !isDashboardEmptySimulated;
        if (!isDashboardEmptySimulated && learningProgress.length === 0) {
          restoreSampleLearningProgress();
        }
        drawDashboard();
      });
    }
  }

  drawDashboard();
}

/**
 * --------------------------------------------------------------------------
 * Router & Client-Side Navigation
 * --------------------------------------------------------------------------
 */
export function getPageFromUrl(href) {
  try {
    const url = new URL(href, typeof window !== "undefined" ? window.location.href : "http://localhost");
    const path = url.pathname.toLowerCase();
    if (path.endsWith("courses.html") || path.endsWith("/courses")) return "courses";
    if (path.endsWith("dashboard.html") || path.endsWith("/dashboard")) return "dashboard";
    if (path.endsWith("course-details.html") || path.endsWith("/course-details")) return "course-details";
    if (path.endsWith("index.html") || path.endsWith("/") || path === "") return "home";
  } catch (_) {}
  return "home";
}

export function renderActivePage(targetPage) {
  if (typeof document === "undefined") return;
  document.body.dataset.page = targetPage;
  renderHeader(targetPage === "course-details" ? "courses" : targetPage);

  switch (targetPage) {
    case "courses":
      renderCourses();
      break;
    case "dashboard":
      renderDashboard();
      break;
    case "course-details":
      initCourseDetails();
      break;
    case "home":
    default:
      renderHome();
      break;
  }
}

export function navigateTo(href, push = true) {
  const targetPage = getPageFromUrl(href);
  if (push && typeof window !== "undefined" && window.history) {
    window.history.pushState({}, "", href);
  }
  renderActivePage(targetPage);
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Client-side link interception to maintain shared in-memory state without page reloads
if (typeof document !== "undefined") {
  document.addEventListener("click", e => {
    const link = e.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href) return;

    // Ignore anchors, external links, protocols
    if (
      href.startsWith("#") ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:")
    ) {
      return;
    }

    // Intercept internal page navigation (.html or relative paths)
    if (
      href.includes(".html") ||
      href.startsWith("./") ||
      href.startsWith("/")
    ) {
      e.preventDefault();
      navigateTo(href);
    }
  });

  if (typeof window !== "undefined") {
    window.addEventListener("popstate", () => {
      const targetPage = getPageFromUrl(window.location.href);
      renderActivePage(targetPage);
    });
  }
}

// Initial Boot: Detect active page from body data attribute or URL
const initialPage = (typeof document !== "undefined" && document.body && document.body.dataset.page) ||
  getPageFromUrl(typeof window !== "undefined" ? window.location.href : "");

renderHeader(initialPage === "course-details" ? "courses" : initialPage);
renderFooter();
renderActivePage(initialPage);
