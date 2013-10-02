/* global $ */

'use strict';

angular.module('jm.i18next')
  .config(['$i18nextProvider', function ($i18nextProvider) {
    $i18nextProvider.options = {
      lng: 'en',
      keyseparator: '##',
      nsseparator: '####',
      useCookie: false,
      useLocalStorage: false,
      fallbackLng: 'en-US',
      resGetPath: 'locales/__lng__/__ns__.json'
    };
  }]);

angular.module('foobarApp', ['ngRoute', 'jm.i18next'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
      .otherwise({ redirectTo: '/' });
  });

$(document).ready(function() {
  $(document).foundation();
});
