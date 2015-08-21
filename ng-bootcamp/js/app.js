var module = angular.module('bookstore', ['ngRoute']);

module.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'BooksController',
			templateUrl: 'views/book-catalog.html'
		})
		.when('/books/:isbn', {
			controller: 'BookDetailsController',
			templateUrl: 'views/book-details.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});