# Play Store inspired demo

A responsive app discovery page built with HTML, CSS, and JavaScript. It includes 24 sample apps and games, instant search, category and device filters, top charts, app details, and a local saved library.

## Run

```sh
npm start
```

Open <http://localhost:3000>. No package installation is required. Alternatively, open `index.html` directly in your browser.

## Search

Search is case-insensitive and supports partial app names, categories, publishers, interests, and Hindi search aliases. Multiple words narrow the results. Category, device, and store filters combine with the search query. Press `/` to focus search; press Escape in search to clear it.

## Files

- `index.html`: page layout and accessible controls
- `styles.css`: responsive styles
- `mobile.css`: phone layout with touch-sized controls, swipeable featured cards, bottom navigation, and app detail sheets
- `app.js`: sample catalog, local SVG icons, filtering, dialogs, and localStorage library
- `assets/`: local Play icon and an original illustrated forest
- `server.js`: dependency-free local preview server

App ratings, downloads, and sizes are sample data. This demo does not download or install apps. Saved apps stay in this browser's local storage. Google Fonts are optional; system fonts are used when unavailable. All other assets are local.
