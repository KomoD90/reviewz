//'$stateParams'

'use strict';

/**
 * @ngdoc function
 * @name meantodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meantodoApp
 */
angular.module('meantodoApp')
    .controller('RestaurantDetailController', ['$scope', '$state', '$stateParams', 'restoFactory','reviewFactory','$window', function ($scope, $state, $stateParams, restoFactory,reviewFactory,$window) {
        console.log($stateParams.id);
        var resto = {};
        resto = restoFactory.get({id:$stateParams.id});
        resto.reviews = reviewFactory.query({ restaurant: resto._id });
        $scope.resto  = resto;
        
        $window.loc = $scope.resto.loc;
        
            
        $scope.tabs  = [
            {
                title:"Reviews",
                content : $scope.resto.reviews
            },
            {
                title:"Menu",
                content : $scope.resto.menu
            },
            {
                title:"Offers",
                content :$scope.resto.offers
            }
        ]
        
        
  }]);
