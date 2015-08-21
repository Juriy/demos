var module = angular.module('bookstore');

module.service('BookService', function($http, $q) {
	var books = data;

	this.getBooks = function(page) {
		page = +page || 0;

		var deferred = $q.defer();

		$http({
			url: '/api/books',
			method: 'GET',
			params: {
				page: page
			}
		}).then(function(payload) {
			deferred.resolve({
				count: payload.data.length,
				books: payload.data
			});
		});

		return deferred.promise;
	}

	this.getBook = function(isbn) {
		for (var i = 0; i < books.length; i++) {
			if (books[i].isbn === isbn) {
				return books[i];
			}
		}
		return null;
	}

});