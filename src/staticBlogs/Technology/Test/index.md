```js
fetch('./data/test.html')
	.then(function (response) {
		return response.text()    // return a promise 
	})
	.then(function (body) {
		console.log( body )    // log: html content
	})
```