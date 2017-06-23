var mongoose = require('mongoose');
var Schema = mongoose.Schema
//User Schema
var UserSchema = new mongoose.Schema({
username: {type:String, required:true},
topics: [{type:Schema.Types.ObjectId, ref: 'Topic'}],
posts: [{type:Schema.Types.ObjectId, ref: 'Post'}]
});
mongoose.model('User',UserSchema);

//Topic Schema
var TopicSchema = new mongoose.Schema({
_user: {type : Schema.Types.ObjectId, ref:'User'}, 
posts: [{type : Schema.Types.ObjectId, ref: 'Post'}],
description:{ type: String, required: true},
name: { type: String, required: true}
});
mongoose.model('Topic',TopicSchema);

//Post Schema
var PostSchema = new mongoose.Schema({
_user: {type:Schema.Types.ObjectId, ref:'User'},
username : {type: String}, 
_topic: {type:Schema.Types.ObjectId, ref:'Topic'}, 
content: { type: String, required: true}
});
mongoose.model('Post',PostSchema);

//Comment Schema
// var CommentSchema = new mongoose.Schema({
// _user: {type:Schema.Types.ObjectId, ref:'User'}, 
// _topic: {type:Schema.Types.ObjectId, ref:'Topic'}, 
// content: { type: String, required: true},
// });
// mongoose.model('Comment',CommentSchema);