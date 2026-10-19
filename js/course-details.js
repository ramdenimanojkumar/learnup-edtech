/**
 * LearnUp EdTech - Course Details Page Module
 *
 * Handles URL parsing, course lookup, validation, curriculum rendering,
 * and frontend-only enrollment interactions.
 */

import { courses, getCourseById } from "./data.js";
import {
  renderHeader,
  renderFooter,
  renderEmptyState,
  escapeHtml
} from "./components.js";

/**
 * Initializes and renders the Course Details view.
 */
export function initCourseDetails() {
  // Render shared header and footer
  renderHeader("courses");
  renderFooter();

  const content = document.querySelector("#page-content");
  if (!content) return;

  // Extract and validate ID from URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get("id");

  if (!rawId || rawId.trim() === "") {
    renderCourseNotFound(content, "No course ID was specified in the URL.");
    return;
  }

  const course = getCourseById(rawId);
  if (!course) {
    renderCourseNotFound(
      content,
      `We couldn't find any course with ID "${escapeHtml(rawId)}". It may have been moved or removed.`
    );
    return;
  }

  // Update document title dynamically
  document.title = `${course.title} | LearnUp`;

  // Render course details layout
  renderCourseView(content, course);
}

/**
 * Renders the friendly error state when an ID is missing or invalid.
 * @param {HTMLElement} container
 * @param {string} reason
 */
