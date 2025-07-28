# Plant Care Tracker (Backend)

---

## 📌 Project Overview

The **Plant Care Tracker** backend provides a robust RESTful API to support a web-based plant care management system. Users can register, log in, add plants, manage their care schedule, and track plant health. The system is built using **Node.js**, **Express**, and **MongoDB** (Mongoose) with a clean **MVC** (Model-View-Controller) architecture.

This backend integrates seamlessly with the front-end, handling user authentication, plant data management, and notifications for watering and plant care reminders.

---

## 🌐 Live Server

🔗 Live Demo: [View Live Site](https://plant-care-service.netlify.app/)  <br>
📦 Frontend: [View Frontend Repository](https://github.com/layekmia/Plant-care-Full-stack.git)<br>

## 🛠 Technologies Used

- **Node.js** – JavaScript runtime for the server-side application
- **Express.js** – Web framework for building APIs
- **MongoDB** – NoSQL database for storing plant and user data
- **Mongoose** – ODM (Object Data Modeling) library for MongoDB
- **Dotenv** – Managing environment variables for sensitive data
- **Cors** – Cross-origin request sharing to enable secure interactions

---

## 📝 Features

- **User Authentication**: Secure login, registration, and user sessions via JWT.
- **Plant Management**: Add, update, delete, and track plant data with care schedules.
- **Private Routes**: Protected endpoints to ensure only authenticated users can add/edit/delete their plants.
- **User Dashboard**: View and manage your personal plant collection.
- **Health Status Tracking**: Monitor and update plant health based on regular inputs.

---

## 🚀 Getting Started

### Prerequisites
Before you begin, ensure that you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **MongoDB** – Local or cloud instance (MongoDB Atlas is recommended)
- **Postman** or similar API testing tool for interacting with the API

### Clone the Repository

```bash
git clone https://github.com/your-username/plant-care-tracker-backend.git
cd plant-care-tracker-backend
