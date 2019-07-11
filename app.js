const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/bootstrap'))
app.use(express.static(__dirname + '/css'))
app.use(express.static(__dirname + '/images'))
app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/less'))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/404.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/src/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/src/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');