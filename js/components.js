/**
 * LearnUp EdTech - Reusable UI Components Module
 *
 * Implements accessible, modular, reusable UI components for LearnUp.
 */

/**
 * Escapes unsafe HTML characters to prevent XSS vulnerabilities.
 * @param {string|number} str
 * @returns {string}
 */
export function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Renders the shared top navigation header.
 * @param {string} activePage - Identifies current page ("home", "courses", "dashboard", "course-details")
 */
export function renderHeader(activePage = "home") {
  const header = document.querySelector("#site-header");
  if (!header) return;

  const links = [
    { page: "home", label: "Home", href: "./index.html" },
    { page: "courses", label: "Courses", href: "./courses.html" },
    { page: "dashboard", label: "My Learning", href: "./dashboard.html" }
  ];

  header.className = "site-header";
  header.innerHTML = `
    <a href="#page-content" class="skip-link">Skip to main content</a>
    <div class="container navbar-container">
      <nav class="navbar" aria-label="Main navigation">
        <a class="logo" href="./index.html" aria-label="LearnUp home">
          <span class="logo-mark" aria-hidden="true">🎓</span>
          <span class="logo-text">LearnUp<span class="logo-dot">.</span></span>
        </a>

        <button
          type="button"
          class="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          aria-controls="primary-nav-menu"
        >
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
        </button>

        <ul class="nav-links" id="primary-nav-menu">
          ${links.map(link => {
            const isActive = link.page === activePage;
            return `
              <li>
                <a
                  href="${link.href}"
                  class="nav-link ${isActive ? "active" : ""}"
                  ${isActive ? 'aria-current="page"' : ""}
                >${link.label}</a>
              </li>
            `;
          }).join("")}
          <li class="nav-action-item">
            <a href="./courses.html" class="btn btn-sm btn-nav">Get Started</a>
          </li>
        </ul>
      </nav>
    </div>
  `;

  // Mobile menu toggle handling
  const navToggle = header.querySelector(".nav-toggle");
  const navLinks = header.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      navLinks.classList.toggle("open");
    });
  }
}

/**
 * Renders the shared footer across all pages.
 */
export function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) return;

  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container footer-content">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="logo logo-footer" href="./index.html" aria-label="LearnUp home">
            <span class="logo-mark" aria-hidden="true">🎓</span>
            <span class="logo-text">LearnUp<span class="logo-dot">.</span></span>
          </a>
          <p class="footer-desc">
            Empowering curious minds through modern, practical, self-paced online education.
          </p>
          <div class="footer-badge">
            <span class="badge-dot" aria-hidden="true"></span>
            Frontend Demo Platform
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./courses.html">All Courses</a></li>
            <li><a href="./dashboard.html">My Learning Dashboard</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Categories</h4>
          <ul class="footer-links">
            <li><a href="./courses.html?category=Web+Development">Web Development</a></li>
            <li><a href="./courses.html?category=Programming">Programming</a></li>
            <li><a href="./courses.html?category=Design">Design & UI/UX</a></li>
            <li><a href="./courses.html?category=Data+Science">Data Science</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="footer-heading">Platform Note</h4>
          <p class="footer-note">
            Built with pure HTML5, CSS3, and modern Vanilla ES6+ modules.
            Demonstration mode: no external server or permanent storage is utilized.
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} LearnUp EdTech. Educational Demonstration.</p>
        <p class="footer-tech">Vanilla JS &bull; CSS3 Grid &bull; Semantic HTML5</p>
      </div>
    </div>
  `;
}

/**
 * Renders a standard course card for catalogs and home page grids.
 * @param {object} course
 * @returns {string} HTML string
 */
export function renderCourseCard(course) {
  const safeTitle = escapeHtml(course.title);
  const safeDesc = escapeHtml(course.description);
  const safeCat = escapeHtml(course.category);
  const safeDiff = escapeHtml(course.difficulty);
  const safeInst = escapeHtml(course.instructor);
  const safeDur = escapeHtml(course.duration);
  const safeLessons = escapeHtml(course.lessons);
  const rating = course.rating ? course.rating.toFixed(1) : "4.8";

  // Difficulty badge modifier class
  const diffClass = safeDiff.toLowerCase();

  return `
    <article class="course-card" data-course-id="${course.id}">
      <div class="course-banner" aria-hidden="true">
        <span class="course-icon">${course.icon || "📚"}</span>
      </div>

      <div class="course-info">
        <div class="course-header-meta">
          <span class="tag tag-category">${safeCat}</span>
          <span class="tag tag-difficulty tag-diff-${diffClass}">${safeDiff}</span>
        </div>

        <h3 class="course-title">
          <a href="./course-details.html?id=${course.id}">${safeTitle}</a>
        </h3>

        <p class="course-description">${safeDesc}</p>

        <div class="course-meta">
          <span class="meta-item" title="Duration">
            <span class="meta-icon" aria-hidden="true">⏱️</span>
            ${safeDur}
          </span>
          <span class="meta-item" title="Lessons count">
            <span class="meta-icon" aria-hidden="true">📖</span>
            ${safeLessons} lessons
          </span>
          <span class="meta-item rating-item" title="Rating">
            <span class="meta-icon star" aria-hidden="true">★</span>
            ${rating}
          </span>
        </div>

        <div class="course-instructor">
          <span class="instructor-avatar" aria-hidden="true">👤</span>
          <span class="instructor-name">By ${safeInst}</span>
        </div>

        <div class="course-card-footer">
          <a
            class="btn btn-primary btn-block"
            href="./course-details.html?id=${course.id}"
            aria-label="View Course details for ${safeTitle}"
          >
            View Course <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

