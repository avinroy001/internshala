# 🎓 Internship Listing App

A simple and responsive web app built with React that helps users browse and filter internship opportunities based on **profile**, **location**, and **duration**. All filtering happens right in the browser — no extra API calls!

---

## 🔍 What It Does

- Pulls internship listings from an external API
- Displays the listings in card format
- Lets users filter internships by:
  - Internship profile (title)
  - Location
  - Duration
- Everything is handled on the frontend — no server-side filtering
- Clean, responsive layout that works across screen sizes

---
## 📁 Project Structure

📦internship-listing-app/
┣ 📂src/
┃ ┣ 📂components/
┃ ┃ ┣ 📜FilterBar.js # Filter section with dropdowns
┃ ┃ ┣ 📜JobCard.js # Renders internship/job cards
┃ ┃ ┗ 📜Navbar.js # Top navigation bar
┃ ┣ 📜App.js # Main app with state management and rendering
┃ ┗ 📜index.js # React entry point
┣ 📜README.md
┣ 📜package.json
┗ 📜.gitignore

Install dependencies:
npm install

Start the development server:
npm start
Open http://localhost:3000 in your browser.

🔧 Tech Stack

React.js
Axios (for API calls)
HTML/CSS
JavaScript (ES6+)

📦 API Info

The app fetches data from:

https://internshala.com/hiring/search

🛠️ Future Improvements

Add pagination
Add search by keyword
Integrate loading spinners
Use Material UI for better UI components
Save filters to local storage