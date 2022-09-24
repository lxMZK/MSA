const books = require('express').Router()
const db = require('../models')
const { Book } = db

books.post('/', async (req,res)=>{
    try {
        const foundBooks = await Book.findAll()
        res.status(200).json(foundBooks)
    } catch(err) {
        res.status(500).json(err)
    }
})

books.get('/', async (req,res)=>{
    try {
        const foundBooks = await Book.findAll()
        res.status(200).json(foundBooks)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = books