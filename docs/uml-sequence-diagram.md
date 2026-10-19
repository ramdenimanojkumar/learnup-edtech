# LearnUp EdTech — UML Sequence Diagrams

This document illustrates the three key user workflows within **LearnUp** using Mermaid sequence diagrams:
1. **Searching and Filtering Courses** (`courses.html`)
2. **Opening Course Details and Enrolling** (`course-details.html`)
3. **Viewing Dashboard Learning Progress** (`dashboard.html`)

---

## 1. Course Search and Filtering Flow

Shows how input events from the user immediately filter the catalog without server requests.

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Browser as Browser DOM
    participant Main as main.js (updateCourses)
    participant Data as data.js (courses)
    participant Comp as components.js

    User->>Browser: Types in #course-search or changes select dropdown
    Browser->>Main: Dispatches "input" or "change" event
    Main->>Browser: Reads searchInput.value, category.value, difficulty.value
    Main->>Data: Queries courses array
    Data-->>Main: Returns all available courses
    Main->>Main: Filters courses by keyword, category, and difficulty
    
    alt Matching courses > 0
        loop For each matched course
            Main->>Comp: renderCourseCard(course)
            Comp-->>Main: Returns HTML string
        end
        Main->>Browser: Injects cards into #course-list
        Main->>Browser: Updates #course-count ("Showing X courses")
    else No courses match
        Main->>Comp: renderEmptyState(message, "Clear All Filters")
        Comp-->>Main: Returns empty state HTML
        Main->>Browser: Injects empty state into #course-list
        Main->>Browser: Updates #course-count ("Showing 0 courses")
    end
```

---

## 2. Course Details Lookup & Frontend Enrollment Flow

Shows how course IDs are extracted from the URL, validated, rendered, and how frontend enrollment state is toggled.

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Browser as Browser Window
    participant Details as course-details.js
    participant Data as data.js
    participant Comp as components.js

    User->>Browser: Clicks "View Course" link (./course-details.html?id=1)
    Browser->>Details: Loads module and executes initCourseDetails()
    Details->>Comp: renderHeader("courses") & renderFooter()
    Comp-->>Browser: Injects shared navigation and footer
    Details->>Browser: Reads window.location.search (?id=1)
    Details->>Data: getCourseById(1)

    alt Valid Course Found
        Data-->>Details: Returns course object
        Details->>Browser: Updates document.title ("Web Development Fundamentals | LearnUp")
        Details->>Browser: Injects breadcrumb, hero header, outcomes, syllabus & enrollment card
        User->>Browser: Clicks #enroll-btn ("Enroll Now • Free")
        Browser->>Details: Fires "click" event listener
        Details->>Browser: Disables button, sets label to "✓ Enrolled (In Progress)"
        Details->>Browser: Displays friendly enrollment celebration alert with link to My Learning
    else Invalid or Missing Course ID
        Data-->>Details: Returns undefined
        Details->>Comp: renderEmptyState("Course not found...", "Browse All Courses")
        Comp-->>Details: Returns error message HTML
        Details->>Browser: Injects friendly error state into #page-content
    end
```

---

## 3. Dashboard Progress & Empty State Simulation Flow

Shows how student enrollment data is computed into percentages, rendered as accessible progress bars, and how the empty state can be tested.

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Browser as Browser DOM
    participant Main as main.js (renderDashboard)
    participant Data as data.js (learningProgress)
    participant Comp as components.js

    User->>Browser: Navigates to My Learning (dashboard.html)
    Browser->>Main: Detects body[data-page="dashboard"]
    Main->>Comp: renderHeader("dashboard") & renderFooter()
    Comp-->>Browser: Injects active header and footer
    Main->>Data: Reads currentEnrolled from learningProgress
    Data-->>Main: Returns sample enrollment records

    Main->>Main: Computes total courses, completed lessons, average %
    loop For each enrolled record
        Main->>Data: Finds course by courseId
        Main->>Comp: renderProgressBar(completedLessons, totalLessons, title)
        Comp-->>Main: Returns accessible progress bar HTML (role="progressbar")
    end
    Main->>Browser: Injects summary metrics cards and course progress grid

    opt Reviewer tests empty state toggle
        User->>Browser: Clicks #toggle-demo-enrolled-btn ("Simulate Empty State")
        Browser->>Main: Clears currentEnrolled array
        Main->>Comp: renderEmptyState("You are not currently enrolled...", "Browse Course Catalog")
        Comp-->>Main: Returns empty state card HTML
        Main->>Browser: Updates metric cards to 0 and renders empty state
    end
```
