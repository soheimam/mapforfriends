// module.exports = function(app, db) {
//     app.post('/locations', (req, res) => {
//         // You'll create your location here.
//         db.collection("locations").find({});
//         res.send('Hello')
//     });
// };

module.exports = function (app, db) {
    app.post('/login', (req, res) => {

        db.collection('users').findOne({ email: req.body.email }, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                if (result){
                    result.password === req.body.password ? 'somethig' : 'something else'
                    res.status(200)
                }
                
            }
        });
    });
    app.get('/locations/:id', (req, res) => {

        db.collection('locations').find({}).toArray( (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result);
            }

            db.close();
        });
    });
};
//         db.collection('locations').insert(location, (err, results) => {
//         });
//
//         const details = {'name': "Bar Mitswa"};
//         db.collection('locations').find({}, (err, items) => {
//             if (err) {
//                 res.send({'error': 'An error has occurred'});
//             } else {
//                 res.send(items.toArray());
//             }
//
//         });
//     });
//
//     const collection =
//         app.post('/notes', (req, res) => {
//             const note = {text: req.body.body, title: req.body.title};
//             db.collection('notes').insert(note, (err, result) => {
//                 if (err) {
//                     res.send({'error': 'An error has occurred'});
//                 } else {
//                     res.send(result.ops[0]);
//                 }
//             });
//         });
// }