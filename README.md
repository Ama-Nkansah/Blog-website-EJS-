# Blog Web App Using EJS

## Project Overview
This project is a dynamic blog web application built using **EJS (Embedded JavaScript)** as the templating engine. The application enables users to create, view, and manage blog posts interactively. EJS will handle the rendering of HTML templates dynamically based on the data provided.

## Key Features
- **Dynamic Templates:** Use EJS for generating HTML pages dynamically.
- **Blog Management:** Users can create, view, and delete blog posts.
- **Server-Side Rendering:** EJS templates are rendered on the server for better performance and SEO.
- **RESTful Routing:** The application will implement RESTful routes for seamless navigation.

## Technologies Used
- **EJS**: A lightweight templating engine for creating dynamic HTML templates.
- **Node.js**: For building the server-side application logic.
- **Express.js**: For handling routing and middleware.
- **CSS/Bootstrap**: For styling and enhancing the user interface.

## File Structure
```
Blog-webapp/
├── views/
│   ├── layouts/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   ├── home.ejs
│   ├── post.ejs
│   ├── create.ejs
├── public/
│   ├── css/
│   ├── js/
├── app.js
├── package.json
```

### Description of Directories
- **views/**: Contains all EJS templates for the application.
  - **layouts/**: Includes reusable components like the header and footer.
  - **home.ejs**: Template for the homepage displaying all blogs.
  - **post.ejs**: Template for viewing a single blog post.
  - **create.ejs**: Template for creating a new blog post.
- **public/**: Contains static assets like CSS and JavaScript files.
- **app.js**: The main application file where the server logic is implemented.

## Features to Implement
1. **Home Page:** Displays a list of all blog posts with titles and excerpts.
2. **Single Post View:** Allows users to view the full content of a blog post.
3. **Create Post:** Users can create new blog posts with a title and body.
4. **Delete Post:** Users can delete unwanted blog posts.

## Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/Ama-Nkansah/Blog-website-EJS-.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Blog-website-EJS-
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   node app.js
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Future Enhancements
- Add user authentication for personalized experiences.
- Implement a database (e.g., MongoDB) for persistent storage of blog posts.
- Enhance the UI with more interactive features.
- Add categories and tags for better organization of posts.

---
Feel free to contribute to the project and suggest new features! 🚀
