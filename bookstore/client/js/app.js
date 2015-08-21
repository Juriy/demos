(function() {

	angular
		.module('bookstore', ['ngRoute'])
		.config(configureRoutes);

	function configureRoutes($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'BooksController',
				templateUrl: 'views/book-catalog.html'
			})
			.when('/books/:id', {
				controller: 'BookDetailsController',
				templateUrl: 'views/book-details.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}

})();

