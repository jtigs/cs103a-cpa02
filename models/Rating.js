'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var ratingSchema = Schema( {
    reviewnum: Number,
    brand: String,
    variety: String,
    style: String,
    country: String,
    stars: String, 
} );

module.exports = mongoose.model( 'Course', ratingSchema );
