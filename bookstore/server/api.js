var express = require('express');

module.exports = function(bookStore) {

	var router = express.Router();

	router.route('/books')
		.get(function(req, res) {
			bookStore.list(function(err, data) {

				// Should send this logic to a store
				var page = +req.query.page || 0;
				var perPage = 10;

				var result = data.slice(page*perPage, (page + 1)*perPage);
				res.json(result);
			});
		})
		.post(function(req, res) {
			bookStore.add(req.body, function(err, book) {
				// Add statuses?
				if (err) {
					res.json(err);
				} else {
					res.json(book);
				}
			})
		});

	router.route('/books/:id')
		.get(function(req, res) {
			var bookId = req.params.id;
			bookStore.get(bookId, function(err, data) {
				res.json(data);
			});
		})
		.put(function(req, res) {
			var bookId = +req.params.id;
			var entity = req.body;

			bookStore.update(bookId, entity, function(err, book) {
				if (err) {
					res.json({error: err});
				} else {
					res.json(book);
				}
			});
		});

	return router;
}
