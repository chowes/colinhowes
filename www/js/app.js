var colinApp = angular.module('colinApp', ['ngRoute'])

colinApp.config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'templates/about.html',
        // controller: 'homeController'
    })
    .when('/academics', {
        templateUrl: 'templates/academics.html',
        // controller: 'forecastController'
    })
    .when('/projects/', {
        templateUrl: 'templates/projects.html',
        // controller: 'forecastController'
    })
    .when('/skills', {
        templateUrl: 'templates/skills.html',
        // controller: 'homeController'
    })
    .when('/research/', {
        templateUrl: 'templates/research.html',
        // controller: 'forecastController'
    })
    .when('/teaching/', {
        templateUrl: 'templates/teaching.html',
        // controller: 'forecastController'
    })
    .when('/contact/', {
        templateUrl: 'templates/contact.html',
        // controller: 'forecastController'
    })
})