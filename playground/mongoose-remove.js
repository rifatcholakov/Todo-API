const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5b3f57f40cf44fa7c84b6240'}).then((todo) => {
    
});

Todo.findByIdAndRemove('5b3f57f40cf44fa7c84b6240').then((todo) => {
    console.log(todo);
});