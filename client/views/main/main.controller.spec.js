'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl as main', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain no data by default", function(){
            expect(scope.main.data.length === 0).toEqual(true);
        });

        it("should return the number of items in the list", function(){
            var initialLength = scope.main.data.length;
            expect(scope.main.itemsInList()).toEqual(initialLength);
        });

        it("should combine two strings", function(){
            var str1 = "dog";
            var str2 = "house";
            expect(scope.main.cat(str1, str2)).toEqual("doghouse");
        });

        it("should return the heaviest pet", function(){
            scope.main.data=[{text: "Cat", weight: 60},
                {text: "Dog", weight: 50},
                {text: "Bird", weight: 2},
                {text: "Iguana", weight: 12}]
            expect(scope.main.heaviestPet()).toEqual("The Heaviest Pet is Cat With a Weight of 60");
        });

        it("should return the pet's weight", function(){
            scope.main.data=[{text: "Cat", weight: 60},
                {text: "Dog", weight: 50},
                {text: "Bird", weight: 2},
                {text: "Iguana", weight: 12}]
            expect(scope.main.getWeights(2)).toEqual(2);
        });

        it("should return the pet's name", function(){
            scope.main.data=[{text: "Cat", weight: 60},
                {text: "Dog", weight: 50},
                {text: "Bird", weight: 2},
                {text: "Iguana", weight: 12}]
            expect(scope.main.getNames(2)).toEqual("Bird");
        });






    });

    });
