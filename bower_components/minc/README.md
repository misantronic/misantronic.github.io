### minc.js

> A tiny cross-browser css, javascript- and module-loader.

minc.js is a lightweight css, javascript- and module-loader (~800 bytes, minified and gzipped) making it super-easy to dynamically embed your css-files, javascripts and/or initialize custom modules.
You simply pass an array with your files to `Minc`. That's it.<br>
If you load your files via a CDN, you might optionally add another array with fallbacks.<br>
 
#### How it's done
 
```javascript
Minc(
	[										// load a bunch of files
		'//code.jquery.com/jquery-2.1.0.js',
		'//mycdn.com/my-cool-lib.min.js',
		'//mycdn.com/my-cool-css.min.css'
	],
	[										// optional: set up alternatives, if the CDN is down...
		'lib/jquery-2.1.0.js',
		'src/myCoolApp.min.js',
		'src/my-cool-css.min.css'
	]
).done(function($, myApp) {					// callback, when files are loaded
	// entry point
	$('body').addClass('success');
	myApp.init();
});
```

#### Install with bower

```bash
$ bower install minc
```

#### Cross-browser

minc.js runs in **every browser** on **every device** (tested with all devices/browsers at [browserstack.com](http://www.browserstack.com/screenshots)).

#### Modular JavaScript

minc.js supports the basics of the AMD- and CommonJS-structures, thus you might use your own modules.<br>
See an [AMD](https://github.com/misantronic/minc/blob/master/examples/lib/amd-lib.js) or a [CommonJS](https://github.com/misantronic/minc/blob/master/examples/lib/commonjs-lib.js) example-module.<br>  
If you're not familiar with modular JavaScript, [read this](http://addyosmani.com/writing-modular-js/).