[![Fork Button](https://img.shields.io/github/forks/iemafzalhassan/full-stack_chatApp?style=social)](https://github.com/iemafzalhassan/full-stack_chatApp/fork)

# Real-Time Chat Application

Welcome to the **Full Stack Realtime Chat App** project, where we're building a scalable and secure real-time chat experience using the latest technologies. Whether you're a seasoned developer or a beginner, we invite you to contribute and be a part of this exciting journey!

## 📝 Introduction

This project aims to provide a real-time chat experience that's both scalable and secure. With a focus on modern technologies, we're building an application that's easy to use and maintain.

## ✨ Features

- **Real-time Messaging**: Send and receive messages instantly using Socket.io
- **User Authentication & Authorization**: Securely manage user access with JWT
- **Scalable & Secure Architecture**: Built to handle large volumes of traffic and data
- **Modern UI Design**: A user-friendly interface crafted with React and TailwindCSS
- **Profile Management**: Users can upload and update their profile pictures
- **Online Status**: View real-time online/offline status of users

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, MongoDB, Socket.io
- **Frontend:** React, TailwindCSS
- **Containerization:** Docker
  <!-- - **Orchestration:** Kubernetes (planned) -->
  <!-- - **Web Server:** Nginx -->
- **State Management:** Zustand
- **Authentication:** JWT
- **Styling Components:** DaisyUI

### 🔧 Prerequisites

- **[Node.js](https://nodejs.org/)** (v14 or higher)
<!-- - **[Docker](https://www.docker.com/get-started)** (for containerizing the app) -->
- **[Git](https://git-scm.com/downloads)** (to clone the repository)

### 📝 Environment Configuration

Create a `.env` file in the root directory with the following configuration:

```env
# Database Configuration
MONGODB_URI=mongodb://root:admin@mongo:27017/chatApp?authSource=admin&retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_jwt_secret_key

# Server Configuration
PORT=5001
NODE_ENV=production
```

> **Note:**
>
> - Replace `your_jwt_secret_key` with a strong secret key
> - For local development without Docker, change `MONGODB_URI` to `mongodb://localhost:27017/chatApp`
> - You can use command ```echo "Text what you want" | base64
