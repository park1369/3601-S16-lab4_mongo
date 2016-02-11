/**
 * Created by park1369 on 2/11/16.
 */

'use strict';

console.log("gpa.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('gpa', {
                url: '/gpa',
                templateUrl: 'views/gpaCalc/gpa.html',
                controller: 'gpaController'
            });
    });