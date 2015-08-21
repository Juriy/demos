(function() {
	angular
		.module('bookstore')
		.service('BookService', BookService);


	function BookService($http, $q) {
		this.getBooks = function(page) {
			page = page || 0;
			var deferred = $q.defer();

			$http({
				url: '/api/books',
				method: 'GET',
				params: {
					page: page
				}
			}).then(function(payload) {
				// Example of pre-processing data before returning
				// to the client. Re-tries or error handling strategies
				// could be implemented here.
				deferred.resolve({
					count: payload.data.length,
					books: payload.data
				});
			});

			return deferred.promise;
		};

		this.getBook = function(id) {
			// Returning promise as-is
			return $http({
				url: '/api/books/' + id,
				method: 'GET'
			});
		};
	}
})();