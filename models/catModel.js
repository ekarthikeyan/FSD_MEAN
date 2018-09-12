let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let catSchema = new Schema({
        category_id: {
                
               type: Number,
               min: [10, 'not a valid ID'],
                max: 100
        },
        category_name: {
                type: String
        }
}, {
collection : 'workout_category' }
);

let Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;