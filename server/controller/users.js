var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

  create: function(req, res) {
    console.log("users.js create req.body", req.body);
    User.find({username : req.body.username}, function(err, user){
        if(user.length > 0){
            console.log("User exists");
            res.json(true);
        }
        else{
            console.log("User doesnt exist");
            User.create(req.body)
            .then((data) =>{
                console.log('successfully added a user!', data);
                res.json(true);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({message: "Unable to add user"});
            });
        }
    })
  },

  showOne: function(req,res){
      User.find({_id: req.params.id}, function(err, item){
        if(!err){
            res.json(item);
        }else{
            console.log(err);
            res.json(err);
        }
    });
  },


};