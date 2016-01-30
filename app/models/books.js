'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Book = new Schema({
   userId: {type: Schema.Types.ObjectId, ref: 'User'},
   bookName: String,
   posterUrl: String
});

module.exports = mongoose.model('Book', Book);
