# es6-skeleton
All ES-6 stack tryout

Basic script
------------
The following script is used to test ES2015 Syntax

```
// greeter.js
class Greeter {
  sayHi(name = 'Anonymous') {
    console.log(`Hi ${name}!`);
  }
}

var greeter = new Greeter();
greeter.sayHi();
```

Babel
-----
```
$ npm install -g babel
$ babel greeter.js --out-file target/greeter.js
```

Workflow with modules

```
$ bower install --save system.js es6-module-loader
$ babel src --out-dir target/babel --modules system
```
This call will generate a bunch of files that System.js will happily load.

The example HTML will look like this:

```
<html>
  <head>
  </head>
  <body>

  	<script src="vnd/es6-module-loader/dist/es6-module-loader.js"></script>
  	<script src="vnd/system.js/dist/system.js"></script>
	<script>
	  System.config({
		baseURL: '/target/babel'
	  });

	  System.import('main');
	</script>
  </body>
</html>
```



