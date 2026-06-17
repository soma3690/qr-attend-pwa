# Implementation Plan - AdeegTrack AI (React Frontend)

Build a comprehensive React-based frontend for the AdeegTrack AI attendance system, based on the provided PHP directory structure. This will be a client-side SPA (Single Page Application) using Vite, React, and Tailwind CSS.

## Scope Summary
- **User Authentication:** Login page and session management (mocked via localStorage).
- **Dashboard:** Main overview for Employees/Admin.
- **Attendance Module:** QR scanner (simulated), check-in/out history, and reports.
- **Leave Management:** Request form, approval list, and balance tracking.
- **Employee Management:** List, add, edit (Admin/HR view).
- **Reports:** Attendance and leave report views.
- **Profile:** User profile management and password change.
- **PWA Features:** Manifest and basic service worker registration.

## Non-Goals
- Real backend integration (no PHP/MySQL/Supabase).
- Actual email sending (mocked).
- Real PDF/Excel generation (client-side data export simulation).
- Real biometric/photo upload storage (local state only).

## Assumptions & Open Questions
- **Auth:** Default credentials will be provided (admin/admin, user/user).
- **Data:** All data will be managed in-memory or via `localStorage` for the duration of the session.
- **QR Scanning:** Will use a web-based QR library (e.g., `html5-qrcode`) or a simulated scanner if hardware access is restricted.

## Affected Areas
- `src/components`: UI components (Sidebar, Header, Layout, Cards).
- `src/pages`: Functional views (Dashboard, Attendance, Leave, etc.).
- `src/hooks`: Custom hooks for data fetching (mocked) and auth state.
- `src/lib`: Utility functions and mock data.
- `src/App.tsx`: Routing configuration.

## Ordered Phases

### Phase 1: Core Layout & Routing
- Setup `react-router-dom`.
- Implement `Layout` component with `Sidebar` and `Header`.
- Define all routes based on the provided directory structure.
- **Owner:** `frontend_engineer`

### Phase 2: Authentication & State Management
- Create `AuthContext` for managing login state.
- Build the `Login` page.
- Implement protected routes.
- **Owner:** `frontend_engineer`

### Phase 3: Dashboard & Employee Management
- Build the main `Dashboard` with summary statistics.
- Implement the `Employee List` and `Employee Detail` views.
- Create `Add/Edit Employee` forms.
- **Owner:** `frontend_engineer`

### Phase 4: Attendance & QR Module
- Implement `Attendance History` table.
- Create the `QR Scanner` page (using `html5-qrcode` or simulation).
- Build `Manual Check-in` form.
- **Owner:** `frontend_engineer`

### Phase 5: Leave Management & Reports
- Build `Leave Request` form and `My Requests` list.
- Create `Pending Approvals` view for HR/Admin.
- Implement `Attendance Reports` and `Leave Balance` views.
- **Owner:** `frontend_engineer`

### Phase 6: Profile & PWA
- Build `Profile` and `Change Password` pages.
- Add `manifest.json` and basic PWA setup in `index.html`.
- Final UI polish and responsiveness check.
- **Owner:** `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Setup routing, layout, and core feature pages (Phases 1-5).
2. quick_fix_engineer — Final polish, profile, and PWA configuration (Phase 6).

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5
- **Scope:** Complete functional shell and feature pages.
- **Files:** `src/App.tsx`, `src/components/*`, `src/pages/*`, `src/hooks/*`, `src/lib/*`.
- **Depends on:** none
- **Acceptance criteria:**
    - Router handles all paths (dashboard, employees, attendance, leave).
    - Sidebar navigation works.
    - Mock login/logout works via `localStorage`.
    - Forms (Employee add, Leave request) capture data.
    - Attendance history table renders data.

### 2. quick_fix_engineer
- **Phases:** 6
- **Scope:** Profile page, password change, manifest, and CSS tweaks.
- **Files:** `src/pages/profile/*`, `public/manifest.json`, `index.html`, `src/index.css`.
- **Depends on:** frontend_engineer
- **Acceptance criteria:**
    - Profile page displays user info.
    - PWA manifest is correctly linked in `index.html`.
    - Responsive layout issues (if any) are resolved.