/**
 * Renders a reusable empty state component when results or data are empty.
 * @param {string} message - User-facing message to explain empty state
 * @param {string} [actionText] - Optional button text
 * @param {string} [actionHref] - Optional button link href
 * @param {string} [actionId] - Optional button id for event attachment
 * @returns {string} HTML string
 */
export function renderEmptyState(
  message = "No courses match your criteria.",
  actionText = "Explore All Courses",
  actionHref = "./courses.html",
  actionId = ""
) {
  const safeMsg = escapeHtml(message);
  const safeText = escapeHtml(actionText);

  return `
    <div class="empty-state" role="status" aria-live="polite">
      <div class="empty-icon" aria-hidden="true">🔍</div>
      <h3 class="empty-title">Nothing to show right now</h3>
      <p class="empty-text">${safeMsg}</p>
      ${actionText ? `
        <div class="empty-action">
          <a
            class="btn btn-outline"
            ${actionHref ? `href="${escapeHtml(actionHref)}"` : 'href="#"'}
            ${actionId ? `id="${escapeHtml(actionId)}"` : ""}
          >${safeText}</a>
        </div>
      ` : ""}
    </div>
  `;
}

/**
 * Renders an accessible progress bar.
 * @param {number} completed
 * @param {number} total
 * @param {string} label
 * @returns {string} HTML string
 */
export function renderProgressBar(completed, total, label = "Progress") {
  const percentage = total > 0 ? Math.min(100, Math.round((completed / total) * 100)) : 0;
  const safeLabel = escapeHtml(label);

  return `
    <div class="progress-wrapper">
      <div class="progress-labels">
        <span class="progress-status">${completed} of ${total} lessons completed</span>
        <span class="progress-percent" aria-hidden="true">${percentage}%</span>
      </div>
      <div
        class="progress-track"
        role="progressbar"
        aria-label="${safeLabel}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${percentage}"
      >
        <div class="progress-fill" style="width: ${percentage}%"></div>
      </div>
    </div>
  `;
}

/**
 * Renders a category card for the homepage category section.
 * @param {object} category
 * @returns {string} HTML string
 */
export function renderCategoryCard(category) {
  const safeName = escapeHtml(category.name);
  const safeDesc = escapeHtml(category.description);
  const encodedName = encodeURIComponent(category.name);

  return `
    <a href="./courses.html?category=${encodedName}" class="category-card" aria-label="Explore ${safeName} courses">
      <div class="category-icon" aria-hidden="true">${category.icon || "📚"}</div>
      <h3 class="category-title">${safeName}</h3>
      <p class="category-desc">${safeDesc}</p>
      <span class="category-link">Explore courses &rarr;</span>
    </a>
  `;
}

/**
 * Renders a benefit card for the homepage learning benefits section.
 * @param {object} benefit
 * @returns {string} HTML string
 */
export function renderBenefitCard(benefit) {
  const safeTitle = escapeHtml(benefit.title);
  const safeDesc = escapeHtml(benefit.description);

  return `
    <div class="benefit-card">
      <div class="benefit-icon" aria-hidden="true">${benefit.icon}</div>
      <h3 class="benefit-title">${safeTitle}</h3>
      <p class="benefit-desc">${safeDesc}</p>
    </div>
  `;
}
