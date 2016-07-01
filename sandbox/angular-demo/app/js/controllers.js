'use strict';

/* Controllers */

var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('CritterListCtrl', ['$scope', 'Critter',
    function ($scope, critter) {
        $scope.critters = critter.query();
        $scope.orderProp = 'age';
    }]);

demoControllers.controller('CritterDetailCtrl', ['$scope', '$routeParams', 'Critter',
    function ($scope, $routeParams, critter) {
        $scope.critter = critter.get({critterId: $routeParams.critterId}, function (critter) {
            $scope.mainImageUrl = critter.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);
