"use strict";

angular.module('meantodoApp')
    //.constant("baseURL", "https://localhost:3443/")
    .factory('userFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        
        return $resource(baseURL + "users/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    }]);