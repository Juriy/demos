bookstore
=========

Project for trainings

To start the server

```
$ npm install -g bower
$ npm install
$ bower install
$ node server/main
```
REST API examples:

$curl localhost:3000/api/books/38
$curl -X PUT -H "Content-Type: application/json" -d @book.json localhost:3000/api/books/38


http://angular-tips.com/blog/2014/06/introduction-to-unit-test-controllers/
http://angular-tips.com/blog/2014/06/introduction-to-unit-test-services/