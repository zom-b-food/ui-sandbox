'use strict';

/* jasmine specs for controllers go here */
describe('CritterCat controllers', function () {

    describe('CritterListCtrl', function () {

        beforeEach(module('demoApp'));

        it('should create "critters" model with 3 critters', inject(function ($controller) {
            var scope = {},
                ctrl = $controller('CritterListCtrl', {$scope: scope});

            expect(scope.critters.length).toBe(3);
        }));

    });
});
