/**
 * Created by park1369 on 2/11/16.
 */

'use strict';

angular.module('appModule').controller('gpaController', function($http){
    console.log("gpaController loaded!");


    var self = this;

    self.courseTextField = "";
    self.creditTextField = "";
    self.letterTextField = "";

    self.data = [];
    //  self.course = [];
    //  self.credit = [];
    //  self.letter = [];

    self.getClasses = function(){
        $http.get('api/classes').success(function(classes) {
            self.data = classes;
        });
    };

    self.getClasses();

    self.addDataGpa = function(){
        if((self.courseTextField.length >= 1) && (self.letterTextField.length >= 1)) {
            $http.post('api/classes', {course: self.courseTextField, credit: self.creditTextField, grade: self.letterTextField}).success(function(){
                self.getClasses();
            });
            self.courseTextField = "";
            self.creditTextField = "";
            self.letterTextField = "";
        }
    };

    self.removeData = function(index){
        $http.delete('/api/classes/' + self.data[index]._id).success(function(){
            self.getClasses();
        });
    };

    self.gradeToNumber = function(gr){
        if(gr == "A")
        {
            return 4.0;
        }
        if(gr == "B")
        {
            return 3.0;
        }
        if(gr == "C")
        {
            return 2.0;
        }
        if(gr == "D")
        {
            return 1.0;
        }
        if(gr == "F")
        {
            return 0.0;
        }

    };

    self.calculateGPA = function(){
        var qualityPoints = 0;
        var totalCredits = 0;
        for(var i = 0; i < self.data.length; i++){
            qualityPoints = qualityPoints + (self.data[i].credit * self.gradeToNumber(self.data[i].grade));
            totalCredits = totalCredits + self.data[i].credit;
        }


        return Math.round(qualityPoints/totalCredits * 100)/100;

    };



    self.itemsInList = function(){
        return self.data.length;
    };


});

