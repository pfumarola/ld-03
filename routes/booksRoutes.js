import booksController from '../controllers/booksController.js';
import express from 'express';

const router = express.Router();


//Create a new book
router.post('/', (req, res) => {
    res.send('Not implemented. Create a new book');
});

//Read all books
router.get('/', (req, res) => {
    res.send('Not implemented. Read all books');
});

//Read a single book
router.get('/:id', (req, res) => {
    res.send('Not implemented. Read a single book');
});

export default router;