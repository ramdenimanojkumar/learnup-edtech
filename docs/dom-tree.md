# LearnUp EdTech — DOM Structure Documentation

This document describes the semantic HTML5 DOM architecture across all four pages of the **LearnUp** EdTech web application.

---

## 1. Global Page Shell

All pages share a consistent, accessible top-level layout shell:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <title>...</title>
  <link rel="stylesheet" href="./css/style.css">
  <script type="module" src="./js/..."></script>
</head>
<body data-page="[home | courses | course-details | dashboard]">
  <header id="site-header"></header>
  <main id="page-content" tabindex="-1"></main>
  <footer id="site-footer"></footer>
</body>
</html>
```

### Shared Header Component (`#site-header`)
Rendered dynamically via `renderHeader(activePage)` in `js/components.js`:
- `<a href="#page-content" class="skip-link">Skip to main content</a>` — Keyboard accessibility bypass.
- `<div class="container navbar-container">`
  - `<nav class="navbar" aria-label="Main navigation">`
    - `<a class="logo" href="./index.html">` — Platform brandmark with emoji icon.
    - `<button type="button" class="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="primary-nav-menu">` — Mobile hamburger menu button.
    - `<ul class="nav-links" id="primary-nav-menu">`
      - `<li><a href="./index.html" class="nav-link [active]" [aria-current="page"]>Home</a></li>`
      - `<li><a href="./courses.html" class="nav-link [active]" [aria-current="page"]>Courses</a></li>`
      - `<li><a href="./dashboard.html" class="nav-link [active]" [aria-current="page"]>My Learning</a></li>`
      - `<li class="nav-action-item"><a href="./courses.html" class="btn btn-sm btn-nav">Get Started</a></li>`

### Shared Footer Component (`#site-footer`)
Rendered dynamically via `renderFooter()` in `js/components.js`:
- `<footer class="site-footer">`
  - `<div class="container footer-content">`
    - `<div class="footer-grid">`
      - `.footer-brand`: Logo, mission statement, demo status pill.
      - `.footer-col` (Quick Links): Links to Home, Courses, Dashboard.
      - `.footer-col` (Categories): Direct filtered links to top subject areas.
      - `.footer-col` (Platform Note): Clear frontend-only demo explanation.
    - `<div class="footer-bottom">`: Copyright year and technology tags.

---

## 2. Page DOM Trees

### A. Home Page (`index.html` — `data-page="home"`)

```text
main#page-content
├── section.hero
│   └── div.container.hero-grid
│       ├── div.hero-content
│       │   ├── div.hero-eyebrow ("🚀 Practical Skill Mastery")
│       │   ├── h1 ("Learn new skills. Build your future.")
│       │   ├── p.hero-lead
│       │   ├── div.hero-actions
│       │   │   ├── a.btn.btn-primary.btn-lg ("Explore Courses →")
│       │   │   └── a.btn.btn-outline.btn-lg ("My Learning")
│       │   └── div.hero-stats-strip
│       │       ├── div.hero-stat-item (6+ In-Depth Courses)
│       │       ├── div.hero-stat-item (4.8 / 5 Rating)
│       │       └── div.hero-stat-item (100% Free Demo Access)
│       └── div.hero-visual[aria-hidden="true"]
│           └── div.hero-visual-card (Featured course previews)
├── section.section (Popular Courses)
│   └── div.container
│       ├── div.section-heading (h2, p)
│       ├── div.course-grid
│       │   └── article.course-card × 3 (Top featured course cards)
│       └── div.section-footer-cta
│           └── a.btn.btn-outline.btn-lg ("View All Courses →")
├── section.section.section-alt (Course Categories)
│   └── div.container
│       ├── div.section-heading.text-center
│       └── div.category-grid
│           └── a.category-card × 4 (Web Dev, Programming, Design, Data Science)
├── section.section (Learning Benefits)
│   └── div.container
│       ├── div.section-heading.text-center
│       └── div.benefits-grid
│           └── div.benefit-card × 4 (Project-Based, Self-Paced, Experts, Certification)
└── section.section (Call to Action Banner)
    └── div.container
        └── div (Gradient Banner with heading, paragraph, and catalog link)
```

---

