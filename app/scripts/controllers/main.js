'use strict';

angular.module('foobarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.format = 'HTML';
    $scope.license = {
      deedUrl: 'https://creativecommons.org/licenses/by/3.0/',
      lang: 'en_US',
      iconUrl: 'http://i.creativecommons.org/l/by/3.0/80x15.png',
      title: 'Creative Commons Attribution 3.0 Unported'
    };
  });

