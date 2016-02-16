'use strict';

//=== Testing gpaController =============================================
describe('Testing controller: gpaController', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var gpaController, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaController = $controller('gpaController as gpa', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain no data by default", function(){
            expect(scope.gpa.data.length === 0).toEqual(true);
        });

        it("should return the number of items in the list", function(){
            var initialLength = scope.gpa.data.length;
            expect(scope.gpa.itemsInList()).toEqual(initialLength);
        });



    });

    //testing for GPA Calculator
    describe('testing for GPA calculator', function(){

        it('should return a 4.0', function(){
            scope.gpa.data=[{course: "French", credit: 4, grade: "A"},
                {course: "Math", credit: 5, grade: "A"},
                {course: "Science", credit: 4, grade: "A"}]


            expect(scope.gpa.calculateGPA()).toEqual(4.0);
        });

        it('should return a 3.0', function(){
            scope.gpa.data=[{course: "French", credit: 4, grade: "A"},
                {course: "Math", credit: 5, grade: "B"},
                {course: "Science", credit: 4, grade: "C"}]
            expect(scope.gpa.calculateGPA()).toEqual(3.0);
        });


        it('should return a 2.0', function(){
            scope.gpa.data=[{course: "French", credit: 4, grade: "B"},
                {course: "Math", credit: 5, grade: "C"},
                {course: "Science", credit: 4, grade: "D"}]
            expect(scope.gpa.calculateGPA()).toEqual(2.0);
        });

        it('should return a 0.0', function(){
            scope.gpa.data=[{course: "French", credit: 4, grade: "F"},
                {course: "Math", credit: 5, grade: "F"},
                {course: "Science", credit: 4, grade: "F"}]
            expect(scope.gpa.calculateGPA()).toEqual(0.0);
        });
    });

    describe('testing for gradeToNumber', function(){

        it('A return a 4.0', function(){
            expect(scope.gpa.gradeToNumber("A")).toBe(4.0);
        });

        it('B return a 3.0', function(){
            expect(scope.gpa.gradeToNumber("B")).toBe(3.0);
        });

        it('D return a 1.0', function(){
            expect(scope.gpa.gradeToNumber("D")).toBe(1.0);
        });
    });

});
