const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     compleated: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to inert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Rifat',
    //     age: 19,
    //     location: 'Ognyanovo'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});