'use strict';

angular.module('meantodoApp')
    .filter('shortenReview', function () {
        return function (input) {
            if (input.length > 220) {
                return input.slice(0, 230) + '....';
            } else {
                return input;
            }
        };
    });
