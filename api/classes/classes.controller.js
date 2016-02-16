'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================

var Class = mongoose.model('Class', {
    course: String,
    credit: Number,
    grade: String
});



// Defining Routes
// =====================================================

exports.indexdataClass = function(req, res) {
    Class.find(function (err, classes) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(classes); // return results
        }
    });
};

exports.createClass = function(req, res) {
    Class.create(req.body, function (err, classe) {
        if (err) {
            res.send(err);
        } else {
            Class.find(function (err, classes) {
                if (err) {
                    res.send(err);
                }

                res.json(classes);
            });
        }
    });
};



exports.destroyClass = function(req, res) {
    Class.findById(req.params.classe_id, function(err, classe){
        if(err) { res.send(err); return "error: " + err; }
        if(!classe) { return res.sendStatus(404); }

    classe.remove(function(err){
            if(err) { return "error: " + err}
            return res.sendStatus(204);
        });
    });
};
