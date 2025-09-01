# AutomatedPro Webpage Setup

## Technologies Used

- HTML
- Bootstrap
- SCSS (Sass)

## Getting Started

1. **Install dependencies:**

   - Bootstrap
   - Sass

2. **SCSS Compilation:**

   - Edit your styles in `src/styles.scss`.
   - Compile SCSS to CSS using:
     ```powershell
     npx sass src/styles.scss src/styles.css --watch
     ```
   - Link `src/styles.css` in your `index.html`.

3. **Bootstrap Usage:**
   - Bootstrap is imported in SCSS, so you can use its classes in your HTML.

## Folder Structure

- `index.html` — Main HTML file
- `src/styles.scss` — Main SCSS file
- `src/styles.css` — Compiled CSS
- `Images/` — Image assets

---

For more info on Bootstrap: https://getbootstrap.com/
For Sass docs: https://sass-lang.com/guide/