function renderCourseNotFound(container, reason) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <ol class="breadcrumb-list">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./courses.html">Courses</a></li>
            <li class="breadcrumb-current" aria-current="page">Course Not Found</li>
          </ol>
        </nav>
        ${renderEmptyState(
          reason,
          "Browse All Courses",
          "./courses.html"
        )}
      </div>
    </section>
  `;
}

/**
 * Renders the complete course details presentation.
 * @param {HTMLElement} container
 * @param {object} course
 */
function renderCourseView(container, course) {
  const safeTitle = escapeHtml(course.title);
  const safeCat = escapeHtml(course.category);
  const safeDiff = escapeHtml(course.difficulty);
  const safeDesc = escapeHtml(course.longDescription || course.description);
  const safeInstructor = escapeHtml(course.instructor);
  const safeRole = escapeHtml(course.instructorRole || "Course Instructor");
  const safeDuration = escapeHtml(course.duration);
  const safeLessonsCount = escapeHtml(course.lessons);
  const safePrereq = escapeHtml(course.prerequisites || "No prior prerequisites needed.");
  const rating = course.rating ? course.rating.toFixed(1) : "4.8";
  const students = course.studentsCount ? course.studentsCount.toLocaleString() : "1,200+";

  const diffClass = safeDiff.toLowerCase();

  // Generate Outcomes HTML
  const outcomesHtml = (course.learningOutcomes || [
    "Build practical hands-on projects",
    "Gain deep conceptual clarity and confidence",
    "Learn industry-standard best practices",
    "Prepare for technical interviews and professional roles"
  ]).map(outcome => `
    <li class="outcome-item">
      <span class="outcome-check" aria-hidden="true">✓</span>
      <span>${escapeHtml(outcome)}</span>
    </li>
  `).join("");

  // Generate Curriculum Modules HTML
  const curriculumHtml = (course.curriculum && course.curriculum.length > 0)
    ? course.curriculum.map((module, mIdx) => `
        <div class="curriculum-module">
          <div class="module-header">
            <span>${escapeHtml(module.moduleTitle || `Module ${mIdx + 1}`)}</span>
            <span class="module-lesson-count">${module.lessons ? module.lessons.length : 0} lessons</span>
          </div>
          <ul class="module-lessons-list">
            ${(module.lessons || []).map((lesson, lIdx) => `
              <li class="lesson-row">
                <div class="lesson-left">
                  <span class="lesson-icon" aria-hidden="true">▶</span>
                  <span class="lesson-title">${escapeHtml(lesson.title)}</span>
                  ${lesson.isPreview ? '<span class="lesson-preview-tag">Preview</span>' : ""}
                </div>
                <span class="lesson-duration">${escapeHtml(lesson.duration || "25 min")}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      `).join("")
    : `
        <div class="curriculum-module">
          <div class="module-header">
            <span>Course Syllabus & Lessons</span>
            <span>${safeLessonsCount} lessons</span>
          </div>
          <ul class="module-lessons-list">
            ${Array.from({ length: course.lessons || 8 }, (_, i) => `
              <li class="lesson-row">
                <div class="lesson-left">
                  <span class="lesson-icon" aria-hidden="true">▶</span>
                  <span class="lesson-title">Lesson ${i + 1}: Core Concepts & Practical Application</span>
                  ${i === 0 ? '<span class="lesson-preview-tag">Preview</span>' : ""}
                </div>
                <span class="lesson-duration">30 min</span>
              </li>
            `).join("")}
          </ul>
        </div>
      `;

  container.innerHTML = `
    <!-- Page Header / Breadcrumb -->
    <div class="page-banner">
      <div class="container">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <ol class="breadcrumb-list">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./courses.html">Courses</a></li>
            <li class="breadcrumb-current" aria-current="page">${safeTitle}</li>
          </ol>
        </nav>

        <div class="course-hero-header">
          <div class="course-hero-badges">
            <span class="tag tag-category">${safeCat}</span>
            <span class="tag tag-difficulty tag-diff-${diffClass}">${safeDiff}</span>
          </div>

          <h1 class="course-hero-title">${safeTitle}</h1>
          <p class="course-hero-lead">${safeDesc}</p>

          <div class="course-hero-meta-grid">
            <div class="hero-meta-block">
              <span class="meta-block-label">Instructor</span>
              <span class="meta-block-val">${safeInstructor}</span>
            </div>
            <div class="hero-meta-block">
              <span class="meta-block-label">Duration</span>
              <span class="meta-block-val">${safeDuration}</span>
            </div>
            <div class="hero-meta-block">
              <span class="meta-block-label">Curriculum</span>
              <span class="meta-block-val">${safeLessonsCount} lessons</span>
            </div>
            <div class="hero-meta-block">
              <span class="meta-block-label">Learners</span>
              <span class="meta-block-val">★ ${rating} (${students})</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Course Details Content Grid -->
    <section class="section">
      <div class="container course-details-layout">
        <!-- Left Column: Details, Outcomes, Curriculum, Instructor -->
        <div class="course-details-main">
          <!-- Learning Outcomes -->
          <div class="details-card-block">
            <h2 class="details-block-heading">
              <span aria-hidden="true">🎯</span> What You Will Learn
            </h2>
            <ul class="outcomes-list">
              ${outcomesHtml}
            </ul>
          </div>

          <!-- Prerequisites -->
          <div class="details-card-block">
            <h2 class="details-block-heading">
              <span aria-hidden="true">📋</span> Prerequisites
            </h2>
            <p>${safePrereq}</p>
          </div>

          <!-- Curriculum Breakdown -->
          <div class="details-card-block">
            <h2 class="details-block-heading">
              <span aria-hidden="true">📚</span> Course Curriculum
            </h2>
            <div class="curriculum-container">
              ${curriculumHtml}
            </div>
          </div>

          <!-- Instructor Profile -->
          <div class="details-card-block">
            <h2 class="details-block-heading">
              <span aria-hidden="true">👨‍🏫</span> Your Instructor
            </h2>
            <div class="instructor-profile-card">
              <div class="instructor-large-avatar" aria-hidden="true">👤</div>
              <div class="instructor-profile-info">
                <h4>${safeInstructor}</h4>
                <p class="instructor-role">${safeRole}</p>
                <p style="margin-top: 8px; color: var(--text-muted); font-size: 0.92rem;">
                  Passionate about crafting practical, engaging educational experiences. Alex brings years of industry engineering experience into every module.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Sticky Enrollment Sidebar Card -->
        <aside class="course-details-sidebar" aria-label="Course enrollment and overview">
          <div class="details-sidebar-card">
            <div class="sidebar-price-tag">Free Access</div>
            <p class="sidebar-demo-badge">Frontend Demonstration Project</p>

            <button
              type="button"
              class="btn btn-primary btn-block btn-lg"
              id="enroll-btn"
            >
              Enroll Now &bull; Free
            </button>

            <div id="enrollment-feedback" aria-live="polite"></div>

            <ul class="sidebar-features-list">
              <li class="sidebar-feature-item">
                <span class="sidebar-feature-icon" aria-hidden="true">✓</span>
                <span>Full access to all ${safeLessonsCount} lessons</span>
              </li>
              <li class="sidebar-feature-item">
                <span class="sidebar-feature-icon" aria-hidden="true">✓</span>
                <span>Self-paced learning schedule</span>
              </li>
              <li class="sidebar-feature-item">
                <span class="sidebar-feature-icon" aria-hidden="true">✓</span>
                <span>Certificate of demo completion</span>
              </li>
              <li class="sidebar-feature-item">
                <span class="sidebar-feature-icon" aria-hidden="true">✓</span>
                <span>Real-world hands-on exercises</span>
              </li>
            </ul>

            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border);">
              <a href="./courses.html" class="btn btn-outline btn-block">
                &larr; Back to Course Catalog
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `;

  // Attach interactive frontend enrollment behavior
  const enrollBtn = container.querySelector("#enroll-btn");
  const feedbackContainer = container.querySelector("#enrollment-feedback");

  if (enrollBtn && feedbackContainer) {
    enrollBtn.addEventListener("click", () => {
      // Toggle enrolled status in frontend
      enrollBtn.textContent = "✓ Enrolled (In Progress)";
      enrollBtn.classList.remove("btn-primary");
      enrollBtn.classList.add("btn-secondary");
      enrollBtn.setAttribute("disabled", "true");

      feedbackContainer.innerHTML = `
        <div class="enrollment-alert enrollment-alert-success" role="status">
          <span style="font-size: 1.2rem;" aria-hidden="true">🎉</span>
          <div>
            <strong>You're enrolled in ${safeTitle}!</strong>
            <p style="margin-top: 4px; font-size: 0.85rem;">
              You can now explore the curriculum lessons and track your progress in the Learning Dashboard.
            </p>
            <div style="margin-top: 10px;">
              <a href="./dashboard.html" class="btn btn-sm btn-primary">
                Go to My Learning &rarr;
              </a>
            </div>
          </div>
        </div>
      `;
    });
  }
}

// Auto-initialize when loaded as the main module script
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCourseDetails);
} else {
  initCourseDetails();
}
