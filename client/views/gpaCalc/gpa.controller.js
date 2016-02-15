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
        self.course = [];
        self.credit = [];
        self.letter = [];



        self.letterConverter = function (letter) {

         if ((letter == "A") || (letter == "a")) {
                 return 4;
           } else if ((letter == "B") || (letter ==  "b")) {
                 return 3;
            } else if ((letter == "C") || (letter ==  "c")) {
                 return 2;
              } else if ((letter == "D") || (letter ==  "d")) {
                 return 1;
          } else if ((letter == "F") || (letter ==  "f")) {
                 return 0;
          } else {
                 return "invalid Grade";
             }

         };

        self.addAll = function () {
            if((self.letterConverter(self.letterTextField) == "invalid Grade") && isNaN)  {
                return alert("invalid submission");
            } else {
                self.addCourse(), self.addCredit(), self.addLetter();
            }
        };

        self.addData = function(){
            self.addAll();
            self.data.push([self.course[self.course.length - 1], self.credit[self.credit.length - 1], self.letter[self.letter.length - 1]]);
            self.courseTextField = "";
            self.creditTextField = "";
            self.letterTextField = "";
        };


        self.addCourse = function(){
            if (self.courseTextField.length >= 1) {
            self.course.push(self.courseTextField);
            self.courseTextField = "";
        }};

        self.addCredit = function(){
            if (self.creditTextField.length >= 1) {
                self.credit.push(self.creditTextField);
                self.creditTextField = "";
        }};

        self.addLetter = function(){
            if (self.letterTextField.length >= 1) {
            self.letter.push(self.letterTextField);
            self.letterTextField = "";
        }};

        self.itemsInList = function(){
            return self.data.length;
        };

        self.removeData = function(index){
            self.data.splice(index, 1);
            self.course.splice(index, 1);
            self.credit.splice(index, 1);
            self.letter.splice(index, 1);

        }



    });