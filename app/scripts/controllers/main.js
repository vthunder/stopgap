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

    // default selections (CC BY)
    $scope.waive = false;
    $scope.by = true;
    $scope.nc = false;
    $scope.sa = false;
    $scope.nd = false;

    $scope.toggle = function(term) {
      if (term === 'waive') {
        if ($scope.waive) {
          $scope.waive = false;
          $scope.by = true;
          $scope.nc = false;
          $scope.sa = false;
          $scope.nd = false;
        } else {
          $scope.waive = true;
          $scope.by = false;
          $scope.nc = false;
          $scope.sa = false;
          $scope.nd = false;
        }
      } else if (term === 'by') {
        if ($scope.by) {
          $scope.waive = true;
          $scope.by = false;
          $scope.nc = false;
          $scope.sa = false;
          $scope.nd = false;
        } else {
          $scope.waive = false;
          $scope.by = true;
        }
      } else if (term === 'nc') {
        if ($scope.waive) { return; }
        if ($scope.nc) {
          $scope.nc = false;
        } else {
          $scope.waive = false;
          $scope.by = true;
          $scope.nc = true;
        }
      } else if (term === 'sa') {
        if ($scope.waive) { return; }
        if ($scope.sa) {
          $scope.sa = false;
        } else {
          $scope.waive = false;
          $scope.by = true;
          $scope.sa = true;
          $scope.nd = false;
        }
      } else if (term === 'nd') {
        if ($scope.waive) { return; }
        if ($scope.nd) {
          $scope.nd = false;
        } else {
          $scope.waive = false;
          $scope.by = true;
          $scope.sa = false;
          $scope.nd = true;
        }
      } else {
        console.log("Unknown term: " + term);
      }
    };

    $scope.closeTermsDialog = function() {
      $('#terms-dialog').foundation('reveal', 'close');
    };

    var clip = new ZeroClipboard(
      $('#copy-button'),
      { moviePath: 'bower_components/zeroclipboard/ZeroClipboard.swf' });
    clip.on('dataRequested', function (client) {
      if ($scope.format === 'HTML') {
        client.setText($('#web-attr').html());
      } else {
        client.setText($('#text-attr').html());
      }
    });

// for hacking    $('#terms-dialog').foundation('reveal', 'open');
  });
