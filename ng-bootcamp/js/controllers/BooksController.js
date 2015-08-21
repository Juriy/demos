var module = angular.module('bookstore');

module.controller('BooksController', 

function($scope, BookService) {
	BookService.getBooks()
		.then(function(result) {
			$scope.books = result.books;
		});
});