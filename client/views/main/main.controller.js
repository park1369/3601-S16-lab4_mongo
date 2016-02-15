'use strict';

angular.module("appModule").controller('mainCtrl', function($http){
        console.log("main controller loaded!");

        var self = this;

        self.textField = "";
        self.weightField = "";
        //self.weight =[];

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];

        self.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                self.data = pets;
            });
        };

        self.getPets();

        self.addData = function(){
            if(self.textField.length >= 1) {
                $http.post('api/pets', {text: self.textField, weight: self.weightField}).success(function(){
                    self.getPets();
                });
                self.textField = "";
                self.weightField = "";
            }
        };

        self.removeData = function(index){
            $http.delete('/api/pets/' + self.data[index]._id).success(function(){
                self.getPets();
            });
        };

        self.cat = function(str1, str2){
            return str1 + str2;
        };

        self.itemsInList = function(){
            return self.data.length;
        };



        self.heaviestPet = function() {
            var place = 0;
            var weigh = 0;
            for(var i = 0; i < self.data.length; i++){
                if(self.getWeights(i) > weigh){
                    place = i;
                    weigh = self.getWeights(i);
                }
            }
            return "The Heaviest Pet is " + self.getNames(place) + " With a Weight of " + self.getWeights(place);
        };

        self.getWeights = function(iter) {
            return self.data[iter].weight;
        };

      self.getNames = function(iter) {
            return self.data[iter].text;
       };

    });