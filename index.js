import express from 'express';
import dotenv from 'dotenv';

import booksRoutes from './routes/booksRoutes.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hi there');
});

app.use(express.json());

app.use('/books', booksRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
