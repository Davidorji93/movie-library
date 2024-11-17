🎬 Movie Library Application
A responsive and dynamic movie library application built with Next.js, TypeScript, and Tailwind CSS. This app uses the TMDb API to fetch and display a list of popular movies, with features for searching, viewing details, and managing a favorites list.

🌟 Features
Homepage

Displays a grid of popular movies fetched from the TMDb API.
Each movie card shows:
Poster image
Movie title
Release date
Average rating
Includes a search bar to filter movies by title.
Movie Details Page

Navigate to a detailed page by clicking on a movie card.
Displays:
Full title
Poster image
Overview
Genres
Cast (optional).
Favorite Movies

Add or remove movies from a "Favorites" list.
The list is persisted using localStorage.
A dedicated page to view and manage favorite movies.
Responsive Design

Fully responsive layouts for mobile, tablet, and desktop breakpoints.
TypeScript

Strongly typed components and API responses.
🚀 Bonus Features
Infinite Scrolling: Dynamically load more movies on scrolling.
SSR/SSG: Leverages Next.js Server-Side Rendering (SSR) or Static Site Generation (SSG) for optimal performance.
Loader: Skeleton loaders or spinners are displayed while fetching data.
Unit Tests: Key components tested using Jest or React Testing Library.
🛠️ Tech Stack
Framework: Next.js
Styling: Tailwind CSS
Type Safety: TypeScript
API: TMDb API
📚 Installation & Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/movie-library.git
cd movie-library
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables:
Create a .env.local file in the root directory and add your TMDb API key:

env
Copy code
TMDB_API_KEY=your_api_key_here
Run the Application:

bash
Copy code
npm run dev
Access the Application:
Open your browser and navigate to http://localhost:3000.

🧱 Project Structure
plaintext
Copy code
├── components          # Reusable components
│   ├── MovieCard.tsx   # Component for displaying a movie card
│   ├── Navbar.tsx      # Navigation bar
│   └── SearchBar.tsx   # Search input
├── pages
│   ├── index.tsx       # Homepage
│   ├── favorites.tsx   # Favorites page
│   └── movie
│       └── [id].tsx    # Movie details page
├── styles              # Tailwind CSS configurations
├── utils               # Utility functions (e.g., API helpers)
└── types               # TypeScript interfaces and types
🎨 Design Decisions
Next.js Framework:

Chosen for its powerful routing and data-fetching capabilities (SSR/SSG).
Tailwind CSS:

Simplifies responsive design and reduces custom CSS writing.
TypeScript:

Ensures strong type safety for better code maintainability.
TMDb API:

Offers extensive movie data for a dynamic and scalable application.
Favorites Persistence:

localStorage used to keep the Favorites list across sessions without a backend.
🔍 Testing
Unit Testing:
Key components tested using Jest and React Testing Library.
To run tests:
bash
Copy code
npm test
📜 License
This project is licensed under the MIT License.

🏗️ Future Enhancements
Implement user authentication to allow saving favorites on the server.
Add more advanced filters (e.g., by genre or rating).
Improve accessibility (ARIA roles and screen reader support).
🤝 Contributions
Contributions are welcome! Feel free to submit a PR or open an issue.

✨ Acknowledgments
Data provided by The Movie Database (TMDb).
