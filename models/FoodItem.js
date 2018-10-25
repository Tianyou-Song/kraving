const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    descriptioin: {
        type: String
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'reviews'
    }]
});

module.exports = FoodItem = Mongoost.model('food_items', FoodItemSchema);