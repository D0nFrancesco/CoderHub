const express = require('express'); 
const dotenv = require('dotenv').config();
const connectDB  = require('./backend/config/db');
const { errorHandler } = require('./backend/middleware/errorMiddleware');
const port = process.env.PORT || 8000; 

connectDB();
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./backend/routes/userRoutes'));
app.use('/api/posts', require('./backend/routes/postRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));