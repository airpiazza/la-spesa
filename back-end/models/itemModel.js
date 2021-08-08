import mongoose from 'mongoose';

const Schema = mongoose.schema;

const shoppingSchema = new Schema({
    item: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    }
});