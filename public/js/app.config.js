angular.module('donation').config(["$routeProvider", function($routeProvider) {
    
    $routeProvider

    .when('/main', {
        templateUrl: 'partials/main.html'
    })
    
    .when('/chat', {
        templateUrl: 'partials/chat.html', 
        controller: 'chatCtrl'
    })

    .when('/register', {
        templateUrl: 'partials/register.html'
    })

    .otherwise({
        redirectTo: '/'
    })

}]);