'use strict';

// Declare app level module which depends on views, and core components
angular.module('venturusApp', [
  'ngRoute',
  'venturusApp.view1',
  'venturusApp.view2',
  'venturusApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
