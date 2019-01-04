(function () {

  "use strict";

  angular.module("venturusApp.view1", [])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }])
    .controller("View1Ctrl", View1Ctrl);

  View1Ctrl.$inject = ['$scope', 'userService'];

  function View1Ctrl($scope, userService) {
    

    $scope.init = function() {
      $scope.users = [];

      userService.findAll('ricardo-token')
      .then(function(data) {
        data.data.map(element => {
          var user = {
            userName: element.userName,
            name: element.name,
            email: element.email,
            city: element.city,
            rideInGroup: element.rideInGroup,
            posts: element.posts,
            albums: element.albums,
            photos: element.photos
          }

          $scope.users.push(user);
        });
      })
      .catch(function(error) {
        alert(error);
      });
    }

    $scope.submitNewUser = function(user) {
      userService.create('ricardo-token', user)
      .then(function(data) {
        $scope.status = data.status;
        console.log(data);
      })
      .catch(function(error) {
        $scope.status = data.status;
        alert(error);
      })
    }
  }

})();