const { Schema, model } = require('mongoose');

const stocksSchema = new Schema(
    {
        symbol: {
            type: String,
            trim: true,
            unique: true
        },
        name: {
            type: String,
            lowercase: true, 
        },
    },
    {
        timestamps: true
    }
);

module.exports = model('User', userSchema);