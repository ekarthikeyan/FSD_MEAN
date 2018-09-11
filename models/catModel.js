let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let catSchema = new Schema({
        category_id: Number,
        category_name: String
        
}, {
collection : 'workout_category' }
);

let Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;