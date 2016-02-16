'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================

var Gpa = mongoose.model('GPA', {
    class: String,
    credit: Number,
    grade: String
});



// Defining Routes
// =====================================================

exports.index = function(req, res) {
    Gpa.find(function (err, gpacalcs) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(pets); // return results
        }
    });
};

exports.create = function(req, res) {
    Gpa.create(req.body, function (err, gpacalc) {
        if (err) {
            res.send(err);
        } else {
            Gpa.find(function (err, gpacalcs) {
                if (err) {
                    res.send(err);
                }

                res.json(pets);
            });
        }
    });
};



exports.destroy = function(req, res) {
    Gpa.findById(req.params.gpacalc_id, function(err, gpacalc){
        if(err) { res.send(err); return "error: " + err; }
        if(!gpacalc) { return res.sendStatus(404); }

        pet.remove(function(err){
            if(err) { return "error: " + err}
            return res.sendStatus(204);
        });
    });
};

