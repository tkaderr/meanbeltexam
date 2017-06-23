// Change controller file name if it is changed and same with the routes as well
var users = require('../controller/users.js');
var topics = require('../controller/topics.js');
var post = require('../controller/posts.js');
var path = require('path');

module.exports = function(app){

  app.post('/user_new', function(req, res){
    console.log("in routes");
    users.create(req,res);
  });

  //topic routes
  app.get('/topic', function(req, res){
    topics.show(req,res);
  });

  app.post('/topic/:name', function(req, res){
    topics.create(req,res);
  });

  app.get('/topic/:id', function(req, res){
    topics.showOne(req,res);
  });

  app.put('/update/topic/:id', function(req, res){
    topics.updateTopic(req,res);
  });

  app.put('/destroy/topic/:id', function(req, res){
    topics.destroyTopic(req,res);
  });


  //post routes

  app.post('/post/:name', function(req, res){
    post.create(req,res);
  });


 app.all("*", function(req,res){
    res.sendFile(path.resolve("./public/dist/index.html"));
  });

};