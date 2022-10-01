const books = require('express').Router()
const db = require('../models/db')
const { Book } = db

books.post('/', async (req, res) => {
    try {
        const foundBooks = await Book.findAll()
        res.status(200).json(foundBooks)
    } catch (err) {
        res.status(500).json(err)
    }
})

books.post('/bestsellers', async (req,res)=> {
    try {
        const foundBooks = await Book.findAll({
            order: [['amount_sold', 'DESC']]
        })
        res.status(200).json(foundBooks)
    } catch (err) {
        res.status(500).json(err)
    }
})

books.post('/toprated', async (req,res)=>{
    try {
        const foundBooks = await Book.findAll({
            order: [['rating', 'DESC']]
        })
        res.status(200).json(foundBooks)
    } catch(err) {
        res.status(500).json(err)
    }
})

books.post('/admin', async (req, res) => {
    try {
        const newBook = await Book.create(req.body)
        res.status(200).json("Book successfully added to database")
    } catch (err) {
        res.status(500).json(err)
    }
})

books.post('/admin/:id', async (req, res) => {
    try {
        const deletedBooks = await Book.destroy({
            where: {
                isbn: req.params.id
            }
        })
        res.status(200).json('Book successfully deleted from database')
    } catch (err) {
        res.status(500).json(err)
    }
})

books.get('/', async (req, res) => {
    try {
        const foundBooks = await Book.findAll()
        res.status(200).json(foundBooks)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = books