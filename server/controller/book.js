const Books = require('../model/book');

exports.getBooks= (req, res, next)=>{
    res.status(200).json(Books.fetchAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(Books.findById(req.params.bookId));
    }
    

exports.save = (req, res, next)=>{
    const book = req.body;
    const savedBook = new Books(null, book.title, book.ISBN, book.publishedDate, book.author).save();
    res.status(201).json(savedBook);
}

exports.update = (req, res, next)=>{
    const book = req.body;
    const updateBook = new Books(req.params.bookId, book.title, book.author, book.publishedDate );
    res.status(200).json(updateBook);
}

exports.deleteById = (req, res, next)=>{
    Books.deleteById(req.params.bookId);
    res.status(200).end();
}