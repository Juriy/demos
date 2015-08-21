exports = module.exports = MemoryBookStore;

function MemoryBookStore(data) {
	this._id = 0;
	this._books = [];

	if (Array.isArray(data)) {
		var add = this._addSync.bind(this);
		data.forEach(add);
	}
}

var _p = MemoryBookStore.prototype;

_p.list = function(cb) {
	var self = this;
	process.nextTick(function() {
		cb(null, self._books);
	});
};

_p.add = function(book, cb) {
	var self = this;
	process.nextTick(function() {
		var added = self._addSync(book);
		cb(null, book);
	});
}

_p._addSync = function(book) {
	book.id = ++this._id;
	this._books.push(book);
	return book;
}

_p.get = function(id, cb) {
	var self = this;
	process.nextTick(function() {
		for(var i = 0; i < self._books.length; i++) {
			if (id == self._books[i].id){
				return cb(null, self._books[i]);
			}
		}
		cb(null, null);
	});
}

_p.update = function(id, book, cb) {
	var self = this;
	process.nextTick(function() {
		for(var i = 0; i < self._books.length; i++) {
			if (id == self._books[i].id) {
				self._books[i] = book;
				cb(null, book);
				return;
			}
		}
		cb({'err': 'Not Found'});
	});
};

_p.delete = function(id, cb) {
	var self = this;
	process.nextTick(function() {
		for(var i = 0; i < self._books.length; i++) {
			if (id == self._books[i].id) {
				self._books.splice(i, 1);
				cb();
			}
		}
	});
}