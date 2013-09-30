/* global $, ZeroClipboard */

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
    $scope.termsQ = 1;
    $scope.waive = function() {
      $scope.termsQ = 2;
    };
    $scope.retain = function() {
      $scope.termsQ = 2;
    };
    $scope.allowDerivatives = function() {
      $scope.termsQ = 3;
    };
    $scope.shareAlike = function() {
      $scope.termsQ = 3;
    };
    $scope.allowCommercial = function() {
      $scope.termsQ = 4;
    };
    $scope.disallowCommercial = function() {
      $scope.termsQ = 4;
    };
    $scope.resetTermsDialog = function() {
      $scope.termsQ = 1;
    };
    $scope.closeTermsDialog = function() {
      $('#terms-dialog').foundation('reveal', 'close');
    };

    var clip = new ZeroClipboard($("#copy-button"),
                                 {moviePath: "/bower_components/zeroclipboard/ZeroClipboard.swf"});
    clip.on('dataRequested', function (client) {
      if ($scope.format == 'HTML') {
        client.setText($('#web-attr').html());
      } else {
        client.setText($('#text-attr').html());
      }
    });
  });

