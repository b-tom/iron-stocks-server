const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const followingSchema = new Schema(
    {
        symbol: {
            type: String,
        },
        currentValue: {
            type: Number,
        },
        minThreshold: {
            type: Number,
        },
        maxThreshold:{ 
            type: Number,
        },
        user:{
            type: Schema.Types.ObjectId, ref:'User'
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Following', followingSchema);