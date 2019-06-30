// module.exports = function(app, db) {
//     app.post('/locations', (req, res) => {
//         // You'll create your location here.
//         db.collection("locations").find({});
//         res.send('Hello')
//     });
// };

module.exports = function (app, db) {
    app.post('/locations', (req, res) => {
        const location = {
            "name": "Bar Mitswa 2",
            "location": {
                "lat": "5.41324",
                "lon": "52.43524"
            },
            "ratings": [
                {
                    "date": "2019-06-27",
                    "stars": 5
                },
                {
                    "date": "2019-06-17",
                    "stars": 5
                },
                {
                    "date": "2019-06-07",
                    "stars": 4
                }
            ]
        }
        db.collection('locations').insert(location, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
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