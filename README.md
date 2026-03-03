# 📝 Notes Management Web Application

## 🚀 Project Overview

This is a full-stack Notes Management Web Application that allows users to create, view, search, and delete notes. The application integrates frontend and backend using RESTful APIs and stores data in a SQL database.

The project demonstrates CRUD operations, API integration, and database connectivity.

---

## 🛠 Tech Stack

### Frontend
- React.js / HTML5 / CSS3 / JavaScript
- Axios / Fetch API for backend communication

### Backend
- Node.js
- Express.js

### Database
- MySQL (SQL-based relational database)

---

## ✨ Features

- Add new notes
- View all notes
- Search notes by title or content
- Delete notes
- API-based data communication
- Backend connected with SQL database

---

## 🔗 Frontend & Backend Integration

The frontend communicates with the backend using REST APIs.

Example API Endpoints:

- `GET /notes` → Fetch all notes  
- `POST /notes` → Add a new note  
- `DELETE /notes/:id` → Delete a note  
- `GET /notes/search?q=keyword` → Search notes  

The backend processes the request and interacts with the MySQL database to return the appropriate response.

---

## 🗄 Database Structure

### Table: notes

| Column Name | Data Type | Description |
|------------|-----------|------------|
| id | INT (Primary Key, Auto Increment) | Unique note ID |
| title | VARCHAR(255) | Title of the note |
| content | TEXT | Description/content of the note |
| created_at | TIMESTAMP | Note creation time |

### SQL Table Creation Example

```sql
CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📦 Installation & Setup

1. Clone the repository  
2. Install dependencies  

### Backend
```
npm install
npm start
```

### Frontend
```
npm install
npm start
```

3. Configure MySQL database credentials in `.env` file.

---

## 🎯 Learning Outcomes

- Implemented RESTful APIs using Express.js  
- Connected Node.js backend with MySQL database  
- Performed CRUD operations using SQL queries  
- Integrated frontend with backend using API calls  
- Managed database structure and relationships  

---

## 💡 Future Improvements

- Add user authentication  
- Add edit/update note functionality  
- Improve UI responsiveness  
- Deploy full application online  

---

👩‍💻 Developed by Sushmitha Linganaboina  
Full Stack Developer | Open to Work
