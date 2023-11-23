const express = require('express')
const app = express()
const port = 3000 
const patjh = require('path')
app.use('/node_modules', express.static('node_modules'));




app.get('/', (req, res) => {
    res.render('index.ejs');
  });
  app.get('/contact', (req, res) => {
    res.render('contact.ejs');
  });


  app.use(express.static('public'));
  app.use('public/images', express.static('public/images'));


  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });