# Veera - Architecture

This document outlines the architecture for the 'Veera' project, a Personalized 360 Fitness Intelligence Application. The architecture is a direct replication of the 'bloom_website' project, emphasizing simplicity, a minimalistic aesthetic, and a premium user experience.

## 1. Core Principles

*   **Simplicity of Tech Stack:** The project will use a minimal and robust tech stack consisting of plain HTML, CSS, and JavaScript. No complex frameworks will be used, ensuring fast load times and easy maintenance.
*   **Static Site Generation:** The website will be a static site. All pages will be pre-built.
*   **Directory-based Routing:** Navigation and page routing will be handled through the directory structure. Each main page or section will reside in its own directory with an `index.html` file (e.g., `/profile/`, `/workouts/`).
*   **Minimalistic & Premium Design:** The UI/UX will be clean, modern, and focused on providing a premium feel to the user.

## 2. Tech Stack

*   **Frontend:**
    *   HTML5
    *   CSS3 (with a clear, organized stylesheet)
    *   JavaScript (for client-side interactivity like carousels, modals, etc.)
*   **Hosting:**
    *   The project will be deployed as a static website on a platform like Cloudflare Pages, Netlify, or Vercel.

## 3. Project Structure

The project will follow a clear and organized directory structure:

```
/
|-- .git/
|-- assets/
|   |-- images/
|   |-- fonts/
|-- styles/
|   |-- main.css
|-- scripts/
|   |-- main.js
|-- profile/
|   |-- index.html
|-- workouts/
|   |-- index.html
|-- nutrition/
|   |-- index.html
|-- support/
|   |-- index.html
|-- index.html          # Main landing page
|-- 404.html            # Custom 404 page
|-- _headers            # Custom headers for the hosting platform
|-- robots.txt          # SEO optimization
|-- sitemap.xml         # SEO optimization
|-- README.md
```

### Directory Breakdown:

*   **`/ (root)`**: Contains the main `index.html` landing page and project configuration files.
*   **`assets/`**: Will store all static assets like images (logos, app screenshots), and custom fonts.
*   **`styles/`**: Will contain the CSS stylesheets. `main.css` will be the primary stylesheet.
*   **`scripts/`**: Will house all JavaScript files for client-side logic.
*   **`profile/`, `workouts/`, `nutrition/`, etc.**: Each of these directories represents a separate page of the application. They will each contain an `index.html` file. This approach simulates routing in a static environment.
*   **`support/`**: A dedicated page for user support.

## 4. Key Pages

*   **Home (`index.html`)**: The main marketing and entry page, showcasing Veera's features.
*   **Profile**: User profile and settings.
*   **Workouts**: Personalized workout plans and tracking.
*   **Nutrition**: Diet plans and nutrition intelligence.
*   **Support**: Help and contact information.

This architecture ensures that the 'Veera' website is lightweight, fast, secure, and easy to scale in terms of content and features, while maintaining a simple and elegant codebase.
