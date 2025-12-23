import { Server } from "socket.io";
import http from "http";
import express from "express";
import dotenv from "dotenv";

const app = express();
const server = http.createServer(app);

// Load environment variables from .env file
dotenv.config();
const io = new Server(server, {
  cors: {
    origin: process.env.NODE_ENV === "production"
      ? [process.env.URL_FRONTEND]
      : ["http://127.0.0.1:5173", "http://localhost:5173"],
  },
});

const userSocketMap = {}; // {userId: socketId}

// export function getReceiverSocketId(userId) {
//   return userSocketMap[userId];
// }

// // used to store online users

// io.on("connection", (socket) => {
//   console.log("A user connected", socket.id);

//   const userId = socket.handshake.query.userId;
//   if (userId) userSocketMap[userId] = socket.id;

//   // io.emit() is used to send events to all the connected clients
//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   socket.on("disconnect", () => {
//     console.log("A user disconnected", socket.id);
//     delete userSocketMap[userId];
//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   });
// });

/**
 * Lấy tất cả socketId của 1 user
 */
export function getReceiverSocketIds(userId) {
  return userSocketMap[userId] || [];
}

io.on("connection", (socket) => {
  console.log("🔌 User connected:", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId) {
    if (!userSocketMap[userId]) {
      userSocketMap[userId] = [];
    }

    userSocketMap[userId].push(socket.id);
  }

  // Gửi danh sách online users cho toàn bộ client
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);

    if (!userId) return;

    // Xóa đúng socketId bị disconnect
    userSocketMap[userId] = userSocketMap[userId]?.filter(
      (id) => id !== socket.id
    );

    // Nếu user không còn socket nào → offline
    if (userSocketMap[userId]?.length === 0) {
      delete userSocketMap[userId];
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
