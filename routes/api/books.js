const router = require('express').Router();
const booksController = require('../../controllers/controller');
const db = require('../../models/book');

// Matches with "/api/books"
router.route('/').get(function (req, res) {
  db.Book.find(req.query).then((res) => console.log(res));
});

module.exports = router;
