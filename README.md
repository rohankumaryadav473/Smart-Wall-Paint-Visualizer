# 🎨 Smart Wall Paint Visualizer

A MEAN Stack based web application that allows users to virtually paint and preview wall colors and designs on real room images before actual painting. The system helps homeowners, interior designers, and paint companies visualize paint combinations in a realistic environment.

---

## 📌 Project Overview

Choosing the right wall color is one of the most important decisions in interior design. Traditional color cards and catalogs often fail to show how a color will appear in a specific room due to lighting, wall texture, and room size.

The Smart Wall Paint Visualizer solves this problem by allowing users to:

* Upload a room image
* Detect wall areas using AI/Image Processing
* Apply different paint colors virtually
* Preview the final result instantly
* Save and download paint designs

---

## 🚀 Features

### User Features

* User Registration & Login (JWT Authentication)
* Upload Room Images
* AI-Based Wall Detection
* Virtual Paint Color Application
* Real-Time Preview
* Save Paint Projects
* Download Final Design
* Project History Dashboard

### Admin Features

* Manage Users
* Monitor Projects
* View Application Statistics

---

## 🛠 Technology Stack

### Frontend

* Angular
* HTML5
* CSS3
* TypeScript
* Angular Material

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Image Processing & AI

* OpenCV.js
* TensorFlow.js

---

## 📂 Project Structure

```text
SmartWallPaintVisualizer/

├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   ├── services/
│   │   └── components/
│   └── angular.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── services/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/smart-wall-paint-visualizer.git
cd smart-wall-paint-visualizer
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/paintvisualizer
JWT_SECRET=your_secret_key
```

### 5. Start MongoDB

```bash
mongod
```

### 6. Run Backend Server

```bash
cd backend
npm run dev
```

### 7. Run Frontend

```bash
cd frontend
ng serve
```

Open:

```text
http://localhost:4200
```

---

## 🔄 Application Workflow

```text
User Login/Register
        ↓
Upload Room Image
        ↓
AI Detects Wall Area
        ↓
Generate Wall Mask
        ↓
Choose Paint Color
        ↓
Apply Color Overlay
        ↓
Preview Result
        ↓
Save Project
        ↓
Store in MongoDB
        ↓
Download Final Image
```

---

## 📊 Database Collections

### Users

```json
{
  "name": "Rohan",
  "email": "rohan@example.com",
  "password": "hashed_password"
}
```

### Projects

```json
{
  "userId": "12345",
  "originalImage": "room.jpg",
  "paintedImage": "preview.jpg",
  "selectedColor": "#3498db",
  "createdAt": "2026-09-05"
}
```

---

## 🔐 Authentication APIs

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## 🖼 Upload API

```http
POST /api/upload
```

---

## 🎨 Paint Preview API

```http
POST /api/paint/apply
```

---

## 💾 Save Project API

```http
POST /api/projects/save
GET /api/projects
DELETE /api/projects/:id
```

---

## 🌟 Future Enhancements

* AI Color Recommendation
* Room Type Detection
* Wallpaper Preview
* Texture Preview
* 3D Room Visualization
* Mobile Application
* Cloud Storage Integration

---


This project is developed for educational and portfolio purposes.
