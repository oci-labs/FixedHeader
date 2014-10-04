/*
 @license OCI Fixed Header version 0.1.0
 ⓒ 2014 OCI https://github.com/objectcomputing/FixedHeader
 License: MIT
 */

(function() {
    'use strict';

    var app = angular.module('app', ['oci.fixedHeader']);

    app.controller('ctrl', function($scope) {
        $scope.headers = ['First', 'Middle', 'Last'];
    });
})();
