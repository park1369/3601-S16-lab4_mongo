/**
 * Created by park1369 on 2/11/16.
 */

'use strict';

angular.module('appModule').controller('gpaController', function($http){
        console.log("gpaController loaded!");


        var gpaCtrl = this;

        gpaCtrl.courseTextField = "";
        gpaCtrl.creditTextField = "";
        gpaCtrl.letterTextField = "";

        gpaCtrl.data = [];
        gpaCtrl.course = [];
        gpaCtrl.credit = [];
        gpaCtrl.letter = [];



        gpaCtrl.letterConverter = function (letter) {

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

        gpaCtrl.addAll = function () {
            if((gpaCtrl.letterConverter(gpaCtrl.letterTextField) == "invalid Grade"))  {
                return alert("invalid submission");
            } else {
                gpaCtrl.addCourse(), gpaCtrl.addCredit(), gpaCtrl.addLetter();
            }
        };

        gpaCtrl.addData = function(){
            gpaCtrl.addAll();
            gpaCtrl.data.push([gpaCtrl.course[gpaCtrl.course.length - 1], gpaCtrl.credit[gpaCtrl.credit.length - 1], gpaCtrl.letter[gpaCtrl.letter.length - 1]]);
            gpaCtrl.courseTextField = "";
            gpaCtrl.creditTextField = "";
            gpaCtrl.letterTextField = "";
        };


        gpaCtrl.addCourse = function(){
            if (gpaCtrl.courseTextField.length >= 1) {
            gpaCtrl.course.push(gpaCtrl.courseTextField);
            gpaCtrl.courseTextField = "";
        }};

        gpaCtrl.addCredit = function(){
            if (gpaCtrl.creditTextField.length >= 1) {
                gpaCtrl.credit.push(gpaCtrl.creditTextField);
                gpaCtrl.creditTextField = "";
        }};

        gpaCtrl.addLetter = function(){
            if (gpaCtrl.letterTextField.length >= 1) {
            gpaCtrl.letter.push(gpaCtrl.letterTextField);
            gpaCtrl.letterTextField = "";
        }};

        gpaCtrl.itemsInList = function(){
            return gpaCtrl.data.length;
        };

        gpaCtrl.removeData = function(index){
            gpaCtrl.data.splice(index, 1);
            gpaCtrl.course.splice(index, 1);
            gpaCtrl.credit.splice(index, 1);
            gpaCtrl.letter.splice(index, 1);

        }



    });