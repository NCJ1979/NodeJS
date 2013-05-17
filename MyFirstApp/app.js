/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

//var __dirname = 'C:/Documents and Settings/xecc1mz/Desktop/Desktop/NodeJS/MyFirstApp';
  
var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

//The app.set() directives tell Express that we want to use Jade, 
//and where we will keep our views. 
//On that note, let's create a folder called 'views' in the project root where we will put our Jade files. 
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

//app.set('view options', { pretty: true });

//app.configure('development', function(){
//  app.use(express.errorHandler());
//  app.locals.pretty = true;
//});

//THE BEAUTY OF JADE IS, IT USES INDENTATION FOR CONVEYING THE STRUCTURE OF THE PAGE
//SO BOTH CODING STANDARDS AND FUNCTIONALITY IS ATTAINED IN ONE PLACE.

//common error: BOTH TAB AND SPACE CANNOT BE USED :-)

//The app.use() calls pass 'middleware' functions for Express to use
//Middleware are simply functions that have the signature fn(req, res, next). 
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))
app.use(express.logger('dev'))

app.get('/*', function (req, res) {
  
  //res.end('Hi there!')
  var resource = req.url.substring(1);
  console.log('Requested:' + resource);
  
  if (resource == '')
  {
	resource = 'index';
  }
  
  res.render(resource,
		{ title : 'Navin Home', pretty: true }
	)

  
})

app.listen(3000)


