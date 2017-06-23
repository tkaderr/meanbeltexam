var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

module.exports = {
create: function(req, res) {
    console.log("creating post with username", req.body);
    User.findOne({ username : req.params.name}, function(err, user){
        var post = new Post(req.body);
        post._user = user._id;
        post.username = req.params.name
        console.log(post);
        post.save(function(err){
            user.posts.push(post);
            user.save(function(err){
                Topic.findOne({_id: req.body._topicid}, function(err, topic){
                    console.log("Topic in create post", topic)
                    topic.posts.push(post);
                    topic.save(function(err){
                    if(err){
                        console.log("Error saving posts in topic");
                    }
                    else {
                        res.json(true);
                    }
                    })
                })
            })
        })
    })
}
}