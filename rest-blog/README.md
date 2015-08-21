Rest Blog
=========

Project for trainings

To start the app

```
$ npm install -g bower
$ npm install
$ bower install
$ node server/main
```

REST API examples:

```
# get posts from 0 to 10 reverse historical order. The posts retrieved that way has
# the shortened version of body text, and no comments. They are loaded separately,
# see the API below
$curl 'localhost:3000/api/posts?begin=0&length=10'

# get 10 posts after post with id 17. Same as above, the short version of the posts
# is returned
$curl 'localhost:3000/api/posts?after=17&length=10'

# get one post by ID
$curl 'localhost:3000/api/posts/38'

# add a post
$curl -H "Content-Type: application/json" -X POST -d '{"text":"hello there","title":"post"}' http://localhost:3003/api/posts

# delete one post by ID
$curl -X DELETE 'localhost:3000/api/posts/38'

# update post 38 with new data that is loaded from post.json file
$curl -X PUT -H "Content-Type: application/json" -d @post.json localhost:3000/api/post/38

# get all comments
curl http://localhost:3003/api/posts/1/comments

# post new comment to a post with id 1
$curl -X POST -H "Content-Type: application/json" -d '{"text":"I am comment","title":"comment"}' http://localhost:3003/api/posts/1/comments

# update comment that belongs to post 1, comment id is 3
$curl -X PUT -H "Content-Type: application/json" -d '{"text":"I AM GRUTE","title":"comment"}' http://localhost:3003/api/posts/1/comments/3

# delete comment
$curl -X DELETE http://localhost:3003/api/posts/1/comments/3
```