### B. Courses Page (`courses.html` — `data-page="courses"`)

```text
main#page-content
├── section.page-banner
│   └── div.container.page-banner-content
│       ├── h1 ("Explore Courses")
│       └── p ("Search across our entire catalog...")
└── section.section
    └── div.container
        ├── div.filter-toolbar
        │   └── div.filter-controls
        │       ├── div.search-box-wrapper
        │       │   ├── span.search-icon[aria-hidden="true"]
        │       │   └── input#course-search.search-input[type="search"][aria-label="Search courses by keyword"]
        │       ├── div.filter-select-wrapper
        │       │   └── select#category-filter.filter-select[aria-label="Filter by category"]
        │       │       ├── option ("All Categories")
        │       │       └── option × N (Dynamic distinct categories)
        │       ├── div.filter-select-wrapper
        │       │   └── select#difficulty-filter.filter-select[aria-label="Filter by difficulty"]
        │       │       ├── option ("All Levels")
        │       │       └── option × N (Beginner, Intermediate, Advanced)
        │       └── div.filter-reset-wrapper
        │           └── button#reset-filters-btn.btn.btn-outline ("Reset")
        ├── div.filter-status-bar
        │   ├── p#course-count.course-count-badge[aria-live="polite"] ("Showing X courses")
        │   └── div#active-chips.active-filters-chips (Pill tags for active query/filters)
        └── div#course-list.course-grid
            ├── [When courses match]:
            │   └── article.course-card × N
            │       ├── div.course-banner[aria-hidden="true"] (Course Icon emoji)
            │       └── div.course-info
            │           ├── div.course-header-meta
            │           │   ├── span.tag.tag-category
            │           │   └── span.tag.tag-difficulty.tag-diff-[level]
            │           ├── h3.course-title > a
            │           ├── p.course-description
            │           ├── div.course-meta (Duration, Lessons, Star Rating)
            │           ├── div.course-instructor (Avatar + Name)
            │           └── div.course-card-footer
            │               └── a.btn.btn-primary.btn-block ("View Course →")
            └── [When 0 courses match]:
                └── div.empty-state[role="status"][aria-live="polite"]
                    ├── div.empty-icon ("🔍")
                    ├── h3.empty-title ("Nothing to show right now")
                    ├── p.empty-text ("No courses found matching...")
                    └── div.empty-action > a#clear-filters-cta.btn.btn-outline ("Clear All Filters")
```

---

### C. Course Details Page (`course-details.html` — `data-page="course-details"`)

```text
main#page-content
├── div.page-banner
│   └── div.container
│       ├── nav.breadcrumb-nav[aria-label="Breadcrumb"]
│       │   └── ol.breadcrumb-list
│       │       ├── li > a ("Home")
│       │       ├── li > a ("Courses")
│       │       └── li.breadcrumb-current[aria-current="page"] (Course Title)
│       └── div.course-hero-header
│           ├── div.course-hero-badges (Category tag + Difficulty tag)
│           ├── h1.course-hero-title (Course Title)
│           ├── p.course-hero-lead (In-depth course overview)
│           └── div.course-hero-meta-grid
│               ├── div.hero-meta-block (Instructor)
│               ├── div.hero-meta-block (Duration)
│               ├── div.hero-meta-block (Total Lessons)
│               └── div.hero-meta-block (Rating & Student Count)
└── section.section
    └── div.container.course-details-layout
        ├── div.course-details-main (Left Column - 2fr)
        │   ├── div.details-card-block (What You Will Learn)
        │   │   ├── h2.details-block-heading ("🎯 What You Will Learn")
        │   │   └── ul.outcomes-list
        │   │       └── li.outcome-item × N (Checkmark icon + Outcome text)
        │   ├── div.details-card-block (Prerequisites)
        │   │   ├── h2.details-block-heading ("📋 Prerequisites")
        │   │   └── p (Prerequisite requirements description)
        │   ├── div.details-card-block (Course Curriculum)
        │   │   ├── h2.details-block-heading ("📚 Course Curriculum")
        │   │   └── div.curriculum-container
        │   │       └── div.curriculum-module × M
        │   │           ├── div.module-header (Module Title + Lesson count)
        │   │           └── ul.module-lessons-list
        │   │               └── li.lesson-row × L
        │   │                   ├── div.lesson-left
        │   │                   │   ├── span.lesson-icon ("▶")
        │   │                   │   ├── span.lesson-title
        │   │                   │   └── span.lesson-preview-tag [optional]
        │   │                   └── span.lesson-duration ("25 min")
        │   └── div.details-card-block (Instructor Bio)
        │       ├── h2.details-block-heading ("👨‍🏫 Your Instructor")
        │       └── div.instructor-profile-card
        │           ├── div.instructor-large-avatar ("👤")
        │           └── div.instructor-profile-info (Name, Role, Bio paragraph)
        └── aside.course-details-sidebar[aria-label="Course enrollment and overview"] (Right Column - 1fr)
            └── div.details-sidebar-card (Sticky)
                ├── div.sidebar-price-tag ("Free Access")
                ├── p.sidebar-demo-badge ("Frontend Demonstration Project")
                ├── button#enroll-btn.btn.btn-primary.btn-block.btn-lg ("Enroll Now • Free")
                ├── div#enrollment-feedback[aria-live="polite"]
                │   └── [On Click]: div.enrollment-alert.enrollment-alert-success
                │       ├── span ("🎉")
                │       └── div (Enrolled message + "Go to My Learning →" CTA link)
                ├── ul.sidebar-features-list (Access, Schedule, Certificate, Projects)
                └── div > a.btn.btn-outline.btn-block ("← Back to Course Catalog")
```

