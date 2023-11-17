import express from 'express';

import './db.js';
import booksRoutes from './routes/booksRoutes.js';


const app = express();

app.get('/healthcheck', (req, res) => {
    res.status(200).send();
});

app.use(express.json());

app.use('/books', booksRoutes);

export default app;
