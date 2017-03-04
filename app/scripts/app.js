'use strict';

/**
 * @ngdoc overview
 * @name meantodoApp
 * @description
 * # meantodoApp
 *
 * Main module of the application.
 */
angular
    .module('meantodoApp', ['ui.router', 'ngResource', 'ngDialog', 'ui.bootstrap', 'ngAnimate','naif.base64','ngFileUpload'])
    .constant("baseURL", "http://localhost:3000/")
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'HomeController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                    }
                }

            })
            .state('app.restaurants', {
                url: 'restaurants',
                views: {
                    'content@': {
                        templateUrl: 'views/restaurants.html',
                        controller: 'RestaurantsController'
                    }
                }
            })
            .state('app.restaurantDetails', {
                url: 'restaurants/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/restaurantDetail.html',
                        controller: 'RestaurantDetailController'
                    }
                }
            })
            .state('app.restaurantNew', {
                url: 'new',
                views: {
                    'content@': {
                        templateUrl: 'views/restaurantNewEdit.html',
                        controller: 'RestaurantNewController'
                    }
                }
            })
            .state('app.review', {
                url: 'review/:id',
                views: {
                    'content@': {
                        templateUrl: 'views/review.html',
                        controller: 'ReviewController'
                    }
                }
            })
            .state('app.users', {
                url: 'users',
                views: {
                    'content@': {
                        templateUrl: 'views/users.html',
                        controller: 'UsersController'
                    }
                }
            })
        .state('app.userProfile', {
            url: 'users/:id',
            views: {
                'content@': {
                    templateUrl: 'views/userProfile.html',
                    controller: 'ProfileController'
                }
            }
        })
        .state('app.userProfile.edit',{
            url: '/edit',
            views: {
                'content@': {
                    templateUrl: 'views/editProfile.html',
                    controller: 'ProfileController'
                }
            }
        })
        ;

        $urlRouterProvider.otherwise('/');
    })
    //added for cors error
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
