let Cat = require('../models/catModel');
let bodyParser = require('body-parser');

module.exports = function(app) {
//To process POST transactions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

    app.get('/api/cat', function(req, res){
        console.log('inside get call')
        Cat.find({}, function(err, cat) {
            if (err) throw err;
            res.send(cat);
        });
    });


    app.get('/api/cat/:id', function(req, res) {
        let categoryId = parseInt(req.params.id);
        Cat.findOne({category_id: parseInt(req.params.id)}, function(err, cat)
        {
            if (err) throw err;
            res.send(cat);

        });
    });

    app.post('/api/newcat', function(req,res){

        // if(req.body.id){
        //     Cat.findByIdAndUpdate(req.body.id, {
        //         todo: req.body.todo,
        //         isDone: req.body.isDone,
        //         hasAttachment: req.body.hasAttachment
        //     }, function(err, todo) {
        //         if (err) throw err;
        //         res.send('Success');
        //     });
      console.log('inside post');
        // }        
       console.log(req.body.category_id);
       console.log(req.body.category_name);
       
       var newCat = Cat({
        
            "category_id" : req.body.category_id,
            "category_name" : req.body.category_name
       });

//        let error = newCat.
         newCat.save(function(err, docs) {
             if (err) console.log(err);
         res.send(docs + 'Success');
     });
});
} //for module exports
// app.delete('/api/todo', function(req, res){
//     Todos.findByIdAndRemove(req.body.id, function(err) {
//         if (err) throw err;
//         res.send('Success');
//     });
// });
// else {


// }

//     });
// 