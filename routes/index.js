var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page',
   });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
   });
});

router.get('/about', function(req, res, next) {
  res.render('about_pg', { 
    title: 'About',
   });
});

router.get('/products', function(req, res, next) {
  res.render('index', { 
    title: 'Products',
   });
});

router.get('/services', function(req, res, next) {
  res.render('projects.ejs', { 
    title: 'Projects',
   });
});

router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { 
    title: 'Contact Us',
   });
});

module.exports = router;
