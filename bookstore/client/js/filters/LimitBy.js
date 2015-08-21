(function() {

	angular
		.module('bookstore')
		.filter('limitBy', limitByFilter);

	function limitByFilter() {
		return function(text, maxLen) {
			var cut = text.substr(0, maxLen);

			var lastSpace = cut.lastIndexOf(' ');
			if (lastSpace === -1) {
				lastSpace = cut.length;
			}

			return cut.substr(0, lastSpace);
		};
	}

})();