(function () {

    'use strict';

    angular.module('venturusApp').service('userService', userService);
    userService.$inject = ['$http'];

    function userService($http) {

        var userURL = 'http://localhost:8080/users';

        this.findAll = function(token) {
            return $http.get(userURL, { headers: { 'token': token } });
        }

        this.findById = function(token, id) {
            return $http.get(userURL.concat('/' + id), { headers: { 'token': token } });
        }

        this.create = function(token, payload) {
            return $http.post(userURL, payload, { headers: { 'token': token } });
        }

        this.update = function(token, id, payload) {
            return $http.put(userURL.concat('/' + id), payload, { headers: { 'token': token } });
        }

        this.remove = function(token, id) {
            return $http.delete(userURL.concat(id), { headers: { 'token': token } });
        }
    }
})();