---

### D. Learning Dashboard Page (`dashboard.html` — `data-page="dashboard"`)

```text
main#page-content
├── section.page-banner
│   └── div.container.page-banner-content
│       ├── h1 ("My Learning Dashboard")
│       └── p ("Track your course progress, resume recent lessons...")
└── section.section
    └── div.container
        ├── div.dashboard-overview-grid
        │   ├── div.overview-metric-card (Enrolled Courses count)
        │   ├── div.overview-metric-card (Completed Lessons count)
        │   └── div.overview-metric-card (Average Completion Percentage %)
        ├── div.dashboard-controls-bar
        │   ├── div.dashboard-title-group
        │   │   ├── h2 ("Courses in Progress")
        │   │   └── p ("Demo notice: Learning progress is frontend simulated...")
        │   └── div
        │       └── button#toggle-demo-enrolled-btn.btn.btn-outline.btn-sm
        │           ("Simulate Empty State" / "Restore Sample Enrolled Courses")
        └── div#enrolled-courses-container
            ├── [Populated State]:
            │   └── div.course-grid
            │       └── article.course-card × N
            │           ├── div.course-banner
            │           └── div.course-info
            │               ├── div.course-header-meta (Category & Difficulty badges)
            │               ├── h3.course-title > a
            │               ├── p (Instructor name)
            │               ├── div.progress-wrapper
            │               │   ├── div.progress-labels (Completed of Total, Percentage %)
            │               │   └── div.progress-track[role="progressbar"][aria-label="..."][aria-valuenow="..."][aria-valuemin="0"][aria-valuemax="100"]
            │               │       └── div.progress-fill[style="width: X%"]
            │               └── div.course-card-footer
            │                   └── a.btn.btn-primary.btn-block ("Continue Learning →")
            └── [Empty State]:
                └── div.empty-state[role="status"][aria-live="polite"]
                    ├── div.empty-icon ("🔍")
                    ├── h3.empty-title ("Nothing to show right now")
                    ├── p.empty-text ("You are not currently enrolled in any courses...")
                    └── div.empty-action > a.btn.btn-outline ("Browse Course Catalog")
```

---

## 3. Accessibility & Semantics Highlights

1. **Landmarks**: Distinct `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` containers ensure full screen-reader compliance.
2. **Accessible Forms**: Inputs include explicit `aria-label` attributes and `<label>` tags.
3. **Live Regions**: Course count badges and search feedback use `aria-live="polite"` so screen readers announce dynamic changes without jarring the user.
4. **Accessible Progress**: Progress elements use `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"`, and `aria-valuemax="100"`.
5. **Keyboard Focus**: Visible `:focus-visible` styling is specified in CSS alongside a hidden-until-focused `.skip-link`.
