'use strict';

angular.module('foobarApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.format = { print: true, copyStr: 'Text' };
    $scope.printFormat = function() {
      $scope.format = { print: true, copyStr: 'Text' };
    };
    $scope.webFormat = function() {
      $scope.format = { web: true, copyStr: 'HTML'  };
    };
  });

