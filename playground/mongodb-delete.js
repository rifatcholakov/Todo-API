const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Users').deleteMany({ name: 'Rifat' }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b38a79d442c982ff00b6ac1')
    }).then((result) => {
        console.log(result);
    })

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ compleated: false }).then((result) => {
    //     console.log(result);
    // });

    //db.close();
});