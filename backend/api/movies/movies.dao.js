const mongoose = require('mongoose');
const moviesSchema = require('./movies.model');

moviesSchema.statics = {
    create : function(data, cb) {
        var movie = new this(data);
        movie.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var moviesModel = mongoose.model('Movies', moviesSchema);
module.exports = moviesModel;