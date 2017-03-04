//'$stateParams'

'use strict';

/**
 * @ngdoc function
 * @name meantodoApp.controller:ProfileController
 * @description
 * # ProfileController
 * Controller of the meantodoApp
 */
angular.module('meantodoApp')
    .controller('ProfileController', ['$scope', '$state', '$stateParams', 'userFactory', 'reviewFactory', '$window', function ($scope, $state, $stateParams, userFactory, reviewFactory, $window) {
        console.log($stateParams.id);
        var user = $scope.user = userFactory.getByIndex($stateParams.id);

        $scope.reviews = reviewFactory.getByUser(user._id);
        console.log($scope.reviews);

        
        console.log($state.params);
        console.log($stateParams);
  }]);
