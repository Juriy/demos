var module = angular.module('bookstore');

module.filter('limitBy', function() {
	return function(text, maxLen) {
		var cut = text.substr(0, maxLen);
		return cut.substr(0, Math.min(cut.length, cut.lastIndexOf(' ')));
	}
});

module.filter('trimHtml', function() {
	return function(html) {
		return html ? html.replace(/<(?:.|\n)*?>/gm, '') : '';
	}
});