(function() {

	angular
		.module('bookstore')
		.controller('BooksController', BooksController);

	function BooksController($scope, BookService) {
		BookService
			.getBooks()
			.then(function(result) {
				$scope.books = result.books;
			});
	}

})();