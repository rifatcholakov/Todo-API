const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b38a66d63c6574368b3057d')
    }, {
        $set: {
            name: 'Rifat'
        },

        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b38bb27b86c3ecf80b6749c')
    // }, {
    //     $set: {
    //         compleated: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    //db.close();
});