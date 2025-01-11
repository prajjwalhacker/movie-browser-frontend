# Design Decisions

## 1. Framework Selection: Next.js
- **Decision**: We chose **Next.js** as the framework for this project.
- **Reason**:
  - Strong developer ecosystem and community support.
- **Alternatives Considered**:
  - React.js (with custom SSR setup).
  - Angular or Vue.js.

---

## 2. State Management: Local State
- **Decision**: Used **local state** for managing application state.
- **Reason**:
  - The application does not have highly complex state management needs.
  - Local state is sufficient for managing component-specific states (e.g., form inputs).
- **Alternatives Considered**:
  - Redux Toolkit: Not chosen due to simplicity of the project.

---

## 3. Favorite Movies: Local Storage
- **Decision**: Used **localStorage** to save the user’s favorite movies.
- **Reason**:
  - Local storage is simple, persistent, and doesn’t require server-side storage for a lightweight feature.
  - The favorite movies functionality doesn’t need to be synced across devices.
- **Alternatives Considered**:
  - Server-side storage (rejected due to added complexity).

---

## 4. API Integration: OMDb API
- **Decision**: Chose **OMDb API** as the primary data source for movie information.
- **Reason**:
  - RAPIDAPI provides comprehensive data, including titles, years, genres, and ratings.
  - Free and easy to integrate using API keys.
- **Challenges**:
  - Limited filtering options (e.g., genre and rating filters are not supported natively).
- **Future Considerations**:
  - Evaluate APIs like TMDb for richer datasets, genre filters, and image support.

---

## 5. Component-Based Design
- **Decision**: Followed a **component-based architecture** for the front-end.
- **Reason**:
  - Ensures reusability and maintainability of UI components (e.g., `MovieCard`, `Filters`, `Search`, `Loader`, `Select`).
  - Improves readability and testing of individual components.
- **Example**:
  - `MovieCard`: Displays movie details in a card format.
  - `Filters`: Handles user input for filtering movies.
- **Future Considerations**:
  - Refactor components to be more dynamic or reusable as the application grows.

---

## 6. Accessibility and SEO
- **Decision**: Implemented accessibility and SEO best practices.
- **Accessibility**:
  - Used semantic HTML elements (`<main>`, `<section>`, `<button>`).
  - Added descriptive `alt` attributes for images and ARIA roles where needed.
- **SEO**:
  - metadata for adding metadata two two routes / and /favorite
  - Implemented server-side rendering for movie pages for better indexing.

---

## Future Design Decisions
- Implement **TypeScript** for type safety and better code maintainability.
- Introduce **unit tests** for critical components using Testing Library.
