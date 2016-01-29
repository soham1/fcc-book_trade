'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Offer = new Schema({
    userId:[
      {type: Schema.Types.ObjectId, ref: 'User'}
    ],
    bookWantedId:[
        {type: Schema.Types.ObjectId, ref: 'Book'}    
    ],
    bookOfferedId:[
        {type: Schema.Types.ObjectId, ref: 'Book'}    
    ],
    isConfirmed: Schema.Types.Boolean
});

module.exports = mongoose.model('Offer', Offer);
