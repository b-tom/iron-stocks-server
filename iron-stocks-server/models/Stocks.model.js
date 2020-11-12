const { Schema, model } = require('mongoose');

const stockSchema = new Schema(
    {
        symbol: {
            type: String,
        },
        name: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

module.exports = model('Stock', stockSchema);