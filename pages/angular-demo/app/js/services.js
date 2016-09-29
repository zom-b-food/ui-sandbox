'use strict';

/* Services */

var demoServices = angular.module('demoServices', ['ngResource']);

demoServices.factory('Critter', ['$resource',
    function ($resource) {
        return $resource('critters/:critterId.json', {}, {
            query: {method: 'GET', params: {critterId: 'critters'}, isArray: true}
        });
    }]);
