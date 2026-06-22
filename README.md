# File Manager Image Gallery

This repository is a small demo app that shows a file manager layout with an images gallery, sidebar navigation, a dashboard, and simple client-side state management.

## Features

- Responsive layout with sidebar and top navigation
- Images page with grid / list / horizontal views
- Recently viewed section and image modal
- Global image state using React Context + `useReducer`
- Simple `Dashboard` page and route
- Tailwind CSS for utility-first styling

## Project structure (important files)

- `index.html` — app entry HTML
- `src/main.jsx` — React entry, mounts `<App />`
- `src/App.jsx` — router and top-level layout (`AppLayout`)
- `src/components/` — reusable UI components (`Navbar.jsx`, `Sidebar.jsx`, `ImageCard.jsx`, `ImageModal.jsx`, `AppLayout.jsx`)
- `src/pages/` — route pages (`Images.jsx`, `Dashboard.jsx`, `Videos.jsx`, `Documents.jsx`, `AllFiles.jsx`, `Trash.jsx`)
- `src/context/ImageContext.jsx` — global image state provider and hook `useImages()`
- `src/data/mockImages.js` — demo image data used by the app
- `src/index.css` — Tailwind entry + app-level CSS

---

**File Structure**

Gallery clone/
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.cjs
├─ README.md
├─ tailwind.config.js
├─ vite.config.js
├─ public
└─ src/
  ├─ main.jsx                # React entry
  ├─ index.css               # Tailwind + global styles
  ├─ App.jsx                 # Router + top-level layout
  ├─ assets/                 # images, icons, etc.
  ├─ components/             # UI components
  │  ├─ AppLayout.jsx
  │  ├─ Navbar.jsx
  │  ├─ Sidebar.jsx
  │  ├─ ImageCard.jsx
  │  └─ ImageModal.jsx
  ├─ context/
  │  └─ ImageContext.jsx     # Context + reducer for image state
  ├─ data/
  │  └─ mockImages.js        # sample image data
  └─ pages/
    ├─ Dashboard.jsx
    ├─ Images.jsx
    ├─ Videos.jsx
    ├─ Documents.jsx
    ├─ AllFiles.jsx
    └─ Trash.jsx



## State management details

This project uses React built-in state and Context:

- Global image state: `src/context/ImageContext.jsx`
  - Uses `createContext`, `useReducer`, and `useState`.
  - `images` is stored in a reducer (`useReducer(imageReducer, mockImages)`), and actions can be dispatched via the exposed `dispatch` function.
  - `searchTerm` is local state inside the provider (`useState`) to filter images before exposing them to consumers.
  - Hook: `useImages()` returns `{ images, recentlyViewed, dispatch, searchTerm, setSearchTerm }`.



