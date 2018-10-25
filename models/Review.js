const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    foodItemId: {
        type: String,
        required: true
    },
    businessId: {
        type: String,
        required: true
    },
    reviewerId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = Review = Mongoose.model('reviews', ReviewSchema);