"use strict";

angular.module('meantodoApp')
    //.constant("baseURL", "https://localhost:3000/")
    .factory('reviewFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        return $resource(baseURL + "reviews/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    }]);
