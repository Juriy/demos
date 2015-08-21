(function() {

	angular
		.module('bookstore')
		.filter('trimHtml', trimHtmlFilter);

	function trimHtmlFilter() {
		return function(html) {
			return html ? html.replace(/<(?:.|\n)*?>/gm, '') : '';
		};
	}

})();