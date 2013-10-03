/* global $, ZeroClipboard */

'use strict';

angular.module('foobarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.format = 'HTML';
    $scope.license = {
      deedUrl: 'https://creativecommons.org/licenses/by/3.0/',
      shortUrl: 'creativecommons.org/licenses',
      lang: 'en_US',
      iconUrl: 'http://i.creativecommons.org/l/by/3.0/80x15.png',
      title: 'Creative Commons Attribution 3.0 Unported',
      shortTitle: 'Attribution 3.0 Unported',
      blurb: 'asdf'
    };

    // default selections (CC BY)
    $scope.waive = false;
    $scope.by = true;
    $scope.nc = false;
    $scope.sa = false;
    $scope.nd = false;

    $scope.$watch('waive', function(newVal) {
      if (newVal) {
        $scope.by = false;
        $scope.nc = false;
        $scope.sa = false;
        $scope.nd = false;
      } else {
        $scope.by = true;
      }
    });

    $scope.$watch('by', function(newVal) {
      if (newVal) {
        $scope.waive = false;
      } else {
        $scope.waive = true;
      }
    });

    $scope.$watch('sa', function(newVal) {
      if (newVal) {
        $scope.nd = false;
      }
    });

    $scope.$watch('nd', function(newVal) {
      if (newVal) {
        $scope.sa = false;
      }
    });

    $scope.closeTermsDialog = function() {
      $('#terms-dialog').foundation('reveal', 'close');
    };

    var clip = new ZeroClipboard(
      $('#copy-button'),
      { moviePath: 'bower_components/zeroclipboard/ZeroClipboard.swf' });
    clip.on('dataRequested', function (client) {
      if ($scope.format === 'HTML') {
        client.setText($('#web-attr .attrib').html());
      } else {
        client.setText($('#text-attr .attrib').html());
      }
    });

// for hacking    $('#terms-dialog').foundation('reveal', 'open');
  });
