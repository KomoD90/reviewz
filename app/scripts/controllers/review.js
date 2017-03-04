'use strict';

/**
 * @ngdoc function
 * @name meantodoApp.controller:ReviewController
 * @description
 * # ReviewController
 * Controller of the meantodoApp
 */
angular.module('meantodoApp')
    .controller('ReviewController', ['$scope', '$state','$stateParams' ,'reviewFactory','userFactory',function ($scope, $state,$stateParams,reviewFactory,userFactory) {
        var review = $scope.review = reviewFactory.get({
            id: $stateParams.id
        });
        /*
        .$promise.then(
            function (response) {
                //things went well
                $scope.showDish = true;
            },
            function (response) {
                //things didnt
                //$scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
        */
        $scope.myInterval = 5000;
        $scope.user = userFactory.get({
            id: $stateParams.id
        });
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.trans = false;
        console.log(review.images);
        var slides = $scope.slides = makeSlides(review.images);
        
       
        
        
        
        
  }]);


function makeSlides (array){
            var i = 0;
            return array.map(function(x){
                var res = {
                    id:i,
                    image:x
                }
                i++;
                return res;
            });
        }