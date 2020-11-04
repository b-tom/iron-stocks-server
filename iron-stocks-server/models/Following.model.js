const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const followingSchema = new Schema(
    {
        symbol: String,
        name: String,
        currentValue: Number,
        historicalValue: { },
        minThreshold: Number,
        maxThreshold: Number
    },
    {
        timestamps: true
    }
);

module.exports = model('Following', followingSchema);