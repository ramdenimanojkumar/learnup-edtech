# LearnUp EdTech — UML Class & Module Architecture

This document documents the modular JavaScript architecture, entity relationships, and data models of the **LearnUp** EdTech application using Mermaid class diagrams.

---

## 1. Architecture Overview

LearnUp is structured into four decoupled ES modules:
- **`data.js`**: Single source of truth for fictional sample courses, categories, benefits, and student learning progress.
- **`components.js`**: Pure presentation module exporting reusable HTML rendering functions and accessibility wrappers.
- **`main.js`**: Page controller managing routing, home page rendering, catalog search/filter interactions, and dashboard metrics.
- **`course-details.js`**: Specialized page controller reading URL query parameters, looking up courses, rendering syllabi, and managing frontend enrollment.

---

## 2. Mermaid Class & Module Diagram

```mermaid
classDiagram
    %% Entities & Data Models
    class Course {
        +number id
        +string title
        +string category
        +string difficulty
        +string instructor
        +string instructorRole
        +string duration
        +string icon
        +string description
        +string longDescription
        +number lessons
        +number rating
        +number studentsCount
        +string prerequisites
        +string[] learningOutcomes
        +CurriculumModule[] curriculum
    }

    class CurriculumModule {
        +string moduleTitle
        +Lesson[] lessons
    }

    class Lesson {
        +string id
        +string title
        +string duration
        +boolean isPreview
    }

    class Category {
        +string name
        +string icon
        +string description
    }

    class Benefit {
        +string icon
        +string title
        +string description
    }

    class LearningProgress {
        +number courseId
        +number completedLessons
        +number totalLessons
        +string lastAccessed
    }

    %% JavaScript Modules
    class DataModule {
        <<module: data.js>>
        +Course[] courses
        +Category[] categories
        +Benefit[] benefits
        +LearningProgress[] learningProgress
        +getCourseById(id) Course
        +getCourseCategories() string[]
        +getCourseDifficulties() string[]
    }

    class ComponentsModule {
        <<module: components.js>>
        +escapeHtml(str) string
        +renderHeader(activePage) void
        +renderFooter() void
        +renderCourseCard(course) string
        +renderEmptyState(message, actionText, actionHref, actionId) string
        +renderProgressBar(completed, total, label) string
        +renderCategoryCard(category) string
        +renderBenefitCard(benefit) string
    }

    class MainModule {
        <<module: main.js>>
        -string page
        -HTMLElement content
        -renderHome() void
        -renderCourses() void
        -renderDashboard() void
        -updateCourses() void
        -resetFilters() void
        -drawDashboard() void
    }

    class CourseDetailsModule {
        <<module: course-details.js>>
        +initCourseDetails() void
        -renderCourseView(container, course) void
        -renderCourseNotFound(container, reason) void
    }

    %% Relationships
    Course "1" *-- "many" CurriculumModule : contains
    CurriculumModule "1" *-- "many" Lesson : contains
    LearningProgress "many" --> "1" Course : references (courseId)

    DataModule ..> Course : exposes
    DataModule ..> Category : exposes
    DataModule ..> Benefit : exposes
    DataModule ..> LearningProgress : exposes

    ComponentsModule ..> Course : formats
    ComponentsModule ..> LearningProgress : formats

    MainModule ..> DataModule : imports data & queries
    MainModule ..> ComponentsModule : imports UI renderers

    CourseDetailsModule ..> DataModule : imports getCourseById
    CourseDetailsModule ..> ComponentsModule : imports UI components
```

---

## 3. Module Responsibilities Summary

| Module | File Path | Primary Responsibilities |
|---|---|---|
| **Data** | [`js/data.js`](../js/data.js) | Central in-memory repository for course catalog, curriculum breakdowns, difficulty levels, categories, benefits, and user progress. Strictly non-persistent. |
| **Components** | [`js/components.js`](../js/components.js) | Reusable UI templates for headers, footers, course cards, progress bars, category tiles, empty state messaging, and XSS sanitization (`escapeHtml`). |
| **Main Controller** | [`js/main.js`](../js/main.js) | Detects active page via `data-page`. Renders Home, Courses, and Dashboard views. Manages real-time search, category/difficulty filtering, and dashboard statistics. |
| **Course Details** | [`js/course-details.js`](../js/course-details.js) | Isolates course details view. Validates `?id=` query parameter, renders syllabus accordion and learning outcomes, and binds interactive frontend enrollment. |
