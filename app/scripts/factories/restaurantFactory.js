"use strict";

angular.module('meantodoApp')
    //.constant("baseURL", "https://localhost:3000/")
    .factory('restoFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        return $resource(baseURL + "restaurants/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    }]);
