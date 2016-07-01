var helloApp = angular.module("helloApp", ['ngResource', 'ui.bootstrap']);

helloApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
}]);

helloApp.controller("HelloCtrl", function ($scope) {
    $scope.name = "Calvin Hobbes";
});


helloApp.controller("InmarCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.contacts = [
        { 'type': 'Executive',
            'name': 'Ann Brown',
            'title': 'CEO',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'local'},
        { 'type': 'Inmar AR',
            'name': 'Sylvia Plath',
            'title': 'Poet',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'remote'},
        { 'type': 'Inmar AR',
            'name': 'Mary Smith',
            'title': 'Staff Engineer',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'on leave'},
        { 'type': 'Executive',
            'name': 'John Doe',
            'title': 'Boss of Everyone',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'remote'},
        { 'type': 'Daily',
            'name': 'Maggie Smith',
            'title': 'Actress',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'remote'},
        { 'type': 'Executive',
            'name': 'Bernie Sanders',
            'title': 'future POTUS',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'remote'},
        { 'type': 'Other',
            'name': 'Humphrey Bogart',
            'title': 'Icon',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'remote'}
    ];


    $scope.addRow = function () {
        $scope.contacts.push({ 'type': $scope.type, 'name': $scope.name, 'title': $scope.title, 'phone': $scope.phone, 'fax': $scope.fax, 'location': $scope.location });
        $scope.type = '';
        $scope.name = '';
        $scope.title = '';
        $scope.phone = '';
        $scope.fax = '';
        $scope.location = '';
    };

    $scope.addRowAsyncAsNV = function () {
        $scope.contacts.push({ 'type': $scope.type, 'name': $scope.name, 'title': $scope.title, 'phone': $scope.phone, 'fax': $scope.fax, 'location': $scope.location });
        // Writing it to the server
        //
        var data = 'type=' + $scope.type + '&name=' + $scope.name + '&title=' + $scope.title + 'phone=' + $scope.phone + '&fax=' + $scope.fax + '&location=' + $scope.location;
        $http.post('/savecompany', data)
            .success(function (data, status, headers, config) {
                $scope.message = data;
            })
            .error(function (data, status, headers, config) {
                alert("failure message: " + JSON.stringify({data: data}));
            });
        // Making the fields empty
        //

        $scope.type = '';
        $scope.name = '';
        $scope.title = '';
        $scope.phone = '';
        $scope.fax = '';
        $scope.location = '';
    };

    $scope.removeRow = function (type) {
        var index = -1;
        var comArr = eval($scope.contacts);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].type === type) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Rats! Something's broken");
        }
        $scope.contacts.splice(index, 1);
    };


}]);

var helloAjaxApp = angular.module("helloAjaxApp", ['ui.bootstrap']);

helloAjaxApp.controller("InmarCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.contacts = [
        { 'type': 'Executive',
            'name': 'Ann Brown',
            'title': 'CEO',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'local'},
        { 'type': 'Inmar AR',
            'name': 'Sylvia Plath',
            'title': 'Poet',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'remote'},
        { 'type': 'Inmar AR',
            'name': 'Mary Smith',
            'title': 'Staff Engineer',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'on leave'},
        { 'type': 'Executive',
            'name': 'John Doe',
            'title': 'Boss of Everyone',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'local'},
        { 'type': 'Daily',
            'name': 'Maggie Smith',
            'title': 'Actress',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'remote'},
        { 'type': 'Executive',
            'name': 'Bernie Sanders',
            'title': 'future POTUS',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'remote'},
        { 'type': 'Other',
            'name': 'Humphrey Bogart',
            'title': 'Icon',
            'phone': '(512) 345-6789',
            'fax': '(512) 543-0400',
            'location': 'remote'}
    ];


    $scope.addRowAsyncAsJSON = function () {
        $scope.contacts.push({ 'type': $scope.type, 'name': $scope.name, 'title': $scope.title, 'phone': $scope.phone, 'fax': $scope.fax, 'location': $scope.location });
        // Writing it to the server
        //
        var dataObj = {
            type: $scope.type,
            name: $scope.name,
            title: $scope.title,
            phone: $scope.phone,
            fax: $scope.fax,
            location: $scope.location

        };
        var res = $http.post('/savecompany_json', dataObj);
        res.success(function (data, status, headers, config) {
            $scope.message = data;
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({data: data}));
        });
        // Making the fields empty
        //
        $scope.type = '';
        $scope.name = '';
        $scope.title = '';
        $scope.phone = '';
        $scope.fax = '';
        $scope.location = '';
    };
}]);