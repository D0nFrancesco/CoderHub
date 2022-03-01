const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const dotenv = require('dotenv').config();
const connectDB = require('./backend/config/db');
const { errorHandler } = require('./backend/middleware/errorMiddleware');
const port = process.env.PORT || 8000;

connectDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./backend/routes/userRoutes'));
app.use('/api/posts', require('./backend/routes/postRoutes'));

app.use(errorHandler);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5001",
        methods: ["GET", "POST"],
    }
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});