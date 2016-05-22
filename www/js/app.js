var colinApp = angular.module('colinApp', ['ngRoute'])

colinApp.config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'templates/about.html',
        controller: 'navController'
    })
    .when('/academics', {
        templateUrl: 'templates/academics.html',
        controller: 'navController'
    })
    .when('/projects/', {
        templateUrl: 'templates/projects.html',
        controller: 'navController'
    })
    .when('/skills', {
        templateUrl: 'templates/skills.html',
        controller: 'navController'
    })
    .when('/research/', {
        templateUrl: 'templates/research.html',
        controller: 'navController'
    })
    .when('/teaching/', {
        templateUrl: 'templates/teaching.html',
        controller: 'navController'
    })
    .when('/contact/', {
        templateUrl: 'templates/contact.html',
        controller: 'navController'
    })
    .otherwise({
        redirectTo: '/'
    });